import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./store";
import {Provider} from "react-redux";
import {AppProvider} from "./features/context"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppProvider>
          <Provider store={store}>
              <App />
          </Provider>
      </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log card-body-results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
