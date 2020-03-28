/*
 * Created on Thu Mar 26 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import BettingSites from './components/BettingSites';

export default function App() {
	return (
		<div className="App">
			<Header />
			<BettingSites />
		</div>
	);
}
