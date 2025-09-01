import React, { useEffect, useState } from "react";
import { getBlogId_API } from "../service/index";
import { useParams } from "react-router-dom";

function BlogId() {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (id) fetchBlog();
	}, [id]);

	const fetchBlog = async () => {
		const [error, response] = await getBlogId_API(id);
		if (error) {
			console.error("Xatolik:", error);
			setError("Ma'lumotni olishda xatolik yuz berdi.");
			setLoading(false);
			return;
		}

		setBlog(response);
		setLoading(false);
	};

	if (loading) {
		return <p className="text-center pt-32">Yuklanmoqda...</p>;
	}

	if (error) {
		return <p className="text-center pt-32 text-red-500">{error}</p>;
	}

	if (!blog) {
		return <p className="text-center pt-32">Blog topilmadi.</p>;
	}

	return (
		<div className="container1 pt-32">
			{/* Sana */}
			<p className="text-black/70">
				{new Date(blog.createdAt).toLocaleDateString("ru-RU", {
					day: "2-digit",
					month: "short",
					year: "numeric",
				})}
			</p>

			<h1 className="font-inter-600 text-[60px] leading-[64px] mt-10 max-lg:leading-10 max-lg:text-[36px]">
				{blog.title}
			</h1>

			<p className="text-black/60 my-4">{blog.subtitles}</p>

			<div className="flex gap-4 items-center mt-12">
				{blog.author_image ? (
					<img
						className="w-12 h-12 object-cover rounded-full"
						src={blog.author_image}
						alt="author"
					/>
				) : (
					<div className="w-12 h-12  bg-black/10 rounded-full"></div>
				)}

				<div>
					<p className="font-inter-500 max-md:text-sm">
						{blog.author_name}
					</p>
					<p className="font-inter-500 text-black/60 max-md:text-sm">
						{blog.author_description}
					</p>
				</div>
			</div>
			<div className="border border-black/10 my-12"></div>
			{/* Image */}
			{blog.images?.length > 0 && (
				<div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mt-6">
					{blog.images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`blog-image-${index}`}
							className="w-full h-[510px] max-sm:h-[360px] object-cover rounded-xl"
						/>
					))}
				</div>
			)}

			{/* HTML description */}
			{blog.description && (
				<div
					className="mt-10 text-black/90 leading-7"
					dangerouslySetInnerHTML={{ __html: blog.description }}
				></div>
			)}
		</div>
	);
}

export default BlogId;
