const ArrowUpRightIcon = ({ className, strokeWidth = '1.5' }) => (
	<svg
		className={className}
		viewBox='0 0 12 12'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden='true'
	>
		<path
			d='M1 11L11 1M11 1H1M11 1V11'
			stroke='currentColor'
			strokeWidth={strokeWidth}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

const ContactInfo = () => {
	return (
		<section className='bg-white text-black'>
			<div className='mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-[100px]'>
				<div className='h-px w-full bg-[#EAEAEA] mb-16 md:mb-20'></div>

				<div className='flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-8'>
					{/* Left/Top Part: Contacts & Socials */}
					<div className='flex flex-col gap-4 text-[28px] font-medium leading-none tracking-[-0.02em] md:text-[32px] ml-auto'>
						<a
							href='tel:88127508500'
							className='transition-opacity hover:opacity-70'
						>
							8(812)750 85 00
						</a>
						<a
							href='mailto:info@arcrobot.ru'
							className='flex items-center gap-3 transition-opacity hover:opacity-70'
						>
							<span className='text-[20px] leading-none'>●</span>
							<span>info@arcrobot.ru</span>
						</a>

						{/* Social Links (Mobile Only) */}
						<div className='mt-8 flex flex-col gap-6 '>
							<a
								href='https://x.com/bynneh'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center justify-between transition-opacity hover:opacity-70'
							>
								<span>WhatsApp</span>
								<ArrowUpRightIcon className='h-6 w-6' />
							</a>
							<a
								href='https://instagram.com/'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center justify-between transition-opacity hover:opacity-70'
							>
								<span>Telegram</span>
								<ArrowUpRightIcon className='h-6 w-6' />
							</a>
						</div>
					</div>

					{/* Right/Bottom Part: CTA Button */}
					{/* <div className='flex w-full flex-col items-center gap-4 md:w-auto md:items-end'>
						<button className='group flex w-full items-center justify-center rounded-full bg-accent-black px-6 py-4 text-base font-medium text-white transition-colors hover:bg-black md:w-auto'>
							<span>Оставить заявку</span>
							<div className='ml-2.5 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white transition-transform duration-300 ease-in-out group-hover:rotate-45'>
								<ArrowUpRightIcon
									className='h-[10px] w-[10px] text-black'
									strokeWidth='2'
								/>
							</div>
						</button>
						<p className='text-lg text-dark-gray'>Расчет за час!</p>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default ContactInfo;
