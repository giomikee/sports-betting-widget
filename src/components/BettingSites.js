/*
 * Created on Fri Mar 27 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */
import React, { Component } from 'react';
import bettingSites from '../betting_sites.json';
import BettingSite from './BettingSite';
import '../styles/BettingSites.css';

const sortSites = (siteA, siteB, sortKey) => {
	if (siteA[sortKey] === siteB[sortKey]) {
		return 0;
	}

	return siteA[sortKey] < siteB[sortKey] ? -1 : 1;
};

export default class BettingSites extends Component {
	constructor(props) {
		super(props);

		this.state = {
			viewAllSites: false,
			viewType: 'card',
			viewSwitch: 'left',
			sortAlphabetically: false
		};
	}

	setVisibleSites = () => {
		const { viewAllSites, sortAlphabetically } = this.state;
		const sortKey = sortAlphabetically ? 'name' : 'rank';

		return bettingSites
			.slice(0, viewAllSites ? bettingSites.length : 5)
			.sort((siteA, siteB) => sortSites(siteA, siteB, sortKey));
	}

	toggleState = (event) => {
		const prop = event.target.name;

		this.setState({ [prop]: !this.state[prop] });
	}

	toggleView = () => {
		const { viewType, viewSwitch } = this.state;

		this.setState({
			viewType: viewType === 'card' ? 'list' : 'card',
			viewSwitch: viewSwitch === 'left' ? 'right' : 'left'
		});
	}


	render() {
		const { viewAllSites, sortAlphabetically, viewType, viewSwitch } = this.state;
		const visibleSites = this.setVisibleSites();

		return (
			<div>
				<span className='align_left'>
					<b>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a href='#' onClick={this.toggleState} name='sortAlphabetically' className='gray'>
							{
								sortAlphabetically ? 'Sort by ranking' : 'Sort Alphabetically'
							}
						</a>
					</b>
				</span>
				<span className='align_right'>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a href='#' onClick={this.toggleView} className='gray'>
						<b>
							Change View
						</b>
						<img
							src={`/logos/switch_${viewSwitch}.png`}
							width='45' height='35'
							alt='view switch'
							className='switch' />
					</a>
				</span>

				<div className='sites_container'>
					{
						visibleSites
							.map(site => <BettingSite info={site} viewType={viewType} key={site.id} />)
					}
				</div>
				<b>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a href='#' onClick={this.toggleState} name='viewAllSites'>
						{
							viewAllSites ? 'View Only Top Betting Sites' : 'View All Sports Betting Sites'
						}
					</a>
				</b>
			</div>
		);
	}
}
