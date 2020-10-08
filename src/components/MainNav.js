import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import LocalizedLink from "./LocalizedLink"
import { useTranslation } from "react-i18next"

import BtnRequest from "../components/BtnRequest"

import logo from "../images/logo.png"
import logoGrey from "../images/logoGrey.png"
import envelopeCart from "../../static/icon/request-basic.png"
import envelopeCartWhite from "../../static/icon/request-basic-white.png"

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
      margin: 46px;
      cursor: pointer;
      color: ${isHome ? "white" : "#040404"};
      text-decoration: none;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
    `}
    activeStyle={activeStyle}
    to={to}
  >
    {children}
  </LocalizedLink>
)

export default ({ isHome = false, location }) => {
  const [isSmall, setSmall] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setSmall(true)
      } else {
        setSmall(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const { t, i18n } = useTranslation()

  const nextLang = nextLangLink(i18n.language, location.pathname)

  return (
    <nav
      css={css`
        ${isHome && "position: fixed; background: rgba(56, 56, 56, 0.732);"}
        z-index: 5;
        width: 100%;
        top: 0;
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 1250px) {
          display: none;
        }
      `}
    >
      <Link
        css={css`
          transition: all 0.3s;
          width: ${isSmall ? "100px" : "190px"};
          margin-top: ${isSmall ? "-5px" : "-15px"};
        `}
        to="/"
      >
        <img
          src={isHome ? logo : logoGrey}
          alt="logo"
          css={css`
            width: 100%;
          `}
        />
      </Link>

      <div
        css={css`
          transition: all 0.3s;
          line-height: ${isSmall ? "50px" : "112px"};
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
        <div
          css={css`
            display: inline-block;
            width: 180px;
          `}
        >
          {!isHome && <BtnRequest />}
        </div>
      </div>

      <LocalizedLink
        css={css`
          cursor: pointer;
        `}
        to="/cart"
      >
        <img
          src={isHome ? envelopeCartWhite : envelopeCart}
          alt="cart"
          css={css`
            width: 40%;
            float: right;
          `}
        />
      </LocalizedLink>

      <Link
        css={css`
          cursor: pointer;
          color: ${isHome ? "white" : "#040404"};
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          text-decoration: none;
        `}
        to={nextLang}
      >
        {t(`changeLang.${i18n.language}`)}
      </Link>
    </nav>
  )
}
