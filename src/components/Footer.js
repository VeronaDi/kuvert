import React from "react"
// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import LocalizedLink from "./LocalizedLink"
import { useTranslation } from "react-i18next"

import logo from "../images/logo.png"
import logoGrey from "../images/logoGrey.png"
import search from "../images/search.svg"

function nextLangLink(lang, url) {
  if (lang === "uk") {
    return `/en${url}`
  } else {
    return url.replace("/en/", "/")
  }
}

export default ({ isHome = false, location }) => {
  const { t, i18n } = useTranslation()

  //   const nextLang = nextLangLink(i18n.language, location.pathname)

  return (
    <section
      css={css`
        background: #383838;
        height: 597px;
        width: 100%;
        position: relative;
      `}
    >
      <div
        css={css`
          width: 76%;
          height: 324px;
          border: 3px solid #ffffff;
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          color: white;
          display: flex;
          justify-content: space-between;
        `}
      >
        <div>
          <h3>{t("addressFactory")}</h3>
        </div>
        <div>
          <h3>{t("addressBranch")}</h3>
        </div>
        <div>
          <h3>{t("addressRepresentative")}</h3>
        </div>
      </div>
    </section>
  )
}
