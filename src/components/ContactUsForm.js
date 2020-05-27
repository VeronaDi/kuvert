import React from "react"
import {
  Field,
  Form,
  Formik,
  FormikProps,
  useField,
  useFormikContext,
  ErrorMessage,
} from "formik"
import * as Yup from "yup"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

import BtnSend from "../components/BtnSend"

import plane from "../images/plane.png"

const MyInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        css={css`
          width: 460px;
          height: 65px;
          background: #ffffff;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
          padding: 20px;
          outline: none;
          margin-right: 100px;
          margin-top: 5px;
          position: relative;
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
    </>
  )
}

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        css={css`
          width: 460px;
          height: 65px;
          background: #ffffff;
          font-size: 16px;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
          outline: none;
          color: #414141;
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
    </>
  )
}

const MyMessageInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        css={css`
          width: 460px;
          height: 165px;
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
    </>
  )
}

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
        {t("sendUsMessage")}
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
          <Form
            css={css`
              width: 1020px;
              height: 290px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              justify-content: space-between;
            `}
          >
            <MyInput
              label={t("name")}
              name="name"
              type="text"
              placeholder={t("name")}
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
              placeholder="+123456789"
            />
            <MySelect label={t("department")} name="department">
              <option value="Sales department">{t("salesDep")}</option>
              <option value="Production department">
                {t("productionDep")}
              </option>
              <option value="CEO">{t("CEO")}</option>
            </MySelect>
            <MyMessageInput
              label={t("writeUs")}
              name="message"
              type="textarea"
              placeholder={t("writeUs")}
            />
            <button type="submit" disabled={isSubmitting}>
              <BtnSend />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
