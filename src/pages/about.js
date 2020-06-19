import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import MainNav from "../components/MainNav"
import Footer from "../components/Footer"
import SliderCertification from "../components/SliderCertification"

import { useTranslation } from "react-i18next"

import factory1 from "../images/about/1.jpg"
import factory2 from "../images/about/2.jpg"
import factory3 from "../images/about/3.jpg"
import factory4 from "../images/about/4.jpg"
import factory5 from "../images/about/5.jpg"
import factory6 from "../images/about/6.jpg"
import statistic from "../images/about/statistic.png"
import kuvertFactory from "../images/kuvert-factory.jpg"
import mayerLogo from "../images/mayer-logo.png"
import fepe from "../images/organizations/fepe.png"
import ema from "../images/organizations/ema.png"
import tpp from "../images/organizations/tpp.png"
import arrowdown from "../images/arrow-down.svg"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="About" />
      <MainNav {...props} />

      <section
        css={css`
          width: 90vw;
          height: 581px;
          margin: 95px auto 20px auto;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            width: 27vw;
            height: 100%;
            background: url(${factory1});
            background-size: cover;
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
              width: 27vw;
              height: 100%;
              background: rgba(0, 0, 0, 0.6);
              opacity: 1;
              position: absolute;
              left: 0;
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
            `}
          >
            {t("hearingLoss")}
          </h5>
        </div>
        <div
          css={css`
            width: 21vw;
            height: 50%;
            background: url(${factory2});
            background-size: 100% 100%;
          `}
        ></div>
        <div
          css={css`
            width: 21vw;
            height: 50%;
            background: url(${factory3});
            background-size: 100% 100%;
          `}
        ></div>
        <div
          css={css`
            width: 21vw;
            height: 50%;
            background: url(${factory4});
            background-size: 100% 100%;
          `}
        ></div>
        <div
          css={css`
            width: 21vw;
            height: 50%;
            background: url(${factory5});
            background-size: 100% 100%;
          `}
        ></div>
        <div
          css={css`
            width: 21vw;
            height: 50%;
            display: table;
            text-align: right;
          `}
        >
          <h4
            css={css`
              display: table-cell;
              vertical-align: middle;
              font-size: 2.26vw;
              font-weight: 500;
              color: white;
              padding: 0 14px;
              background: #b40039;
              letter-spacing: 2px;
            `}
          >
            {t("acquainted")}
          </h4>
        </div>
        <div
          css={css`
            width: 21vw;
            height: 50%;
            background: url(${factory6});
            background-size: 100% 100%;
          `}
        ></div>
      </section>
      <Link
        to="/about"
        css={css`
          background: url(${arrowdown});
          width: 62px;
          height: 158px;
          position: absolute;
          left: 50%;
          transform: translate(-50%, -2%);
        `}
      ></Link>

      <section
        css={css`
          width: 100vw;
          height: 643px;
          background: url(${statistic});
          margin: 240px 0 140px 0;
          text-align: center;
          color: white;
          padding: 110px 0 200px 0;
        `}
      >
        <div
          css={css`
            font-weight: 500;
            font-size: 36px;
            line-height: 42px;
            padding-bottom: 20px;
          `}
        >
          {t("statistic")}
        </div>
        {t("statisticFact")}
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            width: 83%;
            margin: 0 auto;
            padding-top: 120px;
          `}
        >
          <div>
            <h5
              css={css`
                font-weight: bold;
                font-size: 72px;
                line-height: 84px;
                margin: 0;
              `}
            >
              10 mill
            </h5>
            envelopes are produced
          </div>
          <div>
            <h5
              css={css`
                font-weight: bold;
                font-size: 72px;
                line-height: 84px;
                margin: 0;
              `}
            >
              20 years
            </h5>
            of work in Ukraine
          </div>
          <div>
            <h5
              css={css`
                font-weight: bold;
                font-size: 72px;
                line-height: 84px;
                margin: 0;
              `}
            >
              1000+
            </h5>
            happy customers
          </div>
          <div>
            <h5
              css={css`
                font-weight: bold;
                font-size: 72px;
                line-height: 84px;
                margin: 0;
              `}
            >
              100+
            </h5>
            kinds of products
          </div>
        </div>
      </section>

      <section
        css={css`
          background: url(${kuvertFactory}), #444444;
          background-position: right;
          background-repeat: no-repeat;
          background-size: 55% 100%;
          width: 100vw;
          height: 747px;
          margin-bottom: 71px;
          position: relative;
        `}
      >
        <div
          css={css`
            background: url(${mayerLogo}), rgba(0, 0, 0, 0.488);
            background-position: center;
            background-repeat: no-repeat;
            width: 20%;
            height: 26%;
            position: absolute;
            bottom: 0;
            right: 0;
          `}
        ></div>
        <div
          css={css`
            padding: 59px 0 65px 106px;
          `}
        >
          <h3
            css={css`
              font-size: 36px;
              line-height: 42px;
              color: white;
              font-weight: normal;
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
              width: 35%;
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
              width: 35%;
              padding-bottom: 20px;
            `}
          >
            {t("historyP2")}
          </p>
          <a
            href="http://en.mayer-kuvert-network.com/mk-en"
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
      </section>

      <section
        css={css`
          width: 90vw;
          height: 332px;
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
            padding: 30px 0 48px 0;
            width: 704.05px;
            margin: 0 auto;
            text-align: center;
            font-weight: normal;
          `}
        >
          {t("mission")}
        </p>
      </section>

      <section
        css={css`
          width: 100vw;
          height: 632px;
          background: #c4c4c4;
        `}
      >
        <SliderCertification />
      </section>

      <section
        css={css`
          width: 100vw;
          height: 356px;
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
          `}
        >
          {t("participants")}
        </h3>
        <div
          css={css`
            width: 64vw;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            margin: 20px auto;
          `}
        >
          <div
            css={css`
              background: url(${fepe}) center center/contain no-repeat;
              width: 220px;
              height: 220px;
            `}
          />
          <div
            css={css`
              background: url(${ema}) center center/contain no-repeat;
              width: 220px;
              height: 220px;
            `}
          />
          <div
            css={css`
              background: url(${tpp}) center center/contain no-repeat;
              width: 220px;
              height: 220px;
            `}
          />
        </div>
      </section>
      <Footer />
    </Layout>
  )
}
