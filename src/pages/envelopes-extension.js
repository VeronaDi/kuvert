import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import BtnAddToRequest from "../components/BtnAddToRequest"
import WeightCalculatorSection from "../components/WeightCalculatorSection"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import envExtension from "../../static/products/env-extension.jpg"

import extensionEnvelopes from "../data/extensionEnvelopes"

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

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="Envelopes with extension" />
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
        {t("extensionEnvelopes")}
      </h3>
      <div
        css={css`
          width: 90vw;
          background: #ffffff;
          background-position: left;
          background-repeat: no-repeat;
          background-size: 40% 80%;
          margin: 9px auto 50px auto;
          padding: 30px 70px 90px 70px;
          color: #000000;
          display: flex;
          justify-content: space-between;
          @media screen and (max-width: 768px) {
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
          <img src={envExtension} alt="envelopes extension" />
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
              width: 100%;
            `}
          >
            {t("extensionEnvelopesText")}
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              padding-top: 43px;
            `}
          >
            <ul
              css={css`
                font-weight: 500;
                font-size: 24px;
                line-height: 27px;
                padding-left: 0;
                list-style: none;
                margin-right: 40px;
              `}
            >
              {t("size")}
              <li
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 36px;
                  padding-top: 23px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                `}
              >
                C4 (229x324) {t("mm")}
              </li>
              <li
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 36px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                `}
              >
                B4 (250x353) {t("mm")}
              </li>
              <li
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 36px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                `}
              >
                E4 (280x400) {t("mm")}
              </li>
            </ul>
            <ul
              css={css`
                font-weight: 500;
                font-size: 24px;
                line-height: 27px;
                padding-left: 0;
                list-style: none;
                margin-right: 40px;
              `}
            >
              {t("color")}
              <li
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 36px;
                  padding-top: 23px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                `}
              >
                {t("brown")}
              </li>
            </ul>
            <ul
              css={css`
                font-weight: 500;
                font-size: 24px;
                line-height: 27px;
                padding-left: 0;
                list-style: none;
              `}
            >
              {t("sealing")}
              <li
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 36px;
                  padding-top: 23px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                `}
              >
                {t("skl")}
              </li>
            </ul>
          </div>
          <div
            css={css`
              font-weight: 500;
              font-size: 24px;
              line-height: 27px;
              padding: 65px 0 0 0;
            `}
          >
            {t("whereUse")}
            <ul
              css={css`
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                padding: 0;
              `}
            >
              <li
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 36px;
                  margin-right: 40px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                `}
              >
                {t("docFlow")}
              </li>
              <li
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 36px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                `}
              >
                {t("bulkyTransportation")}
              </li>
            </ul>
          </div>
        </div>
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

      {extensionEnvelopes.map(
        ({ code, size, color, type, gsm, boxSize, sealing, price }) => (
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
                justify-content: space-around;
                flex: 1;
                @media screen and (max-width: 1024px) {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, 150px);
                }
              `}
            >
              <GeneralNames>
                {t("code")}
                <EnvelopeParam>{code}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("size")}
                <EnvelopeParam>
                  {size} {t("mm")})
                </EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("type")}
                <EnvelopeParam>{t(type)}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("sealing")}
                <EnvelopeParam>{t(sealing)}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("color")}
                <EnvelopeParam>{t(color)}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("paperGSM")}
                <EnvelopeParam>{gsm}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("quantityBox")}
                <EnvelopeParam>
                  {boxSize}
                  {t("pcs")}
                </EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("price")} {t("thousandPcs")}
                <EnvelopeParam>{t(price)}</EnvelopeParam>
              </GeneralNames>
            </div>
            <div css={css`
              width: 153px;
            `}>
              <BtnAddToRequest boxQuantity={boxSize} code={code} />
            </div>
          </div>
        )
      )}
      <WeightCalculatorSection />
      <Footer />
    </Layout>
  )
}
