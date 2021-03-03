import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1
        css={css`
          padding: 20px;
        `}
      >
        Oops...
      </h1>
      <p
        css={css`
          padding: 20px;
        `}
      >
        {t("errorPage")}
      </p>
    </Layout>
  )
}
