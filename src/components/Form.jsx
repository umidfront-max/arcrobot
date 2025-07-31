import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
	function handleSubmit() {}
	return (
		<div className='px-3 overflow-hidden'>
			<div
				style={{ height: '150vh' }}
				className='relative w-full rounded-2xl overflow-hidden text-white font-sans'
			>
				{/* Video fon */}
				<video
					src='https://framerusercontent.com/assets/98SDvcnyTK5dKmpSPxzkuMRB2I.mp4'
					loop
					autoPlay
					muted
					playsInline
					preload='auto'
					poster='https://framerusercontent.com/images/LIUgHfwhVCUI2oVdHOrVujGRmzI.jpg'
					className='absolute w-full h-full object-cover'
					style={{
						cursor: 'auto',
						borderRadius: '0px',
						display: 'block',
						backgroundColor: 'rgba(0, 0, 0, 0)',
						objectPosition: '50% 50%',
					}}
				/>

				{/* Qorong'u overlay */}
				<div className='absolute inset-0 bg-black/60 z-10'></div>

				{/* Kontent */}
				<div className='grid grid-cols-2 z-20 text-center px-4 absolute top-40 left-10'>
					<div className='mt-16 lg:mt-0 bg-white p-8 rounded-2xl w-[500px]'>
						<p className='text-xl text-left text-[#0a0a0a]'>arcrobot</p>
						<h3 className='text-4xl text-left text-[#0a0a0a99]'>
							<span className='text-[#090909]'>Нужен робот</span> под вашу
							задачу?
						</h3>
						<form onSubmit={handleSubmit} className='flex flex-col'>
							<div className='space-y-10 flex-grow'>
								<div className='flex flex-col items-start !mt-4'>
									<label htmlFor='name' className='text-xs text-[#808080]'>
										Ваше имя*
									</label>
									<input
										id='name'
										name='name'
										type='text'
										required
										className='mt-1 block w-full bg-transparent bg-[#f8f8f8] rounded-lg p-3 text-lg focus:outline-none focus:border-black transition-colors'
										placeholder='Иван Иванов'
									/>
								</div>
								<div className='flex flex-col items-start !mt-4'>
									<label htmlFor='email' className='text-xs text-[#808080]'>
										Ваша почта
									</label>
									<input
										id='email'
										name='email'
										type='email'
										className='mt-1 block w-full bg-transparent bg-[#f8f8f8] rounded-lg p-3 text-lg focus:outline-none focus:border-black transition-colors'
									/>
								</div>
								<div className='flex flex-col items-start !mt-4'>
									<label htmlFor='phone' className='text-xs text-[#808080]'>
										Ваш телефон*
									</label>

									<input
										id='phone'
										name='phone'
										type='tel'
										required
										className='mt-1 block w-full bg-transparent bg-[#f8f8f8] rounded-lg p-3 text-lg focus:outline-none focus:border-black transition-colors'
									/>
								</div>
								<div className='flex flex-col items-start !mt-4'>
									<label htmlFor='message' className='text-sm text-[#808080]'>
										Комментарий
									</label>
									<textarea
										id='message'
										name='message'
										type='text'
										className='mt-1 block w-full bg-transparent bg-[#f8f8f8] rounded-lg p-3 text-lg focus:outline-none focus:border-black transition-colors'
									/>
								</div>
							</div>

							<div className='mt-12 flex flex-col'>
								<button
									type='submit'
									className='w-full sm:w-auto bg-black text-white font-medium py-4 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#333] transition-colors'
								>
									Отправить
								</button>
								<p className='mt-4 text-xs text-[#808080] max-w-xs mx-auto'>
									Отправляя заявку, вы соглашаетесь на{' '}
									<Link href='/privacy-policy' className='underline'>
										обработку персональных данных
									</Link>
								</p>
							</div>
						</form>
					</div>
					<div className='flex flex-col gap-10 text-left'>
						<h2 className='text-[80px] font-semibold'>Обсудим детали?</h2>
						<p className='text-3xl'>
							Расскажите о задаче — подберём решение, подготовим 3D-модель и
							расчёт окупаемости.
						</p>
						<div className='border-[0.5px] border-[#5a5a5a]'></div>
						<div className='grid grid-cols-2'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 256 256'
									focusable='false'
									color='var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))'
									style={{
										userSelect: 'none',
										width: '25px',
										height: '25px',
										display: 'inline-block',
										fill: 'var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))',
										color:
											'var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))',
										flexShrink: 0,
									}}
								>
									<g
										color='var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))'
										weight='regular'
									>
										<path d='M114.34,154.34l96-96a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32ZM128,88a63.9,63.9,0,0,1,20.44,3.33,8,8,0,1,0,5.11-15.16A80,80,0,0,0,48.49,160.88,8,8,0,0,0,56.43,168c.29,0,.59,0,.89-.05a8,8,0,0,0,7.07-8.83A64.92,64.92,0,0,1,64,152,64.07,64.07,0,0,1,128,88Zm99.74,13a8,8,0,0,0-14.24,7.3,96.27,96.27,0,0,1,5,75.71l-181.1-.07A96.24,96.24,0,0,1,128,56h.88a95,95,0,0,1,42.82,10.5A8,8,0,1,0,179,52.27a112,112,0,0,0-156.66,137A16.07,16.07,0,0,0,37.46,200H218.53a16,16,0,0,0,15.11-10.71,112.35,112.35,0,0,0-5.9-88.3Z'></path>
									</g>
								</svg>
								<span className='ml-4 text-lg'>Быстрый ответ</span>
								<p className='mt-4'>
									Обычно мы связываемся в течение рабочего дня. Чем больше
									вводных вы дадите — тем быстрее и точнее будет предложение.
								</p>
							</div>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 256 256'
									focusable='false'
									color='var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))'
									style={{
										userSelect: 'none',
										width: '25px',
										height: '25px',
										display: 'inline-block',
										fill: 'var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))',
										color:
											'var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))',
										flexShrink: 0,
									}}
								>
									<g
										color='var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))'
										weight='regular'
									>
										<path d='M248,56a8,8,0,0,1-8,8H192v40a8,8,0,0,1-8,8H136v40a8,8,0,0,1-8,8H80v40a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H64V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,248,56Z'></path>
									</g>
								</svg>
								<span className='ml-4 text-lg'>Понятные следующие шаги</span>
								<p className='mt-4'>
									После обсуждения вы получите технико-коммерческое предложение
									с 3D-сценарием, сроками и стоимостью проекта.
								</p>
							</div>
						</div>
						<div className='bg-white text-black px-6 py-4 rounded-2xl shadow-lg mb-4 self-start'>
							<p className='font-semibold text-left text-sm'>
								Бесплатная консультация
							</p>
							<p className='text-xs text-left text-gray font-inter-500'>
								Начните автоматизацию уже сегодня
							</p>
							<div className='flex justify-start items-start'>
								<button className='mt-3 text-xs w-40 bg-black text-white py-1 rounded-full hover:bg-gray-900 transition'>
									Получить консультацию
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
