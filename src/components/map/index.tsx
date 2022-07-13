import React, { useRef, useState } from "react"
import {
  Map as MapGl,
  Marker,
  NavigationControl,
} from "react-map-gl"
import { useController, useFormContext } from "react-hook-form"
import styles from "./index.module.scss"
import "mapbox-gl/dist/mapbox-gl.css"

const INITIAL_STATE = {
  longitude: -2.3522219,
  latitude: 48.856614,
  zoom: 3.5,
}

interface IInitialVP {
  longitude: number
  latitude: number
  zoom: number
}
interface IGalleryMap {
  id: string
  latitude: number
  longitude: number
  price: number
  name: string
}

interface IProps {
  name: string
  required?: boolean
  galleries: IGalleryMap[]
  initialViewport?: IInitialVP
}

const accessToken =
  "pk.eyJ1IjoicXVlbnRpbmdyY2hyIiwiYSI6ImNsNTZyanNzcjA4dDIzZG5zbHV1MDA1bHQifQ.TlP4iPDrNLXYKTYIZVEOPg"

const dummyData: IGalleryMap[] = [
  {
    id: "1",
    lat: 48.852614,
    lng: 2.3522219,
    price: 100,
    name: "Paris",
  },
  {
    id: "2",
    lat: 48.856614,
    lng: 2.3521219,
    price: 90,
    name: "Paris",
  },
  {
    id: "3",
    lat: 48.956614,
    lng: 2.3622219,
    price: 110,
    name: "Paris",
  },
]

export const Map: React.FC<IProps> = ({
  name = "board_id",
  galleries = dummyData,
  initialViewport = INITIAL_STATE,
  required = false,
}: IProps) => {
  const mapRef = useRef(null)
  const [viewport, setViewport] = useState(initialViewport)
  const { control } = useFormContext() // retrieve all hook methods
  const {
    field: { onChange, onBlur, value, ref },
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: required },
    defaultValue: "",
  })

  const handleChange = (boardId: string) => {
    onChange(boardId)
  }

  return (
    <div>
      <MapGl
        ref={mapRef}
        mapboxAccessToken={accessToken}
        style={{ width: 600, height: 600 * 0.8 }}
        {...viewport}
        mapStyle="mapbox://styles/quentingrchr/cl56uzn94000314o2perf5dxt"
        onMove={(evt) => setViewport(evt.viewState)}
      >
        <NavigationControl />
        {galleries.map((item: IGalleryMap) => {
          return (
            <Marker longitude={item.longitude} latitude={item.latitude} anchor="bottom">
              <div
                className={styles.marker}
                onClick={() => handleChange(item.id)}
              >
                <p>{item.price} € / j</p>
              </div>
            </Marker>
          )
        })}
      </MapGl>
    </div>
  )
}
