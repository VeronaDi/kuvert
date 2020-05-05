import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <input
      type="text"
      css={css`
        width: 380px;
        height: 65px;
        font-size: 16px;
        border: 1px solid #d6d6d6;
        border-radius: 3px;
        padding: 18px;
        outline: none;
        color: #444444;
        :focus {
          border: 2px solid #c4c4c4;
        }
      `}
    ></input>
  )
}
