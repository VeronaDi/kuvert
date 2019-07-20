import React from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import video from "../images/main-video.mp4"

// import i18n from "i18next"
// i18n.changeLanguage("en")

const VerstatImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "verstat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1055) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const IndexPage = props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <MainNav isHome {...props} />

      <section>
        <video src={video} autoPlay poster="posterimage.jpg" muted loop>
          Sorry, your browser doesn't support embedded videos, but don't worry,
          you can <a href="videofile.ogg">download it</a>
          and watch it with your favorite video player!
        </video>
      </section>
      <section>
        <VerstatImage />
      </section>

      <h1
        css={css`
          color: red;
        `}
      >
        {t("home")}
      </h1>
    </Layout>
  )
}

export default IndexPage
