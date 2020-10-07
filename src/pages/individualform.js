import React from "react"
import { Link } from "gatsby"
import { Form, Formik, useField } from "formik"
import * as Yup from "yup"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { localizedNavigate } from "../components/LocalizedLink"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import BtnNext from "../components/BtnNext"
import Steps from "../components/Steps"

import logoGrey from "../images/logoGrey.png"

import ContactForm from "../components/ContactForm"
import BtnSendForm from "../components/BtnSendForm"

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

const MyMessageInput = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <textarea
        {...field}
        {...props}
        css={css`
          width: 100%;
          height: 300px;
          background: #ffffff;
          border: 1px solid #d6d6d6;
          color: #444444;
          padding: 20px;
          outline: none;
          resize: none;
          ::-webkit-input-placeholder {
            font-size: 16px;
            color: #9d9d9d;
          }
          :focus {
            border: 2px solid #c4c4c4;
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
      <SEO title="Individual Request" />
      <Link
        css={css`
          background: url(${logoGrey}) center center no-repeat;
          width: 190px;
          height: 66px;
          background-size: cover;
          position: absolute;
          top: 10px;
          left: 30px;
        `}
        to="/"
      ></Link>

      <Steps steps={steps} activeStep={step} />

      <h1
        css={css`
          font-weight: 500;
          font-size: 36px;
          text-align: center;
        `}
      >
        {t("individualOrder")}
      </h1>

      <Formik
        initialValues={{
          message: "",
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
                    max-width: 780px;
                    margin: 0 auto;
                    font-size: 16px;
                    line-height: 27px;
                  `}
                >
                  <ul>
                    {t("individualRequestText")}
                    <li>{t("envelopeSize")}</li>
                    <li>{t("paperParam")}</li>
                    <li>{t("windowParam")}</li>
                    <li>{t("printParam")}</li>
                  </ul>
                </div>
                <div
                  css={css`
                    width: 100%;
                    max-width: 780px;
                    display: flex;
                    flex-direction: column;
                  `}
                >
                  <MyMessageInput
                    name="message"
                    type="textarea"
                    placeholder={t("placeholderPrintform")}
                  />
                </div>

                <div
                  css={css`
                    width: 100%;
                    max-width: 780px;
                    margin: 20px 0 7px 0;
                    display: block;
                    text-align: center;
                  `}
                >
                  <BtnNext type="button" onClick={() => setStep(2)} />
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
                  disabled={isSubmitting}
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
