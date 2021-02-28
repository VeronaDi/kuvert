import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import BtnAddToRequest from "../components/BtnAddToRequest"
import Footer from "../components/Footer"
import PageTitle from "../components/PageTitle"
import GeneralNames from "../components/GeneralNames"
import EnvelopeParam from "../components/EnvelopeParam"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import rtgData from "../data/rtg"

import rtg from "../../static/products/rtg.jpg"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title={t("seoRTG")} />
      <MainNav {...props} />
      <MobileNav {...props} />

      <PageTitle title={t("seoRTG")} />

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
          <img src={rtg} alt="envelope RTG" />
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
              width: 100%;
              a {
                text-decoration: none;
                color: black;
                :hover {
                  text-decoration: underline;
                }
            `}
            dangerouslySetInnerHTML={{ __html: t("rtgText") }}
          />

          <div
            css={css`
              font-weight: 500;
              font-size: 24px;
              line-height: 27px;
              padding: 49px 0 0 0;
            `}
          >
            {t("whereUse")}
            <ul
              css={css`
                display: flex;
                justify-content: start;
                flex-wrap: wrap;
                list-style: none;
                padding: 0;
              `}
            >
              <li
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 36px;
                  padding-right: 40px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                `}
              >
                {t("hospital")}
              </li>
              <li
                css={css`
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 36px;
                  padding-right: 40px;
                  :before {
                    content: "-";
                    padding-right: 5px;
                  }
                `}
              >
                {t("laboratories")}
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
      <div>
        {rtgData.map(({ code, size, color, boxSize }) => (
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
                <EnvelopeParam>{size}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("color")}
                <EnvelopeParam>{t(color)}</EnvelopeParam>
              </GeneralNames>

              <GeneralNames>
                {t("quantityBox")}, {t("pcs")}
                <EnvelopeParam>{boxSize}</EnvelopeParam>
              </GeneralNames>
            </div>

            <BtnAddToRequest boxQuantity={boxSize} code={code} />
          </div>
        ))}
      </div>

      <Footer />
    </Layout>
  )
}
