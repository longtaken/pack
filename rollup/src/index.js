import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return (
		<div>
			<p>React here! rollup</p>
		</div>
	);
};

console.log('success');

ReactDOM.render(<App />, document.getElementById('app'));
