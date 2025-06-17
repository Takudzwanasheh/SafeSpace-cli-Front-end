import React, { useState } from "react";
import axios from "axios";
import "./entry.scss";
import { useNavigate } from "react-router-dom";

export default function NewEntries() {
	const navigate = useNavigate();
	const today = new Date().toLocaleDateString("en-CA");
	const [form, setForm] = useState({
		date: today,
		title: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post(
					"https://safaspace-diary-28a8b0ca0ffb.herokuapp.com/posts",
					form,
					{
						header: {
							accessToken: localStorage.getItem("accessToken"),
						},
					}
				)
				.then((response) => {
					if (response.data.error) {
						alert(response.data.error);
						console.log(localStorage.getItem("accessToken"));
					} else {
						navigate("/my-entries");
					}
				});

			setForm({
				date: today,
				title: "",
				message: "",
			});
		} catch (err) {
			console.error("Error saving entry:", err);
		}
	};

	return (
		<div className='newPost'>
			<div className='toptext'>
				<h1>New diary entry</h1>
				<span>Share your thoughts and feelings</span>
			</div>
			<div className='form'>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<label htmlFor='date'>Date</label>
						<input
							name='date'
							type='date'
							id='date'
							value={form.date}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='title'>Title</label>
						<input
							name='title'
							type='text'
							id='title'
							placeholder='Enter title'
							value={form.title}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='content'>Entry</label>
						<textarea
							name='message'
							id='content'
							placeholder='Write your entry here...'
							value={form.message}
							onChange={handleChange}
							required
						></textarea>
					</div>
					<button
						type='submit'
						disabled={
							!form.date.trim() || !form.title.trim() || !form.message.trim()
						}
					>
						Save Entry
					</button>
					<span>Autosave is active</span>
				</form>
			</div>
		</div>
	);
}
