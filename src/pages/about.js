import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import CertificationSection from "../components/CertificationSection"

import { useTranslation } from "react-i18next"

import factory1 from "../images/about/1.png"
import factory2 from "../images/about/2.png"
import factory3 from "../images/about/3.png"
import factory4 from "../images/about/4.png"
import factory5 from "../images/about/5.png"
import factory6 from "../images/about/6.png"

import kuvertFactory from "../images/kuvert-factory.jpg"
import mayerLogo from "../images/mayer-logo.png"
import logosOrganization from "../images/logos_organizations.jpg"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title={t("seoAbout")} />
      <MainNav {...props} />
      <MobileNav {...props} />

      <section
        css={css`
          width: 90vw;
          height: 581px;
          margin: 95px auto 80px auto;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          grid-template-areas:
            "a b c d"
            "a e f g";
          @media screen and (max-width: 1144px) {
            height: auto;
            flex-direction: row;
            justify-content: space-between;
          }
        `}
      >
        <div
          css={css`
            width: 25%;
            height: 100%;
            background: url(${factory1});
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            display: table;
            position: relative;
            vertical-align: middle;
            font-size: 24px;
            line-height: 36px;
            margin: 0 auto;
            :after {
              content: "";
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.6);
              opacity: 1;
              position: absolute;
              left: 0;
            }
            @media screen and (max-width: 1144px) {
              width: 100%;
              height: 130px;
            }
          `}
        >
          <h5
            css={css`
              display: table-cell;
              vertical-align: middle;
              font-weight: 500;
              font-size: 24px;
              line-height: 36px;
              margin: 0 auto;
              position: relative;
              z-index: 1;
              padding: 0 10px;
              @media screen and (max-width: 1144px) {
                font-size: 5vw;
              }
            `}
          >
            {t("disableWorkers")}
          </h5>
        </div>
        <div
          css={css`
            width: 25%;
            height: 50%;
            background: url(${factory2});
            background-size: cover;
            background-position: center;
            @media screen and (max-width: 1144px) {
              display: none;
            }
          `}
        ></div>
        <div
          css={css`
            width: 25%;
            height: 50%;
            background: url(${factory3});
            background-size: cover;
            background-position: center;
            @media screen and (max-width: 1144px) {
              display: none;
            }
          `}
        ></div>
        <div
          css={css`
            width: 25%;
            height: 50%;
            background: url(${factory4});
            background-size: cover;
            background-position: center;
            @media screen and (max-width: 1144px) {
              width: 49%;
              height: 220px;
            }
          `}
        ></div>
        <div
          css={css`
            width: 25%;
            height: 50%;
            background: url(${factory5});
            background-size: cover;
            background-position: center;
            @media screen and (max-width: 1144px) {
              width: 49%;
              height: 220px;
            }
          `}
        ></div>
        <div
          css={css`
            width: 25%;
            height: 50%;
            display: table;
            text-align: right;
            @media screen and (max-width: 1144px) {
              width: 100%;
              height: 130px;
            }
          `}
        >
          <h4
            css={css`
              display: table-cell;
              vertical-align: middle;
              font-size: 2vw;
              font-weight: 500;
              color: white;
              padding: 0 14px;
              background: #b40039;
              letter-spacing: 2px;
              @media screen and (max-width: 1144px) {
                font-size: 5vw;
              }
            `}
          >
            {t("acquainted")}
          </h4>
        </div>
        <div
          css={css`
            width: 25%;
            height: 50%;
            background: url(${factory6});
            background-size: cover;
            background-position: center;
            @media screen and (max-width: 1144px) {
              display: none;
            }
          `}
        ></div>
      </section>

      <section
        css={css`
          background: #444444;
          background-position: top 0 left 50vw;
          background-repeat: no-repeat;
          background-size: auto 100%;
          width: 100vw;
          margin-bottom: 71px;
          display: flex;
          @media screen and (max-width: 1144px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            padding: 59px 50px 65px 106px;
            width: 50vw;
            @media screen and (max-width: 1144px) {
              width: 90vw;
              margin: 0 auto;
              padding: 59px 0 65px 0;
            }
          `}
        >
          <h3
            css={css`
              font-size: 36px;
              line-height: 42px;
              color: white;
              font-weight: normal;
              margin-top: 0;
            `}
          >
            {t("aboutUsShort")}
          </h3>
          <p
            css={css`
              font-weight: normal;
              font-size: 18px;
              line-height: 27px;
              color: white;
            `}
          >
            {t("historyP1")}
          </p>
          <p
            css={css`
              font-weight: normal;
              font-size: 18px;
              line-height: 27px;
              color: white;
              padding-bottom: 20px;
            `}
          >
            {t("historyP2")}
          </p>
          <a
            href="https://www.mayer-kuvert-network.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            css={css`
              color: white;
              text-decoration: none;
              font-weight: bold;
              font-size: 14px;
              line-height: 27px;
            `}
          >
            {t("visitMayer")}
          </a>
        </div>
        <div
          css={css`
            background: url(${kuvertFactory}), #444444;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 50%;
            position: relative;
            @media screen and (max-width: 1144px) {
              height: 350px;
              width: 100%;
            }
          `}
        >
          <div
            css={css`
              background: url(${mayerLogo}), rgba(0, 0, 0, 0.488);
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              width: 20%;
              height: 20%;
              position: absolute;
              bottom: 0;
              right: 0;
              @media screen and (max-width: 1144px) {
                width: 30%;
                height: 30%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            `}
          ></div>
        </div>
      </section>

      <section
        css={css`
          width: 90vw;
          margin: 0 auto 70px auto;
          background: #b40039;
        `}
      >
        <h3
          css={css`
            font-weight: 500;
            font-size: 36px;
            line-height: 42px;
            color: white;
            padding: 40px 10px 21px 15px;
            border-bottom: 1px solid #ffffff;
            width: 223.11px;
            margin: 0 auto;
          `}
        >
          {t("missionTitle")}
        </h3>
        <p
          css={css`
            font-size: 18px;
            line-height: 27px;
            color: white;
            font-weight: normal;
            padding: 30px 25px 48px 25px;
            width: 100%;
            max-width: 704px;
            margin: 0 auto;
            text-align: center;
            font-weight: normal;
          `}
        >
          {t("mission")}
        </p>
      </section>

      <CertificationSection />

      <section
        css={css`
          padding-bottom: 40px;
          text-align: center;
          background: #ffffff;
        `}
      >
        <h3
          css={css`
            color: black;
            padding-top: 40px;
            font-weight: 500;
            font-size: 36px;
            line-height: 42px;
            margin: 0 0 10px 0;
          `}
        >
          {t("participants")}
        </h3>
        <img src={logosOrganization} alt="organization-logos" />
      </section>
      <Footer />
    </Layout>
  )
}
