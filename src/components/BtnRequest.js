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
        padding: 15px 20px;
        color: white;
        cursor: pointer;
        font-weight: bold;
        outline: none;
        text-decoration: none;

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
