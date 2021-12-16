import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import 'Assets/styles/global.scss';
import { store, persistor } from 'Http/Redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// ReactDOM.render(
// 	<React.StrictMode>
// 		<Routes />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );
ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<React.StrictMode>
				<Routes />
			</React.StrictMode>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
reportWebVitals();
