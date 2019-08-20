import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

import facebook from "../images/facebook.svg"
import linkedin from "../images/linkedin.svg"

export default ({ isHome = false, location }) => {
  const { t, i18n } = useTranslation()

  return (
    <section
      css={css`
        background: #4f4f4f;
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
            border-right: 3px solid #ffffff;
            padding: 15px 30px;
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
        <div
          css={css`
            padding: 15px 30px;
          `}
        >
          <h4
            css={css`
              font-size: 24px;
            `}
          >
            {t("addressBranch")}
          </h4>
          <div
            css={css`
              display: flex;
            `}
          >
            <p>
              {t("contactBranchKyiv")}
              {t("phone")}
              <a
                href="tel:+380670090801"
                css={css`
                  text-decoration: none;
                  color: white;
                `}
              >
                +38 (067) 009 08 01
              </a>
            </p>
            <p>
              {t("contactBranchDnipro")}
              {t("phone")}
              <a
                href="tel:+380504332838"
                css={css`
                  text-decoration: none;
                  color: white;
                `}
              >
                +38 (050) 433 28 38;
              </a>
            </p>
            <p>
              {t("contactBranchKharkiv")}
              {t("phone")}
              <a
                href="tel:+380504332566"
                css={css`
                  text-decoration: none;
                  color: white;
                `}
              >
                +38 (050) 433 25 66
              </a>
            </p>
          </div>
        </div>
        <div
          css={css`
            border-left: 3px solid #ffffff;
            flex-direction: column;
            padding: 15px 30px;
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
      <div
        css={css`
          width: 100%;
          height: 94px;
          background: #383838;
          color: white;
          position: absolute;
          bottom: 0;
          text-align: center;
          line-height: 25px;
          padding-top: 12px;
        `}
      >
        <a
          href="http://en.mayer-kuvert-network.com/mk-en"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            text-decoration: none;
            font-size: 20px;
            color: white;
          `}
        >
          «Mayer-Kuvert-network GmbH»
        </a>
        <p
          css={css`
            font-weight: bold;
            font-size: 14px;
          `}
        >
          Copyright © 2019 Kuvert-Ukraine. All rights reserved.
        </p>
        <a
          href="https://www.facebook.com/kuvert.ukr/"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            background: url(${facebook});
            width: 51px;
            height: 51px;
            position: absolute;
            bottom: 25px;
            right: 135px;
            color: transparent;
          `}
        >
          facebook
        </a>
        <a
          href="https://www.linkedin.com/company/kuvertua/"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            background: url(${linkedin});
            width: 51px;
            height: 51px;
            position: absolute;
            bottom: 25px;
            right: 60px;
            color: transparent;
          `}
        >
          linkedin
        </a>
      </div>
    </section>
  )
}
