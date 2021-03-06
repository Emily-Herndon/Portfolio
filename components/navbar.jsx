import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"
import React, { useState } from "react"
// built in link from next.js
import Link from "next/link"

export default function Navbar() {
	const [mobileNavbar, setMobileNavbar] = useState(false)

	const handleMobileNav = () => {
		setMobileNavbar(!mobileNavbar)
	}
	return (
		<div id="navbar" className="fixed top-0 w-full h-20 shadow-xl z-[100] nav bg-white">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<span id="initials" className="self-center text-xl font-semibold whitespace-nowrap ">EH</span>
				<div>
					<ul className="hidden md:flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
						<Link href="/#main" >
							<li className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
								Home
							</li>
						</Link>
						<Link href="/#about">
							<li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								About Me
							</li>
						</Link>
						<Link href="/#skills">
							<li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								Skills
							</li>
						</Link>
						<Link href="/#projects">
							<li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								Projects
							</li>
						</Link>
						<Link href="/#contact">
							<li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								Contact Me
							</li>
						</Link>
					</ul>
				</div>
				<div onClick={handleMobileNav} className="md:hidden">
					<AiOutlineMenu size={25} />
				</div>
			</div>
			<div className={mobileNavbar ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
				<div className={mobileNavbar ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#E0E1DD] p-10 ease-in duration-500" : "fixed left-[-200%] top-0 p-10 ease-in duration-500"}>
					<div>
						<div className="flex w-full items-center justify-between">
							<span id="initials" className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">EH</span>
							<div onClick={handleMobileNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-[#0D1B2A] my-4">
							<p className="w-[85%] md:w-[90%] py-4">Something inspirational/attention grabbing to make them want to hire me</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul>
							<Link href="/#main">
								<li onClick={handleMobileNav} className="py-4 text-sm">Home</li>
							</Link>
							<Link href="/#about">
								<li onClick={handleMobileNav} className="py-4 text-sm">About Me</li>
							</Link>
							<Link href="/#skills">
								<li onClick={handleMobileNav} className="py-4 text-sm">Skills</li>
							</Link>
							<Link href="/#projects">
								<li onClick={handleMobileNav} className="py-4 text-sm">Projects</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="tracking-widest">Let&apos;s Connect!</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaLinkedinIn />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaGithub />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<AiOutlineMail />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
