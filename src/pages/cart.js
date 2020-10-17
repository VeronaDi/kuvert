import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Form, Formik, useField } from "formik"
import * as Yup from "yup"
import { localizedNavigate } from "../components/LocalizedLink"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import BtnNext from "../components/BtnNext"
import ContactForm from "../components/ContactForm"
import Steps from "../components/Steps"

import logoGrey from "../images/logoGrey.png"

const MyInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
      `}
    >
      <label
        htmlFor={props.id || props.name}
        css={css`
          font-size: 12px;
          padding-bottom: 5px;
        `}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        css={css`
          height: 65px;
          background: #ffffff;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
          box-sizing: border-box;
          padding: 20px;
          outline: none;
          ::-webkit-input-placeholder {
            font-size: 16px;
            color: #ababab;
          }
          :focus {
            border: 2px solid #c4c4c4;
            border-radius: 3px;
          }
        `}
      />
      {meta.touched && meta.error ? (
        <div
          css={css`
            width: 141px;
            height: 35px;
            background: #a74444;
            border-radius: 3px;
            color: white;
            color: #ffffff;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
          `}
        >
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}

const sendEmail = async values => {
  return fetch("https://hooks.zapier.com/hooks/catch/8670957/og9qtfo/", {
    method: "POST",
    body: JSON.stringify(values),
  })
}

export default props => {
  const [step, setStep] = React.useState(1)

  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  const steps = [
    t("requestType"),
    t("requestOrderCreate"),
    t("requestPersonal"),
  ]

  return (
    <Layout>
      <SEO title="Warehouse inquiry" />
      <Link
        css={css`
          background: url(${logoGrey}) center center no-repeat;
          width: 190px;
          height: 66px;
          background-size: cover;
          position: absolute;
          top: 20px;
          left: 30px;
        `}
        to="/"
      ></Link>

      <Steps steps={steps} activeStep={step} />

      <h1
        css={css`
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 50px;
          text-align: center;
        `}
      >
        {t("basicOrder")}
      </h1>

      <Formik
        initialValues={{
          name: "",
          company: "",
          city: "",
          email: "",
          phone: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().required("Required"),
          phone: Yup.string().required("Required"),
        })}
        onSubmit={async () => {
          await sendEmail()
          localizedNavigate("/thanxrequest", props.pageContext.langKey)
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form
            css={css`
              width: 90vw;
              max-width: 780px;
              margin: 0 auto;
            `}
          >
            {step === 1 && (
              <>
                <div
                  css={css`
                    width: 100%;
                    min-height: 318px;
                    background: #d6d6d6;
                    border-radius: 3px;
                    position: relative;
                  `}
                >
                  {/* user card content */}
                  <div
                    css={css`
                      width: 100%;
                      background: #8a8a8a;
                      border-radius: 0px 0px 3px 3px;
                      height: 78px;
                      position: absolute;
                      bottom: 0;
                      display: flex;
                      justify-content: flex-end;
                      align-items: center;
                      padding: 0 37px;
                      > button {
                        width: 30%;
                        @media (max-width: 1024px) {
                          width: 100%;
                        }
                      }
                    `}
                  >                    
                    <BtnNext type="button" onClick={() => setStep(2)} />
                  </div>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <div
                  css={css`
                    width: 90vw;
                    max-width: 780px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    @media screen and (max-width: 768px) {
                      flex-direction: column;
                      padding-bottom: 80px;
                    }
                  `}
                >
                  <div
                    css={css`
                      width: 48%;
                      @media screen and (max-width: 768px) {
                        width: 100%;
                      }
                    `}
                  >
                    <MyInput
                      label={t("name")}
                      name="name"
                      type="text"
                      placeholder={t("name")}
                    />
                    <MyInput
                      label={t("company")}
                      name="company"
                      type="text"
                      placeholder={t("company")}
                    />
                  </div>
                  <div
                    css={css`
                      width: 48%;
                      @media screen and (max-width: 768px) {
                        width: 100%;
                      }
                    `}
                  >
                    <MyInput
                      label={t("city")}
                      name="city"
                      type="text"
                      placeholder={t("city")}
                    />
                    <MyInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="hello@email.com"
                    />
                    <MyInput
                      label={t("phone")}
                      name="phone"
                      type="phone"
                      placeholder="123456789"
                    />
                  </div>
                </div>
                <button
                  css={css`
                    background: #c5003e;
                    border-radius: 3px;
                    border: none;
                    padding-top: 18px;
                    padding-bottom: 18px;
                    color: white;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 18px;
                    outline: none;
                    text-decoration: none;
                    display: block;
                    text-align: center;
                    margin: 30px 0;
                    width: 100%;
                    &:hover {
                      background: #b60039;
                    }
                    &:active {
                      background: #f4004d;
                    }
                  `}
                  type="submit"
                  // disabled={isSubmitting}
                >
                  {t("request")}
                </button>
              </>
            )}
          </Form>
        )}
      </Formik>
    </Layout>
  )
}
