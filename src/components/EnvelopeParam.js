import React from "react"
import { css } from "@emotion/core"

export default ({ children }) => {
  return (
    <p
      css={css`
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
      `}
    >
      {children}
    </p>
  )
}
