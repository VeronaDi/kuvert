import React from "react"
// import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import envelopesPattern from "../../static/products/envelopes-pattern.png"

let envelopes = [
  {
    name: { en: "Straight flap", uk: "Прямий клапан" },
    id: "envelopes-straight",
  },
  {
    name: { en: "Thermopack", uk: "Термоупаковка" },
    id: "envelopes-thermopack",
  },
  {
    name: { en: "Triangular flap", uk: "Трикутний клапан" },
    id: "envelopes-triangular",
  },
]

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Envelopes" />
      <MainNav {...props} />

      <h1
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: bold;
        `}
      >
        {t("envelopes")}
      </h1>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          flex-flow: row wrap;
          padding-top: 46px;
        `}
      >
        {envelopes.map(({ name, id }) => (
          <LocalizedLink
            className="w-full md:w-1/3 -mx-2"
            to={`/${id}`}
            css={css`
              width: 32%;
              height: 457px;
              background: url(${envelopesPattern}), rgba(128, 128, 128, 0.4);
              position: relative;
              text-align: center;
              cursor: pointer;
              margin-bottom: 20px;
              color: #b40039;
              font-weight: bold;
              font-size: 48px;
              line-height: 47px;
              text-decoration: none;
            `}
          >
            <span
              css={css`
                font-family: "Raleway", sans-serif;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              `}
            >
              {t(name)}
            </span>
          </LocalizedLink>
        ))}
      </div>
      <Footer />
    </Layout>
  )
}
