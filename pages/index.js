import Head from "next/head"
import styles from "../styles/Home.module.css"
import Navbar from "../components/navbar"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Emily Herndon's Portfolio</title>
				<meta
					name="Emily Herndons Portfolio"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav>
				<Navbar />
			</nav>
			<main></main>
		</div>
	)
}
