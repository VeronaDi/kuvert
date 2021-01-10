import React from "react"
import { css } from "@emotion/core"

export default ({ t, title }) => {
  return (
    <h1
      css={css`
        color: #000000;
        text-align: center;
        font-size: 36px;
        font-weight: 500;
        margin-top: 150px;
        @media (max-width: 1243px) {
          font-size: 24px;
          margin-top: 50px;
        }
      `}
    >
      {title}
    </h1>
  )
}
