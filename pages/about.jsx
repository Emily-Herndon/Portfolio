// special SSR image component
import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About() {
	return (
		<div>
			<h1>About Me</h1>
			{/* can also do multiple className by "className={[styles.extraGreen, styles.bigFont].join(" ")}" */}
			{/*className={`${styles.extraGreen} ${styles.bigFont}`}*/}
			<p >
				I am a software engineer currently living in Portland Oregon. 
			</p>
			<div>
				{/* <style jsx>{`
					.orangeText {
						color: orange;
					}
					p {
						font-size: 70px;
					}
				`}</style> */}
				{/*className="orangeText"*/}
				{/* <p >
					I love to code and would love to code for your company!
				</p> */}
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
		</div>
	)
}
