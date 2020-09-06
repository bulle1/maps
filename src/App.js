import React, { useEffect, useState } from 'react'; 
import './App.css';
import { Map, TileLayer ,Popup } from "react-leaflet";
import { DriftMarker } from "leaflet-drift-marker"
import L from 'leaflet';
import * as carData from './data/elevation.json';

function App() {
  const makecarIcon = (icon_deg) => new L.divIcon({
    iconAnchor: [10, 10],
    className: 'car-icon',
    html: `<img 
    style="transform: rotate(${icon_deg}deg);"
    height="30" 
    width="30" 
    src='car.png'>`
  })

  const [counter,setCounter] = useState(1) ;
  const [lat,setLat] = useState(carData.default.results[0].location.lat);
  const [long , setLong] = useState(carData.default.results[0].location.lng);

  useEffect(() => {
    const interval = setInterval(() => {
    if (counter <= 500) {
      setCounter(counter + 1);
      setLat(carData.default.results[counter].location.lat);
      setLong(carData.default.results[counter].location.lng);
    }}, 3000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
    <Map center = {[9.9510841,79.2305572]} zoom = {10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />  
          <DriftMarker
            position={[lat,long]}
            icon = {makecarIcon(180)}
            duration= {3000}
            >
               <Popup>CAR_1</Popup>
          </DriftMarker>
          <DriftMarker
            position={[22.427210,86.132370]}
            icon = {makecarIcon(90)}
             >
               <Popup>CAR_2</Popup>
          </DriftMarker>
    </Map>
    </>
  );

}

export default App;
