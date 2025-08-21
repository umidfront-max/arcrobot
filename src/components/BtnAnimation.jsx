import { motion } from "framer-motion";
import React, { useState } from "react";
import ContactModal from "../components/ContactModal";

const HoverButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleModalSubmit = (e) => {
		e.preventDefault();
		setIsModalOpen(false);
	};
	return (
		<div>
			<motion.button
				onClick={() => setIsModalOpen(true)}
				whileHover="hover"
				initial="rest"
				animate="rest"
				className="relative max-sm:hidden w-[450px] max-sm:w-[400px] bg-black text-white overflow-hidden1 rounded-full h-[58px] px-8 font-semibold text-lg"
			>
				{/* Yuqoridan tushadigan matn */}
				<motion.p
					variants={{
						rest: { y: "-100%", opacity: 0 },
						hover: { y: "0%", opacity: 1, transition: { duration: 0.1 } },
					}}
					className="absolute whitespace-nowrap w-full left-0 top-3.5 -translate-x-1 -translate-y-1"
				>
					Получить <span className="max-md:hidden">коммерческое</span>{" "}
					предложение
				</motion.p>

				{/* Pastga tushib ketadigan matn */}
				<motion.p
					variants={{
						rest: { y: "0%", opacity: 1 },
						hover: {
							y: "100%",
							opacity: 0,
							transition: { duration: 0.1 },
						},
					}}
					className="w-full absolute whitespace-nowrap text-sm  left-0 top-[18px] -translate-x-1 -translate-y-1"
				>
					Получить <span className="max-md:hidden">коммерческое</span>{" "}
					предложение
				</motion.p>
			</motion.button>
			<ContactModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleModalSubmit}
			/>
		</div>
	);
};

export default HoverButton;
