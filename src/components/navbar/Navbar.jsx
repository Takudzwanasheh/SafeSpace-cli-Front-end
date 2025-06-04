import React from "react";
import { NavLink } from "react-router-dom";
import {
	Search,
	Home,
	Add,
	Person,
	Message,
	Translate,
} from "@mui/icons-material";
import "./navbar.scss";

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='top-header'>
				<div className='logo'>
					<img
						src='https://m.media-amazon.com/images/I/6112mdU416L.png'
						alt='logo'
					/>
					{/* <span className='text'>MyDiarry</span> */}
				</div>
				<div className='links'>
					<NavLink className='link'>Public-Entries</NavLink>
					<NavLink to={"/about"} className='link'>
						About
					</NavLink>
					<NavLink to={"/privacy"} className='link'>
						Privacy
					</NavLink>
					<NavLink to={"faq"} className='link'>
						FAQ
					</NavLink>
					<NavLink className='link'>Donate</NavLink>
					<div className='search'>
						<Search className='icon' />
						<input
							type='text'
							placeholder='Search...'
							className='search-input'
						/>
					</div>
				</div>

				<div className='logout'>
					<span className='link'>Languages</span>
					<span className='link'>Socials</span>
				</div>
			</div>

			<div className='second-header'>
				<div className='logo'>
					<div className='logo'>
						<Home className='icon' />
						<NavLink to={"/"} className='text'>
							Home
						</NavLink>
					</div>
					<div className='logo'>
						<Add className='icon' />
						<NavLink className='text'>MyEntries</NavLink>
					</div>
					<div className='logo'>
						<Add className='icon' />
						<NavLink className='text'>WriteNewEntry</NavLink>
					</div>
					<div className='logo'>
						<Person classname='icon' />
						<NavLink className='text'>Account</NavLink>
					</div>
					<div className='logo'>
						<Message className='icon' />
						<NavLink className='text'>Messages</NavLink>
					</div>
					<div className='logo'>
						<Translate className='icon' />
						<NavLink className='link'>Translate</NavLink>
					</div>
				</div>

				<div className='logout'>
					<NavLink className='link'>Welcome,Takudzwanashe</NavLink>
					<NavLink className='link'>Logout</NavLink>
				</div>
			</div>
		</div>
	);
}
