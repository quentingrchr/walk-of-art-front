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
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
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
  initialViewport?: IInitialVP,
  setGalleryId: (arg: string) => void
}

const accessToken =
  "pk.eyJ1IjoicXVlbnRpbmdyY2hyIiwiYSI6ImNsNTZyanNzcjA4dDIzZG5zbHV1MDA1bHQifQ.TlP4iPDrNLXYKTYIZVEOPg"


export const Map: React.FC<IProps> = ({
  name = "board_id",
  galleries,
  initialViewport = INITIAL_STATE,
  required = false,
  setGalleryId
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
                onClick={() => setGalleryId(item.id)}
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
