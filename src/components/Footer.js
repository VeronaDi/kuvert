import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

export default ({ isHome = false, location }) => {
  const { t, i18n } = useTranslation()

  return (
    <section
      css={css`
        background: #383838;
        height: 597px;
        width: 100%;
        position: relative;
      `}
    >
      <div
        css={css`
          width: 76%;
          height: 324px;
          border: 3px solid #ffffff;
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          color: white;
          display: flex;
          justify-content: space-between;
          font-size: 18px;
        `}
      >
        <div
          css={css`
            max-width: 338px;
            border-right: 3px solid #ffffff;
            padding: 15px 70px 60px 50px;
            line-height: 36px;
          `}
        >
          <h4
            css={css`
              font-size: 24px;
            `}
          >
            {t("addressFactory")}
          </h4>
          <p>
            {t("contactFactory")}
            {t("phone")}
            <a
              href="tel:+380503770801"
              css={css`
                text-decoration: none;
                color: white;
              `}
            >
              +38 050 377 08 01
            </a>
            <a
              href="tel:+380673270801"
              css={css`
                text-decoration: none;
                color: white;
              `}
            >
              +38 067 327 08 01
            </a>
          </p>
        </div>
        <div>
          <h4
            css={css`
              font-size: 24px;
            `}
          >
            {t("addressBranch")}
          </h4>
          <p>
            {t("contactBranch")} {t("phone")}
          </p>
        </div>
        <div
          css={css`
            max-width: 338px;
            border-left: 3px solid #ffffff;
            flex-direction: column;
            padding: 15px 70px 60px 50px;
            font-size: 18px;
            line-height: 36px;
          `}
        >
          <h4
            css={css`
              font-size: 24px;
            `}
          >
            {t("addressRepresentative")}
          </h4>
          <p>
            {t("contactRepresentative")} {t("phone")}
            <a
              href="tel:+380322709191"
              css={css`
                text-decoration: none;
                color: white;
              `}
            >
              +38 (0322) 70-91-91
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
