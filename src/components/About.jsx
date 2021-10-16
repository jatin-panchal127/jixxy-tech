import React from 'react';
import Common from './Common';
import img from '../images/hero-img.png';

const About = () => {
	return (
		<>
			<Common name={<>Welcome to <strong className='brand-name'>Jixxy-Tech</strong></>} imgsrc={img} visit="/contact" btname="Contact Us"/>
		</>
	)
}

export default About
