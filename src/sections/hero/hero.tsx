import styles from "./hero.module.css";
import girlImg from "../../assets/images/hero.jpg";
import Button from "../../components/ui/button/button";

export default function Hero() {
	return (
		<section className={styles.heroSection}>
			<div className="container">
				<div className={styles.heroContent}>
					<div className={styles.heroLeft}>
						<h1>Call us anytime at: </h1>
						<h2>
							987-654-321 <span className={styles.heroLeftOr}>or</span> {""}
							<span className={styles.heroLeftOrNumber}>456-789-321</span>
						</h2>
						<Button>Call now</Button>
					</div>

					<div className={styles.heroRight}>
						<img src={girlImg} alt="girl holding phone" />
					</div>
				</div>
			</div>
		</section>
	);
}
