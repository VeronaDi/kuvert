import React from "react"
import { css } from "@emotion/core"
import { useTranslation } from "react-i18next"

import facebook from "../images/facebook.svg"
import linkedin from "../images/linkedin.svg"

import contacts from "../data/contacts"

const Office = ({ city, street, phones }) => {
  return (
    <div
      css={css`
        flex-grow: 1;
        flex-basis: 25%;
        font-weight: 500;
        font-size: 16px;
        padding: 0 10px;

        :first-of-type,
        :last-of-type {
          padding: 0;
        }
        @media (max-width: 1144px) {
          font-weight: normal;
          font-size: 14px;
          padding: 0;
        }
      `}
    >
      <p>{city}</p>
      <p>{street}</p>

      {phones.map(phone => (
        <a
          key={phone}
          href={`tel:${phone}`}
          css={css`
            text-decoration: none;
            color: white;
            font-weight: 500;
            font-size: 16px;
            display: flex;
            flex-direction: column;
            padding-bottom: 15px;
            @media (max-width: 1144px) {
              font-weight: normal;
              font-size: 14px;
            }
          `}
        >
          {phone}
        </a>
      ))}
    </div>
  )
}

export default props => {
  const T = useTranslation()
  // if (T.i18n.language !== props.pageContext.langKey) {
  //   T.i18n.changeLanguage(props.pageContext.langKey)
  // }
  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  return (
    <section
      css={css`
        background: #4f4f4f;
        position: relative;
        overflow: auto;
      `}
    >
      <div
        css={css`
          border: 3px solid #ffffff;
          color: white;
          display: flex;
          justify-content: space-around;
          font-size: 18px;
          margin: 140px 10%;
          @media (max-width: 1144px) {
            flex-direction: column;
            text-align: center;
            margin: 24px 10px;
          }
        `}
      >
        <div
          css={css`
            padding: 30px 30px;
            border-right: 3px solid #ffffff;

            @media (max-width: 1144px) {
              border-bottom: 3px solid #ffffff;
              border-right: none;
            }
          `}
        >
          <h4
            css={css`
              font-weight: bold;
              font-size: 24px;
              margin-bottom: 2em;
              @media (max-width: 1144px) {
                font-size: 18px;
                margin-bottom: 1em;
              }
            `}
          >
            {t("addressOfFactory")}
          </h4>
          <Office
            city={t(contacts.factory.city)}
            street={t(contacts.factory.street)}
            phones={contacts.factory.phones}
          />
        </div>

        <div
          css={css`
            padding: 30px 30px;
          `}
        >
          <h4
            css={css`
              font-weight: bold;
              font-size: 24px;
              margin-bottom: 2em;
              @media (max-width: 1144px) {
                font-size: 18px;
                margin-bottom: 1em;
              }
            `}
          >
            {t("addressBranch")}
          </h4>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              @media (max-width: 1144px) {
                flex-direction: column;
                text-align: center;
              }
            `}
          >
            {contacts.offices.map(({ city, street, phones }) => (
              <Office
                key={t(city)}
                city={t(city)}
                street={t(street)}
                phones={phones}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        css={css`
          background: #383838;
          color: white;
          text-align: center;
          font-weight: 500;
          font-size: 20px;
          display: flex;
          flex-direction: row;
          @media (max-width: 1144px) {
            flex-direction: column-reverse;
            align-items: center;
            justify-content: space-between;
            padding: 29px 0 79px 0;
          }
        `}
      >
        <div
          css={css`
            flex-basis: 60%;
            margin-left: 20%;
            padding: 12px;
            @media (max-width: 1144px) {
              margin-left: 0;
            }
          `}
        >
          <a
            href="https://www.mayer-kuvert-network.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            css={css`
              text-decoration: none;
              font-size: 20px;
              color: white;
            `}
          >
            «Mayer-Kuvert-network GmbH»
          </a>
          <p
            css={css`
              font-weight: bold;
              font-size: 14px;
              margin-bottom: 0;
            `}
          >
            Copyright © 2020 Kuvert-Ukraine. All rights reserved.
          </p>
        </div>
        <div
          css={css`
            flex-basis: 20%;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          `}
        >
          <a
            href="https://www.facebook.com/kuvert.ua/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            css={css`
              display: inline-block;
              background: url(${facebook});
              width: 51px;
              height: 51px;
              color: transparent;
              margin-right: 10px;
            `}
          >
            facebook
          </a>
          <a
            href="https://www.linkedin.com/company/kuvertua/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            css={css`
              display: inline-block;
              background: url(${linkedin});
              width: 51px;
              height: 51px;
              color: transparent;
            `}
          >
            linkedin
          </a>
        </div>
      </div>
    </section>
  )
}
