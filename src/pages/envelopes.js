import React from "react"
// import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import PageTitle from "../components/PageTitle"

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
      <SEO title={t("envelopes")} description={t("metaDescrEnvelopes")} />
      <MainNav {...props} />
      <MobileNav {...props} />

      <PageTitle title={t("envelopes")} />

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
          {envelopes.map(({ name, id }) => (
            <div
              key={id}
              className="w-full md:w-1/3 px-2"
              css={css`
                height: 280px;
                margin-bottom: 20px;
                @media screen and (max-width: 1024px) {
                  height: calc((100vh - 293px) / ${envelopes.length});
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
                  background: url(${envelopesPattern}), rgba(128, 128, 128, 0.4);
                  position: relative;
                  text-align: center;
                  cursor: pointer;
                  margin-bottom: 20px;
                  color: #b40039;
                  font-weight: bold;
                  font-size: 42px;
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
