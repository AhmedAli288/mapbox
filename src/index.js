import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/main.css';
import './Styles/footerStyles.css';
import './Styles/headerStyles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {store} from './Redux/store/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider> 
    </BrowserRouter> 
</React.StrictMode>
   


);

reportWebVitals();
