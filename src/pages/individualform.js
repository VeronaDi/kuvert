import React from "react"
import { Link } from "gatsby"
import { Form, Formik, useField } from "formik"
import * as Yup from "yup"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import BtnNext from "../components/BtnNext"
import Steps from "../components/Steps"

import logoGrey from "../images/logoGrey.png"

import ContactForm from "../components/ContactForm"
import BtnSendForm from "../components/BtnSendForm"

// import i18n from "i18next"
// i18n.changeLanguage("en")

const MyMessageInput = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          text-align: left;
          position: relative;
          margin: 20px 0 50px 0;
        `}
      >
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
    </>
  )
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
      <SEO title="Request" />
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
        {t("individualOrder")}
      </h1>

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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
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
                    flex-direction: column;
                    padding-right: 19px;
                    padding-top: 40px;
                  `}
                >
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
                </div>

                <div
                  css={css`
                    width: 100%;
                    max-width: 780px;
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
                <BtnSendForm />
              </>
            )}
          </Form>
        )}
      </Formik>
    </Layout>
  )
}
