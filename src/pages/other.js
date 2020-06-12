import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import other from "../data/other"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Other products" />
      <MainNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
        `}
      >
        {t("otherProducts")}
      </h3>

      <div
        css={css`
          width: 100%;
          padding-top: 46px;
        `}
      >
        {other.map(({ title, img, text, id }) => (
          <div
            key={id}
            css={css`
            width: 80%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              margin: 0 auto 64px auto;
            `}
          >
            <img
              css={css`
              width: 50%;
              `}
              src={img}
              alt="logo"
            />
            <div
              css={css`
                display: flex;
                flex-direction: column;
                padding-left: 100px;
              `}
            >
              <h5
                css={css`
                  font-weight: 500;
                  font-size: 30px;
                  line-height: 35px;
                `}
              >
                {t(title)}
              </h5>
              <p
                css={css`
                  font-weight: normal;
                  font-size: 18px;
                  line-height: 27px;
                `}
              >
                {t(text)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </Layout>
  )
}
