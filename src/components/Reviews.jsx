import React from "react";

const testimonials = [
	{
		name: "Сергей Ковалёв",
		position: "Директор по производству, «ЗаводПром»",
		comment:
			"Мы получили робот, который реально работает. Команда быстро включилась, всё объяснила, помогла с обучением",
	},
	{
		name: "Игорь Дьяков",
		position: "Главный инженер, «СтальАвто»",
		comment:
			"От демонстрации до запуска — меньше месяца. Всё собрано аккуратно, сварка — чёткая. Рекомендую",
	},
	{
		name: "Андрей Миронов",
		position: "Руководитель техотдела, «МетПроф»",
		comment:
			"После тестовой сварки сомнений не осталось. Внедрение без сбоев, робот варит стабильно.",
	},
];

const avatarImages = [
	"https://framerusercontent.com/images/QNFgap7Ric7c600zjgb7SwwQuc.png",
	"https://framerusercontent.com/images/tzesjCUyqcIM5JyKObVgGrsPw9Q.png",
	"https://framerusercontent.com/images/aZTbgRPJqpfYezqygrk0bdEvlPg.png",
	"https://framerusercontent.com/images/KB2pGwkwRrrUj3lqUkcCBJeBJw.png",
];
const Reviews = () => {
	return (
		<div className="bg-gray-100 min-h-screen container1 py-16">
			<div className="grid grid-cols-4">
				{/* Why Us */}
				<div className="flex gap-2">
					<div className="flex justify-center items-center w-5 h-5 rounded-full bg-black text-white">
						<span className="mb-[1px]">+</span>
					</div>
					<p className="text-base font-medium">Опыт работы с нами</p>
				</div>

				<div className="col-span-3">
					{/* Main Heading */}
					<h2 className="text-[96px] mb-3 w-4/5 font-inter-700 leading-[110%] text-black">
						Отзывы
					</h2>

					{/* Description */}
					<p className="text-3xl font-inter-600 leading-[140%] text-black mt-3 max-w-2xl">
						©2025
					</p>
				</div>
			</div>
			<div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-1">
				{/* Stats Card */}
				<div className="bg-white rounded-xl p-6 flex flex-col justify-between">
					<div className="flex gap-6">
						<div className="flex items-end">
							<h1 className="text-5xl font-bold">5</h1>
							<p className="text-sm text-gray-800 ">/5</p>
						</div>
						<p className="mt-4 text-xs text-[#6e6d6d]">
							Внедрили{" "}
							<span className="font-inter-600 text-black">
								25+ решений
							</span>{" "}
							для производств с реальными результатами.
						</p>
					</div>
					<div className="mt-6">
						<p className="font-inter-600 mb-2 text-lg">arcrobot</p>
						<div className="flex gap-4">
							<div className="flex items-center -space-x-4">
								{avatarImages.map((url, idx) => (
									<div
										key={idx}
										className="w-10 h-10 rounded-[11px] border-[3px] border-[#f5f5f5] overflow-hidden relative z-10"
									>
										<img
											src={url}
											alt={`user-${idx}`}
											className="w-full h-full object-cover object-center"
										/>
									</div>
								))}

								<div className="w-10 h-10 bg-black text-white text-[11px] font-semibold flex items-center justify-center rounded-[11px] border-[3px] border-[#f5f5f5] z-10">
									56+
								</div>
							</div>
							<div>
								<div className="flex text-secondary text-[12px] font-inter-600 items-center mt-2 text-orange-500">
									★★★★★
								</div>
								<p className="text-xs mt-1">Нам доверяют</p>
							</div>
						</div>
					</div>
				</div>

				{/* Testimonials */}
				{testimonials.map((item, index) => (
					<div key={index} className="group flex flex-col h-full">
						{/* Header */}
						<div className="flex items-center space-x-3 bg-white rounded-xl p-6 transition-[border-radius] duration-500 group-hover:rounded-b-none">
							<img
								className="w-12 h-12 bg-gray-300 rounded-lg"
								src={avatarImages[index]}
								alt=""
							/>
							<div>
								<p className="font-inter-500">{item.name}</p>
								<p className="text-[10px] text-black-400">
									{item.position}
								</p>
							</div>
						</div>

						{/* Body: make it fill the rest */}
						<div className="bg-white rounded-xl flex flex-col justify-between p-6 mt-1 flex-grow transition-[border-radius] duration-500 group-hover:rounded-t-none group-hover:mt-0 group-hover:pt-7">
							<div className="flex justify-between items-center">
								<div className="flex text-secondary text-[12px] font-inter-600 items-center text-orange-500">
									★★★★★
								</div>
								<div className="text-black/30 text-3xl font-inter-400 transition-transform duration-500 group-hover:rotate-90">
									+
								</div>
							</div>
							<p className="text-xl font-inter-600 leading-6 mt-4">
								{item.comment}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
