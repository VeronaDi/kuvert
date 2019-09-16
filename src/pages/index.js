import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import BtnRequest from "../components/BtnRequest"
import BtnViewProducts from "../components/BtnViewProducts"
import BtnRequestCall from "../components/BtnRequestCall"
import WeightCalculator from "../components/WeightCalculator"
import SliderClients from "../components/SliderClients"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import video from "../images/video-kuvert.mp4"
import backenvelopes from "../images/background-envelopes.svg"
import arrowdown from "../images/arrow-down.svg"
import verstat from "../images/verstat.jpg"
import ukraine from "../images/ukraine.png"

// import i18n from "i18next"
// i18n.changeLanguage("en")

// const VerstatImage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "verstat.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 1055, maxHeight: 594) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//   `)

//   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }

const IndexPage = props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <MainNav isHome {...props} />

      <section
        css={css`
          height: 100vh;
        `}
      >
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
          <a
            href="http://en.mayer-kuvert-network.com/mk-en"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              color: white;
              text-decoration: none;
              text-align: center;
              font-weight: bold;
              font-size: 20px;
            `}
          >
            «Mayer-Kuvert-network GmbH»
          </a>
          <p
            css={css`
              font-size: 16px;
              line-height: 24px;
              margin: 17px 80px 40px 80px;
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
        </div>
        <Link
          to="/about"
          css={css`
            background: url(${arrowdown});
            width: 62px;
            height: 158px;
            position: absolute;
            bottom: 0;
            left: 50%;
            -webkit-transform: translate(-50%, -2%);
            transform: translate(-50%, -2%);
          `}
        ></Link>
        <video
          src={video}
          autoPlay
          poster="logoGrey.png"
          muted
          loop
          width="100%"
        >
          Sorry, your browser doesn't support embedded videos, but don't worry,
          you can <a href="videofile.ogg">download it</a>
          and watch it with your favorite video player!
        </video>
        <BtnRequestCall />
      </section>
      <section
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0 5%;
        `}
      >
        <div
          css={css`
            background: url(${backenvelopes}), #c5003e;
            width: 40%;
            height: 594px;
            color: white;
            padding: 50px 100px 167px 100px;
          `}
        >
          <h1
            css={css`
              font-size: 48px;
              padding-bottom: 30px;
              border-bottom: 1px solid white;
              transform: rotate(-0.29deg);
              width: 201px;
            `}
          >
            {t("about")}
          </h1>
          <p
            css={css`
              line-height: 27px;
              padding: 50px 0;
            `}
          >
            The Kuvert-Ukraine Envelope Factory is by far the most stable
            national envelope manufacturer. We are a team that does not stop at
            the achievement. We are constantly working to improve and expand our
            business proposals. We are always ready to fulfill your orders!
          </p>
          <Link
            to="/about"
            css={css`
              color: white;
              cursor: pointer;
              text-decoration-line: underline;
              font-weight: bold;
            `}
          >
            {t("learnMore")}
          </Link>
        </div>
        <div
          css={css`
            width: 60%;
            height: 594px;
            background: url(${verstat});
            background-size: cover;
            background-repeat: no-repeat;
          `}
        ></div>
      </section>

      <WeightCalculator />

      <section
        css={css`
          height: 100vh;
        `}
      >
        <div
          css={css`
            height: 600px;
            width: 80%;
            background: url(${ukraine});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: left;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: flex-end;
          `}
        >
          <h2
            css={css`
              font-weight: bold;
              font-size: 48px;
              text-align: center;
            `}
          >
            {t("contactUs")}
          </h2>
          <p
            css={css`
              font-size: 18px;
              line-height: 27px;
              width: 342px;
              height: 152px;
            `}
          >
            The production of the "Kuvert-Ukraine" factory is located in the
            city of Ivano-Frankivsk. Trade branches operate in the following
            cities: Kyiv, Kharkiv and Dnipro, Lviv.
          </p>
          <BtnRequest />
        </div>
      </section>

      <SliderClients />
      <Footer />
    </Layout>
  )
}

export default IndexPage
