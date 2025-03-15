import styles from './button.module.css';

interface ButtonProps {
    children: React.ReactNode
    customStyles?: React.CSSProperties
}

export default function Button({children, customStyles}: ButtonProps) {
  return (
    <button className={styles.btn} style={customStyles}>{children}</button>
  )
}