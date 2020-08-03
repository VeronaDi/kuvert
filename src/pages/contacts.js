import React from "react"
// import { Map, Marker, Popup, TileLayer } from "react-leaflet"

import "ol/ol.css"
import { Map, View } from "ol"
import TileLayer from "ol/layer/Tile"
import OSMSource from "ol/source/OSM"
import VectorLayer from "ol/layer/Vector"
import { fromLonLat } from "ol/proj"
import { Icon, Style } from "ol/style"
import Feature from "ol/Feature"
import Point from "ol/geom/Point"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import Footer from "../components/Footer"
import ContactUs from "../components/ContactUsForm"

import call from "../images/call.png"
import location from "../images/location.png"
import write from "../images/write_us.png"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import contacts from "../data/contacts"

const cities = [
  {
    name: "Ivano-Frankivsk",
    position: [24.7253379, 48.9064118],
    phoneOffice: "+38 050 377 08 01",
    phone: "+38 067 327 08 01",
    location: "Ivano-Frankivsk Makukha Str, 6",
    email: "info@kuvert.if.ua",
  },
  {
    name: "Kyiv",
    position: [30.3981391, 50.4214245],
    phoneOffice: "+38 067 009 08 01",
    location: 'м. Київ, вул. Сім"ї Сосніних, 9',
    email: "kuvert.kiev@gmail.com",
  },
  {
    name: "Kharkiv",
    position: [36.280344, 49.977438],
    phoneOffice: "+38 050 433 25 66",
    location: "м. Харків, вул. Плеханівська, 117",
    email: "kuvert.kharkiv@gmail.com",
  },
  {
    name: "Dnipro",
    position: [35.070495, 48.458113],
    phoneOffice: "+38 050 339 20 21",
    location: "м. Дніпро, вул. Акінфієва, 18",
    email: "kuvert.dn@gmail.com",
  },
  {
    name: "Lviv",
    position: [24.064176, 48.458113],
    phoneOffice: "+38 0322 70 91 91",
    phone: "+38 050 317 03 87",
    location: "м. Львів, вул. Зелена 251",
    email: "konwert@ukr.net",
  },
]

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  const [city, setCity] = React.useState(cities[0])

  return (
    <Layout>
      <SEO title="Contacts" />
      <MainNav {...props} />
      <section
        css={css`
          width: 100vw;
          height: 100vh;
          background: #ffffff;
        `}
      >
        <div
          css={css`
            width: 783px;
            margin: 0 auto;
            padding: 35px 0;
          `}
        >
          {cities.map((currentCity, index) => (
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
              {currentCity.name}
            </button>
          ))}
        </div>

        <div
          css={css`
            width: 432px;
            height: 397px;
            position: absolute;
            left: 91px;
            top: 84px;
            background: rgba(56, 56, 56, 0.732);
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
              <a
                href={`tel:${city.phoneOffice}`}
                css={css`
                  text-decoration: none;
                  color: white;
                  font-size: 14px;
                  padding-right: 5px;
                  font-weight: normal;
                `}
              >
                {city.phoneOffice}
              </a>
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
              {city.location}
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
