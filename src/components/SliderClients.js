import React from "react"
import Slider from "react-slick"

import { css } from "@emotion/core"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useTranslation } from "react-i18next"

let clients = [
  { img: "/clients/uapost.png", name: "uapost" },
  { img: "/clients/aska.png", name: "aska" },
  { img: "/clients/vuso.png", name: "vuso" },
  { img: "/clients/ukrsib.png", name: "ukrsib" },
  { img: "/clients/morshinska1.png", name: "morshinska" },
  { img: "/clients/cersanit1.png", name: "cersanit" },
  { img: "/clients/RIXOS1.png", name: "rixos" },
  { img: "/clients/ATL1.png", name: "ATL" },
  { img: "/clients/Trans-LLC1.png", name: "trans-LLC" },
]

export default () => {
  const { t, i18n } = useTranslation()

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 500,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div
      css={css`
        background-color: white;
        padding: 40px 5% 100px;
      `}
    >
      <h2
        css={css`
          font-weight: 500;
          font-size: 48px;
          line-height: 56px;
          text-align: center;
          padding-bottom: 40px;
        `}
      >
        {t("ourClients")}
      </h2>
      <Slider {...settings}>
        {clients.map(({ name, img }) => (
          <div
            css={css`
              padding: 0 40px;
              outline: none;
            `}
          >
            <img src={img} alt={`${name} logo`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
