import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

export default () => {
  const { t, i18n } = useTranslation()

  return (
    <form
      css={css`
        width: 100%;
        margin: 20px 0;
      `}
      method="post"
      action=""
      enctype="multipart/form-data"
    >
      <label
        css={css`
          font-size: 12px;
          padding-bottom: 5px;
        `}
      >
        {t("printMockup")}
      </label>
      <div
        css={css`
          position: relative;
          width: 780px;
          height: 150px;
          background: #FFFFFF;
          border: 1px solid #D6D6D6;
          border-radius: 3px;
          text-align: center;
          :focus {
            border: 2px solid #c4c4c4;
        `}
      >
        <input
          name="entry.2036495619"
          type="file"
          data-multiple-caption="{count} files selected"
          multiple
          css={css`
            outline: none;
            width: 100%;
            height: 100%;
            z-index: 2;
          `}
        />
        <label
          for="file"
          css={css`
            color: #9d9d9d;
            font-size: 16px;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          `}
        >
          {t("chooseFile")}
        </label>
      </div>
    </form>
  )
}
