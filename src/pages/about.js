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

export default props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

  return (
    <Layout>
      <SEO title="About" />
      <MainNav {...props} />
      <h1
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: bold;
        `}
      >
        {t("about")}
      </h1>

      <section
        css={css`
          width: 90vw;
          height: 581px;
          margin: 0 auto 20px auto;
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
      </section>

      <Footer />
    </Layout>
  )
}
