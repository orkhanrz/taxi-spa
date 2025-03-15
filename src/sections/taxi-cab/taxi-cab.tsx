import styles from "./taxi-cab.module.css";
import manPhoneImg from "../../assets/images/man-phone.jpg";
import taxiRoofSign from "../../assets/images/roof-sign.jpg";

export default function TaxiCab() {
	return (
		<section className={styles.taxiCabSection}>
			<div className="container">
				<div className={styles.taxiCabContent}>
					<div className={styles.taxiCabImages}>
						<div>
							<img src={manPhoneImg} alt="man in taxi cab talking on phone" />
						</div>
						<div>
							<img src={taxiRoofSign} alt="taxi roof sign" />
						</div>
					</div>
					<div className={styles.taxiCabText}>
						<h3>Yellow Cab NYC</h3>
						<p>
							Pretium lectus quam id leo in vitae turpis massa. Felis imperdiet proin fermentum
							leo vel orci. Auctor urna nunc id cursus metus aliquam. Rutrum tellus pellentesque
							eu tincidunt tortor aliquam nulla facilisi cras.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
