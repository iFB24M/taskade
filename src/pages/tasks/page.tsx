import styles from './page.module.scss'
import { Icon } from '@/ui/components/Icon/Icon.component'
import { Link } from 'react-router-dom'
// import { FormEvent, useEffect, useState } from 'react';
import { Title2 } from '@/ui/components/Title2/Title2.component'

// const addTask = (e: FormEvent<HTMLFormElement>) => {
// 	e.preventDefault();

// 	const formData = new FormData(e.target as HTMLFormElement)

// 	const taskTitle = ((e.target as HTMLElement).querySelector('#task-title') as HTMLInputElement)?.value

// 	fetch('http://127.0.0.1:5000/add', {
// 		method: 'post',
// 		mode: 'no-cors',
// 		body: formData
// 	})

// 	console.log(`Добавление ${taskTitle}`)

// }

const Tasks = () => {
	// const [data, setData] = useState<string | false>(false)

	// useEffect(() => {
	// 	const getData = async () => {
	// 		const response = await fetch('http://127.0.0.1:5000')
	// 		const json = await response.text()
	// 		console.log(response)
	// 		setData(json)
	// 	}
	// 	getData()
	// }, [])

	return (
		<div>
			<Title2 className={styles.title}>Задачи</Title2>
			<div className={styles.categories}>
				<Link to="/tasks" className={styles.category}>Работа</Link>
				<Link to="/tasks" className={styles.category}>Дизайн</Link>
				<Link to="/tasks" className={styles.category}>Домашние дела</Link>
				<Link to="/tasks" className={styles.category}>Учеба</Link>
				<Link to="/tasks" className={styles.category}>Другое</Link>
				<input className={styles.category} placeholder="Новая категория" name="new-category-name" />
				<Link to="/tasks" className={`${styles.category} ${styles.iconcategory}`}><Icon icon="add_circle" /> добавить</Link>
			</div>
			<form className={styles.add}>
				<input type="text" id="task-title" name="todo" placeholder='Добавить задачу' />
				<button type="submit">Добавить</button>
			</form>
			<div className={styles.list}>
				{/* {data ? data.list.map((item) =>
					<Link to="/task/0" className={`${styles.task} ${styles.pending}`}>
						<span className={styles.taskLabel}>Не начато</span>
						<span className={styles.taskTitle}>Средняя задача</span>
						<span className={styles.taskDate}><Icon icon="schedule" /> 12:00 - 13:00</span>
					</Link>) : ''} */}
				{/* <Link to="/task/0" className={`${styles.task} ${styles.inProcess}`}>
					<span className={styles.taskLabel}>В процессе</span>
					<span className={styles.taskTitle}>Легкая задача</span>
					<span className={styles.taskDate}><Icon icon="schedule" /> 13:00 - 15:00</span>
				</Link>
				<Link to="/task/0" className={`${styles.task} ${styles.done}`}>
					<span className={styles.taskLabel}>Закончено</span>
					<span className={styles.taskTitle}>Обычная задача</span>
					<span className={styles.taskDate}><Icon icon="schedule" /> 14:00 - 16:00</span>
				</Link> */}
			</div>
		</div>
	)
}

export default Tasks