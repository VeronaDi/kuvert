import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import logoGrey from "../images/logoGrey.png"
import thanx from "../images/thanx.png"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])
  return (
    <Layout>
      <SEO title="Request" />

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
          background: url(${thanx}) center center no-repeat;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -70%);
          text-align: center;
        `}
      >
        <h3
          css={css`
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%, -60%);
            font-weight: bold;
            font-size: 36px;
            line-height: 42px;
          `}
        >
          {t("thanx")}
        </h3>
        <p
          css={css`
            position: absolute;
            top: 83%;
            left: 50%;
            transform: translate(-50%, -60%);
            font-size: 18px;
            line-height: 27px;
            width: 502px;
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
            padding: 25px 149px;
            color: white;
            cursor: pointer;
            font-weight: bold;
            outline: none;
            text-decoration: none;
            display: block;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -60%);

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
