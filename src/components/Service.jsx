import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
	{
		id: "001",
		title: "Роботизация под ключ",
		images: ["/b4.avif", "/b2.avif", "/b3.avif"],
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
		images: ["/c3.webp", "/c2.webp", "/c1.webp"],
		content:
			"Создаем точные 3D модели и цифровые двойники, чтобы вы заранее увидели, как будет работать система",
		advantages: [
			"Точные 3D-модели",
			"Цифровой двойник перед запуском",
			"Оптимизация под реальные условия",
			"Ускорение согласований и внедрения",
		],
	},
	{
		id: "003",
		title: "Гарантия и поддержка",
		images: ["/1.webp", "/2.webp", "/3.webp"],
		content:
			"Мы отвечам за результат. Даем официальную гарантию, так же обеспечиваем техничскую поддержку на весь срок эксплуатации . Всегда на свяязи - от первого запуска до стабильной работы на вашем производстве",
		advantages: [
			"Официальная гарантия",
			"Техподдержка на весь срок эксплуатации",
			"Оперативная связь с инженером",
			"Сопровождение с первого запуска",
		],
	},
	{
		id: "004",
		title: "Демонстрация и тестовая сварка",
		images: ["/k3.webp", "/k2.webp", "/k1.webp"],
		content:
			"Покажим робота вживую на ваших деталях. Тестовая сварка - чтобы вы убедились в качестве и точности еще до старта проекта",
		advantages: [
			"Живой показ работы робота",
			"Тестовая сварка на ваших деталях",
			"Проверка точности",
			"Уверенность в результате с первого дня",
		],
	},
];

export default function Service() {
	const navigate = useNavigate();
	const [openIndex, setOpenIndex] = useState(0);

	const toggleIndex = (index) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<div className="bg-black rounded-2xl text-white min-h-screen container1 py-32 max-sm:py-10 max-sm:rounded-none font-sans">
			<div className="grid grid-cols-4 max-sm:flex max-sm:flex-col-reverse">
				<div className="bg-white flex justify-center w-5 h-5 rounded-full items-center">
					<span className="text-black font-inter-600 pb-0.5">+</span>
				</div>

				<motion.div
					className="col-span-3 text-8xl max-sm:text-[60px] font-inter-600 max-sm:mb-6 mb-12"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<span>Сервис </span>
					<span className="text-white/40 text-3xl max-sm:text-2xl relative -top-12 max-sm:-top-8 left-4">
						({data.length})
					</span>
				</motion.div>
			</div>
			<div className="">
				{data.map((item, index) => {
					const isOpen = openIndex === index;
					return (
						<div key={item.id}>
							<div
								className={`grid grid-cols-4 cursor-pointer max-sm:flex 
              ${index === 0 ? "border-t-0" : "border-t"} 
               border-white/20 max-sm:items-center py-6`}
								onClick={() => toggleIndex(index)}
							>
								<div
									className={`mr-4 max-sm:w-10 max-sm:mr-2 max-sm:text-sm ${
										!isOpen ? "text-white text-white/50" : ""
									}`}
								>
									({item.id})
								</div>
								<div className="col-span-3 max-sm:flex-1 flex justify-between items-start relative">
									<AnimatePresence mode="wait">
										{!isOpen && (
											<motion.div
												key="title"
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -10 }}
												transition={{ duration: 0.4 }}
												className="text-xl font-inter-600 max-sm:pr-8 max-sm:text-lg max-xs:text-base flex-1 absolute left-0 top-0"
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
										<span className="mb-[5px] max-xx:mr-[1px]">
											{isOpen ? "−" : "+"}
										</span>
									</motion.button>
								</div>
							</div>

							<AnimatePresence initial={false}>
								{isOpen && (
									<motion.div
										className="grid grid-cols-4 max-sm:flex py-2 text-gray-300 overflow-hidden"
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.4, ease: "easeInOut" }}
									>
										<div className="max-sm:w-12"></div>
										<div className="col-span-3 max-sm:flex-1 grid grid-cols-7 max-xl:grid-cols-1 max-xl:gap-1 gap-10 items-start">
											{item.content && (
												<div className="col-span-4 max-xl:flex-col flex gap-10">
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
														<p className="text-3xl font-inter-500 max-sm:text-2xl">
															{item.title}
														</p>
														<p className="mb-4 max-xl:max-w-full max-sm:text-sm max-w-xl text-white/70 font-inter-400 mt-2">
															{item.content}
														</p>
													</div>
												</div>
											)}
											{item.advantages && (
												<div className="col-span-3 max-xl:max-w-[400px] max-xl:w-full">
													<p className="text-white/70 text-sm font-inter-500 mb-4">
														Преимущества
													</p>
													<div className="flex flex-wrap gap-2">
														{item.advantages.map((adv, i) => (
															<button
																key={i}
																className="bg-white text-black font-inter-600 px-3 py-1 rounded-full text-sm max-sm:text-xs"
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
				<div className="col-span-3 max-sm:col-span-4 max-sm:text-center">
					<button
						onClick={() => navigate("/contact")}
						className="h-[52px] mt-6 bg-white text-black rounded-3xl max-sm:h-12 max-sm:w-full px-6 font-inter-600"
					>
						Записаться на демонстрацию
					</button>
				</div>
			</div>
		</div>
	);
}
