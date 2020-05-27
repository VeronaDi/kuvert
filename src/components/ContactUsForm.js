import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

import BtnSend from "../components/BtnSend"

import plane from "../images/plane.png"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <div
      css={css`
        width: 100vw;
        height: 680px;
        background: url(${plane}), #e5e5e5;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      `}
    >
      <h5
        css={css`
          font-size: 36px;
          color: black;
          width: 640px;
          margin: 0 auto 43px auto;
          padding-top: 55px;
          line-height: 54px;
          text-align: center;
        `}
      >
        FORMIK {t("sendUsMessage")}
      </h5>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          department: "",
          message: "",
        }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="phone" name="phone" />
            <ErrorMessage name="phone" component="div" />
            <Field type="department" name="department" />
            <ErrorMessage name="department" component="div" />
            <Field type="message" name="message" />
            <ErrorMessage name="message" component="div" />
            <button type="submit" disabled={isSubmitting}>
              <BtnSend />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
