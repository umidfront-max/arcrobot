import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedNavLinkFoter from "./AnimatedNavLinkFoter";
const Footer = () => {
	return (
		<footer className="font-sans text-black">
			<div className="container1 pt-3 pb-16 max-sm:pb-10">
				<div>
					{/* Top section */}
					<div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-8">
						<div>
							<p className="text-3xl mb-16 !font-inter-400 text-black/50 opacity-70">
								+
							</p>

							<div className="flex flex-col gap-1">
								<a
									href="tel:88127508500"
									className="text-xl hover:opacity-70 transition-opacity"
								>
									8(812)750 85 00
								</a>

								<div className="flex group items-center text-xl font-medium  transition">
									<div className="flex rotate-0 transition-all group-hover:rotate-180 justify-center items-center w-[18px] h-[18px] rounded-full bg-black text-white">
										<span className="mb-[2px] text-sm font-inter-600">
											+
										</span>
									</div>
									<span className="font-inter-600 mx-2 text-2xl underline underline-offset-8 group-hover:no-underline">
										<a href="mailto:info@arcrobot.ru">
											info@arcrobot.ru
										</a>
									</span>
								</div>
							</div>
						</div>

						{/* Branding */}
						<div className="flex flex-col gap-12">
							<div className="flex flex-row gap-16 md:gap-24">
								<div>
									<p className="text-3xl mb-16 !font-inter-400 text-black/50 opacity-70">
										+
									</p>

									<p className="text-sm font-inter-500 tracking-wider text-black/60 mb-6">
										Навигация
									</p>
									<nav className="flex flex-col overflow-hidden gap-2">
										<AnimatedNavLinkFoter to="/">
											Главная
										</AnimatedNavLinkFoter>
										<AnimatedNavLinkFoter to="/catalog">
											Каталог
										</AnimatedNavLinkFoter>
										<AnimatedNavLinkFoter to="/blog">
											Блог
										</AnimatedNavLinkFoter>
									</nav>
								</div>

								<div>
									<p className="text-3xl !font-inter-400 text-black/50 opacity-70">
										+
									</p>
									<p className="text-sm mt-16 font-inter-500 tracking-wider text-black/60 mb-6">
										Мы в мессенджерах
									</p>
									<nav className="flex flex-col gap-2">
										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-xl font-medium group hover:opacity-70 transition-opacity"
										>
											Telegram
											<ArrowRight className="w-5 h-5 ml-2" />
										</a>
										<a
											href="#"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center text-xl font-medium group hover:opacity-70 transition-opacity"
										>
											WhatsApp
											<ArrowRight className="w-5 h-5 ml-2" />
										</a>
									</nav>
								</div>
							</div>

							<div>
								<h2 className="text-[170px] tracking-tight text-start max-xs:text-[70px] max-sm:text-8xl max-md:text-9xl max-lg:text-[170px] font-inter-600 leading-none text-black">
									arcrobot
								</h2>
								<p className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-black md:mt-4">
									промышленные сварочные роботы
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Sub-footer */}
			<div className="bg-black text-white/60">
				<div className="container1 py-9">
					<div className="flex w-[65%] max-sm:w-full flex-col md:flex-row justify-between items-center max-sm:items-start text-center max-sm:text-left md:text-left gap-4">
						<p className="text-sm max-sm:text-left font-inter-500">
							© 2025 arcrobot. Промышленные сварочные роботы
						</p>
						<Link
							to="/privacy-policy"
							className="text-sm max-sm:text-left font-inter-600 text-white hover:opacity-70 transition-opacity"
						>
							Политика конфиденциальности
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
