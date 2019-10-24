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
        color: black;
        text-decoration: none;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 3px;
        background: transparent;
        padding: 18px 210px;
        cursor: pointer;
        outline: none;

        &:hover {
          color: #c4c4c4;
          border: 1px solid #c4c4c4;
        }

        &:active {
          color: #676767;
          background: #ffffff;
        }
      `}
    >
      {t("send")}
    </button>
  )
}
