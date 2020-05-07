import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import calculator from "../images/calculator.png"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <div
      css={css`
        background: url(${calculator}), #65665c;
        background-repeat: no-repeat;
        background-position: right;
        background-size: contain;
        width: 90%;
        margin: 50px auto;
        text-align: center;
        color: white;
        padding: 25px 0;
      `}
    >
      <p
        css={css`
          font-size: 36px;
          font-weight: bold;
          margin: 0;
        `}
      >
        {t("weight")}
      </p>
      <p
        css={css`
          font-size: 16px;
          font-weight: bold;
          padding-bottom: 20px;
        `}
      >
        {t("weightUse")}
      </p>
      <Link
        to="/weightcalc"
        css={css`
          color: white;
          text-decoration: none;
          font-weight: bold;
          border: 1px solid #ffffff;
          border-radius: 3px;
          background: transparent;
          padding: 15px 45px;
          cursor: pointer;
          outline: none;

          &:hover {
            color: #c4c4c4;
            border: 1px solid #c4c4c4;
          }

          &:active {
            color: #676767;
            background: #ffffff;
          }
        `}
      >
        {t("calculate")}
      </Link>
    </div>
  )
}
