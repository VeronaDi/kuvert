import React from "react"

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
    position:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2622.441663316134!2d24.724943999999994!3d48.906977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c1593adf868d%3A0x4db4ca10c71da75f!2z0JrQo9CS0JXQoNCiLdCj0JrQoNCQ0IfQndCQLCDQotCe0JI!5e0!3m2!1suk!2suk!4v1414147502833",
    phoneOffice: "+38 050 377 08 01",
    phone: "+38 067 327 08 01",
    location: "Ivano-Frankivsk Makukha Str, 6",
    email: "info@kuvert.if.ua",
  },
  {
    name: "Kyiv",
    position:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1797.4214882411768!2d30.39014271255929!3d50.42362964778817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbf270b03ff3%3A0x8a7d5abd981142ed!2z0LLRg9C7LiDQodGW0Lwn0Zcg0KHQvtGB0L3RltC90LjRhSwgOSwg0JrQuNGX0LI!5e0!3m2!1suk!2sua!4v1455004325667",
    phoneOffice: "+38 067 009 08 01",
    location: 'м. Київ, вул. Сім"ї Сосніних, 9',
    email: "kuvert.kiev@gmail.com",
  },
  {
    name: "Kharkiv",
    position:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2565.7943551646754!2d36.264592!3d49.977715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a083c0724a5b%3A0xd3b662a08de83dac!2z0JrQo9CS0JXQoNCiLdCj0JrQoNCQ0IfQndCQINCi0J7Qkiwg0KXQsNGA0LrRltCy0YHRjNC60LAg0YTRltC70ZbRjw!5e0!3m2!1sru!2suk!4v1414150387489",
    phoneOffice: "+38 050 433 25 66",
    location: "м. Харків, вул. Плеханівська, 117",
    email: "kuvert.kharkiv@gmail.com",
  },
  {
    name: "Dnipro",
    position:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2645.9191385710797!2d35.070558!3d48.45808099999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2d21b262e8b%3A0xbe1125e92be63390!2z0JrRg9Cy0LXRgNGCLdCj0LrRgNCw0LjQvdCw!5e0!3m2!1sru!2suk!4v1414150313408",
    phoneOffice: "+38 050 339 20 21",
    location: "м. Дніпро, вул. Акінфієва, 18",
    email: "kuvert.dn@gmail.com",
  },
  {
    name: "Lviv",
    position:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.909334117986!2d24.061987715385918!3d49.80657217939167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae92f576c5245%3A0xecf923d88f67dd25!2z0KPQutGA0ZbQvdCy0LXRgdGC0L_RgNC40LvQsNC0INCf0J8!5e0!3m2!1suk!2sua!4v1584883196421!5m2!1suk!2sua",
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
        <iframe
          src={city.position}
          title={city.name}
          css={css`
            width: 100%;
            height: 600px;
          `}
        />
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
