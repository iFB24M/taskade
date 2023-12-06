import { TextComponentProps } from '../../interfaces/TextComponent.props'
import styles from './Title3.module.scss'

export const Title3 = ({ className, ...props }: TextComponentProps) => {
	return (
		<h3 className={`${styles.title} ${className}`} {...props} />
	)
}