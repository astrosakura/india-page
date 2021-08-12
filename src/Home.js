import React, { useState } from "react";
import "./Home.css";
import FlightIcon from '@material-ui/icons/Flight';
import HotelIcon from '@material-ui/icons/Hotel';
import RoomIcon from '@material-ui/icons/Room';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import img1 from "./Images/taj-mahal.jpg";
import img2 from "./Images/amer-fort.jpg";
import img3 from "./Images/alleppey.jpg";
import Hotel from "@material-ui/icons/Hotel";


const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text">
	{isReadMore ? text.slice(0, 200) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

const Home = () => {
return (
	<div className="container">

<h2>Tourium Places In India</h2>                      

<div class="card">
  <img class = "img-1" src= {img1} alt="Taj Mahal"/>
  <div class="container">
    <h6><b>Taj Mahal</b></h6> 
    <h6>Location: <span>Agra, India</span></h6>
	<p>
		<ReadMore>
        The Taj Mahal, is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself
		</ReadMore>
	</p>
	
   <div>
   <Button class = {"external-page1"} component={Link} to= "/taj-mahal-hotel-booking" color="primary"><HotelIcon/></Button>
   <Button class = {"external-page2"} component={Link} to=  "/taj-mahal-flight" color="primary"><FlightIcon/></Button>
	 <Button class = {"external-page3"} component={Link} to= "/taj-mahal" color="primary"><RoomIcon/></Button>

</div>
    </div>
    </div>



	<div class="card">
  <img class = "img-1" src= {img2} alt="Amer Fort, Jaipur"/>
  <div class="container">
    <h6><b>Amer Fort</b></h6> 
    <h6>Location: <span>Jaipur, Rajasthan, India</span></h6>

	<p>
		<ReadMore>
        Amer Fort or Amber Fort is a fort located in Amer, Rajasthan, India. Amer is a town with an area of 4 square kilometres located 11 kilometres from Jaipur, the capital of Rajasthan. The town of Amer and the Amber Fort were originally built by Raja Man Singh and additions were, later, made by Sawai Jai Singh
		</ReadMore>
	</p>
    
  <Button class = {"external-page1"} component={Link} to= "/amer-fort-hotel-booking" color="primary"><HotelIcon/></Button>
  <Button class = {"external-page2"} component={Link} to= "/amer-fort-flight" color="primary"><FlightIcon/></Button>
  <Button class = {"external-page3"} component={Link} to= "/amer-fort" color="primary"><RoomIcon/></Button>


    </div>
    </div>

	<div class="card">
  <img class = "img-1" src= {img3} alt="Alleppey (Alappuzha)"/>
  <div class="container">
    <h6><b>Alleppey</b></h6> 
    <h6>Location: <span>Alappuzha, Kerala(India)</span></h6>

	<p>
		<ReadMore>
        Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design. Punnamada Lake's snake boat races are a well-known annual event. 
		</ReadMore>
	</p>
    
  <Button class = {"external-page1"} component={Link} to= "/alleppey-hotel-booking" color="primary"><HotelIcon/></Button>
  <Button class = {"external-page2"} component={Link} to= "/alleppey-flight" color="primary"><FlightIcon/></Button>
  <Button class = {"external-page3"} component={Link} to= "/alleppey" color="primary"><RoomIcon/></Button>

    </div>
    </div>

</div>    


);
};

export default Home;
