import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

const MapView: React.FC = () => {
    const position: [number, number] = [51.505, -0.09];

    return (
        <div className="mapview-container">
            <MapContainer center={position} zoom={3} scrollWheelZoom={false} className="map">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>A pretty popup</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapView;
