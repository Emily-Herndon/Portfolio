import styles from "../styles/About.module.css"

export default function About() {
	return (
		<div id="about" className="w-full p-20 my-40 text-center bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600">
			<div className="max-w-[1240px] w-full h-full mx-auto my-auto p-2 flex justify-center items-center">
				<div>
					<h1>About Me</h1>
					{/* can also do multiple className by "className={[styles.extraGreen, styles.bigFont].join(" ")}" */}
					{/*className={`${styles.extraGreen} ${styles.bigFont}`}*/}
					<p className="py-4 m-auto max-w-[70%]">
						My name is Emily Herndon. I am originally from Miami Florida but have been living in Portland Oregon since 2018. I&apos;ve always had a connection to technology.
					</p>
					<p className="py-4 m-auto max-w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p className="py-4 m-auto max-w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
