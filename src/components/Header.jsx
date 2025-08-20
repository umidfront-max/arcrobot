import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import About from "../pages/About";
import BurgerMenu from "./BurgerMenu";
import TransitionOverlay from "./TransitionOverlay";
import ScrollToTop from "./ScrollToTop";
function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<>
			<header className="px-8 fixed w-full z-50 bg-white">
				<nav className="flex justify-between items-center">
					<NavLink
						className="font-inter-600 text-xl relative z-50"
						to="/"
						onClick={closeMenu}
					>
						arcrobot
					</NavLink>

					<NavLink
						className="font-inter-600 max-lg:hidden"
						to="/catalog"
						onClick={closeMenu}
					>
						Каталог
					</NavLink>
					<NavLink
						className="font-inter-600 max-lg:hidden"
						to="/blog"
						onClick={closeMenu}
					>
						Блог
					</NavLink>
					<NavLink
						className="font-inter-600 max-lg:hidden"
						to="/contact"
						onClick={closeMenu}
					>
						Контакты
					</NavLink>
					<div className="max-lg:hidden">
						<p className="leading-4">info@arcrobot.ru </p>
						<p className="leading-5">8(812)750 85 00</p>
					</div>

					<BurgerMenu
						isOpen={isMenuOpen}
						setIsOpen={setIsMenuOpen}
						closeMenu={closeMenu}
					/>
				</nav>

				<TransitionOverlay />
         </header>
         <ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/about" element={<About />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default Header;
