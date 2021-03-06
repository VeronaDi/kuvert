import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Popup from "reactjs-popup"

import { useTranslation } from "react-i18next"

import EnterAmount from "./EnterAmount"

export default ({ boxQuantity = 1, code }) => {
  const { t } = useTranslation()

  return (
    <Popup
      modal
      closeOnDocumentClick
      trigger={
        <button
          css={css`
            cursor: pointer;
            outline: none;
            text-decoration: none;
            display: block;
            text-align: center;
            height: 49px;
            border-radius: 3px;
            background: transparent;
            border: none;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #b70039;
            border: 1px solid #b70039;

            &:hover {
              background: #b70039;
              color: white;
            }
          `}
        >
          {t("addToRequest")}
        </button>
      }
    >
      {close => (
        <EnterAmount close={close} boxQuantity={boxQuantity} code={code} />
      )}
    </Popup>
  )
}
