import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

import facebook from "../images/facebook.svg"
import linkedin from "../images/linkedin.svg"

export default () => {
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
          max-width: 1475px;
          width: 80%;
          height: 324px;
          border: 3px solid #ffffff;
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          color: white;
          display: flex;
          justify-content: space-around;
          font-size: 18px;
        `}
      >
        <div
          css={css`
            border-right: 3px solid #ffffff;
            padding: 40px 30px;
            line-height: 36px;
            max-width: 338px;
            width: 25%;
          `}
        >
          <h4
            css={css`
              font-weight: bold;
              font-size: 24px;
              line-height: 36px;
              padding-bottom: 20px;
              margin: 0;
            `}
          >
            {t("addressOfFactory")}
          </h4>
          <p
            css={css`
              margin: 0;
              font-weight: 500;
              font-size: 18px;
              line-height: 36px;
            `}
          >
            {t("ivano")}
          </p>
          <p
            css={css`
              margin: 0;
            `}
          >
            {t("addressFactory")}
          </p>
          <p
            css={css`
              margin: 0;
              display: flex;
              flex-direction: column;
            `}
          >
            {t("phone")}:
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
            padding-top: 40px;
            padding-bottom: 40px;
            padding-left: 30px;
            padding-right: 10px;
            line-height: 36px;
          `}
        >
          <h4
            css={css`
              font-weight: bold;
              font-size: 24px;
              line-height: 36px;
              padding-bottom: 20px;
              margin: 0;
            `}
          >
            {t("addressBranch")}
          </h4>
          <div
            css={css`
              display: flex;
            `}
          >
            <div
              css={css`
                max-width: 285px;
                width: 100%;
                display: flex;
                flex-direction: column;
              `}
            >
              <p
                css={css`
                  margin: 0;
                `}
              >
                {t("kyiv")}
              </p>
              <p
                css={css`
                  margin: 0;
                `}
              >
                {t("addressBranchKyiv")}
              </p>
              <p
                css={css`
                  margin: 0;
                  display: flex;
                  flex-direction: column;
                `}
              >
                {t("phone")}:
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
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                max-width: 285px;
                width: 100%;
              `}
            >
              <p
                css={css`
                  margin: 0;
                `}
              >
                {t("dnipro")}
              </p>
              <p
                css={css`
                  margin: 0;
                `}
              >
                {t("addressBranchDnipro")}
              </p>
              <p
                css={css`
                  margin: 0;
                  display: flex;
                  flex-direction: column;
                `}
              >
                {t("phone")}:
                <a
                  href="tel:+380504332838"
                  css={css`
                    text-decoration: none;
                    color: white;
                  `}
                >
                  +38 (050) 433 28 38
                </a>
              </p>
            </div>
            <div
              css={css`
                max-width: 285px;
                width: 100%;
                display: flex;
                flex-direction: column;
              `}
            >
              <p
                css={css`
                  margin: 0;
                `}
              >
                {t("kharkiv")}
              </p>
              <p
                css={css`
                  margin: 0;
                `}
              >
                {t("addressBranchKharkiv")}
              </p>
              <p
                css={css`
                  margin: 0;
                  display: flex;
                  flex-direction: column;
                `}
              >
                {t("phone")}:
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
            <div
              css={css`
                width: 100%;
                display: flex;
                flex-direction: column;
              `}
            >
              <p
                css={css`
                  margin: 0;
                `}
              >
                {t("lviv")}
              </p>
              <p
                css={css`
                  margin: 0;
                `}
              >
                {" "}
                <a
                  href="https://druktorba.business.site"
                  css={css`
                    text-decoration: none;
                    color: white;
                  `}
                >
                  {" "}
                  "{t("ukrinvest")}"
                </a>
              </p>
              <p
                css={css`
                  margin: 0;
                `}
              >
                {t("addressBranchLviv")}
              </p>
              <p
                css={css`
                  margin: 0;
                  display: flex;
                  flex-direction: column;
                `}
              >
                {t("phone")}:
                <a
                  href="tel:+380322709191"
                  css={css`
                    text-decoration: none;
                    color: white;
                  `}
                >
                  +38 (0322) 70-91-91
                </a>
                <a
                  href="tel:+380503170387"
                  css={css`
                    text-decoration: none;
                    color: white;
                  `}
                >
                  +38 (050) 317 03 87
                </a>
              </p>
            </div>
          </div>
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
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          padding-top: 12px;
        `}
      >
        <a
          href="http://en.mayer-kuvert-network.com/mk-en"
          target="_blank"
          rel="noopener noreferrer nofollow"
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
            line-height: 30px;
          `}
        >
          Copyright © 2020 Kuvert-Ukraine. All rights reserved.
        </p>
        <a
          href="https://www.facebook.com/kuvert.ua/"
          target="_blank"
          rel="noopener noreferrer nofollow"
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
          rel="noopener noreferrer nofollow"
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
