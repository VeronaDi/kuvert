import React from "react"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import newsMain from "../data/news"

export default () => {
  const T = useTranslation()

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <div
      css={css`
        padding-top: 40px;
        text-align: center;
        margin-bottom: 80px;
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
        {t("news")}
      </h2>

      <div className="row">
        {newsMain.map(({ img, title, text }) => (
          <div className="w-full md:w-1/3 px-5">
            <div
              key={t(title)}
              css={css`
                height: 460px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 3px;
                overflow: hidden;
                background: #e7e7e7;
                margin-bottom: 20px;
              `}
            >
              <div
                css={css`
                  height: 50%;
                  background: url(${img});
                  background-size: cover;
                `}
              />
              <div
                css={css`
                  padding: 0 40px;
                `}
              >
                <h6
                  css={css`
                    font-weight: 500;
                    font-size: 24px;
                    margin: 0;
                    padding: 10px 0;
                  `}
                >
                  {t(title)}
                </h6>
                <p
                  css={css`
                    font-weight: normal;
                    font-size: 18px;
                    text-align: left;
                    margin: 0;
                  `}
                >
                  {t(text)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
