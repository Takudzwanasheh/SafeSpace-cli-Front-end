import React from "react";
import "./home.scss";
import { NavLink } from "react-router-dom";

export default function Home() {
	return (
		<div className='container'>
			<div className='topsection'>
				<h1>Welcome to SafeSpace</h1>
				<p>Your Journey to Healing Starts Here.</p>
				<div className='Joinus'>
					<span>Healing Through Connection and Conversation.</span>
					<p>
						At SafeSpace, we believe in the power of sharing and connection.
						This is a safe space for individuals facing life's challenges,
						particularly those dealing with depression and mental health
						struggles. Here, you can express your thoughts, share your
						experiences, and connect with others who understand.",
					</p>
				</div>
				<div className='User-feedback'>
					<NavLink>What Our Users Say</NavLink>
				</div>
			</div>
		</div>
	);
}
