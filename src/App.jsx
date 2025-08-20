import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatalogId from "./pages/CatalogId";
import BlogId from "./pages/BlogId";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from "./components/ContactModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalSubmit = (e) => {
		e.preventDefault();
		// Submit logikasini shu yerga yozing
		alert("Form yuborildi!");
		setIsModalOpen(false);
	};
	return (
		<div>
			<Header />
			<ToastContainer />
			<Routes>
				<Route path="/catalog/:slug" element={<CatalogId />} />
				<Route path="/block/:id" element={<BlogId />} />
			</Routes>
			<div className="fixed bottom-10 right-10 z-50">
				<motion.button
					onClick={() => setIsModalOpen(true)}
					initial="rest"
					animate="rest"
					whileHover="hover"
					whileTap="active"
					className="relative bg-black text-white py-2 px-3 pr-1 rounded-xl flex items-center gap-2 overflow-hidden transition-colors duration-300"
					variants={{
						rest: { backgroundColor: "#000000", color: "#ffffff" },
						hover: {
							backgroundColor: "#d2ff37",
							color: "#000000",
							transition: { duration: 0 },
						}, // sariq: #facc15
						active: {
							// <-- qo‘shildi
							backgroundColor: "#d2ff37",
							color: "#000000",
						},
					}}
				>
					{/* Hoverda paydo bo‘ladigan matn */}
					<motion.span
						variants={{
							rest: { y: "-100%", opacity: 0 },
							hover: {
								y: "0%",
								opacity: 1,
								transition: { duration: 0.15 },
							},
						}}
						className="absolute left-6 max-sm:text-sm top-2 flex items-center gap-2"
					>
						Расчет за час!
						<motion.span
							variants={{
								rest: { backgroundColor: "#ffffff" },
								hover: {
									backgroundColor: "#d2ff37",
									transition: { duration: 0.3 },
								},
							}}
							className="w-5 h-5 flex justify-center items-center rounded-full"
						>
							<Zap className="text-black fill-black" size={16} />
						</motion.span>
					</motion.span>

					{/* Default matn */}
					<motion.span
						variants={{
							rest: { y: "0%", opacity: 1 },
							hover: {
								y: "100%",
								opacity: 0,
								transition: { duration: 0.15 },
							},
						}}
						className="flex items-center gap-2"
					>
						Оставить заявку
						<motion.span
							variants={{
								rest: { backgroundColor: "#ffffff" },
								hover: {
									backgroundColor: "#facc15",
									transition: { duration: 0.3 },
								},
							}}
							className="w-5 h-5 flex justify-center items-center rounded-full"
						>
							<Zap className="text-black fill-black" size={12} />
						</motion.span>
					</motion.span>
				</motion.button>
			</div>
			<ContactModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleModalSubmit}
			/>
			<Footer />
		</div>
	);
}

export default App;
