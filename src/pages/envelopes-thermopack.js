import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import thermopack from "../../static/products/thermopack.jpg"
import thermopackTable from "../../static/products/thermopack-table.png"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title={t("thermopack")} />
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
        {t("thermopack")}
      </h3>
      <div
        css={css`
          width: 90vw;
          background: #ffffff;
          margin: 0 auto;
          padding: 30px 78px;
          color: #000000;
          display: flex;
          justify-content: space-between;
          @media screen and (max-width: 1024px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            width: 35%;
            @media screen and (max-width: 1024px) {
              width: 100%;
              margin-bottom: 20px;
            }
          `}
        >
          <img src={thermopack} alt="Thermopack" />
        </div>
        <p
          css={css`
            width: 60%;
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            @media screen and (max-width: 1024px) {
              width: 100%;
            }
          `}
        >
          {t("thermopackText")}
        </p>
      </div>
      <img
        css={css`
          width: 50%;
          display: block;
          margin: 80px auto;
          @media screen and (max-width: 1024px) {
            width: 90vw;
          }
        `}
        src={thermopackTable}
        alt="thermopack-table"
      />
      <Footer />
    </Layout>
  )
}
