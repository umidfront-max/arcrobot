import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContact_API } from "../service/index";

const ContactModal = ({ isOpen, onClose }) => {
	if (!isOpen) return null;
	const [formData, setFormData] = useState({
		name: "",
		phone_number: "",
		email: "",
		reason: "sdfsdf",
	});

	const handleBackdropClick = () => {
		onClose();
	};

	const handleModalClick = (e) => {
		e.stopPropagation(); // modal ichida bosilsa yopilmasin
	};
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
			phone: "",
			email: "",
			reason: "",
		});
		handleBackdropClick();
	};

	return (
		<div
			onClick={handleBackdropClick}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
		>
			<div
				onClick={handleModalClick}
				className="relative bg-white p-10 max-sm:p-5 rounded-2xl w-full max-w-xl mx-4"
			>
				<button
					onClick={onClose}
					className="absolute w-11 h-11 rounded-full top-4 right-4 text-black text-[30px] hover:text-red-500"
				>
					<img src="/close.avif" alt="" />
				</button>
				<p className="text-2xl my-2 text-left font-inter-600 text-[#0a0a0a]">
					arcrobot
				</p>
				<h3 className="text-[36px]  max-xs:text-3xl leading-10 font-inter-600 text-left text-[#0a0a0a99] mt-2">
					<span className="text-[#090909]">Оставьте контакты</span> и мы с
					вами свяжемся !
				</h3>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col mt-4 space-y-3"
				>
					<div>
						<label className="text-xs text-black/80 leading-7 font-inter-500">
							Ваше имя*
						</label>
						<input
							type="text"
							name="name"
							required
							value={formData.name}
							onChange={(e) =>
								setFormData({
									...formData,
									name: e.target.value,
								})
							}
							placeholder="Иван Иванов"
							className="mt-1 block w-full text-black bg-[#f8f8f8] rounded-lg p-3 text-lg focus:outline-none"
						/>
					</div>
					<div>
						<label className="text-xs text-black/80 leading-7 font-inter-500">
							Номер телефона*
						</label>
						<input
							type="tel"
							name="phone"
							required
							value={formData.phone_number}
							onInput={(e) => {
								let value = e.target.value.replace(/\D/g, ""); // faqat raqam
								if (value.startsWith("7")) {
									value = value.slice(1); // agar 7 bilan boshlangan bo‘lsa, olib tashlaymiz
								}
								let formatted = "+7";
								if (value.length > 0)
									formatted += " (" + value.substring(0, 3);
								if (value.length >= 4)
									formatted += ") " + value.substring(3, 6);
								if (value.length >= 7)
									formatted += "-" + value.substring(6, 8);
								if (value.length >= 9)
									formatted += "-" + value.substring(8, 10);

								e.target.value = formatted;
								setFormData({
									...formData,
									phone_number: formatted,
								});
							}}
							placeholder="+7 (___) ___-__-__"
							className="mt-1 block w-full text-black bg-[#f8f8f8] rounded-lg p-3 text-lg focus:outline-none"
						/>
					</div>

					<div>
						<label className="text-xs text-black/80 leading-7 font-inter-500">
							E-mail
						</label>
						<input
							type="email"
							name="email"
							onChange={(e) =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
							placeholder="info@acrobot.ru"
							className="mt-1 block w-full text-black bg-[#f8f8f8] rounded-lg p-3 text-lg focus:outline-none"
						/>
					</div>

					<div className="mt-4">
						<div className="mt-3">
							<motion.button
								whileHover="hover"
								initial="rest"
								animate="rest"
								className="relative w-full group bg-black text-white overflow-hidden rounded-full h-[58px] font-inter-600 text-xs"
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
									className="absolute text-center px-3 whitespace-nowrap text-lg w-full top-4 -translate-y-1"
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
									className="w-full font-inter-600 text-center px-3 absolute whitespace-nowrap text-base left-0 top-4 -translate-y-1"
								>
									Отправить
								</motion.p>
							</motion.button>
						</div>
						<p className="mt-4 text-xs text-[#808080]">
							Отправляя заявку, вы соглашаетесь на{" "}
							<Link to={"/privacy-policy"} className="text-black">
								обработку персональных данных
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactModal;
