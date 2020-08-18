import React, { Component } from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

import "leaflet/dist/leaflet.css"

import contacts from "../data/contacts"

export default class SimpleExample extends Component {
  state = {
    lat: 48.9064118,
    lng: 24.7253379,
    zoom: 15,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    if (typeof window !== "undefined") {
      return (
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            {/* <Popup>{t("popupMap")}</Popup> */}
          </Marker>
        </Map>
      )
    }
    return null
  }
}
