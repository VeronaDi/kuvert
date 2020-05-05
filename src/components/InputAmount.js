import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import plus from "../images/plus.png"
import minus from "../images/minus.png"

export default () => {
  const { t, i18n } = useTranslation()

  const quantityEnv = React.useRef()

  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <label
        css={css`
          font-size: 12px;
          padding-bottom: 5px;
        `}
      >
        {t("amount")}
      </label>
      <div
        css={css`
          position: relative;
        `}
      >
        <button
          onClick={() => {
            quantityEnv.current.value = Number(quantityEnv.current.value) - 250
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
          disabled
          ref={quantityEnv}
          type="number"
          min="0"
          step="250"
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
        ></input>
        <button
          onClick={() => {
            quantityEnv.current.value = Number(quantityEnv.current.value) + 250
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
    </form>
  )
}
