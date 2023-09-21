import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer mt-auto py-3">
		<div className="container" style={{ width: "85%" }}>
			<div className="footerLogo mb-3">
				<img
					src="https://res.cloudinary.com/dronv3ars/image/upload/v1695323771/Pro-Arbitraje-removebg-preview_w9qix2.png"
					className="logo-img-footer img-fluid"
					alt="Logo"
				/>
			</div>
			<div className="container text-start">
				<div className="row mb-5">
					<div className="col-4">
						<div className="row opacity-50 mt-3 fs-sm">Rankings</div>
						<div className="row mt-2 fs-sm">Encuentra un bufete</div>
						<div className="row mt-2 fs-sm">Encuentra un abogado</div>
					</div>
					<div className="col-4">
						<div className="row opacity-50 mt-3 fs-sm">Compañía</div>
						<div className="row mt-2 fs-sm">Sobre Nosotros</div>
						<div className="row mt-2 fs-sm">Contáctanos</div>
					</div>
					<div className="col-4">
						<div className="row opacity-50 mt-3 fs-sm">Dirección</div>
						<div className="row mt-2 fs-sm">Avenida Rómulo Gallegos</div>
						<div className="row mt-2 fs-sm">Torre Poliprima, Piso 6</div>
						<div className="row mt-2 fs-sm">Caracas, Venezuela</div>
					</div>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-6">
					<p>
						<i className="fa-regular fa-copyright" /> Copyright 2023 Pro-Arbitraje | Términos y condiciones	
					</p>
				</div>
				<div className="iconos col-6 text-end">
					<i className="fa-brands fa-linkedin fa-lg ms-3"></i>
					<i className="fa-brands fa-instagram fa-lg ms-3"></i>
					<i className="fa-brands fa-square-x-twitter fa-lg ms-3"></i>
				</div>
			</div>
		</div>
	</footer>
);
