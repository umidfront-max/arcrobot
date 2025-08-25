import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { createContact_API } from "../service/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone_number: "",
		email: "",
		reason: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		const [error] = await createContact_API(formData);

		if (error) {
			console.error("Xatolik:", error);
			toast.error("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
			return;
		}

		toast.success("Ваш запрос успешно отправлен!");

		setFormData({
			name: "",
			phone_number: "",
			email: "",
			reason: "",
		});
	};

	return (
		<div className="px-3 overflow-hidden max-xl:px-1 max-md:p-0">
			<div
				style={{ height: "120%" }}
				className="relative w-full max-lg:!h-auto rounded-2xl max-sm:rounded-none overflow-hidden text-white font-sans"
			>
				{/* Video fon */}
				<video
					src="https://framerusercontent.com/assets/98SDvcnyTK5dKmpSPxzkuMRB2I.mp4"
					loop
					autoPlay
					muted
					playsInline
					preload="metadata"
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
				<div className="absolute inset-0 bg-black/60"></div>

				{/* Kontent */}
				<div className="container1 relative my-20 max-md:my-10">
					<div className="grid grid-cols-2 max-lg:grid-cols-1  text-center max-lg:mt-9">
						<div className="mt-16 lg:mt-0 bg-white p-8 max-sm:p-5 rounded-2xl mr-12 max-xl:mr-6 max-lg:m-0 ">
							<p className="text-xl text-left font-inter-600 text-[#0a0a0a]">
								arcrobot
							</p>
							<h3 className="text-4xl font-inter-600 text-left text-[#0a0a0a99] mt-2">
								<span className="text-[#090909]">Нужен робот</span> под
								вашу задачу?
							</h3>
							<form onSubmit={handleSubmit} className="flex flex-col">
								<div className="space-y-10 flex-grow">
									<div className="flex flex-col items-start  !mt-4">
										<label
											htmlFor="name"
											className="text-xs text-black/80 leading-7 font-inter-500"
										>
											Ваше имя*
										</label>
										<input
											id="name"
											name="name"
											type="text"
											value={formData.name}
											onChange={(e) =>
												setFormData({
													...formData,
													name: e.target.value,
												})
											}
											required
											className="mt-1 block w-full text-black bg-transparent bg-[#f8f8f8] rounded-lg p-3 text-lg focus:outline-none focus:border-black transition-colors"
											placeholder="Иван Иванов"
										/>
									</div>
									<div className="flex flex-col items-start !mt-4">
										<label
											htmlFor="email"
											className="text-xs text-black/80 leading-7 font-inter-500"
										>
											Ваша почта*
										</label>
										<input
											id="email"
											placeholder="info@acrobot.ru"
											name="email"
											type="email"
											value={formData.email}
											onChange={(e) =>
												setFormData({
													...formData,
													email: e.target.value,
												})
											}
											className="mt-1 text-black block w-full bg-transparent bg-[#f8f8f8] rounded-lg p-3 text-lg focus:outline-none focus:border-black transition-colors"
										/>
									</div>
									<div className="flex flex-col items-start !mt-4">
										<label
											htmlFor="phone_number"
											className="text-xs text-black/80 leading-7 font-inter-500"
										>
											Ваш телефон*
										</label>

										<input
											id="phone_number"
											name="phone_number"
											type="tel"
											required
											value={formData.phone_number}
											onInput={(e) => {
												let value = e.target.value.replace(
													/\D/g,
													""
												); // faqat raqamlar
												if (value.startsWith("7")) {
													value = value.slice(1); // agar 7 bilan boshlangan bo‘lsa, olib tashlaymiz
												}

												let formatted = "+7";
												if (value.length > 0)
													formatted +=
														" (" + value.substring(0, 3);
												if (value.length >= 4)
													formatted +=
														") " + value.substring(3, 6);
												if (value.length >= 7)
													formatted += "-" + value.substring(6, 8);
												if (value.length >= 9)
													formatted +=
														"-" + value.substring(8, 10);

												e.target.value = formatted;
												setFormData({
													...formData,
													phone_number: formatted,
												});
											}}
											placeholder="+7 (___) ___-__-__"
											className="mt-1 block w-full text-black bg-[#f8f8f8] rounded-lg p-3 text-lg focus:outline-none focus:border-black transition-colors"
										/>
									</div>

									<div className="flex flex-col items-start !mt-4">
										<label
											htmlFor="message"
											className="text-xs font-inter-500 text-black/80 leading-7"
										>
											Комментарий
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.reason}
											onChange={(e) =>
												setFormData({
													...formData,
													reason: e.target.value,
												})
											}
											placeholder="Нужен робот под сварку"
											type="text"
											className="mt-1 block w-full text-black bg-transparent bg-[#f8f8f8] rounded-lg p-3 text-lg focus:outline-none focus:border-black transition-colors"
										/>
									</div>
								</div>

								<div className="mt-12 flex flex-col">
									<button
										type="submit"
										className="w-full sm:w-auto bg-black text-white font-medium py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#333] transition-colors"
									>
										Отправить
									</button>
									<p className="mt-4 text-xs text-[#808080] max-w-xs mx-auto">
										Отправляя заявку, вы соглашаетесь на{" "}
										<Link
											href="/privacy-policy"
											className="underline"
										>
											обработку персональных данных
										</Link>
									</p>
								</div>
							</form>
						</div>
						<div className="flex flex-col gap-10 text-left">
							<h2 className="text-[80px] max-sm:text-[70px] max-lg:mt-16 font-inter-600 leading-[70px] mb-2">
								Обсудим детали?
							</h2>
							<p className="text-3xl max-sm:text-2xl font-inter-500 text-white/70">
								<span className="text-white">
									{" "}
									Расскажите о задаче{" "}
								</span>
								— подберём решение, подготовим 3D-модель и расчёт
								окупаемости.
							</p>
							<div className="border-[0.5px] border-[#5a5a5a]"></div>
							<div className="grid grid-cols-2 max-sm:gap-2">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 256 256"
										focusable="false"
										className="w-6 h-6 max-sm:w-5 max-sm:h-5"
										color="var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))"
										style={{
											userSelect: "none",

											display: "inline-block",
											fill: "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
											color: "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
											flexShrink: 0,
										}}
									>
										<g
											color="var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))"
											weight="regular"
										>
											<path d="M114.34,154.34l96-96a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32ZM128,88a63.9,63.9,0,0,1,20.44,3.33,8,8,0,1,0,5.11-15.16A80,80,0,0,0,48.49,160.88,8,8,0,0,0,56.43,168c.29,0,.59,0,.89-.05a8,8,0,0,0,7.07-8.83A64.92,64.92,0,0,1,64,152,64.07,64.07,0,0,1,128,88Zm99.74,13a8,8,0,0,0-14.24,7.3,96.27,96.27,0,0,1,5,75.71l-181.1-.07A96.24,96.24,0,0,1,128,56h.88a95,95,0,0,1,42.82,10.5A8,8,0,1,0,179,52.27a112,112,0,0,0-156.66,137A16.07,16.07,0,0,0,37.46,200H218.53a16,16,0,0,0,15.11-10.71,112.35,112.35,0,0,0-5.9-88.3Z"></path>
										</g>
									</svg>
									<span className="ml-4 text-lg max-sm:text-base max-sm:ml-2 font-inter-400">
										Быстрый ответ
									</span>
									<p className="mt-4 text-white/70 max-sm:text-[13px] font-inter-500">
										Обычно мы связываемся в течение рабочего дня. Чем
										больше вводных вы дадите — тем быстрее и точнее
										будет предложение.
									</p>
								</div>
								<div>
									<div className="flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 256 256"
											focusable="false"
											color="var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))"
											className="w-6 h-6 max-sm:w-5 max-sm:h-5"
											style={{
												userSelect: "none",

												display: "inline-block",
												fill: "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
												color: "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
												flexShrink: 0,
											}}
										>
											<g
												color="var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))"
												weight="regular"
											>
												<path d="M248,56a8,8,0,0,1-8,8H192v40a8,8,0,0,1-8,8H136v40a8,8,0,0,1-8,8H80v40a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H64V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,248,56Z"></path>
											</g>
										</svg>
										<span className="ml-4 text-lg max-sm:text-base max-sm:leading-4 max-sm:ml-2 font-inter-400">
											Понятные следующие шаги
										</span>
									</div>
									<p className="mt-4 max-sm:text-[12px] text-white/70 font-inter-500">
										После обсуждения вы получите технико-коммерческое
										предложение с 3D-сценарием, сроками и стоимостью
										проекта.
									</p>
								</div>
							</div>
							<div className="bg-white max-xl:mt-0 text-black p-4 max-md:w-max px-6 rounded-xl shadow-lg mb-4 w-max mt-4">
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
										className="relative w-[206px] group bg-black text-white overflow-hidden rounded-full h-[30px] font-inter-600 text-xs"
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
											Получить консультацию
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
											Получить консультацию
										</motion.p>
										<div className="rounded-full absolute right-3 top-[11px] group-hover:w-[9px] group-hover:top-[10px] group-hover:h-[9px] bg-white w-2 h-2" />
									</motion.button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
