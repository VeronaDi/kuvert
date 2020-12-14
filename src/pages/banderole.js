import React from "react"
// import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import banderolePattern from "../../static/products/banderole-pattern.png"

let banderole = [
  {
    name: {
      en: "Air Padded Envelopes",
      uk: "Бандерольні пакети з повітряними бульбашками",
    },
    id: "bubblebags",
  },
  {
    name: {
      en: "Document Enclosed Wallets Envelopes",
      uk: "Конверти для супровідних документів",
    },
    id: "docufix",
  },
  {
    name: {
      en: "Gusset Envelopes",
      uk: "Пакети з розширенням",
    },
    id: "envelopes-extension",
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
      <SEO title={t("banderole")} />
      <MainNav {...props} />
      <MobileNav {...props} />

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
            @media screen and (max-width: 1024px) {
              padding-top: 15px;
            }
          `}
        >
          {banderole.map(({ name, id }) => (
            <div
              key={id}
              className="w-full md:w-1/3 px-2"
              css={css`
                height: 280px;
                margin-bottom: 10px;
                @media screen and (max-width: 1024px) {
                  height: calc((100vh - 293px) / ${banderole.length});
                  min-height: 75px;
                  margin-bottom: 10px;
                }
              `}
            >
              <LocalizedLink
                to={`/${id}`}
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100%;
                  background: url(${banderolePattern}), rgba(128, 128, 128, 0.4);
                  position: relative;
                  text-align: center;
                  cursor: pointer;
                  margin-bottom: 20px;
                  color: #b40039;
                  font-weight: bold;
                  font-size: 40px;
                  text-decoration: none;
                  @media screen and (max-width: 1024px) {
                    font-size: 22px;
                  }
                `}
              >
                <span
                  css={css`
                    font-family: "Raleway", sans-serif;
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
