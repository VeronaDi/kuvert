import React from "react"
// import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

let banderole = [
  { img: "/products/1.png", name: "Airpock", id: "airpock" },
  { img: "/products/1.png", name: "DocuFix", id: "docufix" },
  {
    img: "/products/1.png",
    name: "Envelopes with extension",
    id: "envelopes-extension",
  },
  {
    img: "/products/1.png",
    name: "Envelopes with cardboard insert",
    id: "envelopes-cardboard",
  },
]

export default props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

  return (
    <Layout>
      <SEO title="Banderole" />
      <MainNav {...props} />

      <h1
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: bold;
        `}
      >
        {t("banderole")}
      </h1>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          flex-flow: row wrap;
          padding-top: 46px;
        `}
      >
        {banderole.map(({ name, img, id }) => (
          <LocalizedLink
            to={`${id}`}
            css={css`
              width: 24%;
              height: 457px;
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
                max-width: 345px;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 3px;
                font-weight: bold;
                font-size: 40px;
                color: #ffffff;
                padding: 20px 0;
              `}
            >
              {name}
            </span>
          </LocalizedLink>
        ))}
      </div>
      <Footer />
    </Layout>
  )
}
