import React from "react";

export default function FirstHand() {
	return (
		<div className="container1">
			<div className="grid grid-cols-2 max-lg:grid-cols-1 gap-1 ">
				<div>
					<h2 className="text-[54px] max-sm:text-[32px] max-sm:leading-[36px] max-sm:mb-4 font-inter-600 leading-[60px] text-[#0a0a0a99]">
						<span className="text-[#090909]">Всё, что важно знать</span> о
						роботах на производстве — из первых рук.
					</h2>
				</div>
				<div className="self-end">
					<p className="text-[#0a0a0a99] w-80">
						Следите за нашими новыми проектами, разбором внедрений,
						анализом тенденций и экономическим эффектом от роботизации.
					</p>
				</div>
			</div>
			<div className="grid  max-md:flex max-md:flex-col grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-1 mt-16 mb-12">
				<div className="w-full group flex flex-col justify-between p-2.5 bg-white rounded-xl">
					<div className="flex w-full justify-between ">
						<img
							src="https://framerusercontent.com/images/x7maGMOMYjALd7wVmyOlxhCzGSw.png?scale-down-to=512"
							alt=""
							className="w-32 h-32 transition-all duration-500 group-hover:h-48 group-hover:w-48 rounded-lg"
						/>
						<div className="bg-black w-5 h-5 transition-all duration-500 group-hover:rotate-180 text-white rounded-full flex items-center justify-center">
							<span className="font-inter-600 pb-[3px] pr-[1px]">+</span>
						</div>
					</div>
					<div className="p-2 py-4 max-lg:pt-8 max-sm:px-2">
						<p className="text-xs text-[#090909] relative bottom-3  transition-all duration-500 group-hover:bottom-0">
							2 февраля 2025 г.
						</p>
						<h3 className="text-xl font-inter-600 mt-2 mb-4 leading-6">
							Стабильное качество: почему сварочный робот лучше человека
						</h3>
						<p className="text-[#0a0a0a99] max-sm:text-sm">
							Робот варит с точностью, которую не повторит человек.
							Узнай, почему автоматическая сварка даёт стабильный
							результат без брака.
						</p>
					</div>
				</div>
				<div className="w-full group flex flex-col justify-between p-2.5 bg-white rounded-xl">
					<div className="w-full flex justify-between ">
						<img
							className="w-32 h-32 transition-all duration-500 group-hover:h-48 group-hover:w-48 rounded-lg"
							src="https://framerusercontent.com/images/0aHjr9cjDhAxgtoH3ALQbwjzh3E.png"
							alt=""
						/>
						<div className="bg-black w-5 h-5 transition-all duration-500 group-hover:rotate-180 text-white rounded-full flex items-center justify-center">
							<span className="font-inter-600 pb-[3px] pr-[1px]">+</span>
						</div>
					</div>
					<div className="p-2 py-4 max-lg:pt-8 max-sm:px-2">
						<p className="text-xs text-[#090909] relative bottom-3  transition-all duration-500 group-hover:bottom-0">
							2 февраля 2025 г.
						</p>
						<h3 className="text-xl font-inter-600 leading-6 mt-2 mb-4">
							Быстрая сварка — как робот ускоряет производство
						</h3>
						<p className="text-[#0a0a0a99] max-sm:text-sm">
							Робот сваривает быстрее человека: без пауз, усталости и
							брака. Узнай, как это ускоряет производство и даёт
							конкурентное преимущество.
						</p>
					</div>
				</div>
				<div className="col-span-2 relative h-[450px] max-md:h-[450px]">
					<img
						src="https://framerusercontent.com/images/6vnqmQMi6uDlYAZJNvlSLQIKI.png"
						srcSet="
    https://framerusercontent.com/images/6vnqmQMi6uDlYAZJNvlSLQIKI.png?scale-down-to=512 512w,
    https://framerusercontent.com/images/6vnqmQMi6uDlYAZJNvlSLQIKI.png?scale-down-to=1024 1024w,
    https://framerusercontent.com/images/6vnqmQMi6uDlYAZJNvlSLQIKI.png 1920w
  "
						sizes="(max-width: 768px) 512px, (max-width: 1024px) 1024px, 1920px"
						alt=""
						className="absolute top-0 left-0 rounded-xl object-cover h-full"
						style={{ objectPosition: "30.4% 58.7%" }}
					/>

					<div className="absolute bg-black opacity-30 rounded-xl h-full w-full"></div>

					<p className="absolute top-6 left-6 text-xl text-white">
						arcrobot
					</p>
					<h2 className="absolute bottom-10 max-sm:pl-6 left-1/2 -translate-x-1/2 max-md:text-4xl max-sm:text-3xl max-md:bottom-6 text-5xl max-w-[430px] w-full text-white">
						Решения для роста эффективности
					</h2>
				</div>
			</div>
		</div>
	);
}
