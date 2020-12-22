import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import { useCart } from "../useCard"

import logoGrey from "../images/logoGrey.png"
import thanx from "../images/thanx.png"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }
  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  const [, , setCart] = useCart()

  useEffect(() => {
    setCart({})
  }, [setCart])

  return (
    <Layout>
      <SEO title={t("seoThanx")} />

      <Link
        css={css`
          background: url(${logoGrey}) center center no-repeat;
          width: 190px;
          height: 66px;
          background-size: cover;
          position: absolute;
          top: 20px;
          left: 30px;
        `}
        to="/"
      ></Link>
      <section
        css={css`
          width: 100%;
          height: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 100px 15px 0;
        `}
      >
        <img
          src={thanx}
          alt="Thank you"
          css={css`
            max-width: 360px;
            margin-bottom: 32px;
          `}
        />
        <h3
          css={css`
            font-weight: bold;
            font-size: 36px;
            line-height: 42px;
            margin-bottom: 15px;
          `}
        >
          {t("thanx")}
        </h3>
        <p
          css={css`
            font-size: 18px;
            line-height: 27px;
            max-width: 502px;
            margin-bottom: 32px;
          `}
        >
          {t("thanxText")}
        </p>
        <Link
          to="/"
          css={css`
            background: #c5003e;
            border-radius: 3px;
            border: none;
            padding: 25px;
            color: white;
            cursor: pointer;
            font-weight: bold;
            outline: none;
            text-decoration: none;
            display: inline;
            max-width: 100%;

            &:hover {
              background: #b60039;
            }

            &:active {
              background: #f4004d;
            }
          `}
        >
          {t("homepage")}
        </Link>
      </section>
    </Layout>
  )
}
