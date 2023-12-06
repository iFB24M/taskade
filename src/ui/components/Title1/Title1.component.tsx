import { TextComponentProps } from '../../interfaces/TextComponent.props'
import styles from './Title1.module.scss'

export const Title1 = ({ className, ...props }: TextComponentProps) => {
	return (
		<h1 className={`${styles.title} ${className}`} {...props} />
	)
}