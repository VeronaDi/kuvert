import React from "react"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import backCertificates from "../images/background-certification.png"

let certificate = [
  { img: "/certificates/iso.jpg", name: "ISO 9001:2015" },
  {
    img: "/certificates/safety-work.jpg",
    name: "The best labor protection enterprise",
  },
  { img: "/certificates/stericlin.jpg", name: "Stericlin" },
]

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <div
      css={css`
        background: url(${backCertificates});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding-top: 40px;
        text-align: center;
        height: 632px;
      `}
    >
      <h2
        css={css`
          text-align: center;
          padding-bottom: 20px;
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
          padding-bottom: 20px;
          @media screen and (max-width: 900px) {
            overflow-x: scroll;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            min-width: 900px;
          `}
        >
          {certificate.map(({ name, img }) => (
            <div
              key={name}
              css={css`
                padding: 0 40px;
                outline: none;
              `}
            >
              <img
                src={img}
                alt={`${name} logo`}
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
                {name}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
