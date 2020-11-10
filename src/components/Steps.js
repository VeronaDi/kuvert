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
        width: 54%;
        max-width: 768px;
        height: 44px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        margin: 70px auto 30px auto;
        @media (max-width: 1024px) {
          width: 90%;
          margin: 100px auto 30px auto;
        }
      `}
    >
      {steps.map((stepTitle, index) => (
        <div
          key={index}
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
              @media (max-width: 1024px) {
                font-size: 30px;
              }
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
