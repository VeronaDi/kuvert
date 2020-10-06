import React from "react"
import { Link } from "gatsby"
import { Form, Formik, useField } from "formik"
import * as Yup from "yup"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import BtnNext from "../components/BtnNext"

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
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

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
      <section
        css={css`
          display: flex;
          flex-directon: row;
          position: relative;
          left: 50%;
          -webkit-transform: translate(-50%, -2%);
          transform: translate(-50%, -2%);
          width: 40vw;
          height: 44px;
          font-size: 14px;
          font-weight: bold;
          margin: 80px 0 50px 0;
        `}
      >
        <div
          css={css`
            color: #383838;
            border-bottom: 3px solid #383838;
            width: 261px;
          `}
        >
          <span
            css={css`
              font-size: 26px;
              padding-right: 5px;
            `}
          >
            1
          </span>
          {t("requestType")}
        </div>
        <div
          css={css`
            color: #b40039;
            border-bottom: 3px solid #b40039;
            width: 280px;
          `}
        >
          <span
            css={css`
              font-size: 26px;
              padding-right: 5px;
            `}
          >
            2
          </span>
          {t("requestOrderCreate")}
        </div>
        <div
          css={css`
            color: #b4b4b4;
            border-bottom: 3px solid #b4b4b4;
            width: 261px;
          `}
        >
          <span
            css={css`
              font-size: 26px;
              padding-right: 5px;
            `}
          >
            3
          </span>
          {t("requestPersonal")}
        </div>
      </section>
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
          Якщо Ви не знайшли те, що Вас цікавить серед стандартної продукції,
          напишіть нам побажання щодо свого конверту і ми розглянемо можливість
          його виробництва. Рекомендуємо вказати:
          <li> - розмір конверту </li>
          <li> - колір паперу та його щільність або ж марку паперу</li>
          <li>
            - наявність вікна (вікон), його (їх) розміри та розміщення на
            конверті
          </li>
          <li>- чистий чи з друком (вкажіть кількість кольорів)</li>
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
              <BtnNext />
            </div>
            <button type="submit">submit</button>
            <ContactForm />
            <BtnSendForm />
          </Form>
        )}
      </Formik>
    </Layout>
  )
}
