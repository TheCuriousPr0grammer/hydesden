import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import './App.scss'
import Contact from "./contact/Contact";
import Signup from "./signup/Signup";
function App() {
  return (
		<div className="App">
			<Navbar />
			<a href="/auth/google">Go to sign in</a>
			<Signup />
			{/* <Contact /> */}
			<Footer />
		</div>
	);
}

export default App;
