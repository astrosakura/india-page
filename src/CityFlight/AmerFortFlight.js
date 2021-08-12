import React from 'react'
import "./CityFlight.css";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";


function AmerFortFlight() {
    return (
        <div>
          <h2>All Flight</h2>

<table class = "center">
  <div className = "card3">
  <tr>
    <th>Number</th>
    <th>Source</th>
    <th>Destination</th>
    <th>Arrival</th>
    <th>Departure</th>
    <th>Price</th>
    <th>Book</th>
  </tr>
  

  <tr>
    <td>JAIP562346809</td>
    <td>Dr. Babasaheb Ambedakar International Airport, Nagpur</td>
    <td>Jaipur International Airport, Jaipur</td>
    <td>04-09-2021 1:30pm</td>
    <td>05-092021 9.45am</td>
    <td>₹35,908</td>
    <td>
      <Button  
         style = {{backgroundColor: 'black', padding: '6px 20px', color: 'lightgrey'}}
         component={Link} to= "/amer-fort-flight-check-in" >
         <span >Book</span>
      </Button>
    </td>
  </tr>
  </div>

  <div className = "card3">
  <tr>
    <th>Number</th>
    <th>Source</th>
    <th>Destination</th>
    <th>Arrival</th>
    <th>Departure</th>
    <th>Price</th>
    <th>Book</th>
  </tr>
  <tr>
   <td>JAIP0912347</td>
    <td>Dr. Babasaheb Ambedakar International Airport, Nagpur</td>
    <td>Jaipur International Airport, Jaipur</td>
    <td>29-09-2021 11:30pm</td>
    <td>30-09-2021 3.45am</td>
    <td>₹19,432</td>
    <td>
      <Button  
         style = {{backgroundColor: 'black', padding: '6px 20px', color: 'lightgrey'}}
         component={Link} to= "/amer-fort-flight-check-in" >
         <span >Book</span>
      </Button>
     </td> 
  </tr>
  </div>
</table>

          </div>
          
    )
}

export default AmerFortFlight
