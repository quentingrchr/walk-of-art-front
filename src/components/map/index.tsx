import React, { useRef, useEffect, useState } from "react"
import { Map as MapGl } from "react-map-gl"
import styles from "./index.module.scss"
import "mapbox-gl/dist/mapbox-gl.css"

const accessToken =
  "pk.eyJ1IjoicXVlbnRpbmdyY2hyIiwiYSI6ImNsNTZycHdjeTA2Y2czaGxmeGVyYzh0cDMifQ.jkEQnKy3I1Rd7cRyEjlfeg"

const accessToken2 =
  "pk.eyJ1IjoicXVlbnRpbmdyY2hyIiwiYSI6ImNsNTZyanNzcjA4dDIzZG5zbHV1MDA1bHQifQ.TlP4iPDrNLXYKTYIZVEOPg"
export type IProps = {}

export const Map: React.FC<IProps> = (props: IProps) => {
  const mapRef = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {}, [])

  return (
    <div>
      <MapGl
        ref={mapRef}
        mapboxAccessToken={accessToken2}
        style={{ width: 600, height: 600 * 0.8 }}
        mapStyle="mapbox://styles/quentingrchr/cl56uzn94000314o2perf5dxt"
        latitude={lat}
        longitude={lng}
      />
    </div>
  )
}
