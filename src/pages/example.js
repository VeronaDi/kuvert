import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"
// import { useStaticQuery, graphql } from "gatsby"

const IndexPage = props => {
  // const data = useStaticQuery(graphql`
  //   query LayoutQuery {
  //     site {
  //       siteMetadata {
  //         langs
  //         defaultLangKey
  //       }
  //     }
  //   }
  // `)

  const { t, i18n } = useTranslation()
  i18n.changeLanguage(props.pageContext.langKey)

  return (
    <Layout>
      <SEO title="Home" />
      <h1
        css={css`
          color: red;
        `}
      >
        {t("home")}
        {t("a.b")}
      </h1>
      <p>HOMEPAGE</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/x">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
