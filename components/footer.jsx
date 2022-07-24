import styles from "../styles/Home.module.css"
import Image from "next/image"
export default function footer() {
    return (
        <div id="contact" className={styles.footer}>
            <a href="https://github.com/Emily-Herndon" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/assets/github.png"
                    alt="github logo"
                    width={75}
                    height={75}
                />
            </a>
            <span> | </span>
            <a href="https://www.linkedin.com/in/emily-v-herndon/" target="_blank" rel="noopener noreferrer">
                <Image
                    src="/images/assets/linkedin.png"
                    alt="linkedin logo"
                    width={50}
                    height={50}
                />
            </a>
            <span> | </span>
            <a>
                <Image
                    src="/images/assets/email.png"
                    alt="email"
                    width={65}
                    height={65}
                />
            </a>
            <span> | </span>
            <a>
                <Image
                    src="/images/assets/pdf.png"
                    alt="resumé pdf"
                    width={65}
                    height={65}
                />
            </a>
            <span> | </span>
            <a>
                <Image
                    src="/images/assets/txt.png"
                    alt="resumé txt"
                    width={65}
                    height={65}
                /></a>
        </div>
    )
}
