import React from "react";

//include images into your bundle

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<div className="d-flex">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
			<Footer />
			
		</div>
	);
};

export default Home;
