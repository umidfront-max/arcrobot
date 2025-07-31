import React from "react";
import Main from "../components/Main"
import Solutions from "../components/Solutions"
import WhyUs from "../components/WhyUs"
import Header from "../components/Header";
import Service from "../components/Service";
import Reviews from "../components/Reviews";
import StatsSection from "../components/StatsSection";
import Form from '../components/Form';
import FirstHand from '../components/FirstHand';


function Home() {
	return (
		<div>
         <Main />
         <Solutions />
         <WhyUs />
         <Service />
         <Reviews />
         <StatsSection />
         <FirstHand />
			<Form />
		</div>
	);
}

export default Home;
