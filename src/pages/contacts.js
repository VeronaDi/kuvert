import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import ContactUs from "../components/ContactUsForm"
import LeafletMap from "../components/LeafletMap"

import call from "../images/call.png"
import location from "../images/location.png"
import write from "../images/write_us.png"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import contacts from "../data/contacts"

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  const [city, setCity] = React.useState(contacts.factory)

  return (
    <Layout>
      <SEO title="Contacts" />
      <MainNav {...props} />
      <MobileNav {...props} />

      <section
        css={css`
          height: 100vh;
          background: #ffffff;
          position: relative;
        `}
      >
        <div
          css={css`
            width: 783px;
            margin: 0 auto;
            padding: 35px 0;
          `}
        >
          {[contacts.factory, ...contacts.offices].map((currentCity, index) => (
            <button
              onClick={() => setCity(currentCity)}
              css={css`
                width: 20%;
                height: 68px;
                background: transparent;
                color: #c1c1c1;
                font-size: 14px;
                line-height: 16px;
                text-align: center;
                outline: none;
                border: 2px solid #c1c1c1;
                border-radius: 3px;
                cursor: pointer;

                ${currentCity === city && "border: 2px solid #020202;"}
                ${currentCity === city && "color: #020202;"}
              `}
            >
              {t(currentCity.city)}
            </button>
          ))}
        </div>

        <LeafletMap position={city.position} />

        <div
          css={css`
            width: 432px;
            height: 397px;
            position: absolute;
            left: 91px;
            top: 25%;
            background: rgba(56, 56, 56, 0.8);
            z-index: 5;
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 132px;
              padding: 30px 0 30px 130px;
              background: url(${call}) 40px center no-repeat;
              color: white;
              font-weight: bold;
            `}
          >
            {t("call")}
            <div
              css={css`
                padding-top: 24px;
              `}
            >
              {city.phones.map(phone => (
                <a
                  href={`tel:${phone}`}
                  css={css`
                    display: block;
                    text-decoration: none;
                    color: white;
                    font-size: 14px;
                    padding-bottom: 10px;
                    font-weight: normal;
                  `}
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <div
            css={css`
              width: 100%;
              height: 132px;
              padding: 30px 0 30px 130px;
              background: url(${location}) 40px center no-repeat;
              color: white;
              font-weight: bold;
            `}
          >
            {t("visitUs")}
            <p
              css={css`
                font-size: 14px;
                font-weight: normal;
              `}
            >
              {t(city.street)}
            </p>
          </div>
          <div
            css={css`
              width: 100%;
              height: 132px;
              padding: 30px 0 30px 130px;
              background: url(${write}) 40px center no-repeat;
              color: white;
              font-weight: bold;
            `}
          >
            {t("writeUs")}
            <a
              href={`mailto:${city.email}`}
              css={css`
                text-decoration: none;
                color: white;
                font-size: 14px;
                display: block;
                padding-top: 18px;
                font-weight: normal;
              `}
            >
              {city.email}
            </a>
          </div>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </Layout>
  )
}
