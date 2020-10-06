import React from "react"
import { Link, navigate } from "gatsby"
import { useTranslation } from "react-i18next"

export default function LocalizedLink(props) {
  const { i18n } = useTranslation()

  const to = i18n.language === "uk" ? props.to : `/en${props.to}`

  return <Link {...props} to={to} />
}

export function localizedNavigate(path, locale) {
  navigate(locale === "uk" ? path : `/en${path}`)
}
