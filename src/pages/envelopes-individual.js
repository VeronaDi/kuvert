import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import individual from "../images/individual.jpg"

export default props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

  return (
    <Layout>
      <SEO title="Individual envelopes" />
      <MainNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: 500;
        `}
      >
        {t("individualEnv")}
      </h3>
      <div
        css={css`
          width: 55%;
          max-width: 1380px;
          height: 580px;
          background: url(${individual});
          background-size: contain;
          background-repeat: no-repeat;
          margin: 22px auto 45px auto;
        `}
      />

      <p
        css={css`
          width: 845px;
          height: 81px;
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          text-align: center;
          color: #000000;
          margin: 0 auto;
        `}
      >
        {t("individualEnvText")}
      </p>

      <Footer />
    </Layout>
  )
}
