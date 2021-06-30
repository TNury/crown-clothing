// REACT
import React from 'react';
import ReactDOM from 'react-dom';
// REACT ROUTER
import { BrowserRouter } from 'react-router-dom';
// REDUX
import { Provider } from 'react-redux';
import { store, persistor } from './App/Redux/store/store.js';
// REDUX-PERSIST
import { PersistGate } from 'redux-persist/integration/react';
// COMPONENTS
import App from './App/App.jsx';
// TESTING
import reportWebVitals from './App/Test/reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
