import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <Link
      to="/"
      css={css`
        background: #c5003e;
        border-radius: 3px;
        border: none;
        padding-top: 18px;
        padding-bottom: 18px;
        color: white;
        cursor: pointer;
        font-weight: bold;
        outline: none;
        text-decoration: none;
        display: block;
        text-align: center;
        margin-bottom: 15px;

        &:hover {
          background: #b60039;
        }

        &:active {
          background: #f4004d;
        }
      `}
    >
      {t("request")}
    </Link>
  )
}
