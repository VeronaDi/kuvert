import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import BtnAddToRequest from "../components/BtnAddToRequestCard"
import WeightCalculatorSection from "../components/WeightCalculatorSection"
import FilterEnvelopes from "../components/FilterEnvelopes"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import envelopes from "../data/envelopes"

const GeneralNames = ({ children }) => (
  <div
    css={css`
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: #4f4f4f;
      word-wrap: break-word;
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
      <SEO title={t("envelopesStandard")} />
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
        {t("envelopesStandard")}
      </h3>

      <FilterEnvelopes />
      <div
        css={css`
          width: 90vw;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 8%;
          grid-row-gap: 70px;
          @media screen and (max-width: 1440px) {
            grid-template-columns: repeat(2, 1fr);
          }
          @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
          }
        `}
      >
        {envelopes.map(
          ({ code, size, paper, type, box, sealing, window, price, print }) => (
            <div
              key={code}
              css={css`
                background: #ffffff;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 3px;
                width: 100%;
                padding: 28px 17px 0 17px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 15px;
                flex-wrap: wrap;
                justify-content: start;
                position: relative;
                @media screen and (max-width: 425px) {
                  grid-template-columns: repeat(2, 1fr);
                }
              `}
            >
              <GeneralNames>
                {t("code")}
                <EnvelopeParam>{code}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("paperType")}, {t("gsm")}
                <EnvelopeParam>{t(paper)}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("window")}
                <EnvelopeParam>{t(window)}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("type")}
                <EnvelopeParam>{t(type)}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("innerPrintShort")}
                <EnvelopeParam>{t(print)}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("quantityBox")}, {t("pcs")}
                <EnvelopeParam>{box}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("size")}, {t("mm")}
                <EnvelopeParam>{size}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("sealing")}
                <EnvelopeParam>{t(sealing)}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("price")} {t("thousandPcs")}
                <EnvelopeParam>{t(price)}</EnvelopeParam>
              </GeneralNames>

              <div
                css={css`
                  border-top: 0.2px solid #000000;
                  width: 100%;
                  padding: 16px 0;
                  grid-column: 1 / 4;
                  @media screen and (max-width: 425px) {
                    grid-column: 1 / 3;
                  }
                `}
              >
                <BtnAddToRequest />
              </div>
            </div>
          )
        )}
      </div>
      <WeightCalculatorSection />
      <Footer />
    </Layout>
  )
}
