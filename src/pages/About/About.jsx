import React from "react";
import "./about.scss";
import PageData from "./data";

export default function About() {
	return (
		<div className='home'>
			<div className='top-section'>
				<div className='about'>
					{PageData.map((item, index) => (
						<div key={index} className='about-item'>
							<h2>{item.Title}</h2>
							<p>{item.Description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
