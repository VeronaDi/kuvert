import React from "react"
// import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import products from "../data/products"

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

      <div className="overflow-hidden">
        <div
          className="row -mx-2"
          css={css`
            padding-top: 46px;
          `}
        >
          {products.map(({ name, img, id }) => (
            <div className="w-full md:w-1/2 px-2">
              <LocalizedLink
                key={id}
                to={`/${id}`}
                css={css`
                  display: block;
                  height: 240px;
                  background: url(${img}), rgba(128, 128, 128, 0.4);
                  position: relative;
                  text-align: center;
                  cursor: pointer;
                  margin-bottom: 20px;
                  color: #b40039;
                  font-weight: bold;
                  font-size: 40px;
                  text-decoration: none;
                `}
              >
                <h5
                  css={css`
                    font-family: "Raleway", sans-serif;
                    position: absolute;
                    top: 35%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  `}
                >
                  {t(name)}
                </h5>
              </LocalizedLink>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Layout>
  )
}
