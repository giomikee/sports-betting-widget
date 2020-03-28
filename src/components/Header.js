/*
 * Created on Thu Mar 26 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import '../styles/Header.css';

export default function Header() {
	return (
		<header>
			<img src='logos/canada.png' width='50' height='65' alt='canadian flag' className='canada_flag' />
			<h1 className='title'>BEST SPORTS BETTING SITES</h1>
			<hr className='title__underline' />
		</header>
	);
}
