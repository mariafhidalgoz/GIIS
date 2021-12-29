import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = () => {
  const mapContainerRef = useRef(null);

  const baseUrl = 'http://localhost:8000/';

  const [data, setData] = useState(null);

  const [lng, setLng] = useState(51);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(5);
  const [map, setMap] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}incidents/`)
      .then(res => res.json())
      .then(incidents => {
        console.log('incidents', incidents);

        const featuresIncidents = incidents.map(incident => (
          {
            'type': 'Feature', 'geometry': incident.location,
            'properties': {
              'type': incident.type,
              'is_active': incident.is_active
            }
          }
        ));
        console.log('featuresIncidents', featuresIncidents);

        const collection = JSON.stringify({
          features: featuresIncidents,
          type: 'FeatureCollection'
        });
        console.log('collection', collection);
        setData(collection);
        // setData(incidents);
      });
  }, []);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    console.log('data', data)
    console.log('data', typeof data)
    console.log('data', typeof JSON.parse(data) )

    map.on('load', () => {
      map.addSource('countries', {
        type: 'geojson',
        data: JSON.parse(data)
        // data: {"features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[7,51]},"properties":{"type":"blabla","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[7,51]},"properties":{"type":"Blabla","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-95.3385,29.7245]},"properties":{"type":"Blabla","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-95.3385,29.7245]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-95.3385,29.7245]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7498342,-74.1026879]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7498342,-74.1026879]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7498386,-74.1026745]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7498461,-74.1026944]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7498461,-74.1026944]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7498461,-74.1026944]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}},{"type":"Feature","geometry":{"type":"Point","coordinates":[37.785834,-122.406417]},"properties":{"type":"Blabla2","is_active":true}}],"type":"FeatureCollection"}
      });

      // map.setLayoutProperty('country-label', 'text-field', [
      //   'format',
      //   ['get', 'name_en'],
      //   { 'font-scale': 1.2 },
      //   '\n',
      //   {},
      //   ['get', 'name'],
      //   {
      //     'font-scale': 0.8,
      //     'text-font': [
      //       'literal',
      //       ['DIN Offc Pro Italic', 'Arial Unicode MS Regular']
      //     ]
      //   }
      // ]);

      map.addLayer(
        {
          id: 'countries',
          type: 'circle',
          source: 'countries',
          paint: {
            "circle-color": "#9d0909",
            "circle-radius": 8,
            "circle-stroke-color": "#333333",
            "circle-stroke-width": 2,
          }
        },
        'country-label'
      );

      // map.setPaintProperty('countries', 'fill-color', {
      //   property: props.active.property,
      //   stops: props.active.stops
      // });

      // setMap(map);
    });

    // Clean up on unmount
    return () => map.remove();
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {/*<div className="sidebarStyle">*/}
      {/*  <div>*/}
      {/*    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="map-container" ref={mapContainerRef}/>
    </div>
  );
};

export default Map;
