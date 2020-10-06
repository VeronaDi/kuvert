import React from "react"
import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Steps from "../components/Steps"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import logoGrey from "../images/logoGrey.png"

let requests = [
  {
    name: { en: "Warehouse request", uk: "Складський запит" },
    text: {
      en:
        "If you want to choose products from warehouse, this option is for you.",
      uk: "Якщо бажаєте обрати продукцію зі складу, цей варіант саме для Вас.",
    },
    img: "/icon/request-basic.png",
    id: "basicform",
  },
  {
    name: { en: "Print request", uk: "Запит друку" },
    text: {
      en:
        "If you want products with your own printing, this option is for you.",
      uk: "Якщо бажаєте продукцію з власним друком, цей варіант саме для Вас.",
    },
    img: "/icon/request-printed.png",
    id: "printform",
  },
  {
    name: { en: "Custom request", uk: "Індивідуальний запит" },
    text: {
      en:
        "If you have your own design ideas and need maximum flexibility in envelope design, this option is for you.",
      uk:
        "Якщо бажаєте продукцію з власними параметрами, цей варіант саме для Вас.",
    },
    img: "/icon/request-custom.png",
    id: "individualform",
  },
]

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  const steps = [
    t("requestType"),
    t("requestOrderCreate"),
    t("requestPersonal"),
  ]

  return (
    <Layout>
      <SEO title="Request" />
      <Link
        css={css`
          background: url(${logoGrey}) center center no-repeat;
          width: 190px;
          height: 66px;
          background-size: cover;
          position: absolute;
          top: 20px;
          left: 30px;
        `}
        to="/"
      ></Link>
      <Steps steps={steps} activeStep={0} />
      <h1
        css={css`
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 50px;
          text-align: center;
        `}
      >
        {t("chooseType")}
      </h1>
      <section
        css={css`
          position: relative;
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 178px;
            background: #b40039;
            position: absolute;
            top: 120px;
            z-index: 1;
            @media (max-width: 1024px) {
              display: none;
            }
          `}
        />
        <div
          className="row"
          css={css`
            position: absolute;
            top: 0px;
            z-index: 5;
          `}
        >
          {requests.map(({ name, text, img, id }) => (
            <div className="w-full md:w-1/3 px-2">
              <LocalizedLink
                key={id}
                to={`/${id}`}
                css={css`
                  height: 60vh;
                  background: #ffffff;
                  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  text-align: center;
                  cursor: pointer;
                  text-decoration: none;
                  color: #000000;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  align-items: center;
                  padding: 100px 40px;
                  @media (max-width: 1024px) {
                    height: auto;
                    flex-direction: row;
                    margin-bottom: 25px;
                    padding: 25px 17px;
                    text-align: left;
                    justify-content: flex-start;
                    width: 100%;
                  }
                `}
              >
                <div>
                  <img
                    src={img}
                    alt={`${img} type`}
                    css={css`
                      width: 90px;
                    `}
                  />
                </div>
                <div
                  css={css`
                    @media (max-width: 1024px) {
                      padding: 0 20px;
                    }
                  `}
                >
                  <h4
                    css={css`
                      font-weight: 500;
                      font-size: 36px;
                      margin: 0;
                      @media (max-width: 1024px) {
                        font-size: 18px;
                      }
                    `}
                  >
                    {t(name)}
                  </h4>
                  <p
                    css={css`
                      font-size: 18px;
                      line-height: 27px;
                      @media (max-width: 1024px) {
                        font-size: 14px;
                        margin-bottom: 0;
                      }
                    `}
                  >
                    {t(text)}
                  </p>
                </div>
              </LocalizedLink>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
