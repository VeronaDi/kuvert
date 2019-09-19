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
  { img: "/clients/uapost.png", name: "uapost" },
  { img: "/clients/aska.png", name: "aska" },
  { img: "/clients/vuso.png", name: "vuso" },
  { img: "/clients/ukrsib.png", name: "ukrsib" },
]

export default () => {
  const { t, i18n } = useTranslation()

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    speed: 500,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
          font-size: 48px;
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
