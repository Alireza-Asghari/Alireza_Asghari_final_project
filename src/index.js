import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Provider} from 'react-redux'
/*import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store' */
import store from './redux/store'


ReactDOM.render(
 
 <Provider store={store}>

   <App />
  
</Provider>
,
     
  document.getElementById('root')
);

