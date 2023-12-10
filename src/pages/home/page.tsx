import { Title1 } from '@/ui/components/Title1/Title1.component';
import styles from './page.module.scss'
import { Title3 } from '@/ui/components/Title3/Title3.component';
import { Icon } from '@/ui/components/Icon/Icon.component';
import { Link } from 'react-router-dom';
import { Productivity } from './Productivity/Productivity.component';
import { useEffect, useState } from 'react';
import { Title2 } from '@/ui/components/Title2/Title2.component';

const useMaxWidth = (maxWidth: number) => {
	const [matchWidth, setMatchWidth] = useState(false)

	const updateMatch = () => setMatchWidth(window.matchMedia(`(max-width: ${maxWidth}px)`).matches)

	useEffect(() => {
		window.matchMedia(`(max-width: ${maxWidth}px)`).addEventListener('change', updateMatch)

		updateMatch()

		return () => {
			window.matchMedia(`(max-width: ${maxWidth}px)`).removeEventListener('change', updateMatch)
		}
	}, [])

	return matchWidth
}

const Home = () => {
	const bigMonitor = !useMaxWidth(1440);

	return (
		<div>
			<Title1 className={styles.title}>
				Привет, имя
			</Title1>
			<Title2 className={styles.subtitle}>Ваши задачи</Title2>
			<div className={styles.grid}>
				<div className={styles.tasks}>
					<Link to="/tasks/not-started" className={`${styles.task} ${styles.notStarted}`}>
						<Title3 className={styles.taskTitle}>Не начато</Title3>
						<Icon icon="not_started" />
					</Link>
					<Link to="/tasks/pending" className={`${styles.task} ${styles.pending}`}>
						<Title3 className={styles.taskTitle}>В процес&shy;се</Title3>
						<Icon icon="pending" />
					</Link>
					<Link to="/tasks/done" className={`${styles.task} ${styles.done}`}>
						<Title3 className={styles.taskTitle}>Выполне&shy;но</Title3>
						<Icon icon="check_circle" />
					</Link>
					<Link to="/tasks/canceled" className={`${styles.task} ${styles.canceled}`}>
						<Title3 className={styles.taskTitle}>Отмене&shy;но</Title3>
						<Icon icon="cancel" />
					</Link>
				</div>
				{bigMonitor ? <Productivity /> : ''}
			</div>
			{!bigMonitor ? <Productivity /> : ''}
		</div>
	)
}

export default Home