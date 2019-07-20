import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainNav from "../components/MainNav"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

export default props => {
  const { t, i18n } = useTranslation()
  if (i18n.language !== props.pageContext.langKey) {
    i18n.changeLanguage(props.pageContext.langKey)
  }

  return (
    <Layout>
      <SEO title="Products" />
      <MainNav {...props} />

      <h1
        css={css`
          color: red;
        `}
      >
        {t("products")}
      </h1>
    </Layout>
  )
}
