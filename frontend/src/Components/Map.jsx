import React, { useEffect, useState } from 'react'
import "leaflet/dist/leaflet.css"
import { Box } from '@chakra-ui/react'
import L from "leaflet"
import { useLocation } from 'react-router-dom'
import {MapContainer,TileLayer,Marker,} from 'react-leaflet'

let BASEURL=`https://nominatim.openstreetmap.org/search?q=17+Strada+Pictor+Alexandru+Romano%2C+Bukarest&format=geojson`
let icon=L.icon({
   iconUrl:"./Location-Icon.png",
   iconSize:[20,25]
})

export const Map=()=> {
    let Locations;
    let location=useLocation()
    console.log(location)
    let [data,setData]=useState([21.0140475 ,75.9114716])
   let  getLatAndLong=()=>{
    navigator.geolocation.getCurrentPosition((data) => {
        console.log(data.coords.latitude, data.coords.longitude);
      Locations=[data.coords.latitude, data.coords.longitude]
        setData([data.coords.latitude, data.coords.longitude])
      });
   } 

    useEffect(()=>{
         getLatAndLong()
         fetch(BASEURL,{
         method:"GET",
         redirect:"follow"
         }).then((res)=>res.json()).then((res)=>console.log(res)).catch((er)=>console.log(er))
        },[])
    return(
        <Box h={"100vh"} w={"100vw"}>

      <MapContainer center={data} zoom={13}  scrollWheelZoom={true} style={{width:"100%",height:"100%"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={location.state}
        />
        <Marker position={data} icon={icon}>
        </Marker>
        </MapContainer>
        </Box>
    )
}

