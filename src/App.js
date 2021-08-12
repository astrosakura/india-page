import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import TajMahal from "./Map/TajMahal";
import AmerFort from "./Map/AmerFort";
import Alleppey from "./Map/Alleppey";

import TajHotelBooking from './CityHotel/TajHotelBooking';
import AmerFortHotelBooking from './CityHotel/AmerFortHotelBooking';
import AlleppeyHotelBooking from './CityHotel/AlleppeyHotelBooking';

import HotelCheckIn from "./HotelCheckIn/HotelCheckIn";
import HotelConfire from "./HotelConfire/HotelConfire" 

import TajFlight from "./CityFlight/TajFlight"
import AmerFortFlight from "./CityFlight/AmerFortFlight"
import AlleppeyFlight from "./CityFlight/AlleppeyFlight"

import TajFlightCheckIn from "./FlightCheckIn/TajFlightCheckIn";
import AmerFortFlightCheckin from "./FlightCheckIn/AmerFortFlightCheckin"
import AlleppeyFlightCheckIn from "./FlightCheckIn/AlleppeyFlightCheckIn"

import TajFlightConfire from "./FlightConfire/TajFlightConfire";
import AmerFortFlightConfire from "./FlightConfire/AmerFortFlightConfire";
import AlleppeyFlightConfire from "./FlightConfire/AlleppeyFlightConfire";

import Payment from "./PayMent/Payment";




function App() {
  return (
  <Router>
      <div className = "App">
        <Switch>
           <Route exact path="/" component = {Home}/>
           
           <Route path="/taj-mahal" component={TajMahal} />
           <Route path="/amer-fort" component={AmerFort} />
           <Route path="/alleppey" component={Alleppey} />

           <Route path = "/taj-mahal-hotel-booking" component = {TajHotelBooking} />
           <Route path = "/amer-fort-hotel-booking" component = {AmerFortHotelBooking}/>
           <Route path = "/alleppey-hotel-booking" component = {AlleppeyHotelBooking} />

           <Route path = "/hotel-check-in" component = {HotelCheckIn} />
           <Route path = "/hotel-confire" component = {HotelConfire}/>

           <Route path = "/taj-mahal-flight" component = {TajFlight}/>
           <Route path = "/amer-fort-flight" component = {AmerFortFlight}/>
           <Route path = "/alleppey-flight" component = {AlleppeyFlight}/>

           <Route path = "/taj-mahal-flight-check-in" component = {TajFlightCheckIn}/>
           <Route path = "/amer-fort-flight-check-in" component = {AmerFortFlightCheckin}/>
           <Route path = "/alleppey-flight-check-in" component = {AlleppeyFlightCheckIn}/>

           <Route path = "/flight-confire-taj-mahal" component = {TajFlightConfire}/>
           <Route path = "/flight-confire-to-amer-fort" component = {AmerFortFlightConfire}/>
           <Route path = "flight-confire-to-alleppey" component = {AlleppeyFlightConfire}/>

           <Route path = "/payment" component = {Payment}/>
           
           </Switch>
           </div>
           </Router>
    
  );
}

export default App;
