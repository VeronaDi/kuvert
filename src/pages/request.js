import React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import requestBasic from "../images/request-basic.png"
import requestPrinted from "../images/request-printed.png"
import requestCustom from "../images/request-custom.png"

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
      <h1
        css={css`
          font-size: 40px;
          font-weight: bold;
          margin-top: 50px;
          margin-bottom: 50px;
          text-align: center;
        `}
      >
        Choose type of request
      </h1>
      <section
        css={css`
          display: flex;
          justify-content: space-around;
          flex-direction: row;
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100vh;
            height: 178px;
            background: #b40039;
            position: absolute;
            bottom: 175px;
          `}
        ></div>
        <div
          css={css`
            width: 28%;
            height: 60vh;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            z-index: 1;
            background: url(${requestBasic}), #ffffff;
            background-repeat: no-repeat;
            background-position: top 15% left 50%;
            text-align: center;
            padding: 0 70px;
            font-size: 18px;
            line-height: 27px;
          `}
        >
          <h4
            css={css`
              font-size: 36px;
              padding-top: 190px;
              padding-bottom: 15px;
              margin: 0;
            `}
          >
            Basic order
          </h4>
          <p>
            Here is the short description of what is this type is about. Some
            important information is also here. Here is the short description of
            what is this type is about. Some important information is also here
          </p>
        </div>
        <div
          css={css`
            width: 28%;
            height: 60vh;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            z-index: 1;
            background: url(${requestPrinted}), #ffffff;
            background-repeat: no-repeat;
            background-position: top 15% left 50%;
            text-align: center;
            padding: 0 70px;
            font-size: 18px;
            line-height: 27px;
          `}
        >
          <h4
            css={css`
              font-size: 36px;
              padding-top: 190px;
              padding-bottom: 15px;
              margin: 0;
            `}
          >
            Printed order
          </h4>
          <p>
            Here is the short description of what is this type is about. Some
            important information is also here. Here is the short description of
            what is this type is about. Some important information is also here
          </p>
        </div>
        <div
          css={css`
            width: 28%;
            height: 60vh;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            z-index: 1;
            background: url(${requestCustom}), #ffffff;
            background-repeat: no-repeat;
            background-position: top 15% left 50%;
            text-align: center;
            padding: 0 70px;
            font-size: 18px;
            line-height: 27px;
          `}
        >
          <h4
            css={css`
              font-size: 36px;
              padding-top: 190px;
              padding-bottom: 15px;
              margin: 0;
            `}
          >
            Individual order
          </h4>
          <p>
            Here is the short description of what is this type is about. Some
            important information is also here. Here is the short description of
            what is this type is about. Some important information is also here
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
