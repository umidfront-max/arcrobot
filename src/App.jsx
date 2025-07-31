import { NavLink, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="">
			<Header />
			<button className="mt-2 fixed bottom-10 right-10 z-50  bg-black text-white py-2 px-6 rounded-full flex items-center gap-2 hover:bg-gray-900 transition">
				Оставить заявку <span className="text-xl">➜</span>
			</button>
			<Footer />
		</div>
	);
}

export default App;
