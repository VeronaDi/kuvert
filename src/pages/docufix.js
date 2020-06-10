import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import docufix from "../../static/products/docufix.webp"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Docufix" />
      <MainNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: 500;
        `}
      >
        DocuFix
      </h3>
      <div
        css={css`
          width: 80%;
          height: auto;
          max-height: 586px;
          background: url(${docufix}), #ffffff;
          background-position: left;
          background-repeat: no-repeat;
          background-size: 40% 100%;
          margin: 9px auto 50px auto;
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
          {t("docufixText")}
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
              flex-wrap: wrap;
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
              {t("productLabeling")}
            </li>
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
              {t("docFlow")}
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
              {t("infoInscriptions")}
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}
