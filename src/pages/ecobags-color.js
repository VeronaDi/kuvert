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

import ecobagsColor from "../data/ecobagColor"

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
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Color paperbags" />
      <MainNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: 500;
        `}
      >
        {t("ecobagColor")}
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
          {t("ecobagText")}
        </p>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 200px;
            padding-top: 15px;
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
            {ecobagsColor.map(({ size }) => (
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
            padding: 65px 0 0 0;
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

      {ecobagsColor.map(({ code, size, color, handle, gsm, pack, price }) => (
        <div
          key={code}
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
            {t("size")}
            <EnvelopeParam>
              {size} {t("mm")}
            </EnvelopeParam>
          </GeneralNames>

          <GeneralNames>
            {t("handleType")}
            <EnvelopeParam>{t(handle)}</EnvelopeParam>
          </GeneralNames>

          <GeneralNames>
            {t("color")}
            <EnvelopeParam>{t(color)}</EnvelopeParam>
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

          <GeneralNames>
            {t("price")}
            <EnvelopeParam>{t(price)}</EnvelopeParam>
          </GeneralNames>

          <BtnAddToRequest />
        </div>
      ))}
      <WeightCalculatorSection />
      <Footer />
    </Layout>
  )
}
