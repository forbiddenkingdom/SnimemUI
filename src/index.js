import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createWeb3ReactRoot, Web3ReactProvider} from '@web3-react/core';

import {getLibrary} from './utils/getLibrary';

const NetworkContextName = `${new Date().getTime()}-NETWORK`;
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

ReactDOM.render(
	<Web3ReactProvider getLibrary={getLibrary}>
		<Web3ProviderNetwork getLibrary={getLibrary}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Web3ProviderNetwork>
	</Web3ReactProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
