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
        {t("individualOrder")}
      </h1>

      <div
        css={css`
          width: 100%;
          max-width: 780px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 27px;
        `}
      >
        <ul>
          Якщо Ви не знайшли те, що Вас цікавить серед стандартної продукції,
          напишіть нам свої побажання щодо свого конверту і ми радо розглянемо
          можливість його виробництва. Рекомендуємо вказати:
          <li> - розмір конверту </li>
          <li> - колір паперу та його щільність або ж марку паперу</li>
          <li>
            - наявність вікна (вікон), його (їх) розміри та розміщення на
            конверті
          </li>
          <li>- з друком чи без друку</li>
        </ul>
      </div>

      <form
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
