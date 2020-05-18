import React from "react"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MainNav from "../components/MainNav"
import Footer from "../components/Footer"
import BtnSend from "../components/BtnSend"

import plane from "../images/plane.png"
import call from "../images/call.png"
import location from "../images/location.png"
import write from "../images/write_us.png"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

const cities = [
  {
    name: "Ivano-Frankivsk",
    position: [48.9064118, 24.7253379],
    phoneOffice: "+38 050 377 08 01",
    phone: "+38 067 327 08 01",
    location: "Ivano-Frankivsk Makukha Str, 6",
    email: "info@kuvert.if.ua",
  },
  {
    name: "Kyiv",
    position: [50.4214245, 30.3981391],
    phoneOffice: "+38 067 009 08 01",
    location: 'м. Київ, вул. Сім"ї Сосніних, 9',
    email: "kuvert.kiev@gmail.com",
  },
  {
    name: "Kharkiv",
    position: [49.977438, 36.280344],
    phoneOffice: "+38 050 433 25 66",
    location: "м. Харків, вул. Плеханівська, 117",
    email: "kuvert.kharkiv@gmail.com",
  },
  {
    name: "Dnipro",
    position: [48.458113, 35.070495],
    phoneOffice: "+38 050 339 20 21",
    location: "м. Дніпро, вул. Акінфієва, 18",
    email: "kuvert.dn@gmail.com",
  },
  {
    name: "Lviv",
    position: [49.806572, 24.064176],
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

  const [cityIndex, setCityIndex] = React.useState(0)
  const city = cities[cityIndex]
  console.log(city)

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
          {cities.map((city, index) => (
            <button
              onClick={() => setCityIndex(index)}
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
                border-right: none;
                & :last-child {
                  border-right: 2px solid #c1c1c1;
                }
                & :active {
                  border: 2px solid #020202;
                  color: #020202;
                }
              `}
            >
              {city.name}
            </button>
          ))}
        </div>
        <div
          css={css`
            position: relative;
          `}
        >
          <iframe
            title="mapkuvert"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10935.391700386486!2d24.725399862651894!3d48.90620217278415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4db4ca10c71da75f!2z0JrRg9Cy0LXRgNGCLdCj0LrRgNCw0ZfQvdCwLCDQotCe0JI!5e0!3m2!1suk!2sua!4v1588173474444!5m2!1suk!2sua"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            css={css`
              width: 100%;
              height: 689px;
              position: relative;
              z-index: 1;
              padding-bottom: 76px;
            `}
          ></iframe>
          {/* {typeof window !== "undefined" && (
              <Map center={city.position} zoom={13}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={city.position}>
                  <Popup
                    css={css`
                      color: red;
                    `}
                  >
                    Kuvert-Ukraine
                  </Popup>
                </Marker>
              </Map>
            )} */}
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
                {cities.map((city, index) => (
                  <a
                    onClick={() => setCityIndex(index)}
                    href="tel:{city.phoneOffice}"
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
                ))}
                {cities.map((city, index) => (
                  <a
                    onClick={() => setCityIndex(index)}
                    href="tel:{city.phone}"
                    css={css`
                      text-decoration: none;
                      color: white;
                      font-size: 14px;
                      font-weight: normal;
                    `}
                  >
                    {city.phone}
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
              {cities.map((city, index) => (
                <p
                  onClick={() => setCityIndex(index)}
                  css={css`
                    font-size: 14px;
                    font-weight: normal;
                  `}
                >
                  {city.location}
                </p>
              ))}
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
              {cities.map((city, index) => (
                <a
                  onClick={() => setCityIndex(index)}
                  href="mailto:{city.email}"
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
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        css={css`
          width: 100vw;
          height: 680px;
          background: url(${plane}), #e5e5e5;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        `}
      >
        <h5
          css={css`
            font-size: 36px;
            color: black;
            width: 640px;
            margin: 0 auto 43px auto;
            padding-top: 55px;
            line-height: 54px;
            text-align: center;
          `}
        >
          {t("sendUsMessage")}
        </h5>
        <div
          css={css`
            width: 1020px;
            height: 290px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("name")}
            </label>
            <input
              type="text"
              placeholder={t("color")}
              css={css`
                width: 460px;
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                border-radius: 3px;
                padding: 20px;
                outline: none;
                margin-right: 100px;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                }
              `}
            ></input>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 16px;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              css={css`
                width: 460px;
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                border-radius: 3px;
                padding: 20px;
                outline: none;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                }
              `}
            ></input>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 16px;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("phone")}
            </label>
            <input
              type="phone"
              placeholder="+380123456789"
              css={css`
                width: 460px;
                height: 65px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                border-radius: 3px;
                padding: 20px;
                outline: none;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                }
              `}
            ></input>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("department")}
            </label>
            <select
              css={css`
                width: 460px;
                height: 65px;
                background: #ffffff;
                font-size: 16px;
                border: 1px solid #d6d6d6;
                border-radius: 3px;
                outline: none;
                color: #414141;
                :focus {
                  border: 2px solid #c4c4c4;
                }
              `}
            >
              <option disabled selected>
                {t("chooseDepartment")}
              </option>
              <option value="Sales department">{t("salesDep")}</option>
              <option value="Production department">
                {t("productionDep")}
              </option>
              <option value="CEO">{t("CEO")}</option>
            </select>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <label
              css={css`
                font-size: 12px;
                padding-bottom: 5px;
              `}
            >
              {t("message")}
            </label>
            <textarea
              placeholder="Write your message"
              css={css`
                width: 460px;
                height: 165px;
                background: #ffffff;
                border: 1px solid #d6d6d6;
                border-radius: 3px;
                padding: 20px;
                outline: none;
                resize: none;
                ::-webkit-input-placeholder {
                  font-size: 16px;
                  color: #ababab;
                }
                :focus {
                  border: 2px solid #c4c4c4;
                }
              `}
            ></textarea>
          </div>
        </div>
        <div
          css={css`
            width: 460px;
            margin: 60px auto 0 auto;
          `}
        >
          <BtnSend />
        </div>
      </section>
      <Footer />
    </Layout>
  )
}
