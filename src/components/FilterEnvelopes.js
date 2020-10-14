import React from "react"
import Layout from "../components/layout"

import { css } from "@emotion/core"

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

const FilterCheckbox = ({ label, isActive, onClick }) => (
  <>
    <input
      id={label}
      type="checkbox"
      css={css``}
      checked={isActive}
      onChange={onClick}
    />
    <label
      htmlFor={label}
      css={css`
        font-size: 14px;
        font-weight: 400;
      `}
    >
      {label}
    </label>
  </>
)

const sizes = envelopes.map(({ size }) => size).filter(onlyUnique)
const types = envelopes.map(({ type }) => type).filter(onlyUnique)
const colors = envelopes.map(({ color }) => color).filter(onlyUnique)
const sealings = envelopes.map(({ sealing }) => sealing).filter(onlyUnique)

export default ({
  sizesFilter,
  setSizesFilter,
  typesFilter,
  setTypesFilter,
  colorsFilter,
  setColorsFilter,
  sealingsFilter,
  setSealingsFilter,
  t,
}) => {
  return (
    <Layout>
      <button
        type="button"
        onClick={() => {
          setSizesFilter([])
          setTypesFilter([])
          setColorsFilter([])
          setSealingsFilter([])
        }}
      >
        Reset
      </button>
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

          <ul
            css={css`
              list-style-type: none;
              padding: 0;
            `}
          >
            <li>
              {sizesFilter.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setSizesFilter([])
                  }}
                >
                  Усі
                </button>
              )}
            </li>

            {sizes.map(size => (
              <li key={size}>
                <FilterCheckbox
                  label={size}
                  isActive={sizesFilter.includes(size)}
                  onClick={() => {
                    setSizesFilter(prevFilter =>
                      prevFilter.includes(size)
                        ? prevFilter.filter(s => s !== size)
                        : [...prevFilter, size]
                    )
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FilterTitle>{t("type")}</FilterTitle>
          {types.map(type => (
            <FilterCheckbox
              key={type}
              label={t(type)}
              isActive={typesFilter.includes(type)}
              onClick={() => {
                setTypesFilter(prevFilter =>
                  prevFilter.includes(type)
                    ? prevFilter.filter(s => s !== type)
                    : [...prevFilter, type]
                )
              }}
            />
          ))}
        </div>

        <div>
          <FilterTitle>{t("paperType")}</FilterTitle>
          {colors.map(type => (
            <FilterCheckbox
              key={type}
              label={t(type)}
              isActive={colorsFilter.includes(type)}
              onClick={() => {
                setColorsFilter(prevFilter =>
                  prevFilter.includes(type)
                    ? prevFilter.filter(s => s !== type)
                    : [...prevFilter, type]
                )
              }}
            />
          ))}
        </div>

        <div>
          <FilterTitle>{t("sealing")}</FilterTitle>
          {sealings.map(type => (
            <FilterCheckbox
              key={type}
              label={t(type)}
              isActive={sealingsFilter.includes(type)}
              onClick={() => {
                setSealingsFilter(prevFilter =>
                  prevFilter.includes(type)
                    ? prevFilter.filter(s => s !== type)
                    : [...prevFilter, type]
                )
              }}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
