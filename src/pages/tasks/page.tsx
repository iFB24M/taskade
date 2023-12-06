import styles from './page.module.scss'
import { Icon } from '../../ui/components/Icon/Icon.component'
import { Link } from 'react-router-dom'

const Tasks = () => {
	return (
		<div>
			<div className={styles.categories}>
				<Link to="/tasks" className={styles.category}>Работа</Link>
				<Link to="/tasks" className={styles.category}>Дизайн</Link>
				<Link to="/tasks" className={styles.category}>Домашние дела</Link>
				<Link to="/tasks" className={styles.category}>Учеба</Link>
				<Link to="/tasks" className={styles.category}>Другое</Link>
				<input className={styles.category} placeholder="Новая категория" name="new-category-name" />
				<Link to="/tasks" className={`${styles.category} ${styles.iconcategory}`}><Icon icon="add_circle" /> добавить</Link>
			</div>
			<div className={styles.list}>
				<Link to="/task/0" className={`${styles.task} ${styles.pending}`}>
					<span className={styles.taskLabel}>Не начато</span>
					<span className={styles.taskTitle}>Средняя задача</span>
					<span className={styles.taskDate}><Icon icon="schedule" /> 12:00 - 13:00</span>
				</Link>
				<Link to="/task/0" className={`${styles.task} ${styles.inProcess}`}>
					<span className={styles.taskLabel}>В процессе</span>
					<span className={styles.taskTitle}>Легкая задача</span>
					<span className={styles.taskDate}><Icon icon="schedule" /> 13:00 - 15:00</span>
				</Link>
				<Link to="/task/0" className={`${styles.task} ${styles.done}`}>
					<span className={styles.taskLabel}>Закончено</span>
					<span className={styles.taskTitle}>Обычная задача</span>
					<span className={styles.taskDate}><Icon icon="schedule" /> 14:00 - 16:00</span>
				</Link>
			</div>
		</div>
	)
}

export default Tasks