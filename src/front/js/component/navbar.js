import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg main-header p-0 px-lg-5 mb-70">
			<div className="container-fluid containerDeNavbarHome">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							src="https://res.cloudinary.com/dronv3ars/image/upload/v1695323771/Pro-Arbitraje-removebg-preview_w9qix2.png"
							className="logo-img img-fluid"
							alt="Logo"
						/>
					</span> 
				</Link>
				<a
					className="navbar-toggler"
					type="link"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
					>
					<span className="landingButton"><i className="fa-solid fa-bars fa-lg"></i></span>
				</a>
				<div className="collapse navbar-collapse ml-auto" id="navbarNav">
					<ul className="navbar-nav landingNav">
						<li className="nav-item itemNav">
							<Link
								className="nav-link active text-decoration-none nav-link-black"
								aria-current="page"
								to="/Nosotros"
								>
									Nosotros
							</Link>
						</li>
						<li className="nav-item itemNav">
							<Link
								className="nav-link text-decoration-none nav-link-black"
								to="/Login"
								>
									Iniciar sesión
							</Link>
						</li>
						<li className="nav-item itemNav">
							<Link
								className="nav-link text-decoration-none nav-link-black"
								to="/Registrarse"
							>
								Registrarse
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
