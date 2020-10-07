import React from "react"

// import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

export default ({ ...props }) => {
  const { t } = useTranslation()

  return (
    <button
      {...props}
      css={css`
        background: #c5003e;
        border-radius: 3px;
        border: 1px solid #c5003e;
        color: white;
        text-decoration: none;
        box-sizing: border-box;
        padding: 12px 60px;
        cursor: pointer;
        outline: none;
        width: 100%;
        font-weight: 500;
        font-size: 18px;

        &:hover {
          background: #b60039;
          color: white;
          border: 1px solid #b60039;
        }

        &:active {
          background: #f4004d;
          color: white;
          border: 1px solid #f4004d;
        }
      `}
    >
      {t("next")}
    </button>
  )
}
