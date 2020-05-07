import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"
import BtnAddToRequest from "../components/BtnAddToRequest"
import WeightCalculatorSection from "../components/WeightCalculatorSection"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import triangularEnv from "../images/triangular-envelope.png"

let triangularEnvelope = [
  {
    code: "1111",
    size: "C6 (114x162",
    color: "brown",
    type: "envelope",
    gsm: "80",
    pack: "1000",
  },
  {
    code: "2222",
    size: "C5 (162x229",
    color: "brown",
    type: "envelope",
    gsm: "80",
    pack: "500",
  },
  {
    code: "3333",
    size: "C4 (229x324",
    color: "brown",
    type: "envelope",
    gsm: "100",
    pack: "200",
  },
]

const GeneralNames = ({ children }) => (
  <div
    css={css`
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #4f4f4f;
    `}
  >
    {children}
  </div>
)

const EnvelopeParam = ({ children }) => (
  <p
    css={css`
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    `}
  >
    {children}
  </p>
)

export default props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

  return (
    <Layout>
      <SEO title="Triangular valve" />
      <MainNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: 500;
        `}
      >
        {t("triangularValve")}
      </h3>
      <div
        css={css`
          width: 80%;
          height: auto;
          max-height: 586px;
          background: url(${triangularEnv}), #ffffff;
          background-position: left;
          background-repeat: no-repeat;
          background-size: 40% 100%;
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
          `}
        >
          {t("triangularValveText")}
        </p>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 200px;
            padding-top: 43px;
          `}
        >
          <ul
            css={css`
              font-weight: 500;
              font-size: 24px;
              line-height: 27px;
              padding-left: 0;
              list-style: none;
            `}
          >
            {t("size")}
            <li
              css={css`
                font-weight: 500;
                font-size: 16px;
                line-height: 36px;
                padding-top: 23px;
                :before {
                  content: "-";
                  padding-right: 5px;
                }
              `}
            >
              C6 (114x162) {t("mm")}
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
              C5 (162x229) {t("mm")}
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
              C4 (229x324) {t("mm")}
            </li>
          </ul>
          <ul
            css={css`
              font-weight: 500;
              font-size: 24px;
              line-height: 27px;
              padding-left: 0;
              list-style: none;
            `}
          >
            {t("color")}
            <li
              css={css`
                font-weight: 500;
                font-size: 16px;
                line-height: 36px;
                padding-top: 23px;
                :before {
                  content: "-";
                  padding-right: 5px;
                }
              `}
            >
              {t("brown")}
            </li>
          </ul>
          <ul
            css={css`
              font-weight: 500;
              font-size: 24px;
              line-height: 27px;
              padding-left: 0;
              list-style: none;
            `}
          >
            {t("sealing")}
            <li
              css={css`
                font-weight: 500;
                font-size: 16px;
                line-height: 36px;
                padding-top: 23px;
                :before {
                  content: "-";
                  padding-right: 5px;
                }
              `}
            >
              {t("mk")}
            </li>
          </ul>
        </div>
        <ul
          css={css`
            font-weight: 500;
            font-size: 24px;
            line-height: 27px;
            padding: 49px 0 0 0;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          `}
        >
          {t("whereUse")}
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
            {t("docFlow")}
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
            {t("distributionProducts")}
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
            {t("greetingLetters")}
          </li>
        </ul>
      </div>

      <h4
        css={css`
          font-weight: 500;
          font-size: 28px;
          line-height: 33px;
          text-align: center;
          margin: 54px 0 23px 0;
        `}
      >
        {t("chooseEnvelopeParam")}
      </h4>

      {triangularEnvelope.map(({ code, size, color, type, gsm, pack }) => (
        <div
          css={css`
            background: #ffffff;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 3px;
            width: 1188px;
            height: 93px;
            margin: 20px auto 54px auto;
            padding: 22px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          `}
        >
          <GeneralNames>
            {t("code")}
            <EnvelopeParam>{code}</EnvelopeParam>
          </GeneralNames>

          <GeneralNames>
            {t("size")}
            <EnvelopeParam>
              {size} {t("mm")})
            </EnvelopeParam>
          </GeneralNames>

          <GeneralNames>
            {t("color")}
            <EnvelopeParam>{color}</EnvelopeParam>
          </GeneralNames>

          <GeneralNames>
            {t("type")}
            <EnvelopeParam>{type}</EnvelopeParam>
          </GeneralNames>

          <GeneralNames>
            {t("paperGSM")}
            <EnvelopeParam>{gsm}</EnvelopeParam>
          </GeneralNames>

          <GeneralNames>
            {t("quantityBox")}
            <EnvelopeParam>
              {pack}
              {t("pcs")}
            </EnvelopeParam>
          </GeneralNames>

          <BtnAddToRequest />
        </div>
      ))}
      <WeightCalculatorSection />
      <Footer />
    </Layout>
  )
}