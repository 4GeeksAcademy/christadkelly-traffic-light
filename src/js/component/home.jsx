import React, { useState } from "react";
import Light from "./light";

//create your first component
const Home = () => {
	return (
		<div>
			<div className='stem'></div>
			<div className='trafficLight'>
				<Light 
				color = 'red'/>
				<Light 
				color = 'yellow'/>
				<Light 
				color = 'green'/>
			</div>
		</div>
	);
};

export default Home;
