import styles from "./services.module.css";
import companyImg from "../../assets/images/taxi-company.jpg";
import applicationImg from "../../assets/images/application.jpg";
import servicesImg from "../../assets/images/services.jpg";
import Service from "../../components/service/service";

export default function Services() {
	const services = [
		{
			id: "service_1",
			img: companyImg,
			title: "Taxi company",
			text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
			link: "#",
			alt: "taxi company",
		},
		{
			id: "service_2",
			img: applicationImg,
			title: "Application",
			text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
			link: "#",
			alt: "application",
		},
		{
			id: "service_3",
			img: servicesImg,
			title: "Taxi services",
			text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
			link: "#",
			alt: "taxi services",
		},
	];

	return (
		<section className="services">
			<div className="container">
				<div className={styles.servicesContent}>
					{services.map((service) => (
						<Service
							key={service.id}
							img={service.img}
							alt={service.alt}
							title={service.title}
							text={service.text}
							link={service.link}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
