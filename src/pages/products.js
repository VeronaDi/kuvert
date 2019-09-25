import React from "react"
// import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

let products = [
  { img: "/products/1.png", name: "envelopes", id: "envelopes" },
  { img: "/products/2.png", name: "banderole", id: "banderole" },
  { img: "/products/3.png", name: "ecobags", id: "ecobags" },
  { img: "/products/4.png", name: "medical", id: "med" },
  { img: "/products/5.png", name: "printed", id: "printed" },
  { img: "/products/6.png", name: "individual", id: "individual" },
  { img: "/products/7.png", name: "other", id: "other" },
  { img: "/products/8.png", name: "sale", id: "sale" },
]

export default props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

  return (
    <Layout>
      <SEO title="Products" />
      <MainNav {...props} />

      <h1
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: bold;
        `}
      >
        {t("products")}
      </h1>
      <LocalizedLink
        to={`/${id}`}
        css={css`
          display: flex;
          justify-content: space-between;
          flex-flow: row wrap;
          padding-top: 46px;
        `}
      >
        {products.map(({ name, img }) => (
          <div
            css={css`
              width: 49.5%;
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
                width: 72%;
                height: 42%;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 3px;
                font-weight: bold;
                font-size: 48px;
                padding-top: 45px;
                color: #ffffff;
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
