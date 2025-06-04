import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Privacy from "./components/Privacy/Privacy";
import FAQ from "./components/Privacy/FAQ";
function App() {
	const Layout = () => {
		return (
			<div className='appLayout'>
				<div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
					<Navbar />
				</div>
				<Outlet />
			</div>
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

				// { path: "/", element: <CoverPage /> },
				// { path: "/contact", element: <Contact /> },
				// { path: "/stoneDetails/:id", element: <ProductDetails /> },
				// { path: "/availableStones", element: <Stones /> },
				// { path: "/about", element: <About /> },
				// { path: "/get_in_touch", element: <UserInfo /> },
				// { path: "/upload", element: <Addproduct /> },
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
