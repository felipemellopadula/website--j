import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.scss";
import logo from "../../assets/Logo_Unity.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.img}>
          <Link to="/">
            <img src={logo} alt="Logo da Unity" className={styles.logo} />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/agencia" className={styles.navLink}>
                Agência
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={styles.navLink}>
                Trabalhos
              </Link>
            </li>
            <li>
              <Link to="/contato" className={styles.navLink}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Menu Burger Icon */}
        {!isMenuOpen && (
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <FaBars />
          </div>
        )}
      </div>

      {/* Mobile Menu now includes close icon */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.closeIcon} onClick={toggleMenu}>
            <FaTimes />
          </div>
          <ul>
            <li>
              <Link
                to="/agencia"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                Agência
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                Trabalhos
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
