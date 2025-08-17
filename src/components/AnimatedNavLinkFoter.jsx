import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AnimatedNavLinkFoter = ({ to, children }) => {
	return (
		<Link to={to} className="group relative overflow-hidden -ml-3">
			{/* Dot + Text animatsiyasi birga */}
			<motion.div
				initial={{ x: 0 }}
				whileHover={{ x: 12 }}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
				className="flex items-center gap-2"
			>
				{/* Dot */}
				<span
					className={`w-2 h-2  rounded-full group-hover:bg-gray/30 transition-opacity duration-300`}
				/>
				{/* Text */}
				<span className={`text-xl font-medium pr-3`}>{children}</span>
			</motion.div>
		</Link>
	);
};

export default AnimatedNavLinkFoter;
