import styles from "../styles/About.module.css"

export default function About() {
	return (
		<div id="about" className="w-full mt-30 text-center py-4 px-2">
			<div id="about-section" className="max-w-[1240px] w-full h-auto py-11 px-2 rounded-xl mx-auto my-auto justify-center items-center shadow-xl shadow-black">
				<div>
					<p className="tracking-widest text-gray-700 text-xs">Who I Am</p>
					<h1>About Me</h1>
					{/* can also do multiple className by "className={[styles.extraGreen, styles.bigFont].join(" ")}" */}
					{/*className={`${styles.extraGreen} ${styles.bigFont}`}*/}
					<p className="py-4 m-auto max-w-[70%] text-xl">
						My name is Emily Herndon. I am originally from Miami, Florida but have been living in Portland, Oregon since 2018. I&apos;ve always had an affinity for technology. From attending a &quot;computer camp&quot; in the summer of 2001 to building my own PC in 2016. I grew up around computers. My parents believed computer literacy would become a crucial skill in the future. What started out as lessons on typing with Mavis Beacon and solving math problems on &quot;Math Blaster!&quot;, quickly turned into a deep love of video games.
					</p>
					<p className="py-4 m-auto max-w-[70%] text-xl">
						I developed a passion for languages early on in life. I have studied several different languages over the years, throwing myself into and really enjoying the learning process. It was suggested to me that a way I could blend both of these passions together would be to learn how to code. I signed up for some free, self-paced, lessons on the basics of HTML, CSS, and JavaScript to see if software engineering could be a good fit for me.
					</p>
					<p className="py-4 m-auto max-w-[70%] text-xl">
						It quickly became obvious to me that a career in this field could be incredibly fulfilling and something I could be really passionate about. I extensively researched coding bootcamps and applied for the Software Engineering Immersive at General Assembly. I threw myself into the experience, trying to soak up every bit of knowledge I could. I graduated July 20, 2022 set on my path to a career as a software engineer.
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
