import React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import BtnRequest from "../components/BtnRequest"
import BtnViewProducts from "../components/BtnViewProducts"
import NewsSection from "../components/NewsSection"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import backenvelopes from "../images/background-envelopes.svg"
import machine from "../images/machine.jpg"
import ukraine from "../images/ukraine.png"
import zeh from "../images/zeh.jpg"
import logosClient from "../images/logos_web.jpg"

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

      <MobileNav {...props} />

      <section
        css={css`
          height: 100vh;
          min-height: 800px;
          background: url(${zeh});
          background-size: cover;
          position: relative;
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
            @media (max-width: 767px) {
              width: 305px;
              height: 333px;
            }
          `}
        >
          <h1
            css={css`
              font-weight: bold;
              font-size: 64px;
              margin-bottom: 27px;
              @media (max-width: 767px) {
                font-size: 36px;
                text-align: center;
                margin: 10px;
              }
            `}
          >
            {t("mainSlogan")}
          </h1>
          <div
            css={css`
              @media (max-width: 767px) {
                display: flex;
                flex-direction: column-reverse;
              }
            `}
          >
            <a
              href="https://www.mayer-kuvert-network.com/"
              target="_blank"
              rel="noopener noreferrer"
              css={css`
                color: white;
                text-decoration: none;
                text-align: center;
                font-weight: bold;
                font-size: 20px;
                @media (max-width: 767px) {
                  font-weight: 500;
                  font-size: 12px;
                }
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
                @media (max-width: 767px) {
                  display: none;
                }
              `}
            >
              {t("titleText")}
            </p>
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                margin: 35px 80px 35px 80px;
                @media (max-width: 767px) {
                  flex-direction: column;
                  margin: 10px auto 15px auto;
                }
              `}
            >
              <div
                css={css`
                  width: 205px;
                  @media (max-width: 767px) {
                    width: 220px;
                    margin-bottom: 25px;
                  }
                `}
              >
                <BtnRequest />
              </div>
              <BtnViewProducts />
            </div>
          </div>
        </div>
      </section>

      <section
        css={css`
          width: 85%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 100px auto;
          @media (max-width: 768px) {
            flex-direction: column-reverse;
            width: 100%;
          }
        `}
      >
        <div
          className="w-full md\:w-1\/3"
          css={css`
            background: url(${backenvelopes}), #c5003e;
            height: 594px;
            color: white;
            padding: 40px 50px 0 100px;
            @media (max-width: 768px) {
              padding: 26px 26px;
              height: auto;
            }
          `}
        >
          <h1
            css={css`
              font-weight: bold;
              font-size: 48px;
              padding-bottom: 30px;
              border-bottom: 1px solid white;
              width: 201px;
              transform: rotate(-0.29deg);
              @media (max-width: 768px) {
                font-size: 24px;
                border-bottom: none;
                text-align: center;
                margin: 0;
                padding: 0;
                width: 100%;
              }
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
              @media (max-width: 768px) {
                font-size: 14px;
              }
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
              text-decoration: none;
              @media (max-width: 768px) {
                font-weight: 900;
                font-size: 14px;
                text-decoration: underline;
                text-align: center;
                display: block;
              }
            `}
          >
            {t("learnMore")}
          </Link>
        </div>
        <div
          className="w-full md\:w-2\/3"
          css={css`
            height: 594px;
            background: url(${machine});
            background-size: cover;
            background-repeat: no-repeat;
            @media (max-width: 768px) {
              height: 234px;
            }
          `}
        ></div>
      </section>

      <NewsSection />

      <section
        css={css`
          margin: 80px auto;
          padding-top: 60px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          @media (max-width: 768px) {
            flex-direction: column;
            margin: 40px auto;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            padding: 0 20px;
          `}
        >
          <img src={ukraine} alt={`map of Ukraine`} css={css``} />
        </div>
        <div
          css={css`
            padding: 80px 60px;
            width: 500px;
            @media (max-width: 768px) {
              width: 100%;
              padding: 30px 40px;
            }
          `}
        >
          <h2
            css={css`
              font-weight: 500;
              font-size: 48px;
              @media (max-width: 768px) {
                font-size: 24px;
                text-align: center;
              }
            `}
          >
            {t("contactUs")}
          </h2>
          <p
            css={css`
              font-weight: normal;
              font-size: 18px;
              padding: 36px 0;
              @media (max-width: 768px) {
                font-size: 16px;
              }
            `}
          >
            {t("indexContactUs")}
          </p>
          <div
            css={css`
              width: 100%;
              > a {
                @media (max-width: 768px) {
                  margin: 0 auto;
                }
              }
            `}
          >
            <BtnRequest />
          </div>
        </div>
      </section>

      <section
        css={css`
          background: #ffffff;
          margin: 45px 0;
          padding: 45px 0;
        `}
      >
        <h3
          css={css`
            font-weight: 500;
            font-size: 48px;
            text-align: center;
            margin: 0;
          `}
        >
          {t("ourClients")}
        </h3>
        <img src={logosClient} alt="client-logos" />
      </section>

      <Footer />
    </Layout>
  )
}

export default IndexPage
