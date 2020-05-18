import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
// import { Link } from "gatsby"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <button
      css={css`
        cursor: pointer;
        outline: none;
        text-decoration: none;
        display: block;
        text-align: center;
        width: 100%;
        height: 49px;
        border-radius: 3px;
        background: transparent;
        border: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #383838;

        &:hover {
          border: 1px solid #383838;
        }
      `}
    >
      {t("addToRequest")}
    </button>
  )
}
