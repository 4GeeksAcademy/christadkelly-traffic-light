import React, { useState } from "react";
import Light from "./light";

const TrafficLight = () => {
	const [selected, changeSelectedLight] = useState('');

	const changeLight = (e) => {
    	if(e.target.id === 'red') {
        	changeSelectedLight('red')
    	}
    	if(e.target.id === 'yellow') {
        	changeSelectedLight('yellow')
    	}
    	if(e.target.id === 'green') {
        	changeSelectedLight('green')
    	}
	}

	return (
		<div>
			<div className='stem'></div>
			<div className='trafficLight'>
				<Light 
				color = 'red'
				selected = {selected}
				changeLight = {changeLight}/>
				<Light 
				color = 'yellow'
				selected = {selected}
				changeLight = {changeLight}/>
				<Light 
				color = 'green'
				selected = {selected}
				changeLight = {changeLight}/>
			</div>
		</div>
	);
};

export default TrafficLight;
