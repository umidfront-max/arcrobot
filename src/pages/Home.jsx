import React from "react";
import Main from "../components/Main";
import Solutions from "../components/Solutions";
import WhyUs from "../components/WhyUs";
import Header from "../components/Header";
import Service from "../components/Service";
import Reviews from "../components/Reviews";
import StatsSection from "../components/StatsSection";
import Form from "../components/Form";
import FirstHand from "../components/FirstHand";
import FAQ from "../components/FAQ";

function Home() {
	return (
		<div className="pt-16">
			<Main />
			<Solutions />
			<WhyUs />
			<Service />
			<Reviews />
			<StatsSection />
			<FAQ />
			<FirstHand />
			<Form />
		</div>
	);
}

export default Home;
