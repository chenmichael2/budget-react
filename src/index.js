import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route exact path='/' element={ <App /> } />

      <Route exact path='/login' element= {<Login />}/>
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
