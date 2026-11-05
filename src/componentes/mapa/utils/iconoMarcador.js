import L from "leaflet";
import iconoUrl from "leaflet/dist/images/marker-icon.png";
import iconoRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import sombraUrl from "leaflet/dist/images/marker-shadow.png";

export const iconoPorDefecto = L.icon({
    iconUrl:iconoUrl,
    iconRetinaUrl:iconoRetinaUrl,
    shadowUrl:sombraUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor:[1, -34],
    shadowSize: [41, 41]
})