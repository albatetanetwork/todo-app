import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "Yoga", completed: true },
  { id: "todo-1", name: "Shopping", completed: false },
  { id: "todo-2", name: "Complete Flatiron-school-phase2 project", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);