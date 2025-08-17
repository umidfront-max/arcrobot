import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import "./About.css";

function About() {
	const imgRef = useRef(null);
	const IMAGE_URL =
		"https://arcrobot.ru/api/public/images/photo_2025-08-10_16-39-35.jpg";

	const [points, setPoints] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const [formData, setFormData] = useState({
		catalog_id: 5,
		title: "",
		description: "",
		top: 0,
		left_pos: 0,
		image: null,
	});

	const [showModal, setShowModal] = useState(false);
	const [activePoint, setActivePoint] = useState(null);

	// Загружаем существующие точки
	const fetchPoints = async () => {
		try {
			const { data } = await axios.get(
				`https://arcrobot.ru/api/image-position/${encodeURIComponent(
					IMAGE_URL
				)}`
			);
			setPoints(data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchPoints();
	}, []);

	// Нажатие по картинке (добавление точки)
	const handleImgClick = (e) => {
		if (!isAddMode) return;
		const rect = imgRef.current.getBoundingClientRect();
		const clickX = e.clientX - rect.left;
		const clickY = e.clientY - rect.top;
		const percentLeft = (clickX / rect.width) * 100;
		const percentTop = (clickY / rect.height) * 100;

		setFormData({
			...formData,
			top: percentTop.toFixed(2),
			left_pos: percentLeft.toFixed(2),
		});
	};

	// Сохранение
	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = new FormData();
		data.append("catalog_id", formData.catalog_id);
		data.append("image_url", IMAGE_URL);
		data.append("title", formData.title);
		data.append("description", formData.description);
		data.append("top", formData.top);
		data.append("left_pos", formData.left_pos);
		data.append("image", formData.image);

		try {
			await axios.post(
				"https://arcrobot.ru/api/image-position/create",
				data,
				{
					headers: { "Content-Type": "multipart/form-data" },
					withCredentials: true,
				}
			);

			setFormData({ ...formData, title: "", description: "", image: null });
			fetchPoints();
			setIsAddMode(false);
		} catch (err) {
			console.error(err);
			alert("Ошибка при сохранении!");
		}
	};

	return (
		<div className="container pt-32">
			<button
				onClick={() => setIsAddMode(!isAddMode)}
				className={`mode-button ${isAddMode ? "add" : ""}`}
			>
				{isAddMode ? "Режим просмотра" : "Добавить точку"}
			</button>

			<div className="image-wrapper">
				<img
					ref={imgRef}
					src={IMAGE_URL}
					alt="Hotspot"
					onClick={handleImgClick}
					className={`main-image ${isAddMode ? "crosshair" : ""}`}
				/>

				{points.map((p, i) => (
					<div
						key={p.id}
						onClick={() => {
							if (!isAddMode) {
								setActivePoint(p);
								setShowModal(true);
							}
						}}
						className="point"
						style={{
							top: `${p.top}%`,
							left: `${p.left_pos}%`,
							cursor: isAddMode ? "not-allowed" : "pointer",
						}}
					>
						{i + 1}
					</div>
				))}

				{isAddMode && (
					<div
						className="preview"
						style={{
							top: `${formData.top}%`,
							left: `${formData.left_pos}%`,
						}}
					/>
				)}
			</div>

			{isAddMode && (
				<form onSubmit={handleSubmit} className="form">
					<input
						value={formData.title}
						placeholder="Название"
						onChange={(e) =>
							setFormData({ ...formData, title: e.target.value })
						}
					/>
					<textarea
						placeholder="Описание"
						value={formData.description}
						onChange={(e) =>
							setFormData({ ...formData, description: e.target.value })
						}
					/>
					<input
						type="file"
						onChange={(e) =>
							setFormData({ ...formData, image: e.target.files[0] })
						}
					/>
					<button type="submit" className="save">
						Сохранить
					</button>
				</form>
			)}

			{showModal && (
				<div className="backdrop" onClick={() => setShowModal(false)}>
					<div className="modal" onClick={(e) => e.stopPropagation()}>
						<h3>{activePoint?.title}</h3>
						<p>{activePoint?.description}</p>
						{activePoint?.image && (
							<img
								src={activePoint.image}
								alt=""
								style={{ width: "100%", marginTop: "10px" }}
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default About;
