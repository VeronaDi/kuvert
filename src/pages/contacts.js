import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import Footer from "../components/Footer"
import BtnSend from "../components/BtnSend"

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
          background: #e5e5e5;
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
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-between;
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
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
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
                }
              `}
            ></input>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 16px;
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
                width: 460px;
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                box-sizing: border-box;
                padding: 20px;
                outline: none;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                }
              `}
            ></input>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 16px;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              Phone
            </label>
            <input
              type="phone"
              placeholder="+380123456789"
              css={css`
                width: 460px;
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                box-sizing: border-box;
                padding: 20px;
                outline: none;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                }
              `}
            ></input>
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
              Department
            </label>
            <select
              css={css`
                width: 460px;
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
                Choose department
              </option>
              <option value="Sales department">Sales department</option>
              <option value="Production department">
                Production department
              </option>
              <option value="Director">Director</option>
            </select>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 16px;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              Message
            </label>
            <textarea
              placeholder="Write your message"
              css={css`
                width: 460px;
                height: 165px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                box-sizing: border-box;
                padding: 20px;
                outline: none;
                resize: none;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                }
              `}
            ></textarea>
          </div>
        </div>
        <div
          css={css`
            width: 460px;
            margin: 60px auto 0 auto;
          `}
        >
          <BtnSend />
        </div>
      </section>
      <Footer />
    </Layout>
  )
}
