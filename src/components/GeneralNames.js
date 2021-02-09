import React from "react"
import { css } from "@emotion/core"

export default ({ children }) => {
  return (
    <div
      css={css`
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #4f4f4f;
        margin-right: 20px;
      `}
    >
      {children}
    </div>
  )
}
