import React from "react";
import { useNavigate } from "react-router-dom";

const CatalogCard = ({ project, index }) => {
	const colors = [
		"group-hover:bg-danger",
		"group-hover:bg-secondary",
		"group-hover:bg-green",
	];
	const navigate = useNavigate();

	const handleClick = () => {
		const slug = project.name.toLowerCase().replace(/\s+/g, "-");
		navigate(`/catalog/${project.id}`, {
			state: { id: slug }, // bu yerda id ketadi
		});
	};

	return (
		<div onClick={handleClick} className="cursor-pointer group">
			<div className="flex justify-between items-center mb-2 max-sm:mb-1 max-sm:p-3  bg-white rounded-2xl max-sm:rounded-xl px-6 py-[18px]">
				<h3 className="text-black text-2xl max-sm:text-sm font-inter-600">
					{project.name}
				</h3>
				<div className="flex mt-2 space-x-1 group">
					{[...Array(3)].map((_, i) => (
						<div
							key={i}
							className={`w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300 ${colors[i]}`}
						/>
					))}
				</div>
			</div>
			<div className="rounded-2xl bg-white overflow-hidden shadow-md">
				<div className="bg-white rounded-2xl max-sm:rounded-xl relative">
					<div className="relative p-2 max-sm:p-1 transition-all group-hover:p-0 group-hover:shadow-xl w-full aspect-[1.36585/1]">
						<div className="absolute inset-0 bg-white opacity-15 z-10 rounded-2xl" />
						<img
							src={project.images?.[0]}
							alt={project.name}
							className={`w-full h-full relative z-10 object-cover scale-100 hover:scale-110 transition-transform duration-300 rounded-2xl max-sm:rounded-xl objj${index}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CatalogCard;
