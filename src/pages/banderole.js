import React from "react"
// import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import banderolePattern from "../../static/products/banderole-pattern.png"

let banderole = [
  {
    name: {
      en: "Padded envelopes",
      uk: "Бандерольні пакети з повітряними бульбашками",
    },
    id: "bubblebags",
  },
  { name: "DocuFix", id: "docufix" },
  {
    name: {
      en: "Expanding gusset pockets",
      uk: "Пакети з розширенням",
    },
    id: "envelopes-extension",
  },
  {
    name: {
      en: "Boardback pockets",
      uk: "Пакети з картонною вставкою",
    },
    id: "envelopes-cardboard",
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
      <SEO title="Banderole pockets" />
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

      <div className="overflow-hidden">
        <div
          className="row -mx-2"
          css={css`
            padding-top: 46px;
          `}
        >
          {banderole.map(({ name, id }) => (
            <div className="w-full md:w-1/4 px-2">
              <LocalizedLink
                to={`/${id}`}
                css={css`
                  display: block;
                  height: 467px;
                  background: url(${banderolePattern}), rgba(128, 128, 128, 0.4);
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
