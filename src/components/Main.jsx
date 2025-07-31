import React from "react";

const App = () => {
	return (
		<div className="px-3 overflow-hidden">
			<div
				style={{ height: "calc(100vh - 60px)" }}
				className="relative w-full rounded-2xl overflow-hidden text-white font-sans"
			>
				{/* Video fon */}
				<video
					src="https://framerusercontent.com/assets/98SDvcnyTK5dKmpSPxzkuMRB2I.mp4"
					loop
					autoPlay
					muted
					playsInline
					preload="auto"
					poster="https://framerusercontent.com/images/LIUgHfwhVCUI2oVdHOrVujGRmzI.jpg"
					className="absolute w-full h-full object-cover"
					style={{
						cursor: "auto",
						borderRadius: "0px",
						display: "block",
						backgroundColor: "rgba(0, 0, 0, 0)",
						objectPosition: "50% 50%",
					}}
				/>

				{/* Qorong'u overlay */}
				<div className="absolute inset-0 bg-black/60 z-10"></div>

				{/* Kontent */}
				<div className="relative z-20 h-full text-center px-4">
					<div className="flex justify-between">
						<div className="pt-[6%] pl-12">
							<h1 className=" md:text-[206px] font-bold leading-none">
								arcrobot
							</h1>
							<h2 className="text-2xl text-end mr-12 md:text-4xl font-semibold mb-6">
								Промышленные роботы
							</h2>
						</div>
						<div className="pt-[11%] pr-12">
							<div className="grid gap-1 text-left text-base font-inter-500 md:text-lg mb-10">
								<p> Подбор робота под ваши задачи</p>
								<p> 3D-визуализация проекта</p>
								<p> Запуск за 2–3 недели</p>
								<p> Интеграция в ваш процесс</p>
							</div>
							{/* Konsultatsiya bloki */}
							<div className="bg-white text-black p-4 rounded-xl shadow-lg mb-4 w-full max-w-sm">
								<p className="font-semibold text-left text-sm">
									Бесплатная консультация
								</p>
								<p className="text-xs text-left text-gray font-inter-500">
									Начните автоматизацию уже сегодня
								</p>
								<div className="flex justify-start items-start">
									<button className="mt-3 text-xs w-40 bg-black text-white py-1 rounded-full hover:bg-gray-900 transition">
										Обсудить проект
									</button>
								</div>
							</div>
						</div>
					</div>
					{
						<p className="text-left pl-10 max-w-3xl text-lg md:text-xl mb-8">
							<strong>Без воды. Без рисков.</strong> Роботы, которые
							делают <br /> свою работу — быстро, точно, надёжно.
						</p>
					}
					{/* Footer */}
					<footer className="absolute bottom-4 left-4 z-30 text-sm opacity-60">
						© 2025 arcrobot
					</footer>
					{/* Tugma */}
			
				</div>
			</div>
		</div>
	);
};

export default App;
