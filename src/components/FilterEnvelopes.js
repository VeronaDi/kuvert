import React from "react"
import Layout from "../components/layout"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import envelopes from "../data/envelopes"

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

const FilterTitle = ({ children }) => (
  <h6
    css={css`
      font-size: 16px;
      font-weight: 700;
      margin: 20px 0;
    `}
  >
    {children}
  </h6>
)

const FilterCheckbox = ({ children }) => (
  <div>
    <lable>
      <input type="checkbox" />
      <span
        css={css`
          font-size: 14px;
          font-weight: 400;
          padding-left: 10px;
        `}
      >
        {children}
      </span>
    </lable>
  </div>
)

export default props => {
  const { t } = useTranslation()

  return (
    <Layout>
      <div
        css={css`
          width: 60vw;
          margin: 40px auto;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        `}
      >
        <div>
          <FilterTitle>
            {t("size")}, {t("mm")}
          </FilterTitle>

          {envelopes
            .map(({ size }) => size)
            .filter(onlyUnique)
            .map(size => (
              <FilterCheckbox>{size}</FilterCheckbox>
            ))}
        </div>

        <div>
          <FilterTitle>{t("type")}</FilterTitle>
          <FilterCheckbox> {t("envelope")}</FilterCheckbox>
          <FilterCheckbox> {t("pocket")}</FilterCheckbox>
        </div>

        <div>
          <FilterTitle>{t("paperType")}</FilterTitle>
          <FilterCheckbox> {t("white")}</FilterCheckbox>
          <FilterCheckbox> {t("brown")}</FilterCheckbox>
        </div>

        <div>
          <FilterTitle>{t("sealing")}</FilterTitle>
          <FilterCheckbox> {t("mk")}</FilterCheckbox>
          <FilterCheckbox> {t("sk")}</FilterCheckbox>
          <FilterCheckbox> {t("skl")}</FilterCheckbox>
        </div>
      </div>
    </Layout>
  )
}
