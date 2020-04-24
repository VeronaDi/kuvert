import React from "react"

// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <Link
      to="/personalinfo"
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
    </Link>
  )
}
