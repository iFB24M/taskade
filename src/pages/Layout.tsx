import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
import './globals.scss'

const Sidebar = lazy(() => import('../blocks/Sidebar/Sidebar.component'))

import styles from './Layout.module.scss'


const Layout = () => {
	if (localStorage.getItem('color-theme') === 'dark') {
		document.documentElement.style.setProperty('--background-color', '#333')
		document.documentElement.style.setProperty('--additional-color', '#383838')
		document.documentElement.style.setProperty('--foreground-color', '#fff')
	}
	else {
		document.documentElement.style.setProperty('--background-color', '#fff')
		document.documentElement.style.setProperty('--additional-color', '#f9f9f9')
		document.documentElement.style.setProperty('--foreground-color', '#333')
	}

	return (
		<div className="wrapper">
			<main className={styles.main}>
				<Sidebar />
				<div className={styles.body}>
					<Outlet />
				</div>
			</main>
		</div>
	)
}

export default Layout