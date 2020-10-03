import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <div
      css={css`
        width: 90vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 768px) {
          flex-direction: column;
          padding-bottom: 80px;
        }
      `}
    >
      <div
        css={css`
          width: 48%;
          @media screen and (max-width: 768px) {
            width: 100%
          }
        `}
      >
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
            {t("company")}
          </label>
          <input
            type="text"
            placeholder="Company"
            css={css`
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
          width: 48%;
          @media screen and (max-width: 768px) {
            width: 100%;
          }
        `}
      >
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
            Email
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            css={css`
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
    </div>
  )
}
