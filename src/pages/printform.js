import React from "react"
import { Link } from "gatsby"

import { Form, Formik, useField } from "formik"
import * as Yup from "yup"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { localizedNavigate } from "../components/LocalizedLink"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import logoGrey from "../images/logoGrey.png"
import arrowSelect from "../images/arrow-select.png"
import BtnSendForm from "../components/BtnSendForm"
import BtnNext from "../components/BtnNext"
import plus from "../images/plus.png"
import Steps from "../components/Steps"
import minus from "../images/minus.png"
import error from "../images/error.svg"

// import i18n from "i18next"
// i18n.changeLanguage("en")

const MyInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        text-align: left;
        position: relative;
        margin-bottom: 39px;
      `}
    >
      <label
        htmlFor={props.id || props.name}
        css={css`
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          color: #000000;
          margin-bottom: 5px;
        `}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        css={css`
          width: 380px;
          height: 65px;
          background: #ffffff;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
          padding: 20px;
          outline: none;
          margin-right: 20px;
          ::-webkit-input-placeholder {
            font-size: 16px;
            color: #ababab;
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

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        text-align: left;
        position: relative;
      `}
    >
      <label
        htmlFor={props.id || props.name}
        css={css`
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          color: #000000;
          margin-bottom: 5px;
        `}
      >
        {label}
      </label>
      <select
        {...field}
        {...props}
        css={css`
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: url(${arrowSelect}), #ffffff;
          background-position: 97%;
          background-repeat: no-repeat;
          width: 380px;
          height: 65px;
          font-size: 16px;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
          padding: 18px;
          outline: none;
          color: #444444;
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

const MyMessageInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        text-align: left;
        position: relative;
        margin: 20px 0 50px 0;
      `}
    >
      <label
        htmlFor={props.id || props.name}
        css={css`
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          color: #000000;
          margin-bottom: 5px;
        `}
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        css={css`
          width: 780px;
          height: 263px;
          background: #ffffff;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
          padding: 20px;
          outline: none;
          resize: none;
          ::-webkit-input-placeholder {
            font-size: 16px;
            color: #ababab;
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

const MyAmountInput = ({ label, setFieldValue, ...props }) => {
  const [field, meta] = useField(props)
  const quantityEnv = React.useRef()
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        text-align: left;
      `}
    >
      <label
        htmlFor={props.id || props.name}
        css={css`
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          color: #000000;
          margin-bottom: 5px;
        `}
      >
        {label}
      </label>
      <div
        css={css`
          position: relative;
        `}
      >
        <button
          onClick={() => {
            let newValue = Number(field.value) - 50
            if (newValue < 50) newValue = 50
            setFieldValue(props.name, newValue)
          }}
          type="button"
          css={css`
            position: absolute;
            left: 70px;
            top: 50%;
            transform: translate(0%, -50%);
            border: none;
            background: url(${minus}) no-repeat center;
            outline: none;
            padding: 10px;
            cursor: pointer;
          `}
        />
        <input
          {...field}
          {...props}
          ref={quantityEnv}
          type="number"
          min="0"
          step="50"
          css={css`
            width: 380px;
            height: 65px;
            background: #ffffff;
            border: 1px solid #d6d6d6;
            border-radius: 3px;
            padding: 23px 18px;
            outline: none;
            text-align: center;
            color: #444444;
            :focus {
              border: 2px solid #c4c4c4;
            }
            ::-webkit-inner-spin-button,
            ::-webkit-outer-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
          `}
        />
        <button
          onClick={() => {
            setFieldValue(props.name, Number(field.value) + 50)
          }}
          type="button"
          css={css`
            position: absolute;
            right: 70px;
            top: 50%;
            transform: translate(0, -50%);
            border: none;
            background: url(${plus}) no-repeat center;
            outline: none;
            padding: 10px;
            cursor: pointer;
          `}
        />
      </div>
      {meta.touched && meta.error ? (
        <div
          css={css`
            position: absolute;
            top: 20px;
            left: 280px;
            width: 141px;
            height: 35px;
            background: #a74444;
            border-radius: 3px;
            color: white;
            color: #ffffff;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            padding-top: 10px;
          `}
        >
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}

const sendEmail = async values => {
  return fetch("https://hooks.zapier.com/hooks/catch/5302156/og1on98", {
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
  //   const requestType = ({ children }) => (
  //     <div
  //       css={css`
  //         width: 28%;
  //         background: #ffffff;
  //         box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //       `}
  //     >
  //       {children}
  //     </div>
  //   )

  const steps = [
    t("requestType"),
    t("requestOrderCreate"),
    t("requestPersonal"),
  ]

  return (
    <Layout>
      <SEO title="Print Request" />
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
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
          margin-bottom: 50px;
          text-align: center;
        `}
      >
        {t("printedOrder")}
      </h1>
      <Formik
        initialValues={{
          product: "",
          amount: "",
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
              position: absolute;
              left: 50%;
              -webkit-transform: translate(-50%, -2%);
              transform: translate(-50%, -2%);
            `}
          >
            {step === 1 && (
              <>
                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
                    max-width: 780px;
                  `}
                >
                  <MySelect label={t("product")} name="product">
                    <option disabled selected>
                      {t("chooseDesiredProduct")}
                    </option>
                    <option value="konvert">{t("envelopes")}</option>
                    <option value="paperovaTorba">{t("paperbags")}</option>
                    <option value="banderole">{t("banderole")}</option>
                    <option value="blank">{t("letterhead")}</option>
                    <option value="papirFajl">{t("paperfile")}</option>
                    <option value="ecoblok">{t("ecoblock")}</option>
                  </MySelect>
                  <MyAmountInput
                    label={t("amount")}
                    name="amount"
                    type="number"
                    placeholder="0"
                    setFieldValue={setFieldValue}
                  />
                </div>

                <MyMessageInput
                  label={t("messageText")}
                  name="message"
                  type="textarea"
                  placeholder={t("placeholderPrintform")}
                />
                <BtnNext type="button" onClick={() => setStep(2)} />
              </>
            )}

            {step === 2 && (
              <>
                <div
                  css={css`
                    width: 780px;
                    height: 440px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                  `}
                >
                  <div>
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
                  <div>
                    <h3
                      css={css`
                        font-weight: 500;
                        font-size: 26px;
                        line-height: 30px;
                        margin-bottom: 2rem;
                      `}
                    >
                      {t("contactDetails")}
                    </h3>
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
                    color: white;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 21px;
                    outline: none;
                    text-decoration: none;
                    display: block;
                    text-align: center;
                    margin-bottom: 15px;
                    margin-top: 50px;
                    width: 780px;
                    height: 52px;

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
