import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapCustomization.css";
import { useState } from "react";
import { latLng } from "leaflet";

// import { GeodesicCircleClass, GeodesicLine } from "leaflet.geodesic";

const LocationMarker = () => {
  const [position, setPosition] = useState(latLng(51.505, -0.09));
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export const LeafletMap = () => {
  const x = 51.505;
  const y = -0.09;

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
