import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import LocalizedLink from "./LocalizedLink"
import { useTranslation } from "react-i18next"

import BtnRequest from "../components/BtnRequest"

import logo from "../images/logo.png"
import logoGrey from "../images/logoGrey.png"

function nextLangLink(lang, url) {
  if (lang === "uk") {
    return `/en${url}`
  } else {
    return url.replace("/en/", "/")
  }
}

const activeStyle = {
  fontWeight: "bold",
}

const StyledLink = ({ isHome, to, children }) => (
  <LocalizedLink
    css={css`
      margin: 0 23px;
      cursor: pointer;
      color: ${isHome ? "white" : "#040404"};
      font-weight: normal;
      text-decoration: none;
    `}
    activeStyle={activeStyle}
    to={to}
  >
    {children}
  </LocalizedLink>
)

export default ({ isHome = false, location }) => {
  const { t, i18n } = useTranslation()

  const nextLang = nextLangLink(i18n.language, location.pathname)

  return (
    <nav
      css={css`
        ${isHome && "position: fixed; background: rgba(56, 56, 56, 0.732);"}
        z-index: 5;
        width: 100%;
        height: 112px;
        top: 0;
        padding: 0 50px;
        display: flex;
        justify-content: space-between;
      `}
    >
      <Link
        css={css`
          ${isHome
            ? `background: url(${logo}) center center no-repeat;`
            : `background: url(${logoGrey}) center center no-repeat;`}
          width: 190px;
          height: 66px;
          background-size: cover;
          margin-top: 20px;
        `}
        to="/"
      ></Link>

      <div
        css={css`
          padding: 46px 150px 0 0;
        `}
      >
        <StyledLink isHome={isHome} to="/">
          {t("home")}
        </StyledLink>
        <StyledLink isHome={isHome} to="/products">
          {t("products")}
        </StyledLink>
        <StyledLink isHome={isHome} to="/about">
          {t("about")}
        </StyledLink>
        <StyledLink isHome={isHome} to="/contacts">
          {t("contacts")}
        </StyledLink>
        {!isHome && <BtnRequest />}
      </div>

      <Link
        css={css`
          cursor: pointer;
          color: ${isHome ? "white" : "#040404"};
          font-weight: normal;
          text-decoration: none;
          padding-top: 46px;
        `}
        to={nextLang}
      >
        {t(`changeLang.${i18n.language}`)}
      </Link>
    </nav>
  )
}
