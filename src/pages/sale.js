import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { useTranslation } from "react-i18next"

import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import saleImg1 from "../../static/sale/sale-1.jpg"
import saleImg2 from "../../static/sale/sale-2.jpg"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title={t("sale")} />
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
        {t("sale")}
      </h3>

      <div
        css={css`
          width: 100%;
          margin: 40px auto;
          display: flex;
          justify-content: space-around;
          @media screen and (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
          }
        `}
      >
        <img
          css={css`
            width: 35%;
            @media screen and (max-width: 1024px) {
              width: 90vw;
            }
          `}
          src={saleImg1}
          alt="saletable"
        />

        <img
          css={css`
            width: 35%;
            @media screen and (max-width: 1024px) {
              width: 90vw;
              padding-top: 30px;
            }
          `}
          src={saleImg2}
          alt="saletable2"
        />
      </div>

      <Footer />
    </Layout>
  )
}
