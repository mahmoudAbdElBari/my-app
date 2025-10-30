import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//for multipages
//1.import the router
import {
createBrowserRouter,
RouterProvider,
}from "react-router-dom";

//2.import the wanted export pages want to show.
import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import Javascript from './pages/javascript';

//3.show the imported page using
//  its path and element name
const router = createBrowserRouter([
{
  path: "/",
  element: <Home/>,
  errorElement: <h1>Soooooory</h1>
},
{
  path: "/html",
  element: <Html/>,
  errorElement: <h1>Soooooory</h1>
},
{
  path: "/css",
  element: <Css/>,
  errorElement: <h1>Soooooory</h1>
},
{
  path: "/java",
  element: <Javascript/>,
  errorElement: <h1>Soooooory</h1>
}
])
//4.change the strictmode to router provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);


