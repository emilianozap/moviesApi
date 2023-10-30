import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import store from "./redux/store.js";
import { Provider } from 'react-redux'
import { GlobalStyles } from './styles/GlobalStyled.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyles />
      <App />
    </Provider>
);