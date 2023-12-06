import { Title1 } from '@/ui/components/Title1/Title1.component';
import styles from './page.module.scss'
import { Title3 } from '@/ui/components/Title3/Title3.component';
import { Icon } from '@/ui/components/Icon/Icon.component';
import { Link } from 'react-router-dom';
import { Productivity } from './Productivity/Productivity.component';

const Home = () => {
	return (
		<div>
			<Title1 className={styles.title}>
				Привет, имя
			</Title1>
			<div className={styles.grid}>
				<div className={styles.tasks}>
					<Link to="/tasks/not-started" className={`${styles.task} ${styles.notStarted}`}>
						<Title3 className={styles.taskTitle}>Не начатые</Title3>
						<Icon icon="not_started" />
					</Link>
					<Link to="/tasks/pending" className={`${styles.task} ${styles.pending}`}>
						<Title3 className={styles.taskTitle}>В процессе</Title3>
						<Icon icon="pending" />
					</Link>
					<Link to="/tasks/done" className={`${styles.task} ${styles.done}`}>
						<Title3 className={styles.taskTitle}>Выполненые</Title3>
						<Icon icon="check_circle" />
					</Link>
					<Link to="/tasks/canceled" className={`${styles.task} ${styles.canceled}`}>
						<Title3 className={styles.taskTitle}>Отмененые</Title3>
						<Icon icon="cancel" />
					</Link>
				</div>
			</div>
			<Productivity />
		</div>
	)
}

export default Home