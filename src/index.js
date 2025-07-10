import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./login";
import GetVideos from "./videos";
import TableContent from './tableContent';
import Test from './test';

const router = createBrowserRouter([
  {
    path: '/',
    element : <Login/>,
  },
  // {
  //   path: '/datatable',
  //   element: <DataTable />,
  // },
  {
    path: '/videos/:id',
    element: <GetVideos />,
  },
  {
    path: '/admin',
    element: <TableContent />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);
