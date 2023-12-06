import styles from './page.module.scss'
import { Icon } from '../../ui/components/Icon/Icon.component'
import { Card } from '@/ui/components/Card/Card.component'

const Task = () => {
	return (
		<>
			<Card className={`${styles.task} ${styles.done}`}>
				<span className={`${styles.taskLabel}`}>Завершена</span>
				<span className={styles.taskTitle}>Заголовок</span>
				<span className={styles.taskDate}><Icon icon="schedule" /> 5 дек. 12:00 - 6 дек. 13:00</span>
				<span className={styles.taskDate}><Icon icon="bookmarks" /> Работа</span>
			</Card>
			<div className={styles.comments}>
				<Card className={styles.comment}>
					<div className={styles.author}>
						<img className={styles.avatar} src="https://www.testhouse.net/wp-content/uploads/2021/11/default-avatar.jpg" alt="" />
						<span className={styles.authorName}>Андрей</span>
						<span className={styles.date}>15 января 2024, 16:15</span>
					</div>
					<div className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In nostrum iusto, eos maiores labore dolorem, quia saepe provident, corrupti omnis magni? Obcaecati nemo quibusdam voluptates repellendus velit. Dolor, asperiores optio?
					</div>
				</Card>
				<Card className={styles.comment}>
					<div className={styles.author}>
						<img className={styles.avatar} src="https://www.testhouse.net/wp-content/uploads/2021/11/default-avatar.jpg" alt="" />
						<span className={styles.authorName}>Иван</span>
						<span className={styles.date}>20 декабря 2023, 15:15</span>
					</div>
					<div className={styles.text}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quaerat quibusdam optio, nihil necessitatibus sunt possimus, nobis accusantium aperiam quia nam reprehenderit omnis, dolorum distinctio veritatis eos corrupti odit reiciendis.
					</div>
				</Card>
				<Card className={styles.comment}>
					<div className={styles.author}>
						<img className={styles.avatar} src="https://www.testhouse.net/wp-content/uploads/2021/11/default-avatar.jpg" alt="" />
						<span className={styles.authorName}>Петр</span>
						<span className={styles.date}>15 марта 2023, 18:51</span>
					</div>
					<div className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, porro, commodi corrupti architecto magnam distinctio ipsam deserunt autem dolore aliquid accusantium exercitationem! Quos perspiciatis odit doloremque, ipsam molestiae non dolorum.
					</div>
				</Card>
			</div>
		</>
	)
}

export default Task