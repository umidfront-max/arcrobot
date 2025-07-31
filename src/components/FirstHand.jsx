import React from 'react';

export default function FirstHand() {
	return (
		<div className='px-9'>
			<div className='grid grid-cols-2 gap-1 '>
				<div>
					<h2 className='text-[50px] leading-[60px] text-[#0a0a0a99]'>
						<span className='text-[#090909]'>Всё, что важно знать</span> о
						роботах на производстве — из первых рук.
					</h2>
				</div>
				<div className='self-end'>
					<p className='text-[#0a0a0a99] w-80'>
						Следите за нашими новыми проектами, разбором внедрений, анализом
						тенденций и экономическим эффектом от роботизации.
					</p>
				</div>
			</div>
			<div className='grid grid-cols-4 gap-1 mt-16 mb-12'>
				<div className='flex flex-col justify-between p-2.5 bg-white rounded-xl'>
					<div className='flex justify-between '>
						<img
							src='https://framerusercontent.com/images/x7maGMOMYjALd7wVmyOlxhCzGSw.png?scale-down-to=512'
							alt=''
							className='w-28 h-28 rounded-lg'
						/>
						<div className='bg-black w-5 h-5 text-white rounded-full flex items-center justify-center'>
							<span>+</span>
						</div>
					</div>
					<div className='p-5'>
						<p className='text-xs text-[#090909]'>2 февраля 2025 г.</p>
						<h3 className='text-xl mt-2 mb-4'>
							Стабильное качество: почему сварочный робот лучше человека
						</h3>
						<p className='text-[#0a0a0a99]'>
							Робот варит с точностью, которую не повторит человек. Узнай,
							почему автоматическая сварка даёт стабильный результат без брака.
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-between p-2.5 bg-white rounded-xl'>
					<div className='flex justify-between '>
						<img
							src='https://framerusercontent.com/images/0aHjr9cjDhAxgtoH3ALQbwjzh3E.png'
							alt=''
							className='w-28 h-28 rounded-lg'
						/>
						<div className='bg-black w-5 h-5 text-white rounded-full flex items-center justify-center'>
							<span>+</span>
						</div>
					</div>
					<div className='p-5'>
						<p className='text-xs text-[#090909]'>26 января 2025 г.</p>
						<h3 className='text-xl mt-2 mb-4'>
							Быстрая сварка — как робот ускоряет производство
						</h3>
						<p className='text-[#0a0a0a99]'>
							Робот сваривает быстрее человека: без пауз, усталости и брака.
							Узнай, как это ускоряет производство и даёт конкурентное
							преимущество.
						</p>
					</div>
				</div>
				<div className='col-span-2 relative h-[550px]'>
					<img
						src='https://framerusercontent.com/images/6vnqmQMi6uDlYAZJNvlSLQIKI.png'
						alt=''
						className='absolute top-0 left-0 rounded-xl object-cover h-full'
					/>
					<div className='absolute bg-black opacity-30 rounded-xl h-full w-full'></div>

					<p className='absolute top-6 left-6 text-xl text-white'>arcrobot</p>
					<h2 className='absolute bottom-10 left-48 text-5xl text-white'>
						Решения для роста эффективности
					</h2>
				</div>
			</div>
		</div>
	);
}
