import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedNavLink from "./AnimatedNavLink";
import { getSites_API } from "../service"; // ✅ API import
import { Link } from "react-router-dom";

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
	const [sites, setSites] = useState([]);

	useEffect(() => {
		const fetchSites = async () => {
			try {
				const [error, response] = await getSites_API();
				if (error) {
					console.error("Xatolik:", error);
					return;
				}
				setSites(response.data || []);
			} catch (err) {
				console.error("Sites yuklanmadi:", err);
			}
		};

		fetchSites();
	}, []);

	// Iconlarni keyiga qarab bog‘lab beramiz (name => icon)
	const icons = {
		telegram:
			"https://framerusercontent.com/images/6XWmE2hB6SujmGKLzRcUn4KcW4.png",
		whatsapp:
			"https://framerusercontent.com/images/UL6OADrwUbVpS53GJJmA3yohw8.svg",
	};

	return (
		<>
			{/* Burger icon */}
			<div className="flex justify-between items-center px-6 py-4 z-50 relative max-lg:px-1">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="relative w-[58px] h-8 flex flex-col justify-center items-center z-50"
				>
					<span
						className={`w-[58px] h-[2px] bg-black rounded transition-all duration-300 origin-center absolute ${
							isOpen
								? "rotate-12"
								: "-translate-y-[3px] max-lg:-translate-y-1"
						}`}
					></span>
					<span
						className={`w-[58px] h-[2px] bg-black rounded transition-all duration-300 origin-center absolute ${
							isOpen
								? "-rotate-12"
								: "translate-y-[3px] max-lg:translate-y-1"
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
							<ul className="text-[56px] max-lg:text-[32px] leading-[60px] max-lg:mb-10 max-lg:leading-8 flex flex-col font-inter-500 text-center space-y-1 max-lg:space-x-0">
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
											onClick={closeMenu}
										/>
									</motion.li>
								))}
							</ul>

							{/* Contact info */}
							<div className="absolute bottom-20 max-lg:static max-lg:b-0 left-16 text-black">
								<div className="flex flex-col gap-1 max-lg:justify-center">
									<a
										href="tel:88127508500"
										className="text-2xl max-lg:text-center text-black/70 font-inter-600 mb-4 max-lg:mb-1 max-lg:text-xl hover:opacity-70 transition-opacity"
									>
										8(812)750 85 00
									</a>

									<div className="flex group max-lg:text-center items-center text-xl font-medium  transition">
										<div className="flex rotate-0 transition-all group-hover:rotate-180 justify-center items-center w-5 h-5 max-lg:w-4 max-lg:h-4 rounded-full bg-black text-white">
											<span className="mb-[2px] max-lg:text-sm font-inter-600">
												+
											</span>
										</div>
										<span className="font-inter-600 mx-2 text-[32px] max-lg:text-2xl underline underline-offset-8 group-hover:no-underline">
											<a href="mailto:info@arcrobot.ru">
												info@arcrobot.ru
											</a>
										</span>
									</div>

									{/* Messenger icons from API */}
									<div className="hidden max-lg:text-center mt-10 max-lg:block font-inter-600 text-black/70">
										<Link onClick={closeMenu} to="/privacy-policy">
											Политика конфиденциальности
										</Link>
									</div>
									<div className="max-lg:flex hidden -mb-10 mt-6 gap-4 items-center justify-center">
										{sites.map((site) => (
											<a
												key={site.id}
												href={site.link}
												target="_blank"
												rel="noopener"
												aria-label={`Link to ${site.name}`}
												className="w-9 h-9 p-2 rounded-full bg-[#ebebeb] flex items-center justify-center"
											>
												<img
													src={
														icons[site.name.toLowerCase()] || ""
													}
													alt={site.name}
													className="w-full h-full object-cover object-center rounded-full opacity-40"
												/>
											</a>
										))}
									</div>
								</div>
							</div>

							{/* Privacy policy */}
							<div className="absolute max-lg:hidden bottom-20 font-inter-600 text-black/70 -translate-x-1">
								<Link onClick={closeMenu} to="/privacy-policy">
									{" "}
									Политика конфиденциальности
								</Link>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default BurgerMenuWithModal;
