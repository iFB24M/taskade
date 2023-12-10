import { Title2 } from '@/ui/components/Title2/Title2.component'
import styles from './Productivity.module.scss'

export const Productivity = () => {
	return (
		<div>
			<Title2>Продуктивность</Title2>
			<div className={styles.productivity}>
				<div className={styles.legend}>
					<div className={styles.label}>
						<div className={`${styles.badge} ${styles.badgeBad}`}></div>
						Плохо
					</div>
					<div className={styles.label}>
						<div className={`${styles.badge} ${styles.badgeGood}`}></div>
						Хорошо
					</div>
					<div className={styles.label}>
						<div className={`${styles.badge} ${styles.badgePerfect}`}></div>
						Отлично
					</div>
				</div>
				<div className={styles.weekDays}>
					<div className={styles.weekDayWrapper}>
						<div className={`${styles.weekDay} ${styles.weekDay1}`}></div>
						<span className={styles.weekLabel}>пн</span>
					</div>
					<div className={styles.weekDayWrapper}>
						<div className={`${styles.weekDay} ${styles.weekDay4}`}></div>
						<span className={styles.weekLabel}>вт</span>
					</div>
					<div className={styles.weekDayWrapper}>
						<div className={`${styles.weekDay} ${styles.weekDay2}`}></div>
						<span className={styles.weekLabel}>ср</span>
					</div>
					<div className={styles.weekDayWrapper}>
						<div className={`${styles.weekDay} ${styles.weekDay3}`}></div>
						<span className={styles.weekLabel}>чт</span>
					</div>
					<div className={styles.weekDayWrapper}>
						<div className={`${styles.weekDay} ${styles.weekDay4}`}></div>
						<span className={styles.weekLabel}>пт</span>
					</div>
					<div className={styles.weekDayWrapper}>
						<div className={`${styles.weekDay} ${styles.weekDay1}`}></div>
						<span className={styles.weekLabel}>сб</span>
					</div>
					<div className={styles.weekDayWrapper}>
						<div className={`${styles.weekDay} ${styles.weekDay2}`}></div>
						<span className={styles.weekLabel}>вс</span>
					</div>
				</div>
			</div>
		</div>
	)
}