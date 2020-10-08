import React from "react"
import Layout from "../components/layout"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import envelopes from "../data/envelopes"

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

const GeneralNames = ({ children }) => (
  <div
    css={css`
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: #4f4f4f;
      word-wrap: break-word;
    `}
  >
    {children}
  </div>
)

const EnvelopeParam = ({ children }) => (
  <p
    css={css`
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    `}
  >
    {children}
  </p>
)

export default props => {
  //   const T = useTranslation()
  //   if (T.i18n.language !== props.pageContext.langKey) {
  //     T.i18n.changeLanguage(props.pageContext.langKey)
  //   }

  //   const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  const { t, i18n } = useTranslation()

  return (
    <Layout>
      <div
        css={css`
          width: 50vw;
          margin: 40px auto;
          display: flex;
          flex-direction: row;
        `}
      >
        <div>
          <h6
            css={css`
              font-size: 16px;
              font-weight: 700;
            `}
          >
            {t("size")}, {t("mm")}
          </h6>
          {envelopes
            .map(({ size }) => size)
            .filter(onlyUnique)
            .map(size => (
              <>
                <div>
                  <input type="checkbox" />
                  <lable>{size}</lable>
                </div>
              </>
            ))}
        </div>

        <div>
          <h6
            css={css`
              font-size: 16px;
              font-weight: 700;
            `}
          >
            {t("type")}
          </h6>
          <div>
            <input type="checkbox" />
            <lable>{t("envelope")}</lable>

            <input type="checkbox" />
            <lable>{t("pocket")}</lable>
          </div>
        </div>

        <div>
          <h6
            css={css`
              font-size: 16px;
              font-weight: 700;
            `}
          >
            {t("paperType")}
          </h6>
          <div>
            <input type="checkbox" />
            <lable>{t("white")}</lable>

            <input type="checkbox" />
            <lable>{t("brown")}</lable>
          </div>
        </div>

        <div>
          <h6
            css={css`
              font-size: 16px;
              font-weight: 700;
            `}
          >
            {t("sealing")}
          </h6>
          <div>
            <input type="checkbox" />
            <lable>{t("mk")}</lable>

            <input type="checkbox" />
            <lable>{t("sk")}</lable>

            <input type="checkbox" />
            <lable>{t("skl")}</lable>
          </div>
        </div>
      </div>
    </Layout>
  )
}
