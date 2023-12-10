import { TextComponentProps } from '../../interfaces/TextComponent.props'
import styles from './Title2.module.scss'

export const Title2 = ({ className, ...props }: TextComponentProps) => {
	return (
		<h2 className={`${styles.title} ${className}`} {...props} />
	)
}