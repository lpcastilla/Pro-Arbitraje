import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center position-relative">
			<img
				src="https://res.cloudinary.com/dronv3ars/image/upload/v1695764739/Orange_and_Blue_Corporative_Modern_Presentation_tnzizq.jpg"
				className="landing-img img-fluid"
				alt="Start"
			/>

			<div className="title">
				<h1>Encuentra los mejores abogados.</h1>	
			</div>	

			<div className="search-bar">
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Buscar..." aria-label="Buscar" aria-describedby="basic-addon2" />
					<div className="input-group-append">
						<button className="btn btn-secondary" type="button">
							Buscar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};


