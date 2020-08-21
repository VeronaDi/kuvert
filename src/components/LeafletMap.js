import React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

import "leaflet/dist/leaflet.css"

export default ({ position }) => (
  <Map center={position} zoom={14}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker
      position={position}
      icon={L.icon({
        iconRetinaUrl: "markerIcon1.png",
        iconSize: [25, 34],
        iconAnchor: [13, 34],
      })}
    >
      {/* <Popup>{t("popupMap")}</Popup> */}
    </Marker>
  </Map>
)
