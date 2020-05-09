import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"
import WeightCalculatorSection from "../components/WeightCalculatorSection"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import thermopack from "../images/thermopack.png"

export default props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

  return (
    <Layout>
      <SEO title="Thermopack" />
      <MainNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: 500;
        `}
      >
        {t("thermopack")}
      </h3>
      <div
        css={css`
          width: 80%;
          height: auto;
          max-height: 586px;
          background: url(${thermopack}), #ffffff;
          background-position: left;
          background-repeat: no-repeat;
          background-size: 42% 100%;
          margin: 9px auto;
          padding: 30px 78px 90px 37%;
          color: #000000;
        `}
      >
        <p
          css={css`
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
          `}
        >
          {t("thermopackText")}
        </p>

        <div
          css={css`
            font-weight: 500;
            font-size: 24px;
            line-height: 27px;
            padding: 49px 0 0 0;
          `}
        >
          {t("whereUse")}
          <ul
            css={css`
              display: flex;
              justify-content: start;
              list-style: none;
              padding: 0;
            `}
          >
            <li
              css={css`
                font-weight: 500;
                font-size: 16px;
                line-height: 36px;
                padding-right: 40px;
                :before {
                  content: "-";
                  padding-right: 5px;
                }
              `}
            >
              {t("stationery")}
            </li>
            <li
              css={css`
                font-weight: 500;
                font-size: 16px;
                line-height: 36px;
                :before {
                  content: "-";
                  padding-right: 5px;
                }
              `}
            >
              {t("supermarket")}
            </li>
          </ul>
        </div>
      </div>

      <WeightCalculatorSection />
      <Footer />
    </Layout>
  )
}