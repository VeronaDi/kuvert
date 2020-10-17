import React from "react"
import Layout from "../components/layout"

import { css } from "@emotion/core"

import envelopes from "../data/envelopes"
import formatSizes from "../data/formatSizes"

import peelSeal from "../images/peelSeal.gif"
import selfSeal from "../images/selfSeal.gif"
import gummed from "../images/gummed.gif"

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

const sealingTypes = {
  "envelopesProperties.sealing.peelSeal": peelSeal,
  "envelopesProperties.sealing.selfSeal": selfSeal,
  "envelopesProperties.sealing.gummed": gummed,
}

const FilterCheckbox = ({ label, isActive, onClick }) => (
  <>
    <input
      id={label}
      type="checkbox"
      css={css`
      --active: #B70039;
      --active-inner: #fff;
      --focus: 1px rgba(182, 1, 57, 0.6);
      --border: #C8C8C8;
      --border-hover: #B70039;
      --background: #fff;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 20px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 3px 0;
      cursor: pointer;
      border: 1px solid var(--bc, var(--border));
      background: var(--b, var(--background));
      transition: background .3s, border-color .2s, box-shadow .2s;
      &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        position: absolute;
        transition: transform var(--d-t, .3s) var(--d-t-e, ease), opacity var(--d-o, .2s);
      }
      &:checked {
        --b: var(--active);
        --bc: var(--active);
        --d-o: .3s;
        --d-t: .6s;
        --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
      }
        & + label {
          cursor: not-allowed;
        }
      }
      &:hover {
        &:not(:checked) {
            --bc: var(--border-hover);
        }
      }
      &:focus {
        box-shadow: 0 0 0 var(--focus);
      }
      &:not(.switch) {
        width: 21px;
        &:after {
          opacity: var(--o, 0);
        }
        &:checked {
          --o: 1;
        }
      }
      & + label {
        font-size: 14px;
        line-height: 10px;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        margin-left: 6px;
      }
    }
    &:not(.switch) {
      border-radius: 3px;
      &:after {
        width: 5px;
        height: 9px;
        border: 2px solid var(--active-inner);
        border-top: 0;
        border-left: 0;
        left: 7px;
        top: 4px;
        transform: rotate(var(--r, 20deg));
      }
      &:checked {
        --r: 43deg;
      }
    }
    &.switch {
      width: 38px;
      border-radius: 11px;
      &:after {
        left: 2px;
        top: 2px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background: var(--ab, var(--border));
        transform: translateX(var(--x, 0));
      }
      &:checked {
        --ab: var(--active-inner);
        --x: 17px;
      }
    }
  }
      `}
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

const formats = envelopes.map(({ format }) => format).filter(onlyUnique)
const types = envelopes.map(({ type }) => type).filter(onlyUnique)
const colors = envelopes.map(({ color }) => color).filter(onlyUnique)
const sealings = envelopes.map(({ sealing }) => sealing).filter(onlyUnique)

export default ({
  formatsFilter,
  setFormatsFilter,
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
      <div
        css={css`
          width: 60vw;
          margin: 40px auto 5px auto;
          display: flex;
          flex-direction: row;
          justify-content: space-around;

          @media screen and (max-width: 892px) {
            display: flex;
            flex-direction: column;
            margin: 0 auto 30px auto;
          }
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
            {formats.map(format => (
              <li key={format}>
                <FilterCheckbox
                  label={`${format} (${formatSizes[format]})`}
                  isActive={formatsFilter.includes(format)}
                  onClick={() => {
                    setFormatsFilter(prevFilter =>
                      prevFilter.includes(format)
                        ? prevFilter.filter(s => s !== format)
                        : [...prevFilter, format]
                    )
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FilterTitle>{t("type")}</FilterTitle>
          <ul
            css={css`
              list-style-type: none;
              padding: 0;
            `}
          >
            {types.map(type => (
              <li key={type}>
                <FilterCheckbox
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
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FilterTitle>{t("paperType")}</FilterTitle>
          <ul
            css={css`
              list-style-type: none;
              padding: 0;
            `}
          >
            {colors.map(color => (
              <li key={color}>
                <FilterCheckbox
                  label={t(color)}
                  isActive={colorsFilter.includes(color)}
                  onClick={() => {
                    setColorsFilter(prevFilter =>
                      prevFilter.includes(color)
                        ? prevFilter.filter(s => s !== color)
                        : [...prevFilter, color]
                    )
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FilterTitle>{t("sealing")}</FilterTitle>
          <ul
            css={css`
              list-style-type: none;
              padding: 0;
            `}
          >
            {sealings.map(type => (
              <li
                key={type}
                css={css`
                  > img {
                    display: none;
                  }

                  :hover > img {
                    display: block;
                  }
                `}
              >
                <FilterCheckbox
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
                <img
                  src={sealingTypes[type]}
                  alt="sealing illustration"
                  css={css`
                    position: absolute;
                    z-index: 5;
                    width: 150px;
                    margin-left: 150px;
                    margin-top: -30px;
                  `}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        css={css`
          width: 100%;
          text-align: center;
          margin-bottom: 50px;
        `}
      >
        <button
          type="button"
          css={css`
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
          `}
          onClick={() => {
            setformatsFilter([])
            setTypesFilter([])
            setColorsFilter([])
            setSealingsFilter([])
          }}
        >
          Скинути параметри
        </button>
      </div>
    </Layout>
  )
}
