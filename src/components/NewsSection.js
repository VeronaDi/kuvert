import React from "react"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import newsMain from "../data/news"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <div
      css={css`
        padding-top: 40px;
        text-align: center;
        height: 632px;
      `}
    >
      <h2
        css={css`
          text-align: center;
          padding-bottom: 40px;
          color: black;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
        `}
      >
        {t("certificate")}
      </h2>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        `}
      >
        {newsMain.map(({ img, title, text }) => (
          <div
            css={css`
              padding: 0 40px;
              outline: none;
            `}
          >
            <img
              src={img}
              alt={`${title} logo`}
              css={css`
                width: 216px;
                height: 302px;
              `}
            />
            <h6
              css={css`
                font-weight: normal;
                font-size: 24px;
                margin: 0;
                padding-top: 30px;
              `}
            >
              {title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  )
}
