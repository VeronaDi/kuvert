import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import Footer from "../components/Footer"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

export default props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

  return (
    <Layout>
      <SEO title="Contacts" />
      <MainNav {...props} />
      <section
        css={css`
          width: 100vw;
          height: 100vh;
          background: #ffffff;
        `}
      >
        <div
          css={css`
            width: 41%;
            height: 68px;
            border: 2px solid #020202;
            box-sizing: border-box;
            border-radius: 3px;
            margin: 0 auto;
          `}
        ></div>
      </section>
      <section
        css={css`
          width: 100vw;
          height: 680px;
        `}
      >
        <h5
          css={css`
            font-size: 36px;
            color: black;
            width: 640px;
            margin: 55px auto 43px auto;
            line-height: 54px;
            text-align: center;
          `}
        >
          If you have any questions do not hesitate to send us a message
        </h5>
        <div
          css={css`
            width: 1020px;
            height: 284px;
            margin: 0 auto;
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
              Name and Surname
            </label>
            <input
              type="text"
              placeholder="Bob Green"
              css={css`
                width: 460px;
                height: 60px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                box-sizing: border-box;
                padding-left: 20px;
                outline: none;
                ::-webkit-input-placeholder,
                ::-moz-placeholder,
                :-moz-placeholder,
                :-ms-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                }
              `}
            ></input>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}
