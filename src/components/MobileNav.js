import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import LocalizedLink from "./LocalizedLink"
import { useTranslation } from "react-i18next"

import BtnRequest from "../components/BtnRequest"

import logoGrey from "../images/logoGrey.png"

function nextLangLink(lang, url) {
  if (lang === "uk") {
    return `/en${url}`
  } else {
    return url.replace("/en/", "/")
  }
}

const StyledLink = ({ to, children }) => (
  <LocalizedLink
    css={css`
      font-weight: 500;
      font-size: 16px;
      color: #383838;
      text-decoration: none;
      padding: 25px 0;
      border-bottom: 0.5px solid #e7e7e7;
      :first-child {
        border-top: 0.5px solid #e7e7e7;
      }
    `}
    to={to}
  >
    {children}
  </LocalizedLink>
)

export default ({ location }) => {
  const { t, i18n } = useTranslation()

  const nextLang = nextLangLink(i18n.language, location.pathname)

  const [isOpen, setOpen] = React.useState(false)

  return (
    <nav
      css={css`
        width: 100%;
        padding: 20px 14px;
        position: relative;
        @media (min-width: 1024px) {
          display: none;
        }
      `}
    >
      <img
        src={logoGrey}
        alt="logo"
        css={css`
          width: 122px;
        `}
      />

      <button
        className={
          isOpen
            ? "hamburger hamburger--slider is-active"
            : "hamburger hamburger--slider"
        }
        onClick={() => setOpen(!isOpen)}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      {isOpen && (
        <>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin: 27px 0;
              height: 100%;
            `}
          >
            <StyledLink to="/">{t("home")}</StyledLink>
            <StyledLink to="/products">{t("products")}</StyledLink>
            <StyledLink to="/about">{t("about")}</StyledLink>
            <StyledLink to="/contacts">{t("contacts")}</StyledLink>
          </div>
          <div
            css={css`
              display: block;
              > a {
                width: 100%;
              }
            `}
          >
            <BtnRequest />
          </div>

          <Link
            css={css`
              cursor: pointer;
              color: #383838;
              font-weight: 500;
              font-size: 16px;
              text-decoration: none;
            `}
            to={nextLang}
          >
            {t(`changeLang.${i18n.language}`)}
          </Link>
        </>
      )}
    </nav>
  )
}
