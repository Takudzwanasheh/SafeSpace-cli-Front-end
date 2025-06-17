import React from "react";
import "./footer.scss";
export default function Footer() {
	return (
		<div>
			<footer className='footer'>
				<div className='footer-container'>
					<div className='footer-logo'>
						<h2>My Blog</h2>
					</div>
					<div className='footer-links'>
						<a href='#about'>About Us</a>
						<a href='#services'>Services</a>
						<a href='#contact'>Contact</a>
						<a href='#faq'>FAQ</a>
					</div>
					<div className='footer-social'>
						<a href='#' aria-label='Facebook'>
							Facebook
						</a>
						<a href='#' aria-label='Twitter'>
							Twitter
						</a>
						<a href='#' aria-label='Instagram'>
							Instagram
						</a>
					</div>
				</div>
				<p className='footer-credit'>© 2023 My Blog. All rights reserved.</p>
			</footer>
		</div>
	);
}
