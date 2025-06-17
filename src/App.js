import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NewEntries from "./pages/Entries/New-Entries";
import Login from "./pages/Login&Register/Login";
import Register from "./pages/Login&Register/Register";
import Privacy from "./components/Privacy/Privacy";
import FAQ from "./components/Privacy/FAQ";
import MyEntries from "./pages/Entries/My-Entries";
import Footer from "./components/footer/Footer";
import Comments from "./pages/Entries/Comments";
import { AuthContect } from "./pages/helpers/AuthContect";
import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [authState, setAuthState] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			setAuthState(true);
		}
	}, []);

	const Layout = () => {
		return (
			<AuthContect.Provider value={{ authState, setAuthState }}>
				<div className='appLayout'>
					<div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
						<Navbar />
					</div>
					<Outlet />
					<Footer />
				</div>
			</AuthContect.Provider>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ path: "/about", element: <About /> },
				{ path: "/", element: <Home /> },
				{ path: "/privacy", element: <Privacy /> },
				{ path: "/faq", element: <FAQ /> },
				{ path: "/new-entry", element: <NewEntries /> },
				{ path: "/my-entries", element: <MyEntries /> },
				{ path: "/login", element: <Login /> },
				{ path: "/register", element: <Register /> },
				{ path: "/comments/:id", element: <Comments /> },
			],
		},
	]);
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
