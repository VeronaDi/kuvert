import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import ContactUs from "../components/ContactUsForm"
import LeafletMap from "../components/LeafletMap"

import call from "../images/call.png"
import callDark from "../images/call-dark.png"
import location from "../images/location.png"
import locationDark from "../images/location-dark.png"
import write from "../images/write_us.png"
import writeDark from "../images/write_us-dark.png"
import arrowSelect from "../images/arrow-select.png"

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
          @media screen and (max-width: 943px) {
            height: auto;
          }
        `}
      >
        <div
          css={css`
            width: 783px;
            margin: 0 auto;
            padding: 35px 0;
            @media screen and (max-width: 943px) {
              display: none;
            }
          `}
        >
          {[contacts.factory, ...contacts.offices].map((currentCity, index) => (
            <button
              key={currentCity.city.en}
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

        <div
          css={css`
            padding: 20px 0;
            display: flex;
            justify-content: center;
            @media screen and (min-width: 943px) {
              display: none;
            }
          `}
        >
          <select
            onChange={e =>
              setCity(
                [contacts.factory, ...contacts.offices][e.target.selectedIndex]
              )
            }
            css={css`
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              background: url(${arrowSelect}), #ffffff;
              background-position: 97%;
              background-repeat: no-repeat;
              max-width: 200px;
              width: 100%;
              height: 65px;
              font-size: 16px;
              border: 0;
              border-radius: 3px;
              outline: none;
              color: #414141;
            `}
          >
            {[contacts.factory, ...contacts.offices].map(
              (currentCity, index) => (
                <option
                  key={index}
                  value={currentCity}
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
                </option>
              )
            )}
          </select>
        </div>

        <div
          css={css`
            width: 432px;
            position: absolute;
            left: 91px;
            top: 25%;
            background: rgba(56, 56, 56, 0.8);
            z-index: 5;
            color: #fff;
            a {
              color: #fff;
            }
            @media screen and (max-width: 943px) {
              position: static;
              background: #fff;
              color: #000;
              text-align: center;
              width: 100%;
              max-width: 330px;
              margin: 0 auto 40px auto;
              a {
                color: #000;
              }
            }
          `}
        >
          <div
            css={css`
              width: 100%;
              padding: 30px 0 30px 130px;
              background: url(${call}) 40px center no-repeat;
              font-weight: bold;
              @media screen and (max-width: 943px) {
                background: url(${callDark}) 40px center no-repeat;
                padding-left: 100px;
              }
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
                  key={phone}
                  href={`tel:${phone}`}
                  css={css`
                    display: block;
                    text-decoration: none;
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
              padding: 30px 0 30px 130px;
              background: url(${location}) 40px center no-repeat;
              font-weight: bold;
              @media screen and (max-width: 943px) {
                background: url(${locationDark}) 40px center no-repeat;
                padding-left: 100px;
              }
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
              padding: 30px 0 30px 130px;
              background: url(${write}) 40px center no-repeat;
              font-weight: bold;
              @media screen and (max-width: 943px) {
                background: url(${writeDark}) 40px center no-repeat;
                padding-left: 100px;
              }
            `}
          >
            {t("writeUs")}
            <a
              href={`mailto:${city.email}`}
              css={css`
                text-decoration: none;
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

        <LeafletMap position={city.position} />
      </section>
      <ContactUs />
      <Footer />
    </Layout>
  )
}
