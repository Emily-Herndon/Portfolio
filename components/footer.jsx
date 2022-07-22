import styles from "../styles/Home.module.css"
export default function footer() {
  return (
    <div className={styles.footer}>
        <a href="https://github.com/Emily-Herndon" target="_blank" rel="noopener noreferrer">Github</a>
        <span> | </span>
        <a href="https://www.linkedin.com/in/emily-v-herndon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span> | </span>
        <a>Email Me</a>
        <span> | </span>
        <a>Résumé(PDF)</a>
        <span> | </span>
        <a>Résumé(TXT)</a>
    </div>
  )
}
