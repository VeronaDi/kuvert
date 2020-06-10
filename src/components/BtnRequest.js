import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <Link
      to="/request"
      css={css`
        background: #c5003e;
        border-radius: 3px;
        border: none;
        padding-top: 16px;
        padding-bottom: 16px;
        width: 205.81px;
        height: 56px;
        color: white;
        cursor: pointer;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        outline: none;
        text-decoration: none;
        display: block;
        text-align: center;

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
