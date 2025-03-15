import Button from "../../components/ui/button/button";
import styles from "./book-trip.module.css";
import nightTaxiRoofSign from "../../assets/images/roof-sign-night.jpg";
import girlInCab from "../../assets/images/girl-in-taxi.jpg";

export default function BookTrip() {
	return (
		<section className={styles.bookTripSection}>
			<div className="container">
				<div className={styles.bookTripContent}>
					<div className={styles.bookTripBookNow}>
						<h2>Book your trip online now</h2>
						<p>
							Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id
							suscipit ex. Suspendisse rhoncus laoreet purus . Phasellus sed efficitur dolor, et
							ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur.
						</p>
						<Button>Book now</Button>
					</div>
					<div className={styles.bookTripImg}>
						<img src={nightTaxiRoofSign} alt="night taxi roof sign" />
					</div>
					<div className={styles.bookTripInfo}>
						<div className={styles.bookTripInfoLeft}>
							<h3>About Us</h3>
							<p>
								Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
								nunc justo sagittis suscipit ultrices.
							</p>
						</div>
						<div className={styles.bookTripInfoRight}>
							<img src={girlInCab} alt="girl in taxi cab" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
