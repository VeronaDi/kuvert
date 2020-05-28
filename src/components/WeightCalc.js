import React from "react"
import { Form, Formik, useField } from "formik"
import * as Yup from "yup"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

import plus from "../images/plus.png"
import minus from "../images/minus.png"
import error from "../images/error.svg"

const MyInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
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

const MyAmountInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const quantityEnv = React.useRef()
  return (
    <>
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
              quantityEnv.current.value = Number(quantityEnv.current.value) - 1
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
            disabled
            ref={quantityEnv}
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
            `}
          />
          <button
            onClick={() => {
              quantityEnv.current.value = Number(quantityEnv.current.value) + 1
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
    </>
  )
}

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <div
      css={css`
        width: 944px;
        height: 597px;
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
          font-size: 36px;
          font-weight: bold;
          line-height: 50px;
          color: #383838;
        `}
      >
        {t("weightcalc")}
      </h3>
      <p
        css={css`
          width: 342px;
          margin: 0 auto;
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
        validationSchema={Yup.object({
          width: Yup.number()
            .min(90, "Too small")
            .max(458, "Too big")
            .required("Required"),
          height: Yup.number()
            .min(100, "Too small")
            .max(324, "Too big")
            .required("Required"),
          paperGSM: Yup.number()
            .min(75, "Too light")
            .max(120, "Too heavy")
            .required("Required"),
          amount: Yup.number()
            .min(1, "Not enough")
            .required("Required"),
        })}
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
              height: 290px;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-around;
              align-content: space-between;
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
            />
            <button
              css={css`
                color: white;
                text-decoration: none;
                border-radius: 3px;
                border: none;
                background: #c5003e;
                width: 100%;
                max-width: 780px;
                padding: 18px 210px;
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
              disabled={isSubmitting}
            >
              {t("calculate")}
            </button>
            <p
              css={css`
                font-size: 26px;
                font-weight: bold;
                line-height: 30px;
                color: #000000;
                padding-top: 40px;
              `}
            >
              {t("weightResult")}0 {t("kg")}
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )
}
