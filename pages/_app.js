import "../styles/globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Main from "./main"
import About from "./about"
import Projects from "./projects"
import { useState } from "react"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			{/* <Component {...pageProps} /> */}
			<Main />
			<About />
			<Projects />
			<Footer />
		</>
	)
}

export default MyApp
