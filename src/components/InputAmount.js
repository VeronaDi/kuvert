import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <div
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
      <input
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
      `}
      ></input>
    </div>
  )
}
