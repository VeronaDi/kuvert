import React from "react"
import { css } from "@emotion/core"

export default ({ steps, activeStep }) => {
  const getColor = stepIndex => {
    if (stepIndex === activeStep) return "#b40039"

    if (stepIndex < activeStep) return "#383838"

    return "#b4b4b4"
  }

  return (
    <section
      css={css`
        display: flex;
        flex-directon: row;
        position: relative;
        width: 779px;
        height: 44px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        margin: 80px auto 50px auto;
      `}
    >
      {steps.map((stepTitle, index) => (
        <div
          css={css`
            color: ${getColor(index)};
            border-bottom: 3px solid ${getColor(index)};
            width: 261px;
          `}
        >
          <span
            css={css`
              font-size: 26px;
              padding-right: 5px;
            `}
          >
            {index + 1}
          </span>
          {stepTitle}
        </div>
      ))}
    </section>
  )
}
