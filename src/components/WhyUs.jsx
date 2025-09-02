import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WhyHoverButton from "./WhyBtn";

const AnimatedBlock = ({ children, direction = "left" }) => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

	const variants = {
		hidden: {
			x: direction === "left" ? -100 : 100,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={variants}
		>
			{children}
		</motion.div>
	);
};

function WhyUs() {
	const sections = [
		{
			image: "/a1.avif",
			title: "Стабильное качество",
			text: "Робот варит строго по заданной траектории — без отклонений и ошибок, свойственных человеку. Это обеспечивает стабильное и высокое качество сварных швов при каждом повторении операции.",
		},
		{
			image: "/a2.avif",
			title: "Быстрая сварка",
			text: "Скорость сварки выше в 3 раза по сравнению с ручным трудом. Робот не устает, не делает перерывов и работает с максимальной эффективностью в любое время суток.",
		},
		{
			image: "/a3.avif",
			title: "Быстрый запуск",
			text: "Робота не нужно нанимать, обучать и вводить в должность. После первоначальной настройки он готов к работе и может приступить к выполнению задач в тот же день.",
		},
		{
			image: "/a4.avif",
			title: "Экономия затрат",
			text: "Нет расходов на зарплаты, налоги, переработки, больничные и другие издержки, связанные с человеческим трудом. Робот — это одноразовая инвестиция с долгосрочной выгодой.",
		},
	];

	return (
		<section className="container1 overflow-hidden">
			{/* Header */}
			<div className="grid grid-cols-4 max-sm:grid-cols-1">
				<div className="flex gap-2">
					<div className="flex justify-center items-center w-5 h-5 rounded-full bg-black text-white">
						<span className="mb-[1px] font-inter-600">+</span>
					</div>
					<p className="text-base font-medium">Почему мы ?</p>
				</div>

				<motion.div
					className="col-span-3 max-md:col-span-4 max-md:mt-4"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true, amount: 0.3 }} // faqat bir marta, 30% ko'rinsa
				>
					<p className="text-xl font-semibold max-md:hidden">arcrobot</p>
					<h2 className="max-lg:text-[40px] my-3 w-4/5 text-[60px] max-sm:text-[32px] max-xl:w-full font-inter-600 leading-[110%] text-black/60">
						<span className="text-black">Как</span>{" "}
						<span className="text-black">arcrobot</span> помогает
						автоматизировать производство.
					</h2>
					<p className="text-[18px] font-medium leading-[140%] text-gray/50 mt-4 max-sm:text-sm max-w-2xl">
						Четыре причины, почему компании выбирают роботизацию:
						стабильное качество, высокая скорость, быстрый запуск и
						экономическая выгода.
					</p>
					<p className="text-xl font-inter-600 hidden mt-5 max-md:block">
						arcrobot
					</p>
				</motion.div>
			</div>

			{/* Dynamic content */}
			{sections.map((item, i) => (
				<div key={i} className="max-w-[1000px] my-10 w-full mx-auto">
					{i % 2 === 0 ? (
						<AnimatedBlock direction="right">
							<div className=" grid grid-cols-2 max-md:grid-cols-1 items-center gap-20 max-xl:gap-10 ">
								<div>
									<img
										src={item.image}
										alt=""
										className="bg-cover aspect-[5/4] rounded-3xl"
									/>
								</div>

								<div>
									<p className="text-[50px] max-sm:text-[40px] max-sm:leading-10 leading-[50px] font-inter-600  text-black/80">
										{item.title}
									</p>
									<p className="my-5 text-black/60">{item.text}</p>
									<div className="flex gap-4">
										<WhyHoverButton />
										<WhyHoverButton
											text="подробнее"
											bgColor="bg-white"
											textColor="text-black"
											hoverBg="hover:bg-black/10"
											width="w-40 max-xl:w-32"
											id={i+1}
										/>
									</div>
								</div>
							</div>
						</AnimatedBlock>
					) : (
						<AnimatedBlock direction="left">
							<div className=" grid grid-cols-2 max-md:grid-cols-1 items-center gap-20 max-xl:gap-10 ">
								<img
									src={item.image}
									alt=""
									className="bg-cover hidden max-md:block aspect-[5/4] rounded-3xl"
								/>
								<div className="">
									<p className="text-[50px] max-sm:text-[40px] max-sm:leading-10 mt-4 font-inter-600 leading-[50px] text-black/80">
										{item.title}
									</p>
									<p className="my-5 text-black/60">{item.text}</p>
									<div className="flex gap-4">
										<WhyHoverButton />

										<WhyHoverButton
											text="подробнее"
											bgColor="bg-white"
											textColor="text-black"
											hoverBg="hover:bg-black/10"
											width="w-40 max-xl:w-32"
											id={i+1}
										/>
									</div>
								</div>

								<img
									src={item.image}
									alt=""
									className="bg-cover max-md:hidden aspect-[5/4] rounded-3xl"
								/>
							</div>
						</AnimatedBlock>
					)}
				</div>
			))}
		</section>
	);
}

export default WhyUs;
