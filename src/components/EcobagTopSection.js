import React from "react"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}
export default ({ ecobags = [], img }) => {
  const { t } = useTranslation()

  return (
    <div
      css={css`
        width: 90vw;
        background: #ffffff;
        background-position: left;
        background-repeat: no-repeat;
        background-size: 40% 80%;
        margin: 9px auto 50px auto;
        padding: 30px 70px;
        color: #000000;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          width: 35%;
          @media screen and (max-width: 768px) {
            width: 100%;
          }
        `}
      >
        <img src={img} alt="Ecobags white" />
      </div>
      <div
        css={css`
          width: 60%;
          @media screen and (max-width: 768px) {
            width: 100%;
          }
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
        />
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
              width: 100%;
              @media screen and (max-width: 768px) {
                height: auto;
              }
            `}
          >
            {t("size")}
            {ecobags
              .map(({ size }) => size)
              .filter(onlyUnique)
              .map(size => (
                <li
                  key={size}
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
    </div>
  )
}
