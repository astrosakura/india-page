import React, { useState } from 'react'
import "./CityHotel.css"
import img1 from "../Images/amer-fort-hotel1.jpg";
import img2 from "../Images/amer-fort-hotel2.jpg";
import RoomIcon from '@material-ui/icons/Room';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';


const AmerFortHotelBooking= () => {

    const [isAuth, setIsAuth] = useState(true);
    if(!isAuth) {
        return <Redirect to = "/hotel-check-in"/>    
    }

    return (
       <>

        <div className = "cardHotel">
        <div className = "hotelBody">
        <img class = "img-hotel" src= {img1}/>
        <div className = "text-wrap-image">
            Jaipur, India <br/>
            <h2 style = {{marginRight: '5%', marginBottom: '-1%'}}>The Amer Valley Jaipur</h2><br/>
            <p><RoomIcon style = {{marginLeft: '9%', color: 'grey'}}/>Amer Fort • 2.5 km away</p>
            <p style = {{marginBottom: '-5%'}}>
             <span><StarIcon style = {{color: 'orange', marginLeft :'10%'}}/></span>
             <span><StarIcon style = {{color: 'orange'}}/></span>
             <span><StarIcon style = {{color: 'orange'}}/></span>
             <span><StarIcon style = {{color: 'orange'}}/></span>
             <span><StarHalfIcon style = {{color: 'orange'}}/>4.5 Rating</span>
             <br/>
             </p><br/>
             <h3 style = {{marginLeft: '27rem', marginTop: '5%'}}>₹16,436</h3><br/>
             <p style = {{marginLeft :'27rem', marginTop: '-3%'}}>/per night</p>

              <Button onClick = {() => {setIsAuth(false)}}
             style = {{
                 marginTop: '-4%',
                 float: 'right',
                 backgroundColor: '#000',
                 color: 'white',
             }}
             >Book Now</Button> 
            
        </div>
        </div>
        </div>
      
        
        <div className = "cardHotel">
        <div className = "hotelBody">
        <img class = "img-hotel" src= {img2}/>
        <div className = "text-wrap-image">
            jaipur, India <br/>
            <h2 style = {{marginRight: '5%', marginBottom: '-1%'}}>Regenta Central Jal Mahal</h2><br/>
            <p><RoomIcon style = {{marginLeft: '9%', color: 'grey'}}/>Amer Fort • 3.1 km away</p>
            <p style = {{marginBottom: '-5%'}}>
             <span><StarIcon style = {{color: 'orange', marginLeft :'10%'}}/></span>
             <span><StarIcon style = {{color: 'orange'}}/></span>
             <span><StarIcon style = {{color: 'orange'}}/></span>
             <span><StarHalfIcon style = {{color: 'orange'}}/></span>
             <span><StarIcon style = {{color: 'white'}}/>3.5 Rating</span>
             <br/>
             </p><br/>
             <h3 style = {{marginLeft: '27rem', marginTop: '5%'}}>₹10,095</h3><br/>
             <p style = {{marginLeft :'27rem', marginTop: '-3%'}}>/per night</p>

              <Button onClick = {() => {setIsAuth(false)}}
             style = {{
                 marginTop: '-4%',
                 float: 'right',
                 backgroundColor: '#000',
                 color: 'white',
             }}
             >Book Now</Button> 
            
        </div>
        </div>
        </div>

        </>

    )
}

export default AmerFortHotelBooking
