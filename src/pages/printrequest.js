import React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import logoGrey from "../images/logoGrey.png"

// import i18n from "i18next"
// i18n.changeLanguage("en")

const IndexPage = props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

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
          position: relative;
          left: 50%;
          -webkit-transform: translate(-50%, -2%);
          transform: translate(-50%, -2%);
          width: 40vw;
          height: 44px;
          font-size: 14px;
          font-weight: bold;
          margin: 80px 0 50px 0;
        `}
      >
        <div
          css={css`
            color: #383838;
            border-bottom: 3px solid #383838;
            width: 261px;
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
            width: 280px;
          `}
        >
          <span
            css={css`
              font-size: 26px;
              padding-right: 5px;
            `}
          >
            2
          </span>{" "}
          {t("requestOrderCreate")}
        </div>
        <div
          css={css`
            color: #b4b4b4;
            border-bottom: 3px solid #b4b4b4;
            width: 261px;
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
      <section>
        <h3
          css={css`
            text-align: center;
          `}
        >
          {t("envelopeDetails")}
        </h3>
        <div
          css={css`
            position: absolute;
            left: 50%;
            -webkit-transform: translate(-50%, -2%);
            transform: translate(-50%, -2%);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            max-width: 780px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("size")}
            </label>
            <select
              css={css`
                width: 380px;
                height: 65px;
                background: #ffffff;
                font-size: 16px;
                border: 1px solid #d6d6d6;
                box-sizing: border-box;
                outline: none;
                color: #414141;
                :focus {
                  border: 2px solid #c4c4c4;
                }
              `}
            >
              <option disabled selected>
                {t("chooseSize")}
              </option>
              <option value="C6">C6 (114x162 {t("mm")})</option>
              <option value="DL">DL (110x220 {t("mm")})</option>
              <option value="C65">C65 (114x229 {t("mm")})</option>
              <option value="C5">C5 (162x229 {t("mm")})</option>
              <option value="C4">C4 (229x324 {t("mm")})</option>
            </select>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("amount")}
            </label>
            <input
              css={css`
                width: 380px;
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                border-radius: 3px;
              `}
            ></input>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
