import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function renderApp(element) {
  console.log('🔥 React render invoked', element);
  const root = ReactDOM.createRoot(element);
  root.render(<App />);
  return root;
}

// expose cho Liferay
window.ReactHelloWorldApp = {
  render: renderApp
};
