import React from "react"
import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

export default ({ ...props }) => {
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
        &:disabled {
          cursor: default;
        }

        &.progress {
          background: #c5003e;

          @keyframes progress-bar-stripes {
            from {
              background-position: 1rem 0;
            }
            to {
              background-position: 0 0;
            }
          }

          animation: progress-bar-stripes 1s linear infinite;
          background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.15) 75%,
            transparent 75%,
            transparent
          );
          background-size: 1rem 1rem;
        }
      `}
      type="submit"
      {...props}
    >
      {t("request")}
    </button>
  )
}
