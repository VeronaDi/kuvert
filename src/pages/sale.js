import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { useTranslation } from "react-i18next"

import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import CategoryTitle from "../components/CategoryTitle"

import { css } from "@emotion/core"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title={t("sale")} />
      <MainNav {...props} />
      <MobileNav {...props} />

      <CategoryTitle category={t("sale")} />

      <Footer />
    </Layout>
  )
}
