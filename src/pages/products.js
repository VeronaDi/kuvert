import React from "react"
// import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import backenvelopesgrey from "../images/background-envelopes-grey.svg"
import backenvelopesblack from "../images/background-envelopes-black.svg"
import backenvelopeswhite from "../images/background-envelopes-white.svg"
import backenvelopes from "../images/background-envelopes.svg"

let products = [
  { img: "/products/1.png", name: "Envelopes", id: "envelopes" },
  { img: "/products/2.png", name: "Banderole", id: "banderole" },
  { img: "/products/3.png", name: "Paper bags", id: "ecobags" },
  { img: "/products/4.png", name: "medical", id: "med" },
  { img: "/products/1.png", name: "printed", id: "printed" },
  { img: "/products/1.png", name: "Individual", id: "envelopes-individual" },
  { img: "/products/1.png", name: "other", id: "other" },
  { img: "/products/5.png", name: "sale", id: "sale" },
]

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

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
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          flex-flow: row wrap;
          padding-top: 46px;
        `}
      >
        {products.map(({ name, img, id, background }) => (
          <LocalizedLink
            to={`/${id}`}
            css={css`
              width: 49%;
              height: 300px;
              background: url(${backenvelopeswhite}), rgba(128, 128, 128, 0.4);
              position: relative;
              text-align: center;
              cursor: pointer;
              margin-bottom: 20px;
              color: #b40039;
              font-weight: bold;
              font-size: 48px;
              line-height: 56px;
              text-decoration: none;
            `}
          >
            <p
              css={css`
                position: absolute;
                top: 35%;
                left: 50%;
                transform: translate(-50%, -50%);
              `}
            >
              {t(name)}
            </p>
          </LocalizedLink>
        ))}
      </div>

      <Footer />
    </Layout>
  )
}
