import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // If you're using react-router-dom
import { TextFade } from './TextFade';
// import { motion, useInView } from 'framer-motion';
const HeroContact = () => {
	const handleSubmit = e => {
		e.preventDefault();
		// Handle form submission
	};

	return (
		<div className='w-full bg-white text-black'>
			<div className='container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 lg:pt-32'>
				{/* Left Column */}
				{/* <TextFade
						direction='up'
						className='pt-0 pb-5 flex-col flex justify-center items-center space-y-0'
					>
						<h2 className='text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[0rem] prose-h2:my-0'>
							Fade Up
						</h2>
						<div className='prose-p:my-1 text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit amet.
						</div>
					</TextFade> */}
				<TextFade className='flex flex-col justify-between'>
					<h1 className='text-[54px] sm:text-[80px] md:text-[90px] lg:text-[140px] font-bold leading-none tracking-tighter'>
						Обсудим ваш
						<br />
						проект
					</h1>
					<div className='grid grid-cols-2 max-sm:grid-cols-1 lg:gap-x-16 xl:gap-x-32 pt-36'>
						<div className='flex flex-col gap-10'>
							<div className='flex flex-col text-3xl w-[500px]'>
								<p className='text-[#0a0a0a] text-end'>Нужна автоматизация?</p>
								<span className='text-[#0a0a0a99]'>
									Напишите нам, и мы предложим решение под вашу задачу
								</span>
							</div>
							<div className='mt-16 lg:mt-0'>
								<div className='flex items-center gap-4'>
									<img
										src='https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d1b7b06-925a-4846-b15a-67a4eda7948a-arcrobot-ru/assets/images/M651f5xEBZloQ1WTvM3Cyav978-3.png'
										alt='Вячеслав Погодаев'
										width={56}
										height={56}
										className='rounded-full w-12 h-12 object-fit'
									/>
									<div>
										<p className='font-medium text-base'>Вячеслав Погодаев</p>
										<p className='text-sm text-[#808080]'>
											Руководитель отдела продаж
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='mt-16 lg:mt-0 bg-white p-4 rounded-2xl'>
							<form onSubmit={handleSubmit} className='flex flex-col h-full'>
								<div className='space-y-10 flex-grow'>
									<div>
										<label htmlFor='name' className='text-sm text-[#808080]'>
											Ваше имя*
										</label>
										<input
											id='name'
											name='name'
											type='text'
											required
											className='mt-1 block w-full bg-transparent border-b border-[#cccccc] pb-3 text-lg focus:outline-none focus:border-black transition-colors'
										/>
									</div>
									<div>
										<label htmlFor='phone' className='text-sm text-[#808080]'>
											Ваш телефон*
										</label>
										<div className='mt-1 flex items-baseline border-b border-[#cccccc] focus-within:border-black transition-colors'>
											<span className='text-lg text-black pr-2'>+7</span>
											<input
												id='phone'
												name='phone'
												type='tel'
												required
												className='block w-full bg-transparent pb-3 text-lg focus:outline-none'
											/>
										</div>
									</div>
									<div>
										<label htmlFor='email' className='text-sm text-[#808080]'>
											Ваша почта
										</label>
										<input
											id='email'
											name='email'
											type='email'
											className='mt-1 block w-full bg-transparent border-b border-[#cccccc] pb-3 text-lg focus:outline-none focus:border-black transition-colors'
										/>
									</div>
									<div>
										<label htmlFor='message' className='text-sm text-[#808080]'>
											Что необходимо сделать, нужна консультация?
										</label>
										<input
											id='message'
											name='message'
											type='text'
											className='mt-1 block w-full bg-transparent border-b border-[#cccccc] pb-3 text-lg focus:outline-none focus:border-black transition-colors'
										/>
									</div>
								</div>

								<div className='mt-12'>
									<button
										type='submit'
										className='w-full sm:w-auto bg-black text-white font-medium py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#333] transition-colors'
									>
										Отправить
										<ArrowRight size={20} />
									</button>
									<p className='mt-4 text-xs text-[#808080] max-w-xs'>
										Отправляя заявку, вы соглашаетесь на{' '}
										<Link href='/privacy-policy' className='underline'>
											обработку персональных данных
										</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</TextFade>

				{/* Right Column (Form) */}
			</div>
		</div>
	);
};

export default HeroContact;
