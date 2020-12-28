import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import BtnAddToRequest from "../components/BtnAddToRequest"
import WeightCalculatorSection from "../components/WeightCalculatorSection"
import CategoryTitle from "../components/CategoryTitle"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import triangularEnv from "../../static/products/triangular-envelope.png"
import triangularEnvelopes from "../data/triangularEnvelopes"
import formatSizes from "../data/formatSizes"

const GeneralNames = ({ children }) => (
  <div
    css={css`
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #4f4f4f;
      margin-right: 20px;
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
      <SEO title={t("triangularValve")} />
      <MainNav {...props} />
      <MobileNav {...props} />

      <CategoryTitle category={t("triangularValve")} />

      <div
        css={css`
          width: 90vw;
          margin: 9px auto;
          color: #000000;
          background: #ffffff;
          display: flex;
          justify-content: space-between;
          @media (max-width: 1024px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            width: 35%;
            margin: 0 auto;
            @media (max-width: 768px) {
              width: 100%;
            }
          `}
        >
          <img src={triangularEnv} alt="Triangular flap envelope" />
        </div>
        <div
          css={css`
            width: 60%;
            padding: 20px 30px;
            font-weight: 500;
            @media (max-width: 1024px) {
              width: 100%;
            }
          `}
        >
          <p
            css={css`
              font-size: 18px;
              @media (max-width: 1024px) {
                font-size: 14px;
                font-weight: normal;
              }
            `}
          >
            {t("triangularValveText")}
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              @media (max-width: 768px) {
                flex-direction: column;
              }
            `}
          >
            <ul
              css={css`
                font-size: 20px;
                padding-left: 0;
                list-style: none;
                display: flex;
                flex-direction: column;
                @media (max-width: 1024px) {
                  font-size: 18px;
                }
              `}
            >
              {t("size")}
              {triangularEnvelopes.map(({ format }) => (
                <li
                  key={format}
                  css={css`
                    font-size: 16px;
                    padding-top: 15px;
                    :before {
                      content: "-";
                      padding-right: 5px;
                    }
                    @media (max-width: 1024px) {
                      font-size: 14px;
                      font-weight: normal;
                    }
                  `}
                >
                  {format} ({formatSizes[format]} {t("mm")})
                </li>
              ))}
            </ul>
            <ul
              css={css`
                font-size: 20px;
                padding-left: 0;
                list-style: none;
                @media (max-width: 1024px) {
                  font-size: 18px;
                }
              `}
            >
              {t("color")}
              <li
                css={css`
                  font-size: 16px;
                  padding-top: 23px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                  @media (max-width: 1024px) {
                    font-size: 14px;
                    font-weight: normal;
                  }
                `}
              >
                {t("brown")}
              </li>
            </ul>
            <ul
              css={css`
                font-size: 20px;
                padding-left: 0;
                list-style: none;
                @media (max-width: 1024px) {
                  font-size: 18px;
                }
              `}
            >
              {t("sealing")}
              <li
                css={css`
                  font-size: 16px;
                  padding-top: 23px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                  @media (max-width: 1024px) {
                    font-size: 14px;
                    font-weight: normal;
                  }
                `}
              >
                {t("mk")}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h4
        css={css`
          font-weight: 500;
          font-size: 28px;
          text-align: center;
          margin: 54px 0 23px 0;
          @media (max-width: 768px) {
            font-size: 18px;
          }
        `}
      >
        {t("chooseDesiredProduct")}
      </h4>

      {triangularEnvelopes.map(
        ({ code, format, color, type, sealing, gsm, boxSize }) => (
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
                {t("size")}, {t("mm")}
                <EnvelopeParam>
                  {format} ({formatSizes[format]})
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
                {t("quantityBox")}, {t("pcs")}
                <EnvelopeParam>{boxSize}</EnvelopeParam>
              </GeneralNames>
            </div>
            <BtnAddToRequest boxQuantity={boxSize} code={code} />
          </div>
        )
      )}
      <WeightCalculatorSection />
      <Footer />
    </Layout>
  )
}
