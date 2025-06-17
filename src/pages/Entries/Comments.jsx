import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { Send, Delete } from "@mui/icons-material";
import "./entry.scss";

export default function Comments() {
	const [comments, setComments] = useState([]);
	const [post, setPost] = useState(null); // Initialize as null
	const [showFull, setShowFull] = useState(false);
	const [showFullComment, setShowFullComment] = useState({});
	const [comment, setComment] = useState("");
	const { id } = useParams();

	useEffect(() => {
		const fetchPostData = async () => {
			try {
				const response = await axios.get(
					`https://safaspace-diary-28a8b0ca0ffb.herokuapp.com/posts/byid/${id}`
				);
				setPost(response.data);
			} catch (error) {
				console.error("Error fetching post:", error);
			}
		};

		const fetchComments = async () => {
			try {
				const response = await axios.get(
					`https://safaspace-diary-28a8b0ca0ffb.herokuapp.com/comments/${id}`
				);
				setComments(response.data);
			} catch (error) {
				console.error("Error fetching comments:", error);
			}
		};

		fetchPostData();
		fetchComments();
	}, [id]);

	const deletePost = async () => {
		if (window.confirm("Are you sure you want to delete this post?")) {
			try {
				await axios.delete(
					`https://safaspace-diary-28a8b0ca0ffb.herokuapp.com/posts/delete/${id}`
				);
				alert("Post deleted");
			} catch (error) {
				console.error("Error deleting post:", error);
			}
		}
	};

	const getMessage = () => {
		if (!post || !post.message) return ""; // Handle null post
		if (!showFull && post.message.length > 200) {
			return post.message.slice(0, 200) + "...";
		}
		return post.message;
	};

	const handleViewMoreComment = (idx) => {
		setShowFullComment((prev) => ({ ...prev, [idx]: true }));
	};

	const addPost = async () => {
		try {
			await axios.post(
				"https://safaspace-diary-28a8b0ca0ffb.herokuapp.com/comments",
				{ comment: comment, PostId: id },
				{ headers: { accessToken: sessionStorage.getItem("accessToken") } }
			);
			setComment(""); // Clear the input after adding
		} catch (error) {
			console.error("Error adding comment:", error);
		}
	};

	return (
		<div className='container'>
			<div className='previous-posts'>
				{post ? (
					<>
						<span>{post.title}</span>
						<p>
							{getMessage()}
							{!showFull && post.message && post.message.length > 200 && (
								<button onClick={() => setShowFull(true)}>View More</button>
							)}
						</p>
						<div className='comment'>
							<NavLink>
								<button onClick={deletePost}>
									<Delete />
								</button>
							</NavLink>
						</div>
						<span>Comments</span>
						{comments.map((item, index) => (
							<div key={index}>
								<p>
									{!showFullComment[index] &&
									item.comment &&
									item.comment.length > 100
										? item.comment.slice(0, 100) + "..."
										: item.comment}
									{!showFullComment[index] &&
										item.comment &&
										item.comment.length > 100 && (
											<button onClick={() => handleViewMoreComment(index)}>
												View More
											</button>
										)}
								</p>
							</div>
						))}
						<div style={{ marginTop: "10px" }}>
							<input
								type='text'
								value={comment}
								onChange={(e) => setComment(e.target.value)}
								placeholder='Add a comment'
							/>
							<button onClick={addPost}>
								<Send />
							</button>
						</div>
					</>
				) : (
					<p>Loading post...</p> // Loading state
				)}
			</div>
		</div>
	);
}
