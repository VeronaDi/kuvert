import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import BtnNext from "../components/BtnNext"
import ContactForm from "../components/ContactForm"

import logoGrey from "../images/logoGrey.png"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Warehouse inquiry" />
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
          display: flex;
          flex-directon: row;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
          margin: 80px auto 50px auto;
          @media (max-width: 1024px) {
            margin-top: 120px;
            padding: 0 10px;
          }
        `}
      >
        <div
          css={css`
            color: #383838;
            border-bottom: 3px solid #383838;
            padding: 10px 20px;
            display: flex;
            align-items: center;
          `}
        >
          <span
            css={css`
              font-size: 26px;
              padding-right: 5px;
            `}
          >
            1
          </span>
          {t("requestType")}
        </div>
        <div
          css={css`
            color: #b40039;
            border-bottom: 3px solid #b40039;
            padding: 10px 20px;
            display: flex;
            align-items: center;
          `}
        >
          <span
            css={css`
              font-size: 26px;
              padding-right: 5px;
            `}
          >
            2
          </span>
          {t("requestOrderCreate")}
        </div>
        <div
          css={css`
            color: #b4b4b4;
            border-bottom: 3px solid #b4b4b4;
            padding: 10px 20px;
            display: flex;
            align-items: center;
          `}
        >
          <span
            css={css`
              font-size: 26px;
              padding-right: 5px;
            `}
          >
            3
          </span>
          {t("requestPersonal")}
        </div>
      </section>
      <h1
        css={css`
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 50px;
          text-align: center;
        `}
      >
        {t("basicOrder")}
      </h1>
      <section
        css={css`
          width: 50%;
          height: 350px;
          background: #d6d6d6;
          border-radius: 3px;
          position: absolute;
          left: 50%;
          -webkit-transform: translate(-50%, -2%);
          transform: translate(-50%, -2%);
        `}
      >
        <div
          css={css`
            width: 100%;
            background: #8a8a8a;
            border-radius: 0px 0px 3px 3px;
            height: 78px;
            position: absolute;
            bottom: 0;
            text-align: right;
            padding-right: 37px;
            padding-top: 28px;
          `}
        >
          <BtnNext />
        </div>
      </section>
      <ContactForm />
    </Layout>
  )
}
