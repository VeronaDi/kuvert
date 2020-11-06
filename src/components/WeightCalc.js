import React from "react"
import { Form, Formik, useField } from "formik"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

import plus from "../images/plus.png"
import minus from "../images/minus.png"

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          text-align: left;
          position: relative;
          @media screen and (max-width: 1024px) {
            width: 100%;
          }
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
            margin-top: 19px;
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
            font-size: 16px;
            border: 1px solid #d6d6d6;
            border-radius: 3px;
            padding: 18px;
            outline: none;
            color: #444444;
            ::-webkit-inner-spin-button,
            ::-webkit-outer-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            ::-webkit-input-placeholder {
              font-size: 16px;
              color: #ababab;
            }
            :focus {
              border: 2px solid #c4c4c4;
            }
            @media screen and (max-width: 1024px) {
              width: 100%;
            }
          `}
        />
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
    </>
  )
}

const MyAmountInput = ({ label, setFieldValue, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          text-align: left;
          @media screen and (max-width: 1024px) {
            width: 100%;
          }
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
            margin-top: 19px;
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
              let newValue = Number(field.value) - 1
              if (newValue < 1) newValue = 1
              setFieldValue(props.name, newValue)
            }}
            type="button"
            css={css`
              position: absolute;
              left: 10%;
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
            type="number"
            min="0"
            step="1"
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
              @media screen and (max-width: 1024px) {
                width: 100%;
              }
            `}
          />
          <button
            onClick={() => {
              setFieldValue(props.name, Number(field.value) + 1)
            }}
            type="button"
            css={css`
              position: absolute;
              right: 10%;
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
    </>
  )
}

export default ({ close }) => {
  const { t } = useTranslation()

  const [envelopeWeight, setEnvelopeWeight] = React.useState(0)

  return (
    <div
      css={css`
        max-width: 944px;
        width: 90vw;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        background: white;
      `}
    >
      <h3
        css={css`
          margin: 44px 0 19px 0;
          font-weight: 500;
          font-size: 36px;
          line-height: 50px;
          color: #383838;
        `}
      >
        {t("weightcalc")}
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
          padding: 0 30px;
          margin: 0 auto;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
          color: #383838;
        `}
      >
        {t("weightcalcText")}
      </p>
      <Formik
        initialValues={{
          width: "",
          height: "",
          paperGSM: "",
          amount: "",
        }}
        onSubmit={({ width, height, paperGSM, amount }) => {
          const weight =
            ((Number(width) * Number(height) * Number(paperGSM) * 2.5) /
              1000000) *
            Number(amount)
          setEnvelopeWeight(weight)
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-around;
              align-content: space-between;
              padding: 0 60px;
              @media screen and (max-width: 1024px) {
                flex-direction: column;
                align-items: center;
                padding: 0 30px;
              }
            `}
          >
            <MyInput
              label={t("width")}
              name="width"
              type="number"
              placeholder="0"
            />
            <MyInput
              label={t("height")}
              name="height"
              type="number"
              placeholder="0"
            />
            <MyInput
              label={t("paperGSM")}
              name="paperGSM"
              type="number"
              placeholder="0"
            />
            <MyAmountInput
              label={t("amount")}
              name="amount"
              type="number"
              placeholder="0"
              setFieldValue={setFieldValue}
            />
            <button
              css={css`
                color: white;
                text-decoration: none;
                border-radius: 3px;
                border: none;
                background: #c5003e;
                width: 780px;
                max-width: 80%;
                padding: 18px 0;
                cursor: pointer;
                outline: none;
                margin-top: 36px;

                &:hover {
                  background: #b60039;
                }

                &:active {
                  background: #f4004d;
                }
              `}
              type="submit"
            >
              {t("calculate")}
            </button>
            <p
              css={css`
                font-size: 26px;
                font-weight: bold;
                line-height: 30px;
                color: #000000;
              `}
            >
              {t("weightResult")}
              {envelopeWeight} {t("g")}
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )
}
