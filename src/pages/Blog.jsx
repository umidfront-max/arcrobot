import React, { useEffect, useState } from "react";
import { getBlog_API } from "../service/index";
import { useNavigate } from "react-router-dom";

function Blog() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetchBlogs();
	}, []);

	const fetchBlogs = async () => {
		const [error, response] = await getBlog_API();

		if (error) {
			console.error("Xatolik:", error);
			return;
		}
		setBlogs(response.data);
	};

	const navigate = useNavigate();

	const handleClick = (e) => {
		navigate(`/block/${e}`);
	};
	return (
		<div className="container1 pt-60 max-lg:pt-36">
			<h1 className="font-inter-600 text-[60px] max-lg:text-3xl">
				Блог о роботизированной сварке.
			</h1>
			<div className="flex max-md:flex-col gap-20 max-md:gap-6 mt-16 max-md:mt-8">
				<div className="flex justify-between flex-1">
					<div className="flex max-md:hidden gap-2">
						<div className="flex justify-center items-center w-5 h-5 rounded-full bg-black text-white">
							<span className="mb-[1px]">+</span>
						</div>
						<p className="text-base font-medium">Blog</p>
					</div>
					<div className="flex flex-col text-3xl max-lg:text-2xl max-lg:leading-7 max-w-[500px] w-full">
						<p className="text-[#0a0a0a] max-sm:text-start max-sm:indent-7 text-end">
							Практические статьи о внедрении
						</p>
						<span className="text-[#0a0a0a]">
							сварочных роботов, автоматизации и точности на
							производстве.
						</span>
					</div>
				</div>
				<div className="self-end max-md:self-start">
					<p className="text-[#0a0a0a99] w-80 max-lg:w-40 max-md:w-[300px] max-md:text-sm">
						От экономики внедрения до технических кейсов — всё, что нужно
						знать, чтобы перестать зависеть от человеческого фактора.
					</p>
				</div>
			</div>
			<div className="grid max-md:mt-10 max-md:flex max-md:flex-col grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-1 mt-16 mb-12">
				{blogs
					.sort((a, b) => a.order_key - b.order_key)
					.map((item, index) => (
						<div
							onClick={() => handleClick(item.id)}
							key={item.id}
							className={`${
								index === 0
									? "col-span-2 h-[470px] max-md:h-[450px]"
									: "w-full"
							} group overflow-hidden cursor-pointer transition-all relative rounded-xl bg-white`}
						>
							{index === 0 ? (
								<>
									<img
										src={item.images?.[0]}
										alt=""
										className={`${
											index === 0
												? "absolute transition-all duration-500 group-hover:blur-sm group-hover:scale-110 top-0 left-0 rounded-xl object-cover h-full w-full"
												: "w-32 h-32 transition-all object-cover duration-500 group-hover:h-48 group-hover:w-48 rounded-lg"
										}`}
									/>

									<div className="absolute bg-black opacity-30 rounded-xl h-full w-full"></div>
									<div className="absolute max-w-[440px] bottom-10 left-10 max-sm:left-4 text-white">
										<p className="text-sm">
											{new Date(item.createdAt).toLocaleDateString()}
										</p>
										<h3 className="text-[36px] font-inter-600 mt-2 mb-4 leading-10">
											{item.title}
										</h3>
										<p className="text-white/60">{item.subtitles}</p>
									</div>
								</>
							) : (
								<div className="flex min-h-[470px] max-md:min-h-[366px] flex-col justify-between p-2.5 h-full">
									<div className="flex w-full justify-between">
										<div className="flex-shrink-0">
											<img
												src={item.images?.[0]}
												alt=""
												className="w-32 h-32 object-cover transition-all duration-500 group-hover:h-48 group-hover:w-48 rounded-lg"
											/>
										</div>
										<div className="bg-black w-5 h-5 transition-all duration-500 group-hover:rotate-180 text-white rounded-full flex items-center justify-center">
											<span className="font-inter-600 pb-[3px] pr-[1px]">
												+
											</span>
										</div>
									</div>
									<div className="p-5 pt-2 max-lg:pt-8 max-xl:px-2 max-sm:px-0 max-sm:pb-2">
										<p className="text-xs text-[#090909] relative bottom-3 transition-all duration-500 group-hover:bottom-0">
											{new Date(item.createdAt).toLocaleDateString()}
										</p>
										<h3 className="text-xl mt-2 mb-4 leading-6">
											{item.title}
										</h3>
										<p className="text-[#0a0a0a99]">
											{item.subtitles}
										</p>
									</div>
								</div>
							)}
						</div>
					))}
			</div>
		</div>
	);
}

export default Blog;
