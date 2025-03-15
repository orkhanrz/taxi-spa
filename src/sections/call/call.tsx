import styles from "./call.module.css";
import taxiCabImg from "../../assets/images/administration.jpg";

export default function Call() {
	return (
		<section className={styles.call}>
			<div className="container">
				<div className={styles.callCard}>
					<img src={taxiCabImg} alt="taxi cab" />
					<div className={styles.cardPhone}>
						<h3>Administration</h3>
						<h4>(702) 366-1900</h4>
					</div>
					<div className={styles.cardPhone}>
						<h3>Dispatch</h3>
						<h4>(702) 366-1900</h4>
					</div>
					<div className={styles.cardPhone}>
						<h3>Lost and Found</h3>
						<h4>(702) 366-1900</h4>
					</div>
				</div>
			</div>
		</section>
	);
}
