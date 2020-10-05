import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
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
      width: 90vw;
      margin: 20px auto 54px auto;
      padding: 30px;
      display: flex;
      @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
      }
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex: 1;
        padding-right: 80px;
        @media (max-width: 1024px) {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-bottom: 30px;
        }
        @media (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 425px) {
          grid-template-columns: 1fr;
        }
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
    </div>
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
      <MobileNav {...props} />

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
          width: 90vw;
          background: #ffffff;
          background-position: left;
          background-repeat: no-repeat;
          background-size: 40% 80%;
          margin: 9px auto 50px auto;
          padding: 0 70px 0 0;
          color: #000000;
          display: flex;
          justify-content: space-between;
          @media screen and (max-width: 768px) {
            padding: 30px 70px 90px 70px;
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            width: 35%;
            @media screen and (max-width: 768px) {
              width: 100%;
            }
          `}
        >
          <img src={stericlin} alt="Ecobags white" />
        </div>
        <div
          css={css`
            width: 60%;
            @media screen and (max-width: 768px) {
              width: 100%;
            }
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
      </div>

      <h4
        css={css`
          color: #000000;
          text-align: center;
          font-size: 28px;
          font-weight: 500;
        `}
      >
        {t("stericlinPack")}
      </h4>

      {stericlinData.flat.map(stericlin => (
        <Stericlin stericlin={stericlin} t={t} />
      ))}
      <h4
        css={css`
          color: #000000;
          text-align: center;
          font-size: 28px;
          font-weight: 500;
        `}
      >
        {t("stericlinPackSide")}
      </h4>
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
