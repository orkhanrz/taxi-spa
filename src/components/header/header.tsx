import styles from "./header.module.css";
import logoIcon from "../../assets/images/logo.png";

export default function Header() {
	return (
		<header>
			<div className="container">
				<div className={styles.headerContent}>
					<img src={logoIcon} className={styles.headerLogo} alt="logo" />
					<div className={styles.burgerMenu}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
}
