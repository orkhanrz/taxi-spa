import styles from "./hero.module.css";
import girlImg from "../../assets/images/hero.jpg";
import Button from "../../components/ui/button/button";

export default function Hero() {
	return (
		<section className={styles.heroSection}>
			<div className="container">
				<div className={styles.heroContent}>
					<div className={styles.heroLeft}>
						<h1>İnnovativ platforma ilə sərnişindaşıma təcrübəsi</h1>
						<h2>X Global: Sərnişindaşıma Sektorunda Yeni Bir Dönüş!</h2>
						<Button>Call now</Button>
					</div>

					{/* <div className={styles.heroRight}>
						<img src={girlImg} alt="girl holding phone" />
					</div> */}
				</div>
			</div>
		</section>
	);
}
