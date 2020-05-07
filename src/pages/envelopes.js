import React from "react"
// import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

let envelopes = [
  { img: "/products/9.png", name: "standard", id: "standard" },
  { img: "/products/10.png", name: "Thermopack", id: "envelopes-thermopack" },
  {
    img: "/products/11.png",
    name: "Triangular valve",
    id: "envelopes-triangular",
  },
]

export default props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

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
      <LocalizedLink
        // to={`${envelopes.id}`}
        css={css`
          display: flex;
          justify-content: space-between;
          flex-flow: row wrap;
          padding-top: 46px;
        `}
      >
        {envelopes.map(({ name, img }) => (
          <div
            css={css`
              width: 32%;
              padding-bottom: 15px;
              position: relative;
              text-align: center;
              cursor: pointer;
            `}
          >
            <img src={img} alt={`${name}`} />
            <span
              css={css`
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                max-width: 460px;
                height: 205px;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 3px;
                font-weight: bold;
                font-size: 48px;
                color: #ffffff;
                padding: 70px 0;
              `}
            >
              {name}
            </span>
          </div>
        ))}
      </LocalizedLink>

      <Footer />
    </Layout>
  )
}
