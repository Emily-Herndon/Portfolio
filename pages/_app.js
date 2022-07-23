import "../styles/globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { useState } from "react"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />

			<Footer />
		</>
	)
}

export default MyApp
