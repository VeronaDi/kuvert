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
      </section>

      <Footer />
    </Layout>
  )
}
