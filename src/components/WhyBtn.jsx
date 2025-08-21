import { motion } from "framer-motion";
import React, { useState } from "react";
import ContactModal from "./ContactModal";
import { useNavigate } from "react-router-dom";

const WhyHoverButton = ({
	text = "Оставить заявку",
	bgColor = "bg-black",
	textColor = "text-white",
	hoverBg = "hover:bg-black",
	width = "w-60 max-xl:w-44",
	id,
	navigateTo = "/block-static/", // fallback page
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();
	const handleClick = () => {
		if (text === "Оставить заявку") {
			setIsModalOpen(true);
		} else {
			navigate(navigateTo + id); // boshqa sahifaga o'tadi
		}
	};

	const handleModalSubmit = (e) => {
		e.preventDefault();
		alert("Form yuborildi!");
		setIsModalOpen(false);
	};

	return (
		<>
			<div onClick={handleClick}>
				<motion.button
					whileHover="hover"
					initial="rest"
					animate="rest"
					className={`relative overflow-hidden ${width} h-11 ${bgColor} ${textColor} ${hoverBg} rounded-full px-8 font-inter-600`}
				>
					{/* Yuqoridan tushadigan matn */}
					<motion.p
						variants={{
							rest: { y: "-100%", opacity: 0 },
							hover: {
								y: "0%",
								opacity: 1,
								transition: { duration: 0.1 },
							},
						}}
						className="absolute whitespace-nowrap text-lg top-[7px] w-full left-0 -translate-x-1 -translate-y-1"
					>
						{text}
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
						className="w-full absolute text-lg whitespace-nowrap left-0 top-[7px] -translate-x-1 -translate-y-1"
					>
						{text}
					</motion.p>
				</motion.button>
			</div>

			<ContactModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleModalSubmit}
			/>
		</>
	);
};

export default WhyHoverButton;
