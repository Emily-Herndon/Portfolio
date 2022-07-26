import styles from "../styles/About.module.css"

export default function About() {
	return (
		<div id="about-nav" className="w-full my-40 text-center px-2">
			<div id="about" className="max-w-[1240px] w-full h-auto p-2 rounded-xl mx-auto my-auto justify-center items-center shadow-xl shadow-black">
				<div>
					<p className="tracking-widest text-gray-700 text-xs">Who I Am</p>
					<h1>About Me</h1>
					{/* can also do multiple className by "className={[styles.extraGreen, styles.bigFont].join(" ")}" */}
					{/*className={`${styles.extraGreen} ${styles.bigFont}`}*/}
					<p className="py-4 m-auto max-w-[70%] text-xl">
						My name is Emily Herndon. I am originally from Miami Florida but have been living in Portland Oregon since 2018. I&apos;ve always had an affinity for technology. From attending a &quot;computer camp&quot; in the summer of 2001 to building my own PC in 2016.
					</p>
					<p className="py-4 m-auto max-w-[70%] text-xl">I grew up around computers. My parents believed computer literacy would become a crucial skill in the future. What started out as lessons on typing with Mavis Beacon and solving math problems on &quot;Math Blaster!&quot;, quickly turned into a deep love of video games.</p>
					<p className="py-4 m-auto max-w-[70%] text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
