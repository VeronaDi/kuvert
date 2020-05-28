import React from "react"

// import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

import { useTranslation } from "react-i18next"

import WeightCalc from "../components/WeightCalc"

// import i18n from "i18next"
// i18n.changeLanguage("en")

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <WeightCalc />
    </Layout>
  )
}
