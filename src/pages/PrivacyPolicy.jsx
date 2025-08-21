import React from "react";

const PrivacyPolicyComponent = () => {
	return (
		<div className="container1 pt-20 max-sm:pt-24">
			{/* Header */}
			<h1 className="text-[60px] font-inter-600 max-lg:text-[40px] max-sm:text-2xl text-gray/90 mb-8">
				Политика конфиденциальности
			</h1>
			<div className="flex mt-16 max-lg:flex-col max-sm:mt-0">
				{/* Last Updated */}
				<div className="mb-8 max-w-80 w-full">
					<p className="text-sm text-gray/60">Последнее обновление:</p>
					<p className="text-sm font-inter-600 text-gray/80">13.01.2025</p>
				</div>

				{/* Main Content */}
				<div className="space-y-8 max-w-[800px] w-full" >
					<div className="bg-gray-50 rounded-lg">
						<p className="text-xl font-inter-600 max-sm:text-base leading-5 leading-relaxed text-gray/80">
							Мы уважаем вашу конфиденциальность. Настоящая Политика
							конфиденциальности объясняет, какие данные мы собираем, как
							используем и с кем можем делиться информацией, полученной
							через наш сайт agrobot.ru (далее — «Сайт»). Используя Сайт,
							вы соглашаетесь с условиями данной Политики.
						</p>
					</div>

					{/* Section 1 */}
					<section>
						<h2 className="text-2xl font-inter-600 max-sm:text-xl text-gray/90 mb-4">
							1. Какие данные мы собираем
						</h2>

						{/* Subsection 1.1 */}
						<div className="">
							<h3 className="text-xl font-inter-600 max-sm:text-base text-gray/80 mb-3">
								1.1 Персональные данные
							</h3>

							<p className="text-gray/60 mb-4">
								Мы можем собирать данные, которые вы добровольно
								предоставляете нам, включая:
							</p>

							<ul className="space-y-1.5">
								<li className="flex items-start">
									<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
									<span className="text-gray/60">Имя</span>
								</li>
								<li className="flex items-start">
									<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
									<span className="text-gray/60">
										Адрес электронной почты
									</span>
								</li>
								<li className="flex items-start">
									<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
									<span className="text-gray/60">Номер телефона</span>
								</li>{" "}
								<li className="flex items-start">
									<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
									<span className="text-gray/60">
										Название компании
									</span>
								</li>
								<li className="flex items-start">
									<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
									<span className="text-gray/60">
										Иную информацию, которую вы указываете при
										обращении через формы на сайте или при подписке на
										наши услуги
									</span>
								</li>
							</ul>
						</div>
					</section>
					<div className="">
						<h3 className="text-xl font-inter-600 max-sm:text-base text-gray/80 mb-3">
							1.2 Неперсональные данные
						</h3>

						<p className="text-gray/60 mb-4">
							Автоматически собираются технические данные, такие как:
						</p>

						<ul className="space-y-1.5">
							{[
								"IP-адрес",
								"Тип и версия браузера",
								"Тип устройства",
								"Источник перехода на сайт",
								"Посещённые страницы и время на сайте",
								"Файлы cookie и технологии отслеживания",
							].map((item, idx) => (
								<li key={idx} className="flex items-start">
									<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
									<span className="text-gray/60">{item}</span>
								</li>
							))}
						</ul>
					</div>
					{/* Section 2 */}
					<section>
						<h2 className="text-2xl font-inter-600 max-sm:text-xl text-gray/90 mb-4">
							2. Как мы используем ваши данные
						</h2>
						<p className="text-gray/60 mb-4">
							Собранные данные мы используем для:
						</p>
						<ul className="space-y-1.5">
							{[
								"Предоставления и улучшения наших услуг",
								"Обработки обращений и обратной связи",
								"Персонализации взаимодействия с сайтом",
								"Аналитики и улучшения функциональности",
								"Обеспечения безопасности и предотвращения мошенничества",
							].map((item, idx) => (
								<li key={idx} className="flex items-start">
									<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
									<span className="text-gray/60">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Section 3 */}
					<section>
						<h2 className="text-2xl font-inter-600 max-sm:text-xl text-gray/90 mb-4">
							3. Передача данных третьим лицам
						</h2>
						<p className="text-gray/60 mb-4">
							Мы не продаём персональные данные. Однако передача может
							осуществляться в следующих случаях:
						</p>
						<ul className="space-y-1.5">
							{[
								"Сервис-провайдерам — для хостинга, аналитики, технической поддержки",
								"В рамках закона — если этого требует законодательство",
								"В случае передачи бизнеса — при слиянии, продаже или передаче активов",
							].map((item, idx) => (
								<li key={idx} className="flex items-start">
									<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
									<span className="text-gray/60">{item}</span>
								</li>
							))}
						</ul>
					</section>

					{/* Section 4 */}
					<section>
						<h2 className="text-2xl font-inter-600 max-sm:text-xl text-gray/90 mb-4">
							4. Cookies и технологии отслеживания
						</h2>
						<p className="text-gray/60">
							Мы используем cookies и аналогичные технологии для анализа
							и улучшения пользовательского опыта. Вы можете отключить
							cookies в настройках браузера, однако это может ограничить
							работу некоторых функций сайта.
						</p>
					</section>

					{/* Section 5 */}
					<section>
						<h2 className="text-2xl font-inter-600 max-sm:text-xl text-gray/90 mb-4">
							5. Срок хранения данных
						</h2>
						<p className="text-gray/60">
							Мы храним ваши данные столько, сколько необходимо для
							целей, описанных в этой Политике, если иное не требуется по
							закону.
						</p>
					</section>

					{/* Section 6 */}
					<section>
						<h2 className="text-2xl font-inter-600 max-sm:text-xl text-gray/90 mb-4">
							6. Безопасность
						</h2>
						<p className="text-gray/60">
							Мы принимаем разумные меры для защиты данных. Однако,
							передавая информацию через интернет, вы признаёте возможные
							риски.
						</p>
					</section>

					{/* Section 7 */}
					<section>
						<h2 className="text-2xl font-inter-600 max-sm:text-xl text-gray/90 mb-4">
							7. Ссылки на сторонние ресурсы
						</h2>
						<p className="text-gray/60">
							На нашем сайте могут быть ссылки на внешние сайты. Мы не
							несем ответственности за их политику конфиденциальности.
						</p>
					</section>

					{/* Section 8 */}
					<section>
						<h2 className="text-2xl font-inter-600 max-sm:text-xl text-gray/90 mb-4">
							8. Ваши права
						</h2>
						<p className="text-gray/60 mb-4">
							В зависимости от законодательства вашего региона, вы
							можете:
						</p>
						<ul className="space-y-1.5">
							{[
								"Запросить доступ к вашим данным",
								"Потребовать их исправления или удаления",
								"Отказаться от рассылок",
								"Отозвать согласие на обработку данных",
							].map((item, idx) => (
								<li key={idx} className="flex items-start">
									<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
									<span className="text-gray/60">{item}</span>
								</li>
							))}
						</ul>
						<p className="text-gray/60 mt-4">
							Для реализации этих прав — напишите нам на{" "}
							<a href="mailto:info@acrrobot.ru" className="underline">
								info@acrrobot.ru
							</a>
							.
						</p>
					</section>

					{/* Section 9 */}
					<section>
						<h2 className="text-2xl font-inter-600 max-sm:text-xl text-gray/90 mb-4">
							9. Изменения политики
						</h2>
						<p className="text-gray/60">
							Мы можем периодически обновлять данную Политику. Все
							изменения будут публиковаться на этой странице с новой
							датой вступления в силу.
						</p>
					</section>

					{/* Section 10 */}
					<section>
						<h2 className="text-2xl font-inter-600 max-sm:text-xl text-gray/90 mb-4">
							10. Контакты
						</h2>
						<p className="text-gray/60 mb-2">
							Если у вас есть вопросы по поводу политики
							конфиденциальности, свяжитесь с нами:
						</p>
						<ul className="space-y-1.5">
							<li className="flex items-start">
								<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
								<span className="text-gray/60">arcrobot</span>
							</li>
							<li className="flex items-start">
								<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
								<span className="text-gray/60">8(812)750-85-00</span>
							</li>
							<li className="flex items-start">
								<span className="w-1.5 h-1.5 bg-gray/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
								<span className="text-gray/60">info@arcrobot.ru</span>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicyComponent;
