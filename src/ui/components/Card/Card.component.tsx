import { HTMLAttributes } from "react";
import styles from './Card.module.scss'


export const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={`${styles.card} ${className}`} {...props}></div>
	)
}