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
        border: 1px solid #ffffff;
        border-radius: 3px;
        background: transparent;
        width: 205px;
        height: 56px;
        cursor: pointer;
      `}
    >
      <Link
        to="/products"
        css={css`
          color: white;
          text-decoration: none;
        `}
      >
        {t("viewProducts")}
      </Link>
    </button>
  )
}
