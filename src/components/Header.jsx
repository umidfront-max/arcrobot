import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import BurgerMenu from "./BurgerMenu";
import TransitionOverlay from "./TransitionOverlay";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<>
			<header className="container1">
				<nav className="flex justify-between items-center">
					<NavLink
						className="font-inter-600 text-xl relative z-50"
						to="/"
						onClick={closeMenu}
					>
						arcrobot
					</NavLink>

					<NavLink
						className="font-inter-600"
						to="/catalog"
						onClick={closeMenu}
					>
						Каталог
					</NavLink>
					<NavLink
						className="font-inter-600"
						to="/blog"
						onClick={closeMenu}
					>
						Блог
					</NavLink>
					<NavLink
						className="font-inter-600"
						to="/contact"
						onClick={closeMenu}
					>
						Контакты
					</NavLink>
					<div>
						<p>info@arcrobot.ru </p>
						<p>8(812)750 85 00</p>
					</div>

					<BurgerMenu
						isOpen={isMenuOpen}
						setIsOpen={setIsMenuOpen}
						closeMenu={closeMenu}
					/>
				</nav>

				<TransitionOverlay />
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default Header;
