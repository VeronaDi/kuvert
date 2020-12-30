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

      <div
        className="row"
        css={css`
          display: flex;
        `}
      >
        {newsMain.map(({ id, img, title, text }) => (
          <div
            key={id}
            className="w-full md:w-1/3 px-5"
            css={css`
              margin-bottom: 25px;
            `}
          >
            <div
              css={css`
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 3px;
                overflow: hidden;
                background: #e7e7e7;
                margin-bottom: 20px;
                height: 100%;
              `}
            >
              <div
                css={css`
                  height: 300px;
                  background: url(${img});
                  background-size: cover;
                  @media (max-width: 1024px) {
                    background-size: 100% 100%;
                  }
                `}
              />
              <div
                css={css`
                  padding: 20px 40px 40px 40px;
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
