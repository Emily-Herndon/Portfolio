import styles from "../styles/About.module.css"

export default function About() {
	return (
		<div id="about" className="w-full my-80 text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto my-auto p-2 flex justify-center items-center">
				<div>
					<h1>About Me</h1>
					{/* can also do multiple className by "className={[styles.extraGreen, styles.bigFont].join(" ")}" */}
					{/*className={`${styles.extraGreen} ${styles.bigFont}`}*/}
					<p className="py-4 m-auto max-w-[70%]">
						My name is Emily Herndon. I am originally from Miami Florida but have been living in Portland Oregon since 2018. I&apos;ve always had a connection to technology.
					</p>
				</div>
			</div>

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


			{/* loading an image locally */}


			{/* this works too! */}
			{/* <img src="/IMG_8941.jpg" alt="sleepy opal" /> */}
		</div>
	)
}
