import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
	return (
		<footer className='font-sans text-black'>
			<div className='bg-light-gray'>
				<div className='mx-auto max-w-7xl px-6 md:px-8 py-20 '>
					{/* Top section */}
					<div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-8'>
						<div>
							<p className='text-xs uppercase tracking-wider text-black/50 mb-6'>
								Контакты
							</p>
							<div className='flex flex-col gap-4'>
								<a
									href='tel:88127508500'
									className='text-xl font-medium hover:opacity-70 transition-opacity'
								>
									8(812)750 85 00
								</a>
								<a
									href='mailto:info@arcrobot.ru'
									className='flex items-center text-xl font-medium hover:opacity-70 transition-opacity'
								>
									<span className='w-2.5 h-2.5 bg-black rounded-full mr-3'></span>
									info@arcrobot.ru
								</a>
							</div>
						</div>
						{/* Branding */}
						<div className='flex flex-col gap-12'>
							<div className='flex flex-row gap-16 md:gap-24'>
								<div>
									<p className='text-xs uppercase tracking-wider text-black/50 mb-6'>
										Навигация
									</p>
									<nav className='flex flex-col gap-4'>
										<Link
											href='/'
											className='text-xl font-medium hover:opacity-70 transition-opacity'
										>
											Главная
										</Link>
										<Link
											href='/catalog'
											className='text-xl font-medium hover:opacity-70 transition-opacity'
										>
											Каталог
										</Link>
										<Link
											href='/blog'
											className='text-xl font-medium hover:opacity-70 transition-opacity'
										>
											Блог
										</Link>
									</nav>
								</div>

								<div>
									<p className='text-xs uppercase tracking-wider text-black/50 mb-6'>
										Мы в мессенджерах
									</p>
									<nav className='flex flex-col gap-4'>
										<a
											href='#'
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center text-xl font-medium group hover:opacity-70 transition-opacity'
										>
											Telegram
											<ArrowRight className='w-5 h-5 ml-2' />
										</a>
										<a
											href='#'
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center text-xl font-medium group hover:opacity-70 transition-opacity'
										>
											WhatsApp
											<ArrowRight className='w-5 h-5 ml-2' />
										</a>
									</nav>
								</div>
							</div>
							<div className='text-center'>
								<h2 className='text-[12vw] sm:text-8xl md:text-9xl lg:text-[150px] font-bold leading-none text-black'>
									arcrobot
								</h2>
								<p className='text-xl md:text-2xl font-medium tracking-[-0.02em] text-black mt-2 md:mt-4'>
									промышленные сварочные роботы
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Sub-footer */}
			<div className='bg-black text-white/60'>
				<div className='mx-auto max-w-7xl px-6 md:px-8 py-8'>
					<div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4'>
						<p className='text-sm'>
							© 2025 arcrobot. Промышленные сварочные роботы
						</p>
						<Link
							href='/privacy-policy'
							className='text-sm text-white hover:opacity-70 transition-opacity'
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
