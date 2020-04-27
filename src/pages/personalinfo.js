import React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import BtnCreateRequest from "../components/BtnCreateRequest"

import logoGrey from "../images/logoGrey.png"
import arrowBack from "../images/arrow-back.png"

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
      <Link
        css={css`
          background: url(${arrowBack}) center center no-repeat;
          width: 42px;
          height: 42px;
          background-size: cover;
          position: absolute;
          top: 125px;
          left: 46px;
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
          margin: 80px 0;
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
            color: #383838;
            border-bottom: 3px solid #383838;
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
            color: #b40039;
            border-bottom: 3px solid #b40039;
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
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 1.8rem;
          text-align: center;
        `}
      >
        {t("requestPersonal")}
      </h1>
      <div
        css={css`
          width: 780px;
          height: 440.19px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-between;
        `}
      >
        <div>
          <h3
            css={css`
              font-size: 26px;
              font-weight: bold;
              margin-bottom: 2rem;
            `}
          >
            {t("personalDetails")}
          </h3>
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
              {t("name")}
            </label>
            <input
              type="text"
              placeholder="Bob Green"
              css={css`
                width: 378px;
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                border-radius: 3px;
                box-sizing: border-box;
                padding: 20px;
                outline: none;
                margin-right: 100px;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                  border-radius: 3px;
                }
              `}
            ></input>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 2rem;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("company")}
            </label>
            <input
              type="text"
              placeholder="Company"
              css={css`
                width: 378px;
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                border-radius: 3px;
                box-sizing: border-box;
                padding: 20px;
                outline: none;
                margin-right: 100px;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                  border-radius: 3px;
                }
              `}
            ></input>
          </div>
        </div>
        <div>
          <h3
            css={css`
              font-size: 26px;
              font-weight: bold;
              margin-bottom: 2rem;
            `}
          >
            {t("contactDetails")}
          </h3>
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
              {t("city")}
            </label>
            <input
              type="text"
              placeholder="Kyiv"
              css={css`
                width: 378px;
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                border-radius: 3px;
                box-sizing: border-box;
                padding: 20px;
                outline: none;
                margin-right: 100px;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                  border-radius: 3px;
                }
              `}
            ></input>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 2rem;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              css={css`
                width: 378px;
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                border-radius: 3px;
                box-sizing: border-box;
                padding: 20px;
                outline: none;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                  border-radius: 3px;
                }
              `}
            ></input>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 2rem;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("phone")}
            </label>
            <input
              type="phone"
              placeholder="+380123456789"
              css={css`
                width: 378px;
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                border-radius: 3px;
                box-sizing: border-box;
                padding: 20px;
                outline: none;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                  border-radius: 3px;
                }
              `}
            ></input>
          </div>
        </div>
        <div
          css={css`
            position: absolute;
            bottom: 0;
            width: 100%;
            max-width: 855px;
          `}
        >
          <BtnCreateRequest />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
