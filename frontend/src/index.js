import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Route from './route/Router';
import ContextProvider from './contexts/ContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <RouterProvider router={Route}/>
  </ContextProvider>
);



