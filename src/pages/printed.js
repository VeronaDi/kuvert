import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import IndividualPrintSection from "../components/IndividualPrintSection"
import CategoryTitle from "../components/CategoryTitle"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import printed from "../data/printed"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  const { imagePrintMix } = useStaticQuery(
    graphql`
      query {
        imagePrintMix: file(relativePath: { eq: "print-mix.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title={t("printProducts")} description={t("metaDescrPrinted")} />
      <MainNav {...props} />
      <MobileNav {...props} />

      <CategoryTitle category={t("printProducts")} />

      <Img
        fluid={imagePrintMix.childImageSharp.fluid}
        css={css`
          display: block;
          max-width: 1300px;
          width: 90vw;
          margin: 0 auto;
        `}
        alt="Printed mix envelopes"
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
        {t("printProductsText")}
      </p>
      <div
        css={css`
          width: 100%;
          background: #e7e7e7;
          text-align: center;
          margin-bottom: 82px;
        `}
      >
        <h4
          css={css`
            color: #000000;
            font-weight: 500;
            font-size: 30px;
            line-height: 35px;
            padding: 39px 0;
          `}
        >
          {t("typePrint")}
        </h4>
        <div
          css={css`
            width: 90vw;
            margin: 0 auto;
            background: #e7e7e7;
            display: flex;
            justify-content: space-around;
            flex-flow: row wrap;
            padding-bottom: 46px;
          `}
        >
          {printed.map(({ title, img, text, id }) => (
            <div
              key={id}
              css={css`
                width: 30%;
                @media screen and (max-width: 768px) {
                  width: 100%;
                }
              `}
            >
              <img src={img} alt="logo" />
              <h5
                css={css`
                  font-weight: 500;
                  font-size: 24px;
                  line-height: 28px;
                  text-align: center;
                  margin: 34px 0;
                `}
              >
                {t(title)}
              </h5>
              <p
                css={css`
                  font-weight: 500;
                  font-size: 18px;
                  line-height: 27px;
                  text-align: center;
                `}
              >
                {t(text)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <IndividualPrintSection />
      <Footer />
    </Layout>
  )
}
