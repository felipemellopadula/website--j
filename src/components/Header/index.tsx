import styles from "./Header.module.scss";
import logo from "../../assets/Logo_Unity.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={logo} alt="Logo da Unity" className={styles.logo} />
        </div>
        <nav>
          <ul>
            <li>Agência</li>
            <li>Trabalhos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
