import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import React from "react";

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
