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
        background: #c5003e;
        border-radius: 3px;
        border: none;
        width: 205px;
        height: 56px;
        color: white;
        cursor: pointer;
      `}
    >
      {t("request")}
    </button>
  )
}
