import logo from './logo.svg'; // декларативный
import './App.css'; // декларативный

export const App = () => {
	// императивный
	return (
		// декларативный от сюда
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div>{new Date().getFullYear()}</div>
			</header>
		</div>
	); // до сюда
};
