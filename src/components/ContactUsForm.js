import React from "react"
import { Form, Formik, useField } from "formik"
import * as Yup from "yup"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"
import { localizedNavigate } from "../components/LocalizedLink"

import plane from "../images/plane.png"
import arrowSelect from "../images/arrow-select.png"

const MyInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
      <label
        htmlFor={props.id || props.name}
        css={css`
          font-weight: normal;
          font-size: 12px;
          color: #000000;
          padding-bottom: 5px;
        `}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        css={css`
          width: 100%;
          height: 65px;
          background: #ffffff;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
          padding: 20px;
          outline: none;
          margin-bottom: 16px;
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
            width: 100%;
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
  const [field, meta] = useField(props)
  return (
    <>
      <label
        htmlFor={props.id || props.name}
        css={css`
          font-weight: normal;
          font-size: 12px;
          color: #000000;
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
          width: 100%;
          height: 65px;
          font-size: 16px;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
          padding: 18px;
          outline: none;
          color: #414141;
          margin-bottom: 16px;
          :focus {
            border: 2px solid #c4c4c4;
          }
        `}
      />
      {meta.touched && meta.error ? (
        <div
          css={css`
            width: 100%;
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
      <label
        htmlFor={props.id || props.name}
        css={css`
          font-weight: normal;
          font-size: 12px;
          color: #000000;
          padding-bottom: 5px;
        `}
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        css={css`
          width: 100%;
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
            width: 100%;
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

const sendEmail = async values => {
  return fetch("https://hooks.zapier.com/hooks/catch/8670957/og9qtfo/", {
    method: "POST",
    body: JSON.stringify(values),
  })
}

export default props => {
  const { t } = useTranslation()

  return (
    <div
      css={css`
        width: 100vw;
        background: url(${plane}), #e5e5e5;
        background-size: cover;
        background-position: right;
        background-repeat: no-repeat;
        padding-bottom: 60px;
      `}
    >
      <h5
        css={css`
          font-size: 36px;
          color: black;
          width: 90vw;
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
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().required("Required"),
          phone: Yup.string().required("Required"),
          message: Yup.string().required("Required"),
        })}
        onSubmit={async () => {
          await sendEmail()
          localizedNavigate("/thanxrequest", props.pageContext.langKey)
        }}
      >
        {({ isSubmitting }) => (
          <Form
            css={css`
              width: 90vw;
              margin: 0 auto;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
            `}
          >
            <div
              css={css`
                width: 48%;
                display: flex;
                flex-direction: column;
                align-content: space-between;
                @media screen and (max-width: 943px) {
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
            <div
              css={css`
                width: 48%;
                display: flex;
                flex-direction: column;
                align-content: space-between;
                @media screen and (max-width: 943px) {
                  width: 100%;
                }
              `}
            >
              <MySelect label={t("department")} name="department">
                <option value="Sales department">{t("salesDep")}</option>
                <option value="Production department">
                  {t("productionDep")}
                </option>
                <option value="Accounting department">{t("accountDep")}</option>
                <option value="CEO">{t("CEO")}</option>
              </MySelect>
              <MyMessageInput
                label={t("writeUs")}
                name="message"
                type="textarea"
                placeholder={t("writeUs")}
              />
            </div>
            <div
              css={css`
                width: 100%;
                margin-top: 41px;
                display: flex;
                justify-content: center;
              `}
            >
              <button
                css={css`
                  max-width: 100%;
                  width: 460px;
                  color: black;
                  text-decoration: none;
                  border: 1px solid #000000;
                  box-sizing: border-box;
                  border-radius: 3px;
                  background: transparent;
                  padding: 18px 0;
                  cursor: pointer;
                  outline: none;
                  @media screen and (max-width: 943px) {
                    width: 100%;
                  }

                  &:hover {
                    color: #c4c4c4;
                    border: 1px solid #c4c4c4;
                  }

                  &:active {
                    color: #676767;
                    background: #ffffff;
                  }
                `}
                type="submit"
                disabled={isSubmitting}
              >
                {t("send")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
