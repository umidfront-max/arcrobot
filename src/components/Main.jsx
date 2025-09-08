import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";

const App = () => {
	const { scrollY } = useScroll();

	// Har doim hook chaqiladigan bo‘lishi uchun default motion value yaratamiz
	const staticHeight = useMotionValue("100vh");

	// Scrollga asoslangan dynamic transform
	const animatedHeight = useTransform(scrollY, [0, 300], ["90vh", "50vh"], {
		clamp: true,
	});

	// Ekran balandligini state sifatida saqlaymiz
	const [useAnimation, setUseAnimation] = useState(true);

	useEffect(() => {
		console.log(window.innerWidth);

		if (window.innerWidth < 1180) {
			setUseAnimation(false);
		}
	}, []);

	return (
		<div className="overflow-x-hidden px-3 mt-2 max-md:px-1">
			<motion.div
				// Height shartga qarab dynamic yoki static bo‘ladi
				style={{ height: useAnimation ? animatedHeight : staticHeight }}
				className="relative w-full overflow-hidden rounded-3xl max-md:!h-[780px] max-xx:!h-[700px] text-white font-inter-500"
			>
				{/* Video fon */}
				<video
					src="/bg.mp4"
					loop
					autoPlay
					muted
					playsInline
					preload="metadata"
					poster="/bg.avif" // agar poster ham public papkada bo‘lsa
					className="absolute rounded-3xl w-full h-full object-cover"
				/>

				{/* Qorong'u overlay */}
				<div className="absolute inset-0 bg-black/30 rounded-3xl z-10"></div>

				{/* Kontent */}
				<div className="relative z-10 h-full text-center px-4 max-md:px-2">
					<div className="flex justify-between flex-wrap">
						<div className="pt-[8%] max-xl:pt-[6%] max-md:pt-[10%] max-sm:px-2 pl-12 max-xl:pl-8 max-md:pl-3">
							<h1 className="text-[216px]  max-sm:text-[90px] max-xs:text-[70px] max-xl:text-[160px]  max-sm:px-0 max-sm:text-start max-lg:text-[140px] max-md:pl-3 tracking-tighter font-inter-600 leading-none font-inter">
								arcrobot
							</h1>
							<h2 className="text-[44px] max-sm:text-lg max-xl:text-3xl max-md:text-start max-ms:m-0 tracking-tighter text-end mr-12 font-inter-600 mb-6">
								Промышленные роботы
							</h2>
						</div>
						<div className="pt-[12%] max-[1077px]:pt-0 max-xl:-mt-6 max-md:w-full max-xl:pl-6 max-md:mt-4 pr-24 max-md:px-4">
							<div className="grid justify-items-end max-xl:mb-12 gap-1 text-left text-base font-inter-600 mt-3 md:text-lg mb-24">
								<p>Подбор робота под ваши задачи</p>
								<p>3D-визуализация проекта</p>
								<p>Запуск за 2–3 недели</p>
								<p>Интеграция в ваш процесс</p>
							</div>
							<div className="bg-white max-xl:mt-0 text-black p-4 max-md:w-max px-6 rounded-xl shadow-lg mb-4 w-full mt-4 max-w-sm">
								<p className="font-inter-600 tracking-tighter text-left">
									Бесплатная консультация
								</p>
								<p className="text-sm text-left text-gray/70 font-inter-600">
									Начните автоматизацию уже сегодня
								</p>
								<Link
									to={"/contact"}
									className="flex justify-start items-start mt-6"
								>
									<motion.button
										whileHover="hover"
										initial="rest"
										animate="rest"
										className="relative w-[176px] group bg-black text-white overflow-hidden rounded-full h-[30px] font-inter-600 text-xs"
									>
										<motion.p
											variants={{
												rest: { y: "-100%", opacity: 0 },
												hover: {
													y: "0%",
													opacity: 1,
													transition: { duration: 0.1 },
												},
											}}
											className="absolute px-3 text-left whitespace-nowrap text-sm w-full left-0 top-1 -translate-y-1"
										>
											Обсудить проект
										</motion.p>
										<motion.p
											variants={{
												rest: { y: "0%", opacity: 1 },
												hover: {
													y: "100%",
													opacity: 0,
													transition: { duration: 0.1 },
												},
											}}
											className="w-full px-3 text-left absolute whitespace-nowrap text-sm left-0 top-1 -translate-y-1"
										>
											Обсудить проект
										</motion.p>
										<div className="rounded-full absolute right-3 top-[11px] group-hover:w-[9px] group-hover:top-[10px] group-hover:h-[9px] bg-white w-2 h-2" />
									</motion.button>
								</Link>
							</div>
						</div>
					</div>
					<p className="text-left pl-10 max-md:pl-4 max-w-3xl -mt-20 max-xl:mt-10 text-lg md:text-xl mb-8 max-sm:leading-6">
						<strong>Без воды. Без рисков.</strong> Роботы, которые делают
						<br className="max-sm:hidden" />
						свою работу — быстро, точно, надёжно.
					</p>
					<div className="grid grid-cols-4 -mt-2 px-10 max-md:hidden">
						{Array(4)
							.fill("+")
							.map((plus, i) => (
								<p
									key={i}
									className="text-3xl text-start font-light text-white opacity-70"
								>
									{plus}
								</p>
							))}
					</div>
					<footer className="absolute bottom-6 px-10 max-md:px-1 left-4 z-30 text-sm opacity-60">
						© 2025 arcrobot
					</footer>
				</div>
			</motion.div>
		</div>
	);
};

export default App;
