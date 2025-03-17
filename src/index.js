import React from 'react';
import ReactDOM from 'react-dom/client';  
import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/css/App.css'
import AppRouting from './routes/AppRouting';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(<AppRouting/>);