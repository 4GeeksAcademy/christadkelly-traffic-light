import React, { useState, useEffect } from "react";
import Light from "./light";
import Button from "./button";

const TrafficLight = () => {
	const [selected, changeSelectedLight] = useState('');
	const [cycling, setCycle] = useState(false);

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

	const cycleThroughLights = () => {
		if (selected === 'red') {
			changeSelectedLight('yellow')
		} else if (selected === 'yellow') {
			changeSelectedLight('green')
		} else if (selected === 'green') {
			changeSelectedLight('red')
		} else {
			changeSelectedLight('red')
		}
	}

	const lightCycle = () => {
		if(cycling === false) {
			setCycle(true);
		} else {
			setCycle(false);
		}
	}

	useEffect(() => {
		if(cycling === true) {
			setTimeout(() => cycleThroughLights(), 1000)
		}
	}, [cycling, selected])

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
			<Button 
			selected = {selected}
			cycleLights = {lightCycle}/>
		</div>
	);
};

export default TrafficLight;
