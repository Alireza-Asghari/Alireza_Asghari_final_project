import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
/*import { persistor, store } from './redux/store' */
import {store,persistor} from './redux/store'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
 
 <Provider store={store}>
   <PersistGate  persistor={persistor}>
      <App />
   </PersistGate>
</Provider>
,  
  document.getElementById('root')
);

