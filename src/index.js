import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './stroe/index';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Cart from './components/Cart';


const router=createBrowserRouter([
  {
    path: '/',
    element:<RootLayout/>,
    children:[
      {path: '/',element:<App />,children:[]},
      {path:'/cart',element:<Cart/>} 
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
