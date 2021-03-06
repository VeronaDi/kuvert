import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import BtnAddToRequest from "../components/BtnAddToRequest"
import EcobagTopSection from "../components/EcobagTopSection"
import PageTitle from "../components/PageTitle"
import GeneralNames from "../components/GeneralNames"
import EnvelopeParam from "../components/EnvelopeParam"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import ecobagsWhite from "../data/ecobagWhite"
import ecobagsWh from "../../static/products/ecobags-white.jpg"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title={t("paperbagsWhite")} />
      <MainNav {...props} />
      <MobileNav {...props} />

      <PageTitle title={t("ecobagWhite")} />

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

      {ecobagsWhite.map(({ code, size, color, handle, gsm, boxSize }) => (
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
          </div>
          <BtnAddToRequest boxQuantity={boxSize} code={code} />
        </div>
      ))}

      <Footer />
    </Layout>
  )
}
