import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";
import "leaflet-extra-markers/dist/js/leaflet.extra-markers.min.js";
import "./InteractiveMap.css";

const points = [
  { id: 1, name: "Saranwadi", position: [18.246136, 75.525303], history: "Handpump water disinfection project in Saranwadi, Maharashtra, providing clean drinking water to the village." },
  { id: 2, name: "Rui", position: [18.268241, 75.482333], history: "Rui village in Maharashtra, India, is known for its community-driven water management initiatives." },
  { id: 3, name: "Asu", position: [18.228297, 75.533406], history: "Asu village in Maharashtra, India, is recognized for its efforts in sustainable water management and community health." },
  { id: 4, name: "Brahmagaon", position: [18.246758, 75.526577], history: "Handpump water disinfection project in Brahmagaon, Maharashtra, ensuring access to safe drinking water." },
  { id: 5, name: "Bahadarpur Saini", position: [29.91994, 77.9883], history: "Handpump water disinfection project in Bahadarpur Saini, Uttrakhand, providing clean drinking water to the village." },
];

const blueWaterIcon = L.ExtraMarkers.icon({
  icon: "fa-tint",
  markerColor: "blue",
  shape: "circle",
  prefix: "fa"
});

const InteractiveMap = () => {
  const handleMarkerClick = (e) => {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    ripple.style.left = `${e.originalEvent.clientX - 15}px`;
    ripple.style.top = `${e.originalEvent.clientY - 15}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  };

  return (
    <div className="map-container">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
        Interactive Map
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

      <MapContainer
        center={[22.9734, 78.6569]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {points.map((point) => (
            <Marker
              key={point.id}
              position={point.position}
              icon={blueWaterIcon}
              eventHandlers={{ click: (e) => handleMarkerClick(e) }}
            >
              <Tooltip>{point.name}</Tooltip>
              <Popup>
                <h3>{point.name}</h3>
                <p>{point.history}</p>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
