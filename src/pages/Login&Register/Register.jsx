import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Register() {
	const [form, setForm] = React.useState({
		username: "",
		password: "",
		confirmPassword: "",
	});
	const [errors, setErrors] = React.useState({});
	const [loading, setLoading] = React.useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const validate = () => {
		const newErrors = {};
		if (!form.username.trim()) newErrors.username = "Username is required";
		if (!form.password) newErrors.password = "Password is required";
		else if (form.password.length < 6)
			newErrors.password = "Password must be at least 6 characters";
		if (form.password !== form.confirmPassword)
			newErrors.confirmPassword = "Passwords do not match";
		return newErrors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			setErrors({});
			setLoading(true);
			try {
				await axios.post(
					"https://safaspace-diary-28a8b0ca0ffb.herokuapp.com/user",
					{
						username: form.username,
						password: form.password,
					}
				);
				alert("Registered successfully!");
				setForm({
					username: "",
					password: "",
					confirmPassword: "",
				});
				// Optionally redirect or clear form here
			} catch (error) {
				setErrors({
					username:
						error.response?.data?.message || "Username Already Available",
				});
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<div>
			<div className='container'>
				<form onSubmit={handleSubmit}>
					<div className='userinput'>
						<label>Username</label>
						<input
							placeholder='Enter-Username'
							type='text'
							name='username'
							value={form.username}
							onChange={handleChange}
						/>
						{errors.username && (
							<span style={{ color: "red" }}>{errors.username}</span>
						)}
					</div>
					<div className='userinput'>
						<label>Password</label>
						<input
							placeholder='Enter-Password'
							type='password'
							name='password'
							value={form.password}
							onChange={handleChange}
						/>
						{errors.password && (
							<span style={{ color: "red" }}>{errors.password}</span>
						)}
					</div>
					<div className='userinput'>
						<label>Confirm Password</label>
						<input
							placeholder='Re-Enter-Password'
							type='password'
							name='confirmPassword'
							value={form.confirmPassword}
							onChange={handleChange}
						/>
						{errors.confirmPassword && (
							<span style={{ color: "red" }}>{errors.confirmPassword}</span>
						)}
					</div>

					<button type='submit' disabled={loading}>
						{loading ? "Registering..." : "Register"}
					</button>
					<span>
						Already have account: <NavLink to={"/login"}>Login</NavLink>{" "}
					</span>
				</form>
			</div>
		</div>
	);
}
