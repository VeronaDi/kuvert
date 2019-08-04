import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
// import { Link } from "gatsby"

import phone from "../images/phone.svg"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <button
      css={css`
        background: url(${phone}), rgba(56, 56, 56, 0.732);
        background-position: center left 17px;
        background-repeat: no-repeat;
        box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        border: none;
        width: 230px;
        height: 64px;
        color: white;
        cursor: pointer;
        z-index: 3;
        position: fixed;
        left: 50px;
        bottom: 76px;
        padding: 0 0 0 50px;
      `}
    >
      {t("requestCall")}
    </button>
  )
}
