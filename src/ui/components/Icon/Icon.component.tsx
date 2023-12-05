import styles from './Icon.module.scss'
import React from 'react'
import { IconProps } from './Icon.props'

export const Icon = ({ icon, className, ...props }: IconProps) => {
	return (
		<i className={`${styles.icon} ${className}`} {...props}>{icon}</i>
	)
}