import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function MyEntries() {
	const [listOfPosts, setListsOfPosts] = useState([]);
	const [expandedIndexes, setExpandedIndexes] = useState([]);

	const toggleExpand = (index) => {
		setExpandedIndexes((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
		);
	};

	useEffect(() => {
		axios
			.get("https://safaspace-diary-28a8b0ca0ffb.herokuapp.com/posts", {
				header: sessionStorage.getItem("accessToken"),
			})
			.then((response) => {
				setListsOfPosts(response.data);
			})
			.catch((error) => {
				console.error("Error fetching post:", error);
			});
	}, []);

	return (
		<div className='container'>
			<h1>Your Entries</h1>
			{listOfPosts.map((item, index) => {
				const isExpanded = expandedIndexes.includes(index);
				const shouldTruncate = item.message.length > 300 && !isExpanded;
				const displayText = shouldTruncate
					? item.message.slice(0, 300) + "..."
					: item.message;

				return (
					<div className='previous-posts' key={item._id || index}>
						<span>{item.title}</span>

						{displayText.split("\n").map((para, i) => (
							<p key={i}>{para}</p>
						))}

						<div>
							{item.message.length > 300 && (
								<button onClick={() => toggleExpand(index)}>
									{isExpanded ? "Show less" : "Show more"}
								</button>
							)}

							{/* <NavLink to={`/comments/${item.id}`}>
								More About This Post
							</NavLink> */}
						</div>
					</div>
				);
			})}
		</div>
	);
}
