const socket = io();

// Initialize the map first
const map = L.map("map").setView([0, 0], 10);
const markers = {};

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Vivek © OpenStreetMap",
}).addTo(map);

// Watch your location
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      console.log("📡 Sending location:", coords);
      socket.emit("send-location", coords);

      // Add or move your own marker
      if (!markers["me"]) {
        markers["me"] = L.marker([coords.latitude, coords.longitude]).addTo(map);
      } else {
        markers["me"].setLatLng([coords.latitude, coords.longitude]);
      }

      // Center map on your location
      map.setView([coords.latitude, coords.longitude]);
    },
   (err) => {
  console.error(" Geolocation error:", err);
  // यह नया अलर्ट आपको असली एरर बताएगा
  alert("LOCATION ERROR!\nCode: " + err.code + "\nMessage: " + err.message);
},
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0,
    }
  );
} else {
  alert("Geolocation is not supported in your browser.");
}

// Receive others' locations
socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;

  if (id !== socket.id) {
    if (markers[id]) {
      markers[id].setLatLng([latitude, longitude]);
    } else {
      markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
  }
});

// Remove marker when a user disconnects
socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});