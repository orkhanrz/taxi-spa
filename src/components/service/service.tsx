import styles from "./service.module.css";

interface ServiceProps {
	img: string;
	title: string;
	text: string;
	link: string;
	alt: string;
}

export default function Service({ img, title, alt, text, link }: ServiceProps) {
	return (
		<div className={styles.serviceItem}>
			<img src={img} alt={alt} />
			<div className={styles.serviceItemInfo}>
				<h3>{title}</h3>
				<p>{text}</p>
				<a href={link}>Learn more</a>
			</div>
		</div>
	);
}
