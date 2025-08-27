import { ArrowRight } from "lucide-react"; 
import { Link } from "react-router-dom"; // If you're using react-router-dom
import { TextFade } from "./TextFade";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { createContact_API, getWorker_API } from "../../service/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeroContact = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone_number: "",
		email: "",
		reason: "",
	});

	const [worker, setWorker] = useState(null);

	// API dan ma’lumot olish
	useEffect(() => {
		const fetchWorker = async () => {
			try {
				const [error, res] = await getWorker_API({ page: 1 }); // misol uchun
				if (error) {
					console.error("Xatolik:", error);
					return;
				}
				if (res?.data?.length) {
					setWorker(res.data[0]); // faqat bitta odamni olish
				}
			} catch (err) {
				console.error("API fetch error:", err);
			}
		};
		fetchWorker();
	}, []);

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
		<div className="w-full bg-white text-black pt-10">
			<div className="container1 pt-16 sm:pt-24 lg:pt-32">
				<TextFade className="flex flex-col justify-between">
					<h1 className="text-[54px] sm:text-[80px] md:text-[90px] lg:text-[140px] font-inter-600 leading-none tracking-tighter">
						Обсудим ваш проект
					</h1>
					<div className="grid grid-cols-2 max-md:grid-cols-1 lg:gap-x-16 xl:gap-x-32 pt-36">
						<div className="flex flex-col gap-10 max-lg:gap-6">
							<div className="flex flex-col text-3xl max-lg:text-2xl max-lg:leading-7 max-w-[500px] w-full">
								<p className="text-[#0a0a0a] text-end">
									Нужна автоматизация?
								</p>
								<span className="text-[#0a0a0a99]">
									Напишите нам, и мы предложим решение под вашу задачу
								</span>
							</div>
							{/* API’dan olingan worker */}
							{worker && (
								<div className="mt-16 max-lg:mt-0">
									<div className="flex items-center gap-4">
										<img
											src={worker.image}
											alt={worker.name}
											width={56}
											height={56}
											className="rounded-full object-cover object-top w-12 h-12 object-fit"
										/>
										<div>
											<p className="font-medium text-base">
												{worker.name}
											</p>
											<p
												className="text-sm text-[#808080]"
												dangerouslySetInnerHTML={{
													__html: worker.worker_type,
												}}
											/>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Form */}
						<div className="mt-16 max-lg:mt-4 max-lg:p-0  bg-white p-4 rounded-2xl">
							<form onSubmit={handleSubmit} className="flex flex-col h-full">
								<div className="space-y-10 flex-grow max-lg:space-y-3">
									<div>
										<input
											id="name"
											name="name"
											placeholder="Ваше имя*"
											type="text"
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											required
											className="mt-1 block w-full bg-transparent border-b border-[#cccccc] pb-3 text-lg focus:outline-none focus:border-black transition-colors"
										/>
									</div>
									<div>
										<div>
											<div className="mt-1 flex items-baseline border-b border-[#cccccc] focus-within:border-black transition-colors">
												<input
													id="phone_number"
													name="phone_number"
													value={formData.phone_number}
													type="tel"
													placeholder="Ваш телефон*"
													required
													className="block w-full bg-transparent pb-3 text-lg focus:outline-none"
													onInput={(e) => {
														let value = e.target.value.replace(/\D/g, "");
														if (value.startsWith("7")) {
															value = value.slice(1);
														}

														let formatted = "+7";
														if (value.length > 0) formatted += " (" + value.substring(0, 3);
														if (value.length >= 4) formatted += ") " + value.substring(3, 6);
														if (value.length >= 7) formatted += "-" + value.substring(6, 8);
														if (value.length >= 9) formatted += "-" + value.substring(8, 10);

														e.target.value = formatted;
														setFormData({
															...formData,
															phone_number: formatted,
														});
													}}
												/>
											</div>
										</div>
									</div>
									<div>
										<input
											id="email"
											name="email"
											type="email"
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											placeholder="Ваша почта"
											className="mt-1 block w-full bg-transparent border-b border-[#cccccc] pb-3 text-lg focus:outline-none focus:border-black transition-colors"
										/>
									</div>
									<div>
										<textarea
											id="reason"
											name="reason"
											rows={4}
											value={formData.reason}
											onChange={(e) =>
												setFormData({ ...formData, reason: e.target.value })
											}
											type="text"
											placeholder="Что необходимо сделать, нужна консультация?"
											className="mt-1 block w-full bg-transparent border-b border-[#cccccc] pb-3 text-lg focus:outline-none focus:border-black transition-colors"
										/>
									</div>
								</div>

								<div className="mt-12">
									<motion.button
										whileHover="hover"
										initial="rest"
										animate="rest"
										className="relative w-[126px] group bg-black text-white overflow-hidden rounded-full h-[34px] font-inter-600 text-xs"
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
											className="absolute px-3 text-left whitespace-nowrap text-sm w-full left-0 top-2 -translate-y-1"
										>
											Отправить
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
											className="w-full px-3 text-left absolute whitespace-nowrap text-sm left-0 top-2 -translate-y-1"
										>
											Отправить
										</motion.p>
										<div className="rounded-full absolute right-3 top-[13px] group-hover:w-[9px] group-hover:top-[13px] group-hover:h-[9px] bg-white w-2 h-2" />
									</motion.button>
									<p className="mt-4 text-xs text-[#808080] max-w-xs">
										Отправляя заявку, вы соглашаетесь на{" "}
										<Link href="/privacy-policy" className="underline">
											обработку персональных данных
										</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</TextFade>
			</div>
		</div>
	);
};

export default HeroContact;
