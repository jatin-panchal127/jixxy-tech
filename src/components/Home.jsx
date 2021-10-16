import React from 'react';
import img from '../images/img.svg';
import Common from './Common';

const Home = () => {
	return (
		<>
			<Common name={<>Grow your business with <strong className='brand-name'>Jixxy-Tech</strong></>} imgsrc={img} visit="/service" btname="Get Started"/>
		</>
	)
}

export default Home
