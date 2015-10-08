import './main.css';
import React from 'react';
import alt from './libs/alt';
import App from './components/App.jsx';
import persist from './libs/persist';

main();

function main () {
	persist(alt, Storage, 'app');
	const app = document.createElement('div');
	document.body.appendChild(app);
	React.render(<App/>, app);
}

