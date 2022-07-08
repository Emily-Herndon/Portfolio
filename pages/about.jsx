// special SSR image component
import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About() {
	return (
		<div>
			<h1>About</h1>
			{/* can also do multiple className by "className={[styles.extraGreen, styles.bigFont].join(" ")}" */}
			<p className={`${styles.extraGreen} ${styles.bigFont}`}>
				I am a super cool software engineer now. I make super cool stuff with
				the codes.
			</p>
			<div>
				<style jsx>{`
					.orangeText {
						color: orange;
					}
					p {
						font-size: 70px;
					}
				`}</style>
				<p className="orangeText">
					I love to code and would love to code for your company!
				</p>
			</div>

			{/* loading an image locally */}
			<Image
				src="/IMG_1365.jpg"
				alt="me wearing sunglasses with the picturesque columbia river gorge behind me"
				width={250}
				height={200}
			/>

			{/* this works too! */}
			{/* <img src="/IMG_8941.jpg" alt="sleepy opal" /> */}
			<Image
				src="https://placekitten.com/300/300"
				alt="a magnificent creature"
				width={300}
				height={300}
			/>
		</div>
	)
}
