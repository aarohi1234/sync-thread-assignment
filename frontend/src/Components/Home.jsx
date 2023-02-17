import { Box, Grid, Stat } from '@chakra-ui/react'
import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Navigate, useNavigate } from 'react-router-dom'

 export const Home=()=> {
   
    let arr=[
        {url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png" },
        {url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png" },
       
    ]
    let navigate=useNavigate()
    let handleNavigation=(url)=>{
      navigate("/map",{state:url})
    }
  return (
   <Box m="auto">
            <Box m="auto" p={5}>
               
                <Grid templateColumns={{sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(5, 1fr)'}} gap={6} >
                   {arr.map((el,index)=>(
                    <Box h={"40vh"} w={"15vw"} onClick={()=>handleNavigation(el.url)}>

                  
                       <MapContainer center={[51.505, -0.09]} zoom={3}  scrollWheelZoom={true} style={{width:"100%",height:"100%"}}>
                       <TileLayer
                     
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url={el.url}
                       />
                      
                  
                       </MapContainer>
                       </Box>
                 ))} 
                  
                </Grid>
         
            </Box>

   </Box>
  )
}


