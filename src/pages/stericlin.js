import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import Footer from "../components/Footer"
import BtnAddToRequest from "../components/BtnAddToRequest"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import stericlin from "../../static/products/stericlin.jpg"
import stericlinBack from "../images/stericlin-back.jpeg"
import stericlinCert from "../../static/certificates/stericlin.jpg"

import stericlinData from "../data/stericlin"

const GeneralNames = ({ children }) => (
  <div
    css={css`
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #4f4f4f;
    `}
  >
    {children}
  </div>
)

const EnvelopeParam = ({ children }) => (
  <p
    css={css`
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    `}
  >
    {children}
  </p>
)

const Stericlin = ({ stericlin: { nummer, code, size, pack }, t }) => (
  <div
    key={code}
    css={css`
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 3px;
      width: 1188px;
      height: 93px;
      margin: 20px auto 54px auto;
      padding: 22px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    `}
  >
    <GeneralNames>
      №<EnvelopeParam>{t(nummer)}</EnvelopeParam>
    </GeneralNames>

    <GeneralNames>
      {t("code")}
      <EnvelopeParam>{code}</EnvelopeParam>
    </GeneralNames>

    <GeneralNames>
      {t("size")}, {t("smM")}
      <EnvelopeParam>{size}</EnvelopeParam>
    </GeneralNames>

    <GeneralNames>
      {t("quantityBox")}
      <EnvelopeParam>
        {pack}
        {t("pcs")}
      </EnvelopeParam>
    </GeneralNames>

    <BtnAddToRequest />
  </div>
)

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Stericlin" />
      <MainNav {...props} />

      <h3
        css={css`
          color: #000000;
          text-align: center;
          font-size: 36px;
          font-weight: 500;
        `}
      >
        {t("stericlin")}
      </h3>
      <div
        css={css`
          width: 80%;
          height: auto;
          max-height: 586px;
          background: url(${stericlin}), #ffffff;
          background-position: left;
          background-repeat: no-repeat;
          background-size: 40% 100%;
          margin: 9px auto;
          padding: 30px 78px 90px 37%;
          color: #000000;
        `}
      >
        <p
          css={css`
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            a {
              text-decoration: none;
              color: black;
              :hover {
                text-decoration: underline;
              }
          `}
          dangerouslySetInnerHTML={{ __html: t("stericlinText") }}
        ></p>
      </div>

      <h4
        css={css`
          font-weight: 500;
          font-size: 28px;
          line-height: 33px;
          text-align: center;
          margin: 54px 0 23px 0;
        `}
      >
        {t("chooseDesiredProduct")}
      </h4>

      {stericlinData.flat.map(stericlin => (
        <Stericlin stericlin={stericlin} t={t} />
      ))}
xxx
      {stericlinData.volume.map(stericlin => (
        <Stericlin stericlin={stericlin} t={t} />
      ))}
      <section
        css={css`
          width: 80%;
          height: 747px;
          margin: 80px auto;
          position: relative;
        `}
      >
        <img
          src={stericlinCert}
          alt="stericlin-certificate"
          css={css`
            height: 100%;
            width: 45%;
            float: left;
          `}
        />
        <div
          css={css`
            height: 100%;
            width: 55%;
            float: right;
            background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.74),
                rgba(255, 255, 255, 0.74)
              ),
              url(${stericlinBack});
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: relative;
          `}
        >
          <span
            css={css`
            font-weight: normal;
            font-size: 36px;
            line-height: 48px;
            color: #1B1B1B;
            position: absolute;
            top: 40%;
            left: 100px;
            a {
              text-decoration: none;
              color: black;
              font-weight: 900;
              font-size: 14px;
              line-height: 27px;
              color: #1B1B1B;
              display: block;
              margin-top: 40px;
                :hover {
                  text-decoration: underline;
                }
          `}
            dangerouslySetInnerHTML={{ __html: t("representativeVP") }}
          ></span>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}
