import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import LocalizedLink from "./LocalizedLink"
import { useTranslation } from "react-i18next"

import BtnRequest from "../components/BtnRequest"

import logoGrey from "../images/logoGrey.png"
import envelopeCart from "../../static/icon/request-basic.png"

import { useCart } from "../useCard"

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

  const [cart] = useCart()

  return (
    <>
      <div
        css={css`
          @media (max-width: 1250px) {
            height: 86.6px;
          }
        `}
      ></div>
      <nav
        css={
          !isOpen
            ? css`
                width: 100%;
                padding: 20px 14px;
                background: #f8f8f8;
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                z-index: 100;
                @media (min-width: 1250px) {
                  display: none;
                }
              `
            : css`
                width: 100%;
                height: 100vh;
                padding: 20px 14px;
                background: #f8f8f8;
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 100;
                @media (min-width: 1250px) {
                  display: none;
                }
              `
        }
      >
        <Link to="/">
          <img
            src={logoGrey}
            alt="logo"
            css={css`
              width: 122px;
            `}
          />
        </Link>

        <LocalizedLink
          to="/cart"
          css={css`
            cursor: pointer;
            text-decoration: none;
            color: #040404;
            text-align: center;
            width: 50px;
            display: block;
            margin-right: 100px;
            float: right;
            position: relative;
          `}
        >
          {Object.keys(cart).length > 0 && (
            <p
              css={css`
                position: absolute;
                top: 6px;
                right: 14px;
                margin: 0;
                background: #b70039;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                color: white;
              `}
            >
              {Object.keys(cart).length}
            </p>
          )}
          <img
            src={envelopeCart}
            alt="cart"
            css={css`
              width: 50px;
            `}
          />
        </LocalizedLink>

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
                font-size: 18px;
                text-decoration: none;
                position: absolute;
                bottom: 20px;
              `}
              to={nextLang}
            >
              {t(`changeLang.${i18n.language}`)}
            </Link>
          </>
        )}
      </nav>
    </>
  )
}
