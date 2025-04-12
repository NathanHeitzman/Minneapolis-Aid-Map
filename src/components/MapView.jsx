import React from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Minneapolis = [44.9778,-93.2650]
function MapView({}) {
    return (
        <MapContainer 
        center ={Minneapolis} 
        zoom={13} 
        scrollWheelZoom={true}
        className="leaflet-map"
        style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={Minneapolis}>
                <Popup>
                    testing testing 123 bazinga
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapView;