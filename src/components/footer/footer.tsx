import Button from "../ui/button/button";
import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<div className={`container ${styles.footerTop}`}>
					<div className={styles.footerTopLeft}>
						<h3>Get in touch</h3>
						<h4>
							We can ensure reliability, low cost fares and most important, with safety and
							comfort in mind.
						</h4>
						<p>
							Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent
							per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.
						</p>

						<ul className={styles.footerLeftLinks}>
							<li>
								<a href="">f</a>
							</li>
							<li>
								<a href="">t</a>
							</li>
							<li>
								<a href="">i</a>
							</li>
							<li>
								<a href="">v</a>
							</li>
							<li>
								<a href="">y</a>
							</li>
						</ul>
					</div>
					<div className={styles.footerTopMid}>
						<div className={styles.footerTopMidBox}>
							<h3>call us</h3>
							<p>1 (234) 567-891</p>
							<p>1 (234) 987-654</p>
						</div>
						<div className={styles.footerTopMidBox}>
							<h3>location</h3>
							<p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
						</div>
						<div className={styles.footerTopMidBox}>
							<h3>Our top services</h3>
							<ul>
								<li>Local transfers</li>
								<li>Airport Transfers</li>
								<li>Excursions and Tours</li>
							</ul>
						</div>
					</div>
					<div className={styles.footerTopRight}>
						<input type="text" placeholder="Enter your name" />
						<input type="text" placeholder="Enter a valid email address" />
						<textarea rows={5} />
						<Button>Submit</Button>
					</div>
				</div>

				<div className={styles.footerBottom}>
					<p>
						Sample text. Click to select the text box. Click again or double click to start
						editing the text.
					</p>
				</div>
			</div>
		</footer>
	);
}
