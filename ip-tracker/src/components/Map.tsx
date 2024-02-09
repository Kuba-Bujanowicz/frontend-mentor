import { component$, useVisibleTask$ } from "@builder.io/qwik";
import L from "leaflet"; // Import the 'leaflet' package

export const Map = component$(() => {
  useVisibleTask$(() => {
    const map = L.map("map").setView([51.505, -0.09], 13); // Add type declaration for 'map' variable

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  });
  return <div class="z--1" id="map"></div>;
});
