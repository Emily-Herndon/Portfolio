import styles from "../styles/Home.module.css"
import Image from "next/image"
export default function footer() {
    return (
        <div id="contact" className={styles.footer}>
            <a className="flex flex-col" href="https://github.com/Emily-Herndon" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/assets/github.png"
                    alt="github logo"
                    width={75}
                    height={75}
                />
                <p>Github</p>
            </a>
            <span> | </span>
            <a className="flex flex-col" href="https://www.linkedin.com/in/emily-v-herndon/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/assets/linked-in.png"
                    alt="linkedin logo"
                    width={60}
                    height={60}
                />
                <p className="mt-2">LinkedIn</p>
            </a>
            <span> | </span>
            <a className="flex flex-col" href="mailto:emilyvherndon@gmail.com">
                <Image
                    src="/images/assets/email.png"
                    alt="email"
                    width={65}
                    height={65}
                />
                <p className="mt-2">Email Me</p>
            </a>
            <span> | </span>
            <a className="flex flex-col" href="/Emily-Herndon-Resume.pdf" target="_blank" rel="noopener noreferrer">

                <Image
                    src="/images/assets/pdf.png"
                    alt="resumé pdf"
                    width={55}
                    height={55}
                />
                <p className="mt-2">Resume</p>
            </a>
            {/* <span> | </span>
            <a className="flex flex-col" href="/Emily-Herndon-Resume.txt" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/assets/txt.png"
                    alt="resumé txt"
                    width={55}
                    height={55}
                    <p className="mt-2">Resume</p>
                /></a> */}
        </div>
    )
}
