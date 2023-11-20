import logo from './logo.svg';
import './App.css';

export const App = () => {
	return React.createElement('div', { className: 'App' }, [
		React.createElement('header', { className: 'App-header' }, [
			React.createElement(
				'img',
				{ src: logo },
				{ className: 'App-logo' },
				{ alt: 'logo' },
			),
			React.createElement('p', [
				'Edit ',
				React.createElement('code', 'src/App.js'),
				'and save to reload.',
			]),
			React.createElement('a', {
				className: 'App-link',
				href: 'https://reactjs.org',
				target: '_blank',
				rel: 'noopener noreferrer',
				children: 'Learn React',
			}),
			React.createElement('div', { children: new Date().getFullYear() }),
		]),
	]);
};
