import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedNavLink from "./AnimatedNavLink"; // ✅ Custom component

const navItems = [
	{ to: "/", label: "Главная" },
	{ to: "/catalog", label: "Каталог" },
	{ to: "/blog", label: "Блог" },
	{ to: "/contact", label: "Контакты" },
];

const navItemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3 + i * 0.1,
			duration: 0.4,
			ease: "easeOut",
		},
	}),
};

const BurgerMenuWithModal = ({ isOpen, setIsOpen, closeMenu }) => {
	return (
		<>
			{/* Burger icon */}
			<div className="flex justify-between items-center px-6 py-4 z-50 relative">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="relative w-[58px] h-8 flex flex-col justify-center items-center z-50"
				>
					<span
						className={`w-[58px] h-[2px] bg-black rounded transition-all duration-300 origin-center absolute ${
							isOpen ? "rotate-12" : "-translate-y-[3px]"
						}`}
					></span>
					<span
						className={`w-[58px] h-[2px] bg-black rounded transition-all duration-300 origin-center absolute ${
							isOpen ? "-rotate-12" : "translate-y-[3px]"
						}`}
					></span>
				</button>
			</div>

			{/* Modal */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: "-100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-100%" }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="fixed inset-0 overflow-hidden bg-white z-40"
					>
						<div className="flex flex-col justify-center items-center h-full relative px-6">
							<ul className="text-[56px] leading-[60px] flex flex-col font-inter-600 text-center space-y-1">
								{navItems.map((item, index) => (
									<motion.li
										key={item.to}
										custom={index}
										variants={navItemVariants}
										initial="hidden"
										animate="visible"
										exit="hidden"
										className="relative list-none group cursor-pointer"
									>
										<AnimatedNavLink
											to={item.to}
											label={item.label}
											onClick={closeMenu} // ✅
										/>
									</motion.li>
								))}
							</ul>

							{/* Contact info */}
							<div className="absolute bottom-8 left-6 text-black text-sm">
								<p className="font-medium">8(812)750 85 00</p>
								<p className="font-bold underline mt-1">
									info@arcrobot.ru
								</p>
							</div>

							{/* Privacy policy */}
							<div className="absolute bottom-4 right-6 text-xs text-gray-700">
								<p>Политика конфиденциальности</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default BurgerMenuWithModal;
