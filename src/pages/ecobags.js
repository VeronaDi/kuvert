import React from "react"
// import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import paperbagsPattern from "../../static/products/paperbags-pattern.png"

let paperbags = [
  { name: { en: "White", uk: "Білі" }, id: "ecobags-white" },
  { name: { en: "Brown", uk: "Коричневі" }, id: "ecobags-brown" },
  { name: { en: "Multicolor", uk: "Кольорові" }, id: "ecobags-color" },
]

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Paper bags" />
      <MainNav {...props} />

      <h1
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: bold;
        `}
      >
        {t("paperbags")}
      </h1>

      <div className="overflow-hidden">
        <div
          className="row -mx-2"
          css={css`
            padding-top: 46px;
          `}
        >
          {paperbags.map(({ name, id }) => (
            <div className="w-full md:w-1/3 px-2">
              <LocalizedLink
                to={`/${id}`}
                css={css`
                  display: block;
                  height: 457px;
                  background: url(${paperbagsPattern}), rgba(128, 128, 128, 0.4);
                  position: relative;
                  text-align: center;
                  cursor: pointer;
                  margin-bottom: 20px;
                  color: #b40039;
                  font-weight: bold;
                  font-size: 40px;
                  line-height: 47px;
                  text-decoration: none;
                `}
              >
                <span
                  css={css`
                    font-family: "Raleway", sans-serif;
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  `}
                >
                  {t(name)}
                </span>
              </LocalizedLink>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
