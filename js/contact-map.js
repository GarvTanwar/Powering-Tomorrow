document.addEventListener("DOMContentLoaded", () => {
  const contactMapElement = document.querySelector("#contact-map");

  if (!contactMapElement || !window.L) return;

  const poweringTomorrowLocation = [-37.8136, 144.9631];

  const map = L.map(contactMapElement, {
    center: poweringTomorrowLocation,
    zoom: 15,
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    dragging: false,
    boxZoom: false,
    keyboard: false,
    tap: false,
    touchZoom: false,
    attributionControl: true
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 20,
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }).addTo(map);

  const markerIcon = L.divIcon({
    className: "",
    html: '<span class="contact-map-marker"><span>Powering Tomorrow</span></span>',
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -34]
  });

  L.marker(poweringTomorrowLocation, { icon: markerIcon })
    .addTo(map)
    .bindPopup("<strong>Powering Tomorrow</strong>123 Green Street")
    .openPopup();

  map.whenReady(() => {
    map.invalidateSize();
    map.setView(poweringTomorrowLocation, 15, { animate: false });
  });

  window.setTimeout(() => map.invalidateSize(), 100);
  window.setTimeout(() => map.invalidateSize(), 400);
  window.addEventListener("resize", () => map.invalidateSize());
});
