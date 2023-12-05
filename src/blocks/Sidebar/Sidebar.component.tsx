import styles from './Sidebar.module.scss'
import { Icon } from '../../ui/components/Icon/Icon.component'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.user}>
				<Icon icon="account_circle" /> Имя пользователя
			</div>
			<div className={styles.menu}>
				<Link to="/" className={styles.item}><Icon icon="home" />Главная</Link>
				<Link to="/tasks" className={styles.item}><Icon icon="list" />Задачи</Link>
				<div className={styles.subitem}><Icon icon="not_started" /> Не начатые</div>
				<div className={styles.subitem}><Icon icon="pending" /> В процессе</div>
				<div className={styles.subitem}><Icon icon="check_circle" /> Выполненые</div>
				<div className={styles.subitem}><Icon icon="cancel" /> Отмененые</div>
				<div className={styles.item}><Icon icon="calendar_month" /> Календарь</div>
			</div>
		</div>
	)
}

export default Sidebar