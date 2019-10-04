import React from "react"
import Slider from "react-slick"

import { css } from "@emotion/core"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useTranslation } from "react-i18next"

let certificate = [
  { img: "/certification/iso.png", name: "ISO 9001:2015" },
  { img: "/certification/iso.png", name: "iso" },
  { img: "/certification/iso.png", name: "iso" },
  { img: "/certification/iso.png", name: "iso" },
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
        padding: 40px 5% 100px;
        text-align: center;
      `}
    >
      <h2
        css={css`
          font-size: 36px;
          text-align: center;
          padding-bottom: 40px;
          color: black;
          line-height: 42px;
          font-weight: bold;
        `}
      >
        Certificates and Awards
      </h2>
      <Slider {...settings}>
        {certificate.map(({ name, img }) => (
          <div
            css={css`
              padding: 0 40px;
              outline: none;
            `}
          >
            <img src={img} alt={`${name} logo`} />
            <h6
              css={css`
                font-weight: normal;
                font-size: 24px;
                margin: 0;
                padding-top: 30px;
              `}
            >
              {name}
            </h6>
          </div>
        ))}
      </Slider>
    </div>
  )
}
