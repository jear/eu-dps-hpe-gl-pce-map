import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapCustomization.css";
import { useEffect, useState } from "react";
import { Button } from "grommet";
import { LatLng } from "leaflet";
// import { GeodesicCircleClass, GeodesicLine } from "leaflet.geodesic";

const LocationMarker = () => {
  const [position, setPosition] = useState(undefined);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === undefined ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export const LeafletMap = () => {
  const [x, setx] = useState(51.505);
  const [y, sety] = useState(-0.09);

  return (
    <>
      <MapContainer center={[x, y]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[x, y]}
          eventHandlers={{
            click: () => {
              console.log("lat: ", x, "long: ", y);
            },
          }}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <LocationMarker />
      </MapContainer>
    </>
  );
};
