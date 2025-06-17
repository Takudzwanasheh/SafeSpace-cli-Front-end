import React from "react";
import "./faq.scss";
export default function FAQ() {
	const faqs = [
		{
			question: "What is SafeSpace?",
			answer:
				"SafeSpace is a supportive community where individuals can share their experiences and find help for mental health challenges.",
		},
		{
			question: "How can I join the community?",
			answer:
				"You can join by signing up on our website and creating an account. Once registered, you can start sharing and connecting with others.",
		},
		{
			question: "Is my information safe?",
			answer:
				"Yes, we prioritize your privacy and employ strict measures to protect your personal information.",
		},
		{
			question: "Can I share my story anonymously?",
			answer:
				"Yes, you have the option to share your experiences anonymously if you prefer.",
		},
		{
			question: "What should I do if I need immediate help?",
			answer:
				"If you are in crisis or need immediate assistance, please contact a mental health professional or a crisis hotline in your area.",
		},
		{
			question: "How can I contact support?",
			answer:
				"You can reach our support team through the contact form on our website or by emailing us at safespace@gmail.com",
		},
	];
	return (
		<div className='faq-container'>
			<h1>Frequently Asked Questions</h1>
			{faqs.map((faq, index) => (
				<div key={index} className='faq-item'>
					<h2 className='faq-question'>{faq.question}</h2>
					<p className='faq-answer'>{faq.answer}</p>
				</div>
			))}
		</div>
	);
}
