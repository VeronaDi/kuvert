import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import arrowSelect from "../images/arrow-select.png"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <select
      css={css`
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url(${arrowSelect}), #ffffff;
        background-position: 97%;
        background-repeat: no-repeat;
        width: 380px;
        height: 65px;
        font-size: 16px;
        border: 1px solid #d6d6d6;
        padding: 18px;
        outline: none;
        color: #444444;
        :focus {
          border: 2px solid #c4c4c4;
        }
      `}
    >
      <option disabled selected>
        {t("chooseColor")}
      </option>
      <option value="zero">0</option>
      <option value="one">1</option>
      <option value="two">2</option>
      <option value="three">3</option>
      <option value="four">4</option>
    </select>
  )
}
