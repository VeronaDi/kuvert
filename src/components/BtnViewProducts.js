import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <Link
      to="/products"
      css={css`
        color: white;
        text-decoration: none;
        font-weight: bold;
        border: 1px solid #ffffff;
        border-radius: 3px;
        background: transparent;
        padding: 15px 45px;
        cursor: pointer;

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
      {t("viewProducts")}
    </Link>
  )
}
