import React from "react"
import { Form, Formik, useField } from "formik"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

import { useCart } from "../useCard"

const MyAmountInput = ({ label, setFieldValue, step = 1, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div
        css={css`
          text-align: left;
          position: relative;
        `}
      >
        <label
          htmlFor={props.id || props.name}
          css={css`
            font-weight: normal;
            font-size: 12px;
            color: #000000;
            display: block;
          `}
        >
          {label}
        </label>
        <button
          onClick={() => {
            let newValue =
              Math.floor((Number(field.value) - step) / step) * step
            if (newValue < step) newValue = step
            setFieldValue(props.name, newValue)
          }}
          type="button"
          css={css`
            position: absolute;
            top: 23px;
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
          type="number"
          min="0"
          step="1"
          css={css`
            display: block;
            width: 100%;
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
            -moz-appearance: textfield;
          `}
        />
        <button
          onClick={() => {
            setFieldValue(
              props.name,
              Math.floor((Number(field.value) + step) / step) * step
            )
          }}
          type="button"
          css={css`
            position: absolute;
            top: 22px;
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
    </>
  )
}

export default ({ close, boxQuantity = 1, code }) => {
  const { t } = useTranslation()

  const [cart, setItemAmout] = useCart()

  return (
    <div
      css={css`
        text-align: center;
        background: white;
        margin: 50px;
      `}
    >
      <h3
        css={css`
          font-weight: 500;
          font-size: 36px;
          color: #383838;
        `}
      >
        {t("enterAmount")}
      </h3>
      <button
        type="button"
        onClick={close}
        css={css`
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px 15px;
          outline: none;
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 24px;
          color: #383838;
        `}
      >
        &times;
      </button>
      <p
        css={css`
          font-weight: normal;
          font-size: 14px;
          color: #383838;
        `}
      >
        {t("enterAmountText")}
      </p>
      <Formik
        initialValues={{
          amount: "",
        }}
        onSubmit={({ amount }) => {
          if (amount <= 0) return

          setItemAmout(code, amount)

          close()
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form css={css``}>
            <MyAmountInput
              label={t("amount")}
              name="amount"
              type="number"
              placeholder="0"
              step={boxQuantity}
              setFieldValue={setFieldValue}
            />
            <button
              css={css`
                display: block;
                width: 100%;
                color: white;
                text-decoration: none;
                border-radius: 3px;
                border: none;
                background: #c5003e;
                height: 56px;
                cursor: pointer;
                outline: none;
                margin-top: 40px;
                font-weight: 500;
                font-size: 18px;

                &:hover {
                  background: #b60039;
                }

                &:active {
                  background: #f4004d;
                }
              `}
              type="submit"
            >
              {t("addToRequest")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
