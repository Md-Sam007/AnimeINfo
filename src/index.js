import react from 'react';
import {useState} from 'react';
import ReactDOM  from 'react-dom/client';
import {createBrowserRouter,RouterProvider,}from 'react-router-dom';
import App from './components/App';
import Info from "./components/info";



const router=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        
       
    },
    {
        path:"/info",
        element:<Info
        />
    }
])



const root=ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <RouterProvider router={router}/>
);

