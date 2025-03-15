import styles from "./transfers.module.css";
import girlWithHat from "../../assets/images/girl-img.jpg";
import manDoor from "../../assets/images/man-door.jpg";
import manDoorGlasses from "../../assets/images/man-door-2.jpg";

export default function Transfers() {
	return (
		<section>
			<div className="container">
				<div className={styles.transfersContent}>
					<div className={styles.transfersFirst}>
						<div className={styles.transfersFirstLeft}>
							<img src={girlWithHat} alt="girl with hat" />
							<p>
								The economic and business hub means that promotes the growth of the city
								overall. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.
							</p>
						</div>

						<p className={styles.transfersFirstRight}>Taxi transfers from and to Airport</p>
					</div>
					<div className={styles.transfersSecond}>
						<div className={styles.transfersSecondLeft}>
							<img src={manDoorGlasses} alt="man opens taxi cab door" />
						</div>

						<div className={styles.transfersSecondRight}>
							<img src={manDoor} alt="businessman enters taxi cab" />
							<p>
								Our ultimatum is to bring round the clock airport transportation service to or
								from airport as finest one in town. We are a dedicated team with ultimate
								fleet core strength and network well spanned in Canadian bounds.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
