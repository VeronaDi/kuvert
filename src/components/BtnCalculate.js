import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
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
    >
      {t("calculate")}
    </button>
  )
}
