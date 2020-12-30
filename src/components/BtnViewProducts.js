import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation()

  return (
    <Link
      to="/products"
      css={css`
        color: white;
        text-decoration: none;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        border: 1px solid #ffffff;
        border-radius: 3px;
        background: transparent;
        width: 205.81px;
        height: 56px;
        padding-top: 16px;
        padding-bottom: 16px;
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
      {t("viewProducts")}
    </Link>
  )
}
