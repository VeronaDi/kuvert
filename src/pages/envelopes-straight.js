import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import BtnAddToRequest from "../components/BtnAddToRequest"
import WeightCalculatorSection from "../components/WeightCalculatorSection"
import FilterEnvelopes from "../components/FilterEnvelopes"
import PageTitle from "../components/PageTitle"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import envelopes from "../data/envelopes"
import formatSizes from "../data/formatSizes"

const GeneralNames = ({ children }) => (
  <div
    css={css`
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: #4f4f4f;
      word-wrap: break-word;
    `}
  >
    {children}
  </div>
)

const EnvelopeParam = ({ children }) => (
  <p
    css={css`
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    `}
  >
    {children}
  </p>
)

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  const [formatsFilter, setFormatsFilter] = React.useState([])
  const [typesFilter, setTypesFilter] = React.useState([])
  const [colorsFilter, setColorsFilter] = React.useState([])
  const [sealingsFilter, setSealingsFilter] = React.useState([])

  const isFilterGood = (filter, value) =>
    filter.length === 0 || filter.includes(value)

  const filterEnvelopes = () => {
    return envelopes.filter(
      envelope =>
        isFilterGood(formatsFilter, envelope.format) &&
        isFilterGood(typesFilter, envelope.type) &&
        isFilterGood(colorsFilter, envelope.color) &&
        isFilterGood(sealingsFilter, envelope.sealing)
    )
  }
  const filteredEnvelopes = filterEnvelopes()

  return (
    <Layout>
      <SEO title={t("envelopesStandard")} />
      <MainNav {...props} />
      <MobileNav {...props} />

      <PageTitle category={t("envelopesStandard")} />

      <FilterEnvelopes
        t={t}
        formatsFilter={formatsFilter}
        setFormatsFilter={setFormatsFilter}
        typesFilter={typesFilter}
        setTypesFilter={setTypesFilter}
        colorsFilter={colorsFilter}
        setColorsFilter={setColorsFilter}
        sealingsFilter={sealingsFilter}
        setSealingsFilter={setSealingsFilter}
      />
      <div>
        {filteredEnvelopes.map(
          ({
            code,
            format,
            gsm,
            color,
            type,
            boxSize,
            sealing,
            window,
            price,
            print,
          }) => (
            <div
              key={code}
              css={css`
                background: #ffffff;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 3px;
                width: 90vw;
                margin: 20px auto 54px auto;
                padding: 30px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                @media screen and (max-width: 570px) {
                  flex-direction: column;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: space-around;
                  flex: 1;
                  @media screen and (max-width: 1024px) {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, 150px);
                  }
                `}
              >
                <GeneralNames>
                  {t("code")}
                  <EnvelopeParam>{code}</EnvelopeParam>
                </GeneralNames>

                <GeneralNames>
                  {t("size")}, {t("mm")}
                  <EnvelopeParam>
                    {format} ({formatSizes[format]})
                  </EnvelopeParam>
                </GeneralNames>

                <GeneralNames>
                  {t("type")}
                  <EnvelopeParam>{t(type)}</EnvelopeParam>
                </GeneralNames>

                <GeneralNames>
                  {t("sealing")}
                  <EnvelopeParam>{t(sealing)}</EnvelopeParam>
                </GeneralNames>

                <GeneralNames>
                  {t("color")}, {t("gsm")}
                  <EnvelopeParam>
                    {t(color)}, {gsm}
                  </EnvelopeParam>
                </GeneralNames>

                <GeneralNames>
                  {t("window")}
                  <EnvelopeParam>
                    {window ? window + t("mm") : "-"}
                  </EnvelopeParam>
                </GeneralNames>

                <GeneralNames>
                  {t("innerPrintShort")}
                  <EnvelopeParam>{print ? t(print) : "-"}</EnvelopeParam>
                </GeneralNames>

                <GeneralNames>
                  {t("quantityBox")}, {t("pcs")}
                  <EnvelopeParam>{boxSize}</EnvelopeParam>
                </GeneralNames>

                <GeneralNames>
                  {t("price")} {t("thousandPcs")}
                  <EnvelopeParam>
                    {t("from")} {price} {t("uah")}
                  </EnvelopeParam>
                </GeneralNames>
              </div>
              <BtnAddToRequest boxQuantity={boxSize} code={code} />
            </div>
          )
        )}
      </div>
      <WeightCalculatorSection />
      <Footer />
    </Layout>
  )
}
