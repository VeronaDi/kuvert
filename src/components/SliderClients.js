import React from "react"
import Slider from "react-slick"

import { css } from "@emotion/core"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useTranslation } from "react-i18next"

import uapost from "../images/uapost.png"
import aska from "../images/aska.png"
import vuso from "../images/vuso.png"
import ukrsib from "../images/ukrsib.png"

export default () => {
  const { t, i18n } = useTranslation()

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 500,
    cssEase: "linear",
    centerMode: true,
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
          slidesToScroll: 2,
          initialSlide: 1,
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
        height: 375px;
        background-color: white;
        overflow: hidden;
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
        <div>
          <img src={uapost} alt="uapost logo" />
        </div>
        <div>
          <img src={aska} alt="aska logo" />
        </div>
        <div>
          <img src={vuso} alt="vuso logo" />
        </div>
        <div>
          <img src={ukrsib} alt="ukrsib logo" />
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}
