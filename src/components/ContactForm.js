import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { useField } from "formik"

import { useTranslation } from "react-i18next"

const MyInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and else replace ErrorMessage entirely.
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

export default () => {
  const { t } = useTranslation()

  return (
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
  )
}
