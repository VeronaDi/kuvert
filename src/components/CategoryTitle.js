import React from "react"
import { css } from "@emotion/core"

export default ({ t, category }) => {
  return (
    <h3
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
      {category}
    </h3>
  )
}
