import React, { useState } from 'react';
import './App.css';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as carData from "./data/car-data.json";

function App() {

  const [activeCar , setActiveCar] = useState(null);

  return (
    <Map center = {[25.427210,86.132370]} zoom = {12}>
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   />
    {carData.objects.map(car => (
    <Marker
      key = {car.name}
      position = {[car.lat,car.long]}
      onclick = {() => {
        setActiveCar(car);
      }}
    />
    ))}

    {activeCar && 
    <Popup 
    position = {[activeCar.lat,activeCar.long]}
    onClose={() => {
      setActiveCar(null);
    }}
    >
    <div>
      <h2>
        {activeCar.name}
      </h2>
    </div>
    </Popup>
    
    
    }
   </Map>
  );
}

export default App;
