import React from "react"
import { Link } from "gatsby"
import LocalizedLink from "../components/LocalizedLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import logoGrey from "../images/logoGrey.png"

let requests = [
  {
    name: { en: "Warehouse request", uk: "Складський запит" },
    img: "../images/request-basic.png",
    id: "basicform",
  },
  {
    name: { en: "Print request", uk: "Запит друку" },
    img: "../images/request-printed.png",
    id: "printform",
  },
  {
    name: { en: "Individual request", uk: "Індивідуальний запит" },
    img: "../images/request-custom.png",
    id: "individualform",
  },
]

export default props => {
  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

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
      <section
        css={css`
          display: flex;
          flex-directon: row;
          position: relative;
          left: 50%;
          -webkit-transform: translate(-50%, -2%);
          transform: translate(-50%, -2%);
          width: 40vw;
          height: 44px;
          font-size: 14px;
          font-weight: bold;
          margin: 80px 0 50px 0;
        `}
      >
        <div
          css={css`
            color: #b40039;
            border-bottom: 3px solid #b40039;
            width: 261px;
          `}
        >
          <span
            css={css`
              font-size: 26px;
              padding-right: 5px;
            `}
          >
            1
          </span>
          {t("requestType")}
        </div>
        <div
          css={css`
            color: #b4b4b4;
            border-bottom: 3px solid #b4b4b4;
            width: 280px;
          `}
        >
          <span
            css={css`
              font-size: 26px;
              padding-right: 5px;
            `}
          >
            2
          </span>
          {t("requestOrderCreate")}
        </div>
        <div
          css={css`
            color: #b4b4b4;
            border-bottom: 3px solid #b4b4b4;
            width: 261px;
          `}
        >
          <span
            css={css`
              font-size: 26px;
              padding-right: 5px;
            `}
          >
            3
          </span>
          {t("requestPersonal")}
        </div>
      </section>
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
          display: flex;
          justify-content: space-around;
          flex-direction: row;
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 178px;
            background: #b40039;
            position: absolute;
            bottom: 175px;
          `}
        >
          {requests.map(({ name, img, id }) => (
            <LocalizedLink
              key={id}
              to={`/${id}`}
              css={css`
                text-decoration: none;
                width: 28%;
                height: 60vh;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                z-index: 1;
                background: url(${img}), #ffffff;
                background-repeat: no-repeat;
                background-position: top 15vh left 50%;
                text-align: center;
                padding: 0 50px;
                font-size: 18px;
                line-height: 27px;
                color: black;
                :visited {
                  color: black;
                }
              `}
            >
              <h4
                css={css`
                  font-size: 36px;
                  padding-top: 30vh;
                  margin: 0;
                  line-height: 1.1;
                `}
              >
                {name}
              </h4>
            </LocalizedLink>
          ))}
        </div>
      </section>
    </Layout>
  )
}
