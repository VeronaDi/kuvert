import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import IndividualOrderSection from "../components/IndividualOrderSection"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title={t("individualEnv")} description={t("metaDescrIndividual")} />
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
      <Img
        fluid={props.data.imageIndividualMix.childImageSharp.fluid}
        css={css`
          display: block;
          max-width: 1300px;
          width: 90vw;
          margin: 0 auto;
        `}
        alt="Individual print mix envelopes"
      />
      <p
        css={css`
          width: 90vw;
          max-width: 845px;
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

export const pageQuery = graphql`
  query {
    imageIndividualMix: file(relativePath: { eq: "individual-mix.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
