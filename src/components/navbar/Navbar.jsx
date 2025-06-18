import React from "react";
import { NavLink } from "react-router-dom";

import { Book, Home, Add } from "@mui/icons-material";
import "./navbar.scss";
import { useContext } from "react";
import { AuthContect } from "../../pages/helpers/AuthContect";

export default function Navbar() {
	const { authState, setAuthState } = useContext(AuthContect);
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
					<NavLink to={"/about"} className='link'>
						About
					</NavLink>
					<NavLink to={"/privacy"} className='link'>
						Privacy
					</NavLink>
					<NavLink to={"faq"} className='link'>
						FAQ
					</NavLink>
				</div>

				<div className='logout'>
					{!authState ? (
						<NavLink to={"/login"} className='link'>
							<button>Login</button>
						</NavLink>
					) : (
						<NavLink className='link'>
							<button
								onClick={() => {
									setAuthState(false);
									localStorage.removeItem("accessToken");
								}}
							>
								Logout
							</button>
						</NavLink>
					)}
				</div>
			</div>
			{authState && (
				<>
					<div className='second-header'>
						<div className='logo'>
							<div className='logo'>
								<Home className='icon' />
								<NavLink to={"/"} className='text'>
									Home
								</NavLink>
							</div>
							<div className='logo'>
								<Book className='icon' />
								<NavLink to={"/my-entries"} className='text'>
									MyEntries
								</NavLink>
							</div>
							<div className='logo'>
								<Add className='icon' />
								<NavLink to={"/new-entry"} className='text'>
									WriteNewEntry
								</NavLink>
							</div>
						</div>

						<div className='logout'>
							<NavLink className='link'>MR & MRS</NavLink>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
