const map = L.map('map-container').setView([31.9, 35.2], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const cities = [
  { name: "رام الله", coords: [31.8996, 35.2066] },
  { name: "القدس", coords: [31.7683, 35.2163] },
  { name: "إربد", coords: [32.5569, 35.8492] },
  { name: "دمشق", coords: [33.5138, 36.2765] },
  { name: "بيروت", coords: [33.8938, 35.5018] }
];

cities.forEach(city => {
  L.marker(city.coords).addTo(map)
    .bindPopup(city.name);
});
