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
import Steps from "../components/Steps"
import ContactForm from "../components/ContactForm"

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
          font-size: 12px;
          padding-bottom: 5px;
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
          height: 65px;
          font-size: 16px;
          border: 1px solid #d6d6d6;
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

const MyMessageInput = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 40px;
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

const MyAmountInput = ({ label, setFieldValue, ...props }) => {
  const [field, meta] = useField(props)
  const quantityEnv = React.useRef()
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
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

      <button
        onClick={() => {
          let newValue = Number(field.value) - 50
          if (newValue < 50) newValue = 50
          setFieldValue(props.name, newValue)
        }}
        type="button"
        css={css`
          position: absolute;
          top: 27px;
          left: 5%;
          border: none;
          background: transparent;
          outline: none;
          padding: 10px;
          cursor: pointer;
          font-size: 27px;
          font-weight: 300;
        `}
      >
        &#x2212;
      </button>
      <input
        {...field}
        {...props}
        ref={quantityEnv}
        type="number"
        min="0"
        step="50"
        css={css`
          width: 100%;
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
          top: 27px;
          right: 5%;
          border: none;
          background: transparent;
          outline: none;
          padding: 10px;
          cursor: pointer;
          font-size: 27px;
          font-weight: 300;
        `}
      >
        &#x2B;
      </button>
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
          top: 10px;
          left: 30px;
        `}
        to="/"
      ></Link>

      <Steps steps={steps} activeStep={step} />

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
          // await sendEmail()
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
            <h1
              css={css`
                font-weight: 500;
                font-size: 36px;
                margin-bottom: 30px;
                text-align: center;
              `}
            >
              {t("printedOrder")}
            </h1>
            {step === 1 && (
              <>
                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
                    @media (max-width: 1024px) {
                      flex-direction: column;
                    }
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      width: 48%;
                      @media (max-width: 1024px) {
                        width: 100%;
                        margin-bottom: 20px;
                      }
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
                  </div>
                  <div
                    css={css`
                      width: 48%;
                      @media (max-width: 1024px) {
                        width: 100%;
                      }
                    `}
                  >
                    <MyAmountInput
                      label={t("amount")}
                      name="amount"
                      type="number"
                      placeholder="0"
                      setFieldValue={setFieldValue}
                    />
                  </div>
                </div>

                <MyMessageInput
                  label={t("messageText")}
                  name="message"
                  type="textarea"
                  placeholder={t("placeholderPrintform")}
                />
                <div
                  css={css`
                    width: 100%;
                    margin: 40px 0;
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
                <ContactForm />

                <BtnSendForm
                  disabled={isSubmitting}
                  className={isSubmitting && "progress"}
                />
              </>
            )}
          </Form>
        )}
      </Formik>
    </Layout>
  )
}
