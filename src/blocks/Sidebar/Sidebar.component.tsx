import styles from './Sidebar.module.scss'
import { Icon } from '../../ui/components/Icon/Icon.component'
import { Link } from 'react-router-dom'

const changeTheme = () => {
	if (localStorage.getItem('color-theme') === 'dark') {
		localStorage.setItem('color-theme', 'light')
	}
	else {
		localStorage.setItem('color-theme', 'dark')
	}

	location.reload()
}

export interface SidebarProps {
	isOpened?: boolean
}

const Sidebar = (props: SidebarProps) => {
	return (
		<div className={`${styles.sidebar} ${props.isOpened ? styles.opened : ''}`}>
			<div className={styles.user}>
				<Icon icon="account_circle" /> Имя пользователя
			</div>
			<div className={styles.menu}>
				<div className={styles.item} onClick={() => changeTheme()}>
					<Icon icon={localStorage.getItem('color-theme') === 'dark' ? 'dark_mode' : 'light_mode'} /> {localStorage.getItem('color-theme') === 'dark' ? 'Темный режим' : 'Светлый режим'}
				</div>
				<Link to="/" className={styles.item}><Icon icon="home" />Главная</Link>
				<Link to="/tasks" className={styles.item}><Icon icon="list" />Задачи</Link>
				<Link to="/tasks/not-started" className={styles.subitem}><Icon icon="not_started" /> Не начатые</Link>
				<Link to="/tasks/pending" className={styles.subitem}><Icon icon="pending" /> В процессе</Link>
				<Link to="/tasks/done" className={styles.subitem}><Icon icon="check_circle" /> Выполненые</Link>
				<Link to="/tasks/canceled" className={styles.subitem}><Icon icon="cancel" /> Отмененые</Link>
				<div className={styles.item}><Icon icon="calendar_month" /> Календарь</div>
			</div>
		</div>
	)
}

export default Sidebar