import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
import './globals.scss'

const Sidebar = lazy(() => import('../blocks/Sidebar/Sidebar.component'))

import styles from './Layout.module.scss'


const Layout = () => {
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