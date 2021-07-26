import React from 'react';
import HomePage from './components/HomePage'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {routes} from './routes/main'

function App() {
  return (
   
    <>
      <Router>
        <Switch>
          {
            routes.map((item,index)=>(
                <Route path={item.path} exact={item.exact} render={()=> <item.component/>} />
            ))
          }
          <HomePage/>
        </Switch>
      </Router>
    </>

  
    
  );
}

export default App;
