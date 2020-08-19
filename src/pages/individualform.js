import React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import InputDragDrop from "../components/InputDragDrop"

import BtnNext from "../components/BtnNext"

import logoGrey from "../images/logoGrey.png"

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
          </span>
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
        {t("individualOrder")}
      </h1>
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSejJ5AVb5L0SeEnQzCxJO-HR_VXDXj5PTQmF09fDYN7qz8jwQ/formResponse"
        method="POST"
        css={css`
          position: absolute;
          left: 50%;
          -webkit-transform: translate(-50%, -2%);
          transform: translate(-50%, -2%);
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding-right: 19px;
            padding-top: 40px;
          `}
        >
          <div
            css={css`
              width: 100%;
              max-width: 780px;
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

          <InputDragDrop />
        </div>

        <div
          css={css`
            width: 100%;
            max-width: 780px;
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
