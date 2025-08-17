import { motion } from "framer-motion";
import React from "react";

const WhyHoverButton = ({ text = "подробнее", bgColor = "bg-black", textColor = "text-white" }) => {
	return (
		<div>
			<motion.button
				whileHover="hover"
				initial="rest"
				animate="rest"
				className={`relative w-60 h-11 ${bgColor} ${textColor} rounded-full px-8 font-inter-600`}
			>
				{/* Yuqoridan tushadigan matn */}
				<motion.p
					variants={{
						rest: { y: "-100%", opacity: 0 },
						hover: { y: "0%", opacity: 1, transition: { duration: 0.1 } },
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
	);
};

export default WhyHoverButton;
