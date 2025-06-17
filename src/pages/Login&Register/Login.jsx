import React, { useState, useContext } from "react";
import "./styles.scss";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContect } from "../helpers/AuthContect";

export default function Login() {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const { setAuthState } = useContext(AuthContect);
	const onsubmit = async (event) => {
		event.preventDefault(); // Prevent form from reloading the page
		const data = { username, password };
		try {
			const response = await axios.post(
				"https://safaspace-diary-28a8b0ca0ffb.herokuapp.com/user/login",
				data
			);
			if (response.data.error) {
				alert(response.data.error);
			} else {
				localStorage.setItem("accessToken", response.data);
				setAuthState(true);
				navigate("/");
			}
		} catch (error) {
			alert("Login failed. Please try again.");
		}
	};

	return (
		<div className='container'>
			<form
				onSubmit={(event) => {
					onsubmit(event);
					setUsername("");
					setPassword("");
				}}
			>
				<div className='userinput'>
					<label>Username</label>
					<input
						value={username}
						onChange={(event) => setUsername(event.target.value)}
						name='username'
						placeholder='Enter-Username'
						type='text'
					/>
				</div>
				<div className='userinput'>
					<label>Password</label>
					<input
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						name='password'
						placeholder='Enter-Password'
						type='password'
					/>
				</div>
				<span></span>
				<button type='submit'>Login</button>
				<span>
					Do not have account? <NavLink to={"/register"}>Register</NavLink>
				</span>
			</form>
		</div>
	);
}
