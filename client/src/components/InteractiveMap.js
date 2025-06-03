import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";
import "leaflet-extra-markers/dist/js/leaflet.extra-markers.min.js";
import "./InteractiveMap.css"; // Custom CSS for ripple effect

// Define some random points in India
const points = [
  {
    id: 1,
    name: "Taj Mahal",
    position: [27.1751, 78.0421],
    history: "The Taj Mahal was commissioned in 1632 by the Mughal emperor Shah Jahan."
  },
  {
    id: 2,
    name: "Gateway of India",
    position: [18.921984, 72.834654],
    history: "The Gateway of India was built in 1924 to commemorate the visit of King George V and Queen Mary."
  },
  {
    id: 3,
    name: "Charminar",
    position: [17.3616, 78.4747],
    history: "Charminar was constructed in 1591 and is a historical monument in Hyderabad."
  },
  {
    id: 4,
    name: "India Gate",
    position: [28.6129, 77.2295],
    history: "India Gate is a war memorial built in 1931 to honor soldiers of the Indian Army."
  },
  {
    id: 5,
    name: "Mysore Palace",
    position: [12.3051, 76.6551],
    history: "Mysore Palace is a historical palace and royal residence in the city of Mysore, Karnataka."
  }
];

// Create a custom blue water droplet marker using ExtraMarkers
const blueWaterIcon = L.ExtraMarkers.icon({
  icon: "fa-tint", // water droplet icon (Font Awesome)
  markerColor: "blue",
  shape: "circle",
  prefix: "fa"
});

const InteractiveMap = () => {
  const mapRef = useRef(null);

  const handleMarkerClick = (e) => {
    // Create the ripple element
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    ripple.style.left = `${e.originalEvent.clientX - 15}px`;
    ripple.style.top = `${e.originalEvent.clientY - 15}px`;

    document.body.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  return (
    <div className="map-container">
      <MapContainer
        center={[22.9734, 78.6569]} // Centered on India
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "100%" }}
        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((point) => (
          <Marker
            key={point.id}
            position={point.position}
            icon={blueWaterIcon}
            eventHandlers={{
              click: (e) => handleMarkerClick(e),
            }}
          >
            <Tooltip>{point.name}</Tooltip>
            <Popup>
              <h3>{point.name}</h3>
              <p>{point.history}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
