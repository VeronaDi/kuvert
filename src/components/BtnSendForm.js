import React from "react"
import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation()

  return (
    <button
      css={css`
        background: #c5003e;
        border-radius: 3px;
        border: none;
        padding-top: 18px;
        padding-bottom: 18px;
        color: white;
        cursor: pointer;
        font-weight: 500;
        font-size: 18px;
        outline: none;
        text-decoration: none;
        display: block;
        text-align: center;
        margin: 30px 0;
        width: 100%;
        &:hover {
          background: #b60039;
        }
        &:active {
          background: #f4004d;
        }
      `}
      type="submit"
      // disabled={isSubmitting}
    >
      {t("request")}
    </button>
  )
}
