import { div } from "framer-motion/client";
import React from "react";

const projects = [
	{
		name: "Arcrobot Pro X",
		link: "./projects/arcrobot-pro-x",
		image: "https://framerusercontent.com/images/IoUL42h3I0oFTup8rvMATWsOBJA.png",
	},
	{
		name: "Arcrobot Laser",
		link: "./projects/arcrobot-laser",
		image: "https://framerusercontent.com/images/Q5PpZl4A8FCIMA4F7Gv4VEVAPoc.png",
	},
];

const Solutions = () => {
	return (
		<div>
			<h2 className="text-[140px] font-inter-600 text-center">Решения</h2>
			<p className="text-center -mt-4 text-gray/60">
				Готовые роботизированные <br /> ячейки под разные задачи{" "}
			</p>
			<section className="py-20" id="projects">
				<div className="container1 mx-auto">
					<div className="grid md:grid-cols-2 gap-2">
						{projects.map((project, index) => (
							<div className="cursor-pointer group">
								<div className="flex justify-between items-center mb-2 bg-white rounded-2xl px-6 py-[18px]">
									<h3 className="text-black text-2xl font-semibold">
										{project.name}
									</h3>
									<div className="flex mt-2 space-x-1 group">
										{[...Array(3)].map((_, i) => {
											const colors = [
												"group-hover:bg-danger",
												"group-hover:bg-secondary", // secondary ni Tailwindda o'zingiz config'da belgilagan bo‘lishingiz kerak
												"group-hover:bg-green",
											];

											return (
												<div
													key={i}
													className={`w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300 ${colors[i]}`}
												/>
											);
										})}
									</div>
								</div>
								<div
									key={index}
									className="rounded-2xl bg-white overflow-hidden shadow-md  "
								>
									{/* Project Card */}
									<div className="bg-white  rounded-2xl relative">
										{/* Info Section */}

										<div className="relative p-2 transition-all group-hover:p-0 group-hover:shadow-xl w-full aspect-[1.36585/1]">
											<div className="absolute inset-0 bg-white opacity-15 z-10 rounded-2xl" />
											<img
												src={project.image}
												alt={project.name}
												className={`w-full h-full relative z-10 object-cover scale-100 hover:scale-110 transition-transform duration-300 rounded-2xl objj${index}`}
											/>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Solutions;
