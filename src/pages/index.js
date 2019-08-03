import React from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import BtnRequest from "../components/BtnRequest"
import BtnViewProducts from "../components/BtnViewProducts"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import video from "../images/video-kuvert.mp4"

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
        <div
          css={css`
            width: 620px;
            height: 464px;
            background: rgba(56, 56, 56, 0.732);
            border-radius: 3px;
            color: white;
            text-align: center;
            z-index: 3;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          `}
        >
          <h1
            css={css`
              font-size: 64px;
              font-weight: bold;
              margin: 49px 70px 13px 70px;
            `}
          >
            Envelope is the best saleman
          </h1>
          <p
            css={css`
              font-size: 16px;
              line-height: 24px;
              margin: 0 80px;
            `}
          >
            The Kuvert-Ukraine Envelope Factory is by far the most stable
            national envelope manufacturer.We are always willing to fulfill your
            orders, because for us impossible is possible!
          </p>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              margin: 35px 80px 35px 80px;
            `}
          >
            <BtnRequest />
            <BtnViewProducts />
          </div>
          <a
            href="http://en.mayer-kuvert-network.com/mk-en"
            css={css`
              color: white;
              text-decoration: none;
              text-align: center;
            `}
          >
            «Mayer-Kuvert-network GmbH»
          </a>
        </div>
        <video
          src={video}
          autoPlay
          poster="posterimage.jpg"
          muted
          loop
          width="100%"
        >
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
