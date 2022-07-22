// built in link from next.js
import Link from "next/link"

export default function navbar() {
	return (
		<nav>
			<Link href="/">Home</Link>
			<span> | </span>
			<Link href="/about">About Me</Link>
			<span> | </span>
			<Link href="/projects">Projects</Link>
		</nav>
	)
}
