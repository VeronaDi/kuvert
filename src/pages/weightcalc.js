import React from "react"

// import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import InputNumber from "../components/InputNumber"
import InputAmount from "../components/InputAmount"
import BtnCalculate from "../components/BtnCalculate"

// import i18n from "i18next"
// i18n.changeLanguage("en")

const IndexPage = props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <section
        css={css`
          width: 944px;
          height: 597px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          background: white;
        `}
      >
        <h3
          css={css`
            margin: 44px 0 19px 0;
            font-size: 36px;
            font-weight: bold;
            line-height: 50px;
            color: #383838;
          `}
        >
          {t("weightcalc")}
        </h3>

        <p
          css={css`
            width: 342px;
            margin: 0 auto;
            font-size: 14px;
            line-height: 21px;
            color: #383838;
          `}
        >
          {t("weightcalcText")}
        </p>

        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            max-width: 780px;
            padding-top: 19px;
            margin: 0 auto;
            text-align: left;
            color: #383838;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding-right: 19px;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("width")}, {t("mm")}
            </label>
            <InputNumber />
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding-right: 19px;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("height")}, {t("mm")}
            </label>
            <InputNumber />
          </div>
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            max-width: 780px;
            padding-top: 19px;
            margin: 0 auto;
            text-align: left;
            color: #383838;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding-right: 19px;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("paperGSM")}
            </label>
            <InputNumber />
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding-right: 19px;
            `}
          >
            <InputAmount />
          </div>
        </div>
        <BtnCalculate />

        <p
          css={css`
            font-size: 26px;
            font-weight: bold;
            line-height: 30px;
            color: #000000;
            padding-top: 40px;
          `}
        >
          {t("weightResult")}0 {t("kg")}
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage
