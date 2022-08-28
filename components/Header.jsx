/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = () => {
	return (
		<div className='header border-b border-b-darkBlue/10 p-4 flex items-center gap-2'>
			<img src='./favicon.png' alt='' className='w-5' />
			<img className='h-[20px]' src='/logo.png' alt='logo' />
		</div>
	)
}

export default Header
