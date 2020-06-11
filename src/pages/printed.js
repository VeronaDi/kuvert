import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"
import IndividualOrderSection from "../components/IndividualOrderSection"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import printed from "../../static/products/print-mix.png"
import printbag from "../../static/products/1.jpg"
import printflex from "../../static/products/37.jpg"
import printoffset from "../../static/products/52.jpg"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Printed products" />
      <MainNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
        `}
      >
        {t("printProducts")}
      </h3>
      <div
        css={css`
          width: 1306px;
          height: 580px;
          background: url(${printed});
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          margin: 0 auto;
        `}
      ></div>
      <p
        css={css`
          width: 845px;
          height: 81px;
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          margin: 45px auto;
          text-align: center;
        `}
      >
        {t("printProductsText")}
      </p>
      <div
        css={css`
          width: 100%;
          height: 765px;
          background: #e7e7e7;
          text-align: center;
        `}
      >
        <h4
          css={css`
            color: #000000;
            font-weight: 500;
            font-size: 30px;
            line-height: 35px;
            padding: 39px 0;
          `}
        >
          {t("printTypes")}
        </h4>
        <div
          css={css`
            width: 100%;
            height: 765px;
            background: #e7e7e7;
            display: flex;
            justify-content: space-around;
            text-align: center;
          `}
        >
          <div
            css={css`
              width: 30%;
              background: url(${printflex});
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
            `}
          >
            <h5
              css={css`
                font-weight: 500;
                font-size: 24px;
                line-height: 28px;
              `}
            >
              {t("printReadyEnv")}
            </h5>
          </div>
          <div
            css={css`
              width: 30%;
              background: url(${printoffset});
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
            `}
          >
            <h5
              css={css`
                font-weight: 500;
                font-size: 24px;
                line-height: 28px;
              `}
            >
              {t("printСutOutEnv")}
            </h5>
          </div>
          <div
            css={css`
              width: 30%;
              background: url(${printbag});
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
            `}
          >
            <h5
              css={css`
                font-weight: 500;
                font-size: 24px;
                line-height: 28px;
              `}
            >
              {t("printDigital")}
            </h5>
          </div>
        </div>
      </div>
      <IndividualOrderSection />
      <Footer />
    </Layout>
  )
}
