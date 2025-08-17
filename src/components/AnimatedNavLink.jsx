import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionNavLink = motion(NavLink);

const AnimatedNavLink = ({ to, label, onClick }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="relative inline-block px-4 py-1 overflow-hidden"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<motion.div
				animate={{ y: hovered ? -70 : -4 }}
				transition={{ type: "tween", duration: 0.3 }}
				className="relative z-10 text-black/80 font-semibold pointer-events-none"
			>
				{label}
			</motion.div>
			<MotionNavLink
				to={to}
				onClick={onClick} // 👈 Modalni yopish uchun
				className="absolute left-0 top-0 z-0 w-full h-full text-black/80 font-semibold"
				style={{
					clipPath: hovered
						? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
						: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
				}}
				animate={{
					clipPath: hovered
						? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
						: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				{label}
			</MotionNavLink>
		</div>
	);
};

export default AnimatedNavLink;
