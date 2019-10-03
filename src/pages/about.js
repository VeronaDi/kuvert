import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import { useTranslation } from "react-i18next"

import factory1 from "../images/about/1.png"
import factory2 from "../images/about/2.png"
import factory3 from "../images/about/3.png"
import factory4 from "../images/about/4.png"
import factory5 from "../images/about/5.png"
import factory6 from "../images/about/6.png"
import statistic from "../images/about/statistic.png"
import mayerFactory from "../images/mayer-factory.png"
import mayerLogo from "../images/mayer-logo.png"

export default props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

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
            color: white;
            text-align: center;
            display: table;
          `}
        >
          <h5
            css={css`
              display: table-cell;
              vertical-align: middle;
              font-size: 24px;
              line-height: 36px;
              margin: 0 auto;
            `}
          >
            10% of workers in our factory are people with hearing problems
          </h5>
        </div>
        <div
          css={css`
            width: 21vw;
            height: 50%;
            background: url(${factory2});
          `}
        ></div>
        <div
          css={css`
            width: 21vw;
            height: 50%;
            background: url(${factory3});
          `}
        ></div>
        <div
          css={css`
            width: 21vw;
            height: 50%;
            background: url(${factory4});
          `}
        ></div>
        <div
          css={css`
            width: 21vw;
            height: 50%;
            background: url(${factory5});
          `}
        ></div>
        <div
          css={css`
            width: 21vw;
            height: 50%;
            background: #b40039;
            display: table;
            text-align: right;
          `}
        >
          <h4
            css={css`
              display: table-cell;
              vertical-align: middle;
              font-size: 48px;
              color: white;
              padding: 0 15px;
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
          `}
        ></div>
      </section>

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
            font-size: 36px;
            font-weight: bold;
          `}
        >
          {t("statistic")}
        </div>
        some important info
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
          background: url(${mayerFactory}), #444444;
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
            height: 25%;
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
              color: white;
              font-weight: normal;
            `}
          >
            Our history
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
            The Kuvert-Ukraine Envelope Factory is by far the most stable
            national envelope manufacturer. For one shift, we produce about 800
            thousand envelopes. Much attention is paid to product quality. Our
            enterprise is certified according to the international system ISO
            9001: 2009. "Kuvert-Ukraine" is the Ukrainian branch of the largest
            envelope manufacturing concern in Europe Mayer Kuvert Network.
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
            This fact gives our company a number of significant advantages: -
            production capacity of more than 40 factories in Europe - 70 million
            envelopes per day; - Centralized stable supply of raw materials that
            meets the highest standards of quality; - experience accumulated
            over decades, which we are always ready to share with our partners.
            In cooperation with us, we will give you a stable partnership,
            coherent work of staff and innovation in the field of advertising
            envelope.
          </p>
          <a
            href="http://en.mayer-kuvert-network.com/mk-en"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              color: white;
              text-decoration: none;
              font-weight: bold;
              font-size: 14px;
            `}
          >
            Visit “Mayer Kuvert” website
          </a>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}
