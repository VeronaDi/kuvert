import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import LocalizedLink from "../components/LocalizedLink"

import { useTranslation } from "react-i18next"

export default ({ isSmall = false }) => {
  const { t, i18n } = useTranslation()

  return (
    <LocalizedLink
      to="/contacts"
      css={css`
        background: #c5003e;
        border-radius: 3px;
        border: none;
        padding: ${isSmall ? "8px 0" : "16px 0"};
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
      {t("btnContactUs")}
    </LocalizedLink>
  )
}
