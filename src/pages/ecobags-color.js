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

import ecobagsColor from "../data/ecobagColor"
import ecobagsMix from "../../static/products/ecobags-mix.jpg"

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
      <SEO title={t("paperbagsColor")} />
      <MainNav {...props} />
      <MobileNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: 500;
          margin-top: 150px;
          @media (max-width: 1243px) {
            font-size: 24px;
            margin-top: 50px;
          }
        `}
      >
        {t("ecobagColor")}
      </h3>

      <EcobagTopSection ecobags={ecobagsColor} img={ecobagsMix} />

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

      {ecobagsColor.map(
        ({ code, size, paper, color, handle, gsm, boxSize, price }) => (
          <div
            key={code}
            css={css`
              background: #ffffff;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 3px;
              width: 90vw;
              margin: 20px auto 54px auto;
              padding: 30px;
              display: flex;
              justify-content: space-around;
              align-items: center;
              @media screen and (max-width: 570px) {
                flex-direction: column;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: space-around;
                flex: 1;
                @media screen and (max-width: 1024px) {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, 150px);
                }
              `}
            >
              <GeneralNames>
                {t("size")}
                <EnvelopeParam>
                  {size} {t("mm")}
                </EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("paperType")}
                <EnvelopeParam>{t(paper)}</EnvelopeParam>
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
                {t("handleType")}
                <EnvelopeParam>{t(handle)}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("quantityBox")}, {t("pcs")}
                <EnvelopeParam>{boxSize}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("price")} {t("thousandPcs")}
                <EnvelopeParam>
                  {t("from")} {price} {t("uah")}
                </EnvelopeParam>
              </GeneralNames>
            </div>
            <BtnAddToRequest boxQuantity={boxSize} code={code} />
          </div>
        )
      )}

      <Footer />
    </Layout>
  )
}
