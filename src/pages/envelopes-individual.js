import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import IndividualOrderSection from "../components/IndividualOrderSection"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import individual from "../../static/products/individual-mix.png"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Individual envelopes" />
      <MainNav {...props} />
      <MobileNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
        `}
      >
        {t("individualEnv")}
      </h3>
      <div
        css={css`
          width: 1306px;
          height: 580px;
          background: url(${individual});
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          margin: 0 auto;
        `}
      ></div>
      <p
        css={css`
          width: 845px;
          height: 81px;
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          margin: 45px auto;
          text-align: center;
        `}
      >
        {t("individualEnvText")}
      </p>
      <IndividualOrderSection />
      <Footer />
    </Layout>
  )
}
