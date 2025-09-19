import React from "react";

const BlogNavigation = ({ blogs, currentIndex, onNavigate }) => {
	if (!blogs || blogs.length === 0) return null;

	const prevBlog = blogs[currentIndex - 1];
	const nextBlog = blogs[currentIndex + 1];

	return (
		<div className="grid grid-cols-1 md:grid-cols-1 gap-6">
			{/* Previous */}
			{prevBlog && (
				<div
					onClick={() => onNavigate(prevBlog.id)}
					className="relative w-1/2 max-md:w-full flex justify-center items-center rounded-xl overflow-hidden cursor-pointer group"
					style={{ minHeight: "200px" }}
				>
					<img
						src={prevBlog.images?.[0] || "/default.jpg"}
						alt={prevBlog.title}
						className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-black/50"></div>
					<div className="relative p-6 text-white">
						<p className="text-sm opacity-70">Previous</p>
						<h3 className="text-[22px] w-4/5 max-sm:w-full max-sm:text-lg leading-7 mt-2 font-inter-500">
							{prevBlog.title}
						</h3>
					</div>
				</div>
			)}

			{/* Next */}
			{nextBlog && (
				<div
					onClick={() => onNavigate(nextBlog.id)}
					className="relative  w-1/2 max-md:w-full flex justify-end items-center rounded-xl overflow-hidden cursor-pointer group bg-black"
					style={{ minHeight: "200px" }}
				>
					<img
						src={nextBlog.images?.[0] || "/default.jpg"}
						alt={nextBlog.title}
						className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-black/50"></div>
					<div className="relative p-6 w-full text-white">
						<p className="text-sm opacity-70 text-end">Next</p>
						<h3 className="text-[22px] leading-7 mt-2 max-sm:text-lg text-end font-inter-500">
							{nextBlog.title}
						</h3>
					</div>
				</div>
			)}
		</div>
	);
};

export default BlogNavigation;
