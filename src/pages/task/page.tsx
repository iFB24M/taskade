import styles from './page.module.scss'
import { Icon } from '../../ui/components/Icon/Icon.component'

const Task = () => {
	return (
		<div className={`${styles.task} ${styles.done}`}>
			<span className={`${styles.taskLabel}`}>Завершена</span>
			<span className={styles.taskTitle}>Заголовок</span>
			<span className={styles.taskDate}><Icon icon="schedule" /> 5 дек. 12:00 - 6 дек. 13:00</span>
		</div>
	)
}

export default Task