/*
* Created on Fri Mar 27 2020
* Author: Gio Justiniano
* More info: https://github.com/giomikee/
*
* Copyright (c) 2020
*/

import React, { Component } from 'react';
import '../styles/BettingSite.css';

const showRating = (rating, siteName) => {
	const starImg = <img src='/logos/star.png' width='10' height='10' alt='star' />;
	const stars = [];

	for (let i = 0; i < rating; i++) {
		stars.push(Object.assign({}, starImg, { key: `${siteName}${i}` }));
	}

	return stars;
};

export default class BettingSite extends Component {


	linkToSite = event => !event.target.classList.contains('review') && window.open(this.props.info.link, '_blank');


	render() {
		const { info, viewType } = this.props;

		return (
			<div className={`site ${viewType}`} onClick={this.linkToSite}>
				<h2 className='rank gray'>{info.rank}</h2>
				<a className='review' href={info.review} target='_blank' rel="noopener noreferrer">
					<img src={info.logo} alt={info.name} className='review logo' />
				</a>
				<div className='rating'>
					{showRating(info.rating, info.name)}
				</div>
				<a className='review' href={info.review} target='_blank' rel="noopener noreferrer">
					<small className='review'>Read Review</small>
				</a>
				<p className='offer'>
					<b className='offer_desktop'>{info.offer_desktop}</b>
					<b className='offer_mobile'>{info.offer_mobile}</b>
				</p>
				<a className='link' href={info.link} target='_blank' rel="noopener noreferrer">
					<div className='link__label'>
						<span className='link__label-text'>Play Now</span>
						<span className='arrow'>></span>
					</div>
				</a>
			</div>
		);
	}
}
