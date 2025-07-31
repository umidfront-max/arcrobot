import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const data = [
	{
		id: "001",
		title: "Роботизация под ключ",
		images: [
			"https://framerusercontent.com/images/LeyCcPa8Qe4a6XJpGfCApKP5NYg.png",
			"https://framerusercontent.com/images/ABnNffj7fcH6JcecFxlOD04qJA.png",
			"https://framerusercontent.com/images/4GGgrckaKoRKvg5Cx3wLlLrwyQg.png",
		],
		content:
			"Мы берем на себя весь цикл: от подбора робота под вашу задачу до запуска оборудования на вашем производстве",
		advantages: [
			"Индивидуальный подход",
			"Быстрый запуск проекта",
			"Полный цикл работ",
			"Гарантия качества",
		],
	},
	{
		id: "002",
		title: "Инжиниринг и 3D-моделирование",
		images: [
			"https://framerusercontent.com/images/Q9d6XBhbcf6Qsh8X3m8sw1pRrU.png",
			"https://framerusercontent.com/images/hbH8h6IZhREOplkDDsGlmBkfxs.png",
			"https://framerusercontent.com/images/9Ivy806kq1uOG8FBVDkHZi30o.png",
		],
		content:
			"Создаем точные 3D модели и цифровые двойники, чтобы вы заранее увидели, как будет работать система",
		advantages: [
			"Точные 3D-модели",
			"Быстрый запуск проекта",
			"Полный цикл работ",
			"Гарантия качества",
		],
   },
   {
		id: "003",
		title: "Гарантия и поддержка",
		images: [
			"https://framerusercontent.com/images/Q9d6XBhbcf6Qsh8X3m8sw1pRrU.png",
			"https://framerusercontent.com/images/hbH8h6IZhREOplkDDsGlmBkfxs.png",
			"https://framerusercontent.com/images/9Ivy806kq1uOG8FBVDkHZi30o.png",
		],
		content:
			"Создаем точные 3D модели и цифровые двойники, чтобы вы заранее увидели, как будет работать система",
		advantages: [
			"Точные 3D-модели",
			"Быстрый запуск проекта",
			"Полный цикл работ",
			"Гарантия качества",
		],
	},
];

export default function Service() {
	const [openIndex, setOpenIndex] = useState(0);

	const toggleIndex = (index) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<div className="bg-black rounded-2xl text-white min-h-screen container1 py-32 font-sans">
			<div className="grid grid-cols-4">
				<div className="bg-white flex justify-center w-5 h-5 rounded-full items-center">
					<span className="text-black font-inter-600">+</span>
				</div>
				<div className="col-span-3 text-8xl font-bold mb-12 ">
					<span>Сервис </span>
					<span className="text-white/40 text-3xl relative  -top-12 left-4">
						({data.length})
					</span>
				</div>
			</div>
			<div className="space-y-4">
				{data.map((item, index) => {
					const isOpen = openIndex === index;
					return (
						<div key={item.id}>
							<div
								className="grid grid-cols-4 cursor-pointer border-t border-gray-700 py-6"
								onClick={() => toggleIndex(index)}
							>
								<div className="text-gray-400 mr-4">({item.id})</div>
								<div className="col-span-3 flex justify-between items-start relative">
									<AnimatePresence mode="wait">
										{!isOpen && (
											<motion.div
												key="title"
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -10 }}
												transition={{ duration: 0.4 }}
												className="text-xl font-semibold flex-1 absolute left-0 top-0"
											>
												{item.title}
											</motion.div>
										)}
									</AnimatePresence>

									<motion.button
										className="text-xl w-6 h-6 border rounded-full flex items-center justify-center ml-auto"
										animate={{ rotate: isOpen ? 180 : 0 }}
										transition={{ duration: 0.6, ease: "easeInOut" }}
									>
										<span className="mb-1">{isOpen ? "−" : "+"}</span>
									</motion.button>
								</div>
							</div>

							<AnimatePresence initial={false}>
								{isOpen && (
									<motion.div
										className="grid grid-cols-4 py-2 text-gray-300 overflow-hidden"
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.4, ease: "easeInOut" }}
									>
										<div></div>
										<div className="col-span-3 grid grid-cols-7 gap-10 items-start">
											{item.content && (
												<div className="col-span-4 flex gap-10">
													<div className="flex">
														{item.images?.map((src, i) => (
															<div
																key={i}
																className={`relative w-20 h-20 ${
																	i > 0 ? "-ml-10" : ""
																} rounded-[14px] overflow-hidden shadow-md`}
															>
																<img
																	src={src}
																	alt=""
																	className="absolute inset-0 w-full h-full object-cover"
																/>
															</div>
														))}
													</div>
													<div>
														<p className="text-3xl font-inter-500">
															{item.title}
														</p>
														<p className="mb-4 max-w-xl text-white/70 font-inter-400 mt-2">
															{item.content}
														</p>
													</div>
												</div>
											)}
											{item.advantages && (
												<div className="col-span-3">
													<p className="text-white/70 text-sm font-inter-500 mb-4">
														Преимущества
													</p>
													<div className="flex flex-wrap gap-2">
														{item.advantages.map((adv, i) => (
															<button
																key={i}
																className="bg-white text-black px-3 py-1 rounded-full text-sm"
															>
																{adv}
															</button>
														))}
													</div>
												</div>
											)}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					);
				})}
         </div>
         <div className="grid grid-cols-4">
            <div></div>
            <div className="col-span-3">
               <button className="h-[52px] mt-6 bg-white text-black rounded-3xl px-6 font-inter-600">Записаться на демонстрацию</button>
            </div>
         </div>
		</div>
	);
}
