import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import IndividualOrderSection from "../components/IndividualOrderSection"
import PageTitle from "../components/PageTitle"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const { imageIndividualMix } = useStaticQuery(
    graphql`
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
  )

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title={t("individualEnv")} description={t("metaDescrIndividual")} />
      <MainNav {...props} />
      <MobileNav {...props} />

      <PageTitle category={t("individualEnv")} />

      <Img
        fluid={imageIndividualMix.childImageSharp.fluid}
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
