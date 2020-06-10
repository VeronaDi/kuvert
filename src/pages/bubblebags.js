import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"
import BtnAddToRequest from "../components/BtnAddToRequestCard"
import WeightCalculatorSection from "../components/WeightCalculatorSection"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import bubblebag from "../../static/products/bubblebag.jpg"

import airpoc from "../data/airpoc"

const GeneralNames = ({ children }) => (
  <div
    css={css`
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: #4f4f4f;
      padding-right: 30px;
    `}
  >
    {children}
  </div>
)

const EnvelopeParam = ({ children }) => (
  <p
    css={css`
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    `}
  >
    {children}
  </p>
)

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Bags with bubbles" />
      <MainNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: 500;
        `}
      >
        {t("airpoc")}
      </h3>
      <div
        css={css`
          width: 80%;
          height: auto;
          max-height: 720px;
          background: url(${bubblebag}), #ffffff;
          background-position: left;
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
          `}
        >
          {t("airpocText")}
        </p>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-top: 20px;
          `}
        >
          {
            <ul
              css={css`
                font-weight: 500;
                font-size: 24px;
                line-height: 23px;
                padding-left: 0;
                list-style: none;
                display: flex;
                flex-direction: column;
                height: 240px;
              `}
            >
              {t("size")}
              {airpoc.map(({ size }) => (
                <li
                  css={css`
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 20px;
                    padding-top: 15px;
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
          }
          <ul
            css={css`
              font-weight: 500;
              font-size: 24px;
              line-height: 23px;
              padding-left: 0;
              list-style: none;
            `}
          >
            {t("color")}
            <li
              css={css`
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                padding-top: 15px;
                :before {
                  content: "-";
                  padding-right: 5px;
                }
              `}
            >
              {t("brown")}
            </li>
            <li
              css={css`
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                padding-top: 15px;
                :before {
                  content: "-";
                  padding-right: 5px;
                }
              `}
            >
              {t("white")}
            </li>
          </ul>
          <ul
            css={css`
              font-weight: 500;
              font-size: 24px;
              line-height: 23px;
              padding-left: 0;
              list-style: none;
            `}
          >
            {t("sealing")}
            <li
              css={css`
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                padding-top: 15px;
                :before {
                  content: "-";
                  padding-right: 5px;
                }
              `}
            >
              {t("skl")}
            </li>
          </ul>
        </div>
        <div
          css={css`
            font-weight: 500;
            font-size: 24px;
            line-height: 27px;
            padding: 170px 0 0 0;
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
                line-height: 25px;
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
                line-height: 25px;
                :before {
                  content: "-";
                  padding-right: 5px;
                }
              `}
            >
              {t("bulkyTransportation")}
            </li>
          </ul>
        </div>
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
        {t("chooseDesiredProduct")}
      </h4>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        `}
      >
        {airpoc.map(({ code, size, color, pack, sealing, price }) => (
          <div
            key={code}
            css={css`
              background: #ffffff;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 3px;
              width: 380px;
              height: 266px;
              padding: 28px 17px 0 17px;
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              justify-content: start;
              position: relative;
              margin: 30px 50px;
            `}
          >
            <GeneralNames>
              {t("code")}
              <EnvelopeParam>{code}</EnvelopeParam>
            </GeneralNames>

            <GeneralNames>
              {t("color")}
              <EnvelopeParam>{t(color)}</EnvelopeParam>
            </GeneralNames>

            <GeneralNames>
              {t("quantityBox")}
              <EnvelopeParam>
                {pack}
                {t("pcs")}
              </EnvelopeParam>
            </GeneralNames>

            <GeneralNames>
              {t("size")}
              <EnvelopeParam>
                {size} {t("mm")}
              </EnvelopeParam>
            </GeneralNames>

            <GeneralNames>
              {t("sealing")}
              <EnvelopeParam>{t(sealing)}</EnvelopeParam>
            </GeneralNames>

            <GeneralNames>
              {t("price")}
              <EnvelopeParam>{t(price)}</EnvelopeParam>
            </GeneralNames>
            <div
              css={css`
                border-top: 0.2px solid #000000;
                width: 90%;
                position: absolute;
                bottom: 0;
                margin-bottom: 5px;
              `}
            >
              <BtnAddToRequest />
            </div>
          </div>
        ))}
      </div>
      <WeightCalculatorSection />
      <Footer />
    </Layout>
  )
}
