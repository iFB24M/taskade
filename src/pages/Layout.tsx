import { lazy, useState } from 'react'
import { Outlet } from 'react-router-dom'
import './globals.scss'

const Sidebar = lazy(() => import('../blocks/Sidebar/Sidebar.component'))

import styles from './Layout.module.scss'
import { Icon } from '../ui/components/Icon/Icon.component'


const Layout = () => {
	const [sidebarOpened, setSidebarOpened] = useState(false)

	const toggleSidebar = () => sidebarOpened ? setSidebarOpened(false) : setSidebarOpened(true)

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
			<header className={styles.header}><button className={styles.icon} onClick={toggleSidebar}><Icon icon="menu" /></button> Taskade</header>
			<main className={styles.main}>
				<Sidebar isOpened={sidebarOpened} />
				<div className={styles.body}>
					<Outlet />
				</div>
			</main>
		</div>
	)
}

export default Layout