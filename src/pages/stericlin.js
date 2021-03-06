import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import BtnAddToRequest from "../components/BtnAddToRequest"
import PageTitle from "../components/PageTitle"
import GeneralNames from "../components/GeneralNames"
import EnvelopeParam from "../components/EnvelopeParam"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import stericlin from "../../static/products/stericlin.jpg"
import stericlinBack from "../images/stericlin-back.jpg"
import stericlinDecl from "../../static/certificates/stericlin-declaration.jpg"

import stericlinData from "../data/stericlin"

const Stericlin = ({ stericlin: { articul, code, size, boxSize }, t }) => (
  <div
    css={css`
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 3px;
      width: 90vw;
      margin: 20px auto 54px auto;
      padding: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media screen and (max-width: 570px) {
        flex-direction: column;
      }
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding-right: 40px;
        flex: 1;
        @media screen and (max-width: 817px) {
          display: grid;
          grid-template-columns: repeat(auto-fill, 120px);
        }
      `}
    >
      <GeneralNames>
        №<EnvelopeParam>{code}</EnvelopeParam>
      </GeneralNames>

      <GeneralNames>
        {t("code")}
        <EnvelopeParam>{articul}</EnvelopeParam>
      </GeneralNames>

      <GeneralNames>
        {t("size")}, {t("smM")}
        <EnvelopeParam>{size}</EnvelopeParam>
      </GeneralNames>

      <GeneralNames>
        {t("quantityBox")}, {t("pcs")}
        <EnvelopeParam>{boxSize}</EnvelopeParam>
      </GeneralNames>
    </div>
    <BtnAddToRequest boxQuantity={boxSize} code={code} />
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

      <PageTitle title={t("stericlin")} />

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
          <img src={stericlin} alt="Stericlin" />
        </div>
        <div
          css={css`
            width: 60%;
            @media screen and (max-width: 768px) {
              width: 100%;
            }
          `}
        >
          <div
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
          />
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
        <Stericlin key={stericlin.code} stericlin={stericlin} t={t} />
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
        <Stericlin key={stericlin.code} stericlin={stericlin} t={t} />
      ))}
      <section
        css={css`
          width: 80%;
          margin: 80px auto;
          position: relative;
          display: flex;
          @media screen and (max-width: 768px) {
            flex-direction: column-reverse;
          }
        `}
      >
        <img
          src={stericlinDecl}
          alt="stericlin-certificate"
          css={css`
            height: 100%;
            width: 45%;
            @media screen and (max-width: 768px) {
              width: 100%;
              height: auto;
            }
          `}
        />
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px;
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
          <div
            css={css`
            font-weight: normal;
            font-size: 36px;
            line-height: 48px;
            color: #1B1B1B;
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
          />
        </div>
      </section>
      <Footer />
    </Layout>
  )
}
