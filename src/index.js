import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const bodyToggle = () => {
	const color = ['#AED6F1', '#0EBFE9', '#0EBFE9', '#0EBFE9', '#009ACD', '#009ACD', '#009ACD', '#AED6F1'];
	let i = 0;
	setInterval(function () {
		document.body.style.backgroundColor = color[i];
		i += 1
		if (i === color.length) {
			i = 0;
		}
	}, 4000)

}
bodyToggle();
ReactDOM.render(<App />, document.getElementById('root'));
