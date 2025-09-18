import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BtnAnimation from "../components/BtnAnimation";
import Form from "../components/Form";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import { getCatalogId_API } from "../service";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

function CatalogId() {
	const { slug } = useParams();

	const [catalog, setCatalog] = useState({
		name: "",
		description: "",
		title: "",
		createdAt: "",
		images: [],
		property: {},
	});

	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [mainSwiper, setMainSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const [modalOpen, setModalOpen] = useState(false);
	const [activePoint, setActivePoint] = useState(null);
	const [points, setPoints] = useState([]);

	useEffect(() => {
		fetchCatalog();
	}, []);

	const fetchCatalog = async () => {
		const [error, response] = await getCatalogId_API(slug);
		if (error) {
			console.error("Xatolik:", error);
			return;
		}
		setCatalog(response);
	};

	useEffect(() => {
		if (catalog.images.length > 0) {
			fetchPointsForSlide(0);
		}
	}, [catalog.images]);

	const fetchPointsForSlide = async (slideIndex) => {
		const imgUrl = catalog.images[slideIndex];
		if (!imgUrl) {
			setPoints([]);
			return;
		}
		try {
			const { data } = await axios.get(
				`https://api.arcrobot.ru/api/image-position/${encodeURIComponent(
					imgUrl
				)}`
			);
			if (Array.isArray(data) && data.length > 0) {
				setPoints(data);
			} else {
				setPoints([]); // <-- backend bo‘sh qaytsa ham tozalanadi
			}
		} catch (err) {
			console.error(err);
			setPoints([]); // <-- error bo‘lsa ham nuqta chiqarma
		}
	};

	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.realIndex);
		setPoints([]); // <-- eski nuqtalarni tozalab turamiz
		fetchPointsForSlide(swiper.realIndex);
	};

	const specs = Object.entries(catalog.property || {}).map(
		([label, value]) => ({
			label,
			value,
		})
	);

	return (
		<>
			<div className="container1 py-4 pt-12 max-md:pt-20">
				<p className="font-inter-600 text-[150px] max-xl:text-[120px] max-sm:leading-[60px] max-lg:text-[80px] max-md:text-[54px] tracking-tighter">
					{catalog.name}
				</p>
				<div className="my-6 max-w-full relative mx-auto">
					<button className="swiper-button-prev-custom max-md:hidden absolute top-[44%] text-2xl left-3 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition">
						‹
					</button>
					<button className="swiper-button-next-custom max-md:hidden absolute top-[44%] text-2xl right-3 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition">
						›
					</button>
					<Swiper
						modules={[Thumbs, Navigation]}
						initialSlide={0}
						loopedSlides={catalog.images.length} // 🔥 thumb bilan sinxron qilish uchun
						watchSlidesProgress={true}
						onSwiper={setMainSwiper}
						onSlideChange={handleSlideChange}
						loop={true}
						thumbs={{
							swiper:
								thumbsSwiper && !thumbsSwiper.destroyed
									? thumbsSwiper
									: null,
						}}
						navigation={{
							prevEl: ".swiper-button-prev-custom",
							nextEl: ".swiper-button-next-custom",
						}}
						className="rounded-3xl overflow-hidden"
					>
						{catalog.images?.map((img, i) => (
							<SwiperSlide className="!rounded-xl relative" key={i}>
								<img
									src={img}
									alt={`main-${i}`}
									className="!rounded-xl w-full aspect-[16/9] object-cover"
								/>
							</SwiperSlide>
						))}
					</Swiper>

					<Swiper
						modules={[Thumbs]}
						onSwiper={(swiper) => {
							setThumbsSwiper(swiper);
							swiper.slideTo(0);
						}}
						loop={true}
						initialSlide={0}
						spaceBetween={10}
						watchSlidesProgress
						slideToClickedSlide
						centerInsufficientSlides={true}
						className="mt-3"
						breakpoints={{
							0: {
								slidesPerView: 5,
							},
							400: {
								slidesPerView: 6,
							},
							557: {
								slidesPerView: 8,
							},
						}}
					>
						{catalog.images?.map((img, i) => (
							<SwiperSlide key={i} className="flex justify-center">
								<img
									src={img}
									alt={`thumb-${i}`}
									className={`w-full h-24 max-sm:h-12 object-cover rounded-lg border-2 cursor-pointer transition-all duration-200 ${
										activeIndex === i
											? "swiper-slide-thumb-active1"
											: "border-white"
									}`}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Modal */}
				{modalOpen && (
					<div
						className="fixed inset-0 bg-black/70 max-sm:px-5 flex justify-center items-center z-50"
						onClick={() => setModalOpen(false)}
					>
						<div
							className="bg-white rounded-lg max-w-lg w-full p-4 relative"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={() => setModalOpen(false)}
								className="absolute top-3 right-3 text-lg font-bold"
							>
								✕
							</button>
							<img
								src={activePoint?.image}
								alt="modal-img"
								className="w-full h-[300px]  object-cover !rounded-lg mt-8 mb-4"
							/>
							<p className="text-xl font-bold mb-1">
								{activePoint?.title}
							</p>
							<p className="text-gray-800">{activePoint?.description}</p>
						</div>
					</div>
				)}
				<div className="flex max-md:flex-col  justify-center items-center gap-4 md:gap-8 bg-white p-4 rounded-full max-md:rounded shadow-sm">
					{/* Narx */}
					<div className="flex items-center gap-1">
						<img className="w-5" src="/p.avif" alt="" />
						<span className="font-semibold">
							Цена:{" "}
							<span className="font-bold">
								от {catalog.price?.toLocaleString()} рублей
							</span>{" "}
							с НДС
						</span>
					</div>

					{/* Yetkazib berish */}
					<div className="flex items-center gap-2">
						{/* <span className="text-blue-500 text-xl">🚚</span> */}
                  <svg
                     className="h-5 w-5"
							display="block"
							role="presentation"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M 0 13 L 0 0 L 15 0 L 15 13 Z"
								fill="transparent"
								height="13px"
								id="qVXhapQSi"
								stroke-dasharray=""
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								stroke="#29b8ff"
								transform="translate(1 3)"
								width="15px"
							/>
							<path
								d="M 0 0 L 4 0 L 7 3 L 7 8 L 0 8 Z"
								fill="transparent"
								height="8px"
								id="lUf4W9nZP"
								stroke-dasharray=""
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								stroke="#29b8ff"
								transform="translate(16 8)"
								width="7px"
							/>
							<path
								d="M 0 2.5 C 0 1.119 1.119 0 2.5 0 C 3.881 0 5 1.119 5 2.5 C 5 3.881 3.881 5 2.5 5 C 1.119 5 0 3.881 0 2.5 Z"
								fill="transparent"
								height="5px"
								id="I3_6oPu3P"
								stroke-dasharray=""
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								stroke="#29b8ff"
								transform="translate(3 16)"
								width="5px"
							/>
							<path
								d="M 0 2.5 C 0 1.119 1.119 0 2.5 0 C 3.881 0 5 1.119 5 2.5 C 5 3.881 3.881 5 2.5 5 C 1.119 5 0 3.881 0 2.5 Z"
								fill="transparent"
								height="5px"
								id="T_0cGXW0r"
								stroke-dasharray=""
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								stroke="#29b8ff"
								transform="translate(16 16)"
								width="5px"
							/>
						</svg>
						<span className="font-semibold">
							Доставка : в течение {catalog.delivery_days} дней
						</span>
					</div>

					{/* Joriy etish */}
					<div className="flex items-center gap-2">
						{/* <span className="text-orange-500 text-xl">🛠</span> */}
						{/* <img className="h-5 w-5" src="/wrench.png" alt="" /> */}
						<svg
							className="h-5 w-5 fill-[#f59d40]"
							display="block"
							role="presentation"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M 11.701 4.304 C 11.32 4.693 11.32 5.315 11.701 5.704 L 13.301 7.304 C 13.69 7.685 14.312 7.685 14.701 7.304 L 18.471 3.534 C 19.501 5.809 19.014 8.484 17.248 10.25 C 15.482 12.016 12.807 12.503 10.531 11.474 L 3.621 18.384 C 2.793 19.212 1.45 19.212 0.621 18.384 C -0.207 17.555 -0.207 16.212 0.621 15.384 L 7.531 8.474 C 6.502 6.199 6.989 3.523 8.755 1.758 C 10.521 -0.008 13.196 -0.496 15.471 0.534 L 11.711 4.294 Z"
								fill="transparent"
								height="19.005131677031272px"
								id="VmCXRiltj"
								stroke-dasharray=""
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								stroke="#f59d40"
								transform="translate(2.999 1.996)"
								width="19.00513167703127px"
							/>
						</svg>
						<span className="font-semibold">
							Срок внедрения: {catalog.storage_days} рабочих дня
						</span>
					</div>
				</div>
				<div className="flex justify-center mt-20 mb-10">
					<BtnAnimation className="max-sm:hidden" />
					<button className="relative max-sm:w-full hidden max-sm:block max-sm:text-sm bg-black text-white rounded-full h-[58px] px-8 font-inter-600">
						Получить предложение
					</button>
				</div>

				<div className="flex justify-center max-sm:justify-start gap-2">
					<div className="w-5 h-5 pb-[3px] rounded-full text-white bg-black flex justify-center items-center text-sm font-semibold">
						+
					</div>
					<p>{catalog.subtitle}</p>
				</div>

				<section className="py-6 text-black editorr">
					<h2 className="text-2xl max-sm:text-xl font-inter-700 mb-4 tracking-tighter">
						{catalog.title}
					</h2>
					<p
						dangerouslySetInnerHTML={{ __html: catalog.description }}
						className="mb-6 whitespace-pre-line"
					></p>
					<div className="mt-8">
						<h3 className="font-semibold text-[17px] text-black/70 mb-1">
							Технические характеристики:
						</h3>
						<div className="rounded-xl border border-b-0 border-t-0 border-gray/40 overflow-hidden">
							<table className="w-full max-sm:table-fixed">
								<tbody>
									{specs.map((item, i) => (
										<tr key={i} className="even:bg-gray-100">
											<td className="border border-gray/40 border-l-0 text-black/70 p-2 font-inter-600 w-1/2">
												{item.label}
											</td>
											<td className="border border-gray/40 border-r-0 font-inter-600 p-2 max-sm:min-w-[6rem]">
												{item.value}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="grid grid-cols-3 gap-4 my-6 max-md:grid-cols-2 max-sm:grid-cols-1">
							{catalog?.images_data?.map((item, i) => (
								<div
									key={i}
									className="relative w-full h-72 max-lg:h-56"
								>
									<img
										src={item.image_url}
										alt={`image-${i}`}
										className="w-full h-full rounded-lg object-cover"
									/>

									{item.positions?.map((p, idx) => (
										<div
											key={p.id}
											onClick={() => {
												setActivePoint(p);
												setModalOpen(true);
											}}
											style={{
												position: "absolute",
												top: `${p.top}%`,
												left: `${p.left_pos}%`,
												transform: "translate(-50%, -50%)",
												background: "red",
												color: "white",
												borderRadius: "50%",
												width: 24,
												height: 24,
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												fontWeight: "bold",
												cursor: "pointer",
											}}
										>
											{idx + 1}
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
			<Form />
		</>
	);
}

export default CatalogId;
