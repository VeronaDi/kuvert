import React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import BtnRequest from "../components/BtnRequest"
import BtnViewProducts from "../components/BtnViewProducts"
import BtnRequestCall from "../components/BtnRequestCall"
import WeightCalculatorSection from "../components/WeightCalculatorSection"
import SliderClients from "../components/SliderClients"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import backenvelopes from "../images/background-envelopes.svg"
import arrowdown from "../images/arrow-down.svg"
import machine from "../images/machine.jpg"
import ukraine from "../images/ukraine.png"
import zeh from "../images/zeh.jpg"

const IndexPage = props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Home" />
      <MainNav isHome {...props} />

      <section
        css={css`
          height: 100vh;
          background: url(${zeh});
          background-size: cover;
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
            transform: translate(-50%, -50%);
          `}
        >
          <h1
            css={css`
              font-weight: bold;
              font-size: 64px;
              line-height: 75px;
              margin-bottom: 27px;
            `}
          >
            {t("mainSlogan")}
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
              line-height: 30px;
            `}
          >
            «Mayer-Kuvert-network GmbH»
          </a>
          <p
            css={css`
              font-weight: 500;
              font-size: 16px;
              line-height: 24px;
              margin: 17px 80px 0 80px;
            `}
          >
            {t("titleText")}
          </p>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              margin: 35px 80px 35px 80px;
            `}
          >
            <div
              css={css`
                width: 205px;
              `}
            >
              <BtnRequest />
            </div>
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
              font-weight: bold;
              font-size: 48px;
              line-height: 56px;
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
              padding: 40px 0;
              font-weight: normal;
              font-size: 18px;
              line-height: 27px;
            `}
          >
            {t("indexAbout")}
          </p>
          <Link
            to="/about"
            css={css`
              color: white;
              cursor: pointer;
              font-weight: bold;
              font-size: 18px;
              line-height: 27px;
              text-decoration: none;
            `}
          >
            {t("learnMore")}
          </Link>
        </div>
        <div
          css={css`
            width: 60%;
            height: 594px;
            background: url(${machine});
            background-size: cover;
            background-repeat: no-repeat;
          `}
        ></div>
      </section>

      <WeightCalculatorSection />

      <section
        css={css`
          height: 100vh;
          margin: 0 auto;
          padding-top: 60px;
          padding-right: 60px;
        `}
      >
        <div
          css={css`
            height: 600px;
            width: 100%;
            background: url(${ukraine});
            background-repeat: no-repeat;
            background-position: 18%;
            display: flex;
            justify-content: start;
            flex-direction: column;
            align-items: flex-end;
          `}
        >
          <div
            css={css`
              width: 342px;
              height: 152px;
              padding-top: 60px;
              padding-right: 30px;
            `}
          >
            <h2
              css={css`
                font-weight: 500;
                font-size: 48px;
                line-height: 56px;
              `}
            >
              {t("contactUs")}
            </h2>
            <p
              css={css`
                font-weight: normal;
                font-size: 18px;
                line-height: 27px;
                padding: 36px 0;
              `}
            >
              {t("indexContactUs")}
            </p>
            <div
              css={css`
                width: 100%;
              `}
            >
              <BtnRequest />
            </div>
          </div>
        </div>
      </section>

      <SliderClients />
      <Footer />
    </Layout>
  )
}

export default IndexPage
