import React from "react";

function WhyUs() {
	return (
		<section className="py-10 container1">
			{/* Header Section */}
			<div className="grid grid-cols-4">
				{/* Why Us */}
				<div className="flex gap-2">
					<div className="flex justify-center items-center w-5 h-5 rounded-full bg-black text-white">
						<span className="mb-[1px]">+</span>
					</div>
					<p className="text-base font-medium">Почему мы ?</p>
				</div>

				<div className="col-span-3">
					{/* Subheading */}
					<p className="text-xl font-semibold">arcrobot</p>

					{/* Main Heading */}
					<h2 className="text-[40px] my-3 w-4/5 sm:text-[60px] font-semibold leading-[110%] text-black/60">
						<span className="text-black">Как</span>{" "}
						<span className="text-black">arcrobot</span> помогает
						автоматизировать производство.
					</h2>

					{/* Description */}
					<p className="text-[18px] font-medium leading-[140%] text-gray/50 mt-4 max-w-2xl">
						Четыре причины, почему компании выбирают роботизацию:
						стабильное качество, высокая скорость, быстрый запуск и
						экономическая выгода.
					</p>
				</div>
			</div>

			<div className="max-w-[1000px] my-10 grid grid-cols-2 items-center gap-20 w-full mx-auto">
				<img
					className="bg-cover aspect-[5/4] rounded-3xl"
					src="https://framerusercontent.com/images/nhowdQPYODnYt5UrcS2gdZlkr4I.png"
					alt=""
				/>
				<div>
					<p className="text-[50px] font-inter-600 leading-[50px] text-black/80">
						Стабильное качество
					</p>
					<p className="my-5 text-black/60">
						Робот варит строго по заданной траектории — без отклонений,
						вибраций или “на глаз”. Результат повторяется на каждой
						детали: нет перепроваров, недоваров или расхождений. Качество
						стабильно вне зависимости от времени суток, объёма партии или
						человеческого фактора.
					</p>
					<div className="flex gap-4">
						<button className="bg-black px-5 py-1.5 text-white rounded-2xl font-inter-600">
							Оставить заявку
						</button>
						<button className="bg-white px-5 py-1.5 text-black hover:bg-black/5 rounded-2xl font-inter-600">
							подробнее
						</button>
					</div>
				</div>
			</div>
			<div className="max-w-[1000px] my-10 grid grid-cols-2 items-center gap-20 w-full mx-auto">
				<div>
					<p className="text-[50px] font-inter-600 leading-[50px] text-black/80">
						Быстрая сварка
					</p>
					<p className="my-5 text-black/60">
						Скорость сварки выше в 3 раза по сравнению с ручным трудом —
						особенно на серийных операциях. Робот не делает пауз, не
						отвлекается и не снижает темп в течение смены. Всё это
						позволяет увеличить производительность без найма
						дополнительного персонала.
					</p>
					<div className="flex gap-4">
						<button className="bg-black px-5 py-1.5 text-white rounded-2xl font-inter-600">
							Оставить заявку
						</button>
						<button className="bg-white px-5 py-1.5 text-black hover:bg-black/5 rounded-2xl font-inter-600">
							подробнее
						</button>
					</div>
				</div>
				<img
					className="bg-cover aspect-[5/4] rounded-3xl"
					src="https://framerusercontent.com/images/W2QaDhWr0I8xztw91yf8vJGqyIw.png"
					alt=""
				/>
			</div>
			<div className="max-w-[1000px] my-10 grid grid-cols-2 items-center gap-20 w-full mx-auto">
				<img
					className="bg-cover aspect-[5/4] rounded-3xl"
					src="https://framerusercontent.com/images/4AZjOe95ExXdClnjzfZkXoN62o.png"
					alt=""
				/>
				<div>
					<p className="text-[50px] font-inter-600 leading-[50px] text-black/80">
						Быстрый запуск
					</p>
					<p className="my-5 text-black/60">
						Робота не нужно нанимать, обучать и вводить в должность. Вы
						определяетесь с моделью и оснасткой, и уже через 2–3 недели он
						работает у вас на производстве. Поставка, пусконаладка и
						обучение персонала — под ключ, без потери времени.
					</p>
					<div className="flex gap-4">
						<button className="bg-black px-5 py-1.5 text-white rounded-2xl font-inter-600">
							Оставить заявку
						</button>
						<button className="bg-white px-5 py-1.5 text-black hover:bg-black/5 rounded-2xl font-inter-600">
							подробнее
						</button>
					</div>
				</div>
			</div>
			<div className="max-w-[1000px] my-10 grid grid-cols-2 items-center gap-20 w-full mx-auto">
				<div>
					<p className="text-[50px] font-inter-600 leading-[50px] text-black/80">
						Экономия затрат
					</p>
					<p className="my-5 text-black/60">
						Нет расходов на зарплаты, налоги, переработки, больничные и
						отпуска. Робот работает в три смены — без доплат. В
						большинстве проектов оборудование окупается за 6–12 месяцев и
						продолжает снижать себестоимость продукции.
					</p>
					<div className="flex gap-4">
						<button className="bg-black px-5 py-1.5 text-white rounded-2xl font-inter-600">
							Оставить заявку
						</button>
						<button className="bg-white px-5 py-1.5 text-black hover:bg-black/5 rounded-2xl font-inter-600">
							подробнее
						</button>
					</div>
				</div>
				<img
					className="bg-cover aspect-[6/5] rounded-3xl"
					src="https://framerusercontent.com/images/M94WCZE6zKMl6pGAL2nQvwBgA0.png"
					alt=""
				/>
			</div>
		</section>
	);
}

export default WhyUs;
