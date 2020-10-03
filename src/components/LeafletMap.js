import React from "react"
import { Map, TileLayer, Marker } from "react-leaflet"
import L from "leaflet"

import { css } from "@emotion/core"

import "leaflet/dist/leaflet.css"

export default ({ position }) => (
  <Map
    center={position}
    zoom={15}
    css={css`
      @media screen and (max-width: 943px) {
        height: 280px;
      }
    `}
  >
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker
      position={position}
      icon={L.icon({
        iconUrl: "/icon/markerIcon.png",
        iconSize: [25, 34],
        iconAnchor: [13, 34],
      })}
    ></Marker>
  </Map>
)
