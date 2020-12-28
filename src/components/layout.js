/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

import { I18nextProvider, useTranslation } from "react-i18next"
import i18n from "../i18n"

import CookieConsent from "react-cookie-consent"
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

const Layout = props => {
  const location = useLocation()
  const { t } = useTranslation()
  return (
    <I18nextProvider i18n={i18n}>
      <CookieConsent
        location="bottom"
        buttonText={t("accept")}
        onAccept={() => {
          initializeAndTrack(location)
        }}
        cookieName="gatsby-gdpr-analytics"
      >
        {t("cookiesText")}
      </CookieConsent>
      {props.children}
    </I18nextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
