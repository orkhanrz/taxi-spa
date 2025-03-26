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
			title: "Müştəri Tələblərinə Cavab",
			text: "Avtomobil parkımızı genişləndirərək müştəri tələblərinə daha yaxşı cavab verəcəyik. Müxtəlif müştəri istəklərinə uyğun yeni avtomobillər əlavə olunacaq.",
			link: "#",
			alt: "taxi company",
		},
		{
			id: "service_2",
			img: applicationImg,
			title: "Müasir Avtomobillərin Əlavəsi",
			text: "Yeni və müasir avtomobillər əlavə etməklə müştəri rahatlığını artırmağı planlaşdırırıq. Bu, müştəri məmnuniyyətini yüksəldəcək.",
			link: "#",
			alt: "application",
		},
		{
			id: "service_3",
			img: servicesImg,
			title: "Müştəri Bazası Artırılması",
			text: "Avtomobil parkını genişləndirməklə müştəri bazamızı artırmağı hədəfləyirik. Bu, daha çox müştəri cəlb edəcək.",
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
