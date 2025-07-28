import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const overlayVariants = {
	enter: { y: "100%", opacity: 1 },
	center: {
		y: "0%",
		opacity: 1,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
	exit: {
		y: "-100%",
		opacity: 1,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
};

// Har bir harf pastdan chiqadi
const letterVariant = {
	hidden: { opacity: 0, y: "100vh" },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: "easeOut",
		},
	}),
};

// So‘z konteyneri umumiy animatsiya — harflar chiqayotgan vaqt ichida ko‘tariladi
const wordMotion = {
	initial: { y: 140 },
	animate: {
		y: 0,
		transition: {
			duration: 0.5 + 0.1 * 7, // oxirgi harfga mos delay bilan
			ease: "easeOut",
		},
	},
};

const TransitionOverlay = () => {
	const [isAnimating, setIsAnimating] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsAnimating(true);
		const timeout = setTimeout(() => setIsAnimating(false), 1500);
		return () => clearTimeout(timeout);
	}, [location]);

	const text = "arcrobot".split("");

	return (
		<AnimatePresence>
			{isAnimating && (
				<motion.div
					className="fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center"
					variants={overlayVariants}
					initial="enter"
					animate="center"
					exit="exit"
            >
               
					{/* Bu div butun so‘z (harflar bilan) birga tepaga siljiydi */}
					<motion.div
						className="flex space-x-1 text-white text-5xl font-bold font-inter z-50"
						variants={wordMotion}
						initial="initial"
						animate="animate"
					>
						{location.pathname === "/" && text.map((char, i) => (
							<motion.span
								key={i}
								custom={i}
								variants={letterVariant}
								initial="hidden"
								animate="visible"
							>
								{char}
							</motion.span>
						))}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default TransitionOverlay;
