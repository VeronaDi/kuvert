import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import BtnAddToRequest from "../components/BtnAddToRequest"
import WeightCalculatorSection from "../components/WeightCalculatorSection"
import EcobagTopSection from "../components/EcobagTopSection"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import ecobagsWhite from "../data/ecobagWhite"
import ecobagsWh from "../../static/products/ecobags-white.jpg"

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
      <SEO title="White paperbags" />
      <MainNav {...props} />
      <MobileNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: 500;
        `}
      >
        {t("ecobagWhite")}
      </h3>

      <EcobagTopSection ecobags={ecobagsWhite} img={ecobagsWh} />

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

      {ecobagsWhite.map(({ code, size, color, handle, gsm, pack, price }) => (
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
            {t("price")} {t("thousandPcs")}
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
