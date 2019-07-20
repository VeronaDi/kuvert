/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

import { I18nextProvider } from "react-i18next"
import i18n from "../i18n"

const Layout = props => {
  return <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
