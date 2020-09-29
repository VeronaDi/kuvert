import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import BtnAddToRequest from "../components/BtnAddToRequestCard"
import WeightCalculatorSection from "../components/WeightCalculatorSection"

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
      padding-right: 15px;
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
      <SEO title="Straight flap" />
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
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        `}
      >
        {envelopes.map(
          ({
            code,
            size,
            paper,
            type,
            pack,
            sealing,
            window,
            price,
            print,
          }) => (
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
                {t("quantityBox")}
                <EnvelopeParam>
                  {pack}
                  {t("pcs")}
                </EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("size")}
                <EnvelopeParam>
                  {size} {t("mm")})
                </EnvelopeParam>
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
                  width: 90%;
                  position: absolute;
                  bottom: 0;
                  margin-bottom: 5px;
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
