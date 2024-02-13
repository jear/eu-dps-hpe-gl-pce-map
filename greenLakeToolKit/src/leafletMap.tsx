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
  const [position, setPosition] = useState(latLng(45.71587354143691, 4.934977515880003));
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
      <Popup>A close location to where you are</Popup>
    </Marker>
  );
};

export const LeafletMap = () => {
  const x_lys = 45.71587354143691;
  const y_lys = 4.934977515880003;

  return (
    <>
      <MapContainer center={[x_lys, y_lys]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[x_lys, y_lys]}
          eventHandlers={{
            click: () => {
              console.log("lat: ", x_lys, "long: ", y_lys);
            },
          }}
        >
          <Popup>
            This app runs here. <br /> Powered by HPE GreenLake.
          </Popup>
        </Marker>

        <LocationMarker />
      </MapContainer>
    </>
  );
};
