"use client";

import { useEffect, useRef } from "react";
import "@neshan-maps-platform/mapbox-gl-react/dist/style.css";
import mapboxgl from "@neshan-maps-platform/mapbox-gl";
import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";

export default function MapComponent() {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  const onInit = (neshanMap) => {
    new nmp_mapboxgl.Marker({ color: "#005DAD" })
      .setLngLat([51.4055941, 35.758954])
      .addTo(neshanMap);


  };

  useEffect(() => {
    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        mapType: mapboxgl.Map.mapTypes.neshanVector,
        container: mapContainerRef.current,
        zoom: 12,
        pitch: 0,
        center: [51.4055941, 35.758954],
        minZoom: 2,
        maxZoom: 21,
        trackResize: true,
        mapKey: "web.3c1e919c4bbd46549db529eb9dd0b31b",
        poi: false,
        traffic: false,
        mapTypeControllerOptions: {
          show: false,
        },
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      onInit(mapRef.current);
    }
  }, []);

  return (
    <div className=" w-full h-full rounded-xl" ref={mapContainerRef}>
      App
    </div>
  );
}
