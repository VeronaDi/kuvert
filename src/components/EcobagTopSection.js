import React from "react"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

import ecobagsBrown from "../data/ecobagBrown"
import torbyMix from "../../static/products/torby-mix.jpg"

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}
export default () => {
  const { t, i18n } = useTranslation()

  return (
    <div
      css={css`
        width: 80%;
        height: auto;
        max-height: 586px;
        background: url(${torbyMix}), #ffffff;
        background-position: 30px 55px;
        background-repeat: no-repeat;
        background-size: 40% 80%;
        margin: 9px auto;
        padding: 30px 78px 90px 37%;
        color: #000000;
      `}
    >
      <p
        css={css`
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          a {
            text-decoration: none;
            color: black;
            :hover {
              text-decoration: underline;
            }
          }
        `}
        dangerouslySetInnerHTML={{ __html: t("ecobagText") }}
      ></p>
      <div>
        <ul
          css={css`
            font-weight: 500;
            font-size: 24px;
            line-height: 27px;
            padding-left: 0;
            list-style: none;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            height: 230px;
          `}
        >
          {t("size")}
          {ecobagsBrown
            .map(({ size }) => size)
            .filter(onlyUnique)
            .map(size => (
              <li
                css={css`
                  font-weight: 500;
                  font-size: 18px;
                  line-height: 36px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                `}
              >
                {size} {t("mm")}
              </li>
            ))}
        </ul>
      </div>
      <div
        css={css`
          font-weight: 500;
          font-size: 24px;
          line-height: 27px;
          padding: 5px 0 0 0;
        `}
      >
        {t("whereUse")}
        <ul
          css={css`
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0;
          `}
        >
          <li
            css={css`
              font-weight: 500;
              font-size: 16px;
              line-height: 36px;
              :before {
                content: "-";
                padding-right: 5px;
              }
            `}
          >
            {t("packPresent")}
          </li>
          <li
            css={css`
              font-weight: 500;
              font-size: 16px;
              line-height: 36px;
              :before {
                content: "-";
                padding-right: 5px;
              }
            `}
          >
            {t("packBulkProd")}
          </li>
        </ul>
      </div>
    </div>
  )
}
