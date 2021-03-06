import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Popup from "reactjs-popup"

import calculator from "../images/calculator.png"
import WeightCalc from "../components/WeightCalc"

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
          font-weight: 500;
          margin: 0;
        `}
      >
        {t("weight")}
      </p>
      <p
        css={css`
          font-size: 16px;
          font-weight: bold;
        `}
      >
        {t("weightUse")}
      </p>
      <Popup
        modal
        closeOnDocumentClick
        trigger={
          <button
            css={css`
              color: white;
              text-decoration: none;
              font-weight: 500;
              font-size: 18px;
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
          </button>
        }
      >
        {close => <WeightCalc close={close} />}
      </Popup>
    </div>
  )
}
