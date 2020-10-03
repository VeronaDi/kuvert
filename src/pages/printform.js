import React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import InputAmount from "../components/InputAmount"
import InputDragDrop from "../components/InputDragDrop"
import BtnNext from "../components/BtnNext"

import logoGrey from "../images/logoGrey.png"
import arrowSelect from "../images/arrow-select.png"
import ContactForm from "../components/ContactForm"
import BtnSendForm from "../components/BtnSendForm"

// import i18n from "i18next"
// i18n.changeLanguage("en")

const IndexPage = props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])
  //   const requestType = ({ children }) => (
  //     <div
  //       css={css`
  //         width: 28%;
  //         background: #ffffff;
  //         box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //       `}
  //     >
  //       {children}
  //     </div>
  //   )

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
        {t("printedOrder")}
      </h1>
      <form
        css={css`
          width: 90vw;
          max-width: 780px;
          margin: 0 auto;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            @media (max-width: 1024px) {
              flex-direction: column;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              width: 48%;
              @media (max-width: 1024px) {
                width: 100%;
                margin-bottom: 20px;
              }
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("product")}
            </label>
            <select
              css={css`
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background: url(${arrowSelect}), #ffffff;
                background-position: 97%;
                background-repeat: no-repeat;
                height: 65px;
                font-size: 16px;
                border: 1px solid #d6d6d6;
                padding: 18px;
                outline: none;
                color: #444444;
                :focus {
                  border: 2px solid #c4c4c4;
                }
              `}
            >
              <option disabled selected>
                {t("chooseDesiredProduct")}
              </option>
              <option value="konvert">{t("envelope")}</option>
              <option value="paperovaTorba">{t("paperbags")}</option>
              <option value="banderole">{t("banderole")}</option>
              <option value="blank">{t("letterhead")}</option>
              <option value="papirFajl">{t("paperfile")}</option>
              <option value="ecoblok">{t("ecoblock")}</option>
            </select>
          </div>
          <div
            css={css`
              width: 48%;
              @media (max-width: 1024px) {
                width: 100%;
              }
            `}
          >
            <InputAmount />
          </div>
        </div>

        <InputDragDrop />

        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
          `}
        >
          <textarea
            placeholder={t("placeholderPrintform")}
            css={css`
              width: 100%;
              height: 300px;
              background: #ffffff;
              border: 1px solid #d6d6d6;
              color: #444444;
              padding: 20px;
              outline: none;
              resize: none;
              ::-webkit-input-placeholder {
                font-size: 16px;
                color: #9d9d9d;
              }
              :focus {
                border: 2px solid #c4c4c4;
              }
            `}
          ></textarea>
        </div>
        <div
          css={css`
            width: 100%;
            margin: 40px 0;
            display: block;
            text-align: center;
          `}
        >
          <BtnNext />
        </div>
        <button type="submit">submit</button>
        <ContactForm />
        <BtnSendForm />
      </form>
    </Layout>
  )
}

export default IndexPage
