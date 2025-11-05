import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index: true,
        loader: ()=> fetch('http://localhost:7800/coffees'),
        element: <Home/>
      },
      {
        path: 'addCoffee',
        element: <AddCoffee/>
      },
      {
        path: 'coffee/:id',
        loader: ({params})=> fetch(`http://localhost:7800/coffees/${params.id}`),
        element: <CoffeeDetails/>
      },
      {
        path: 'UpdateCoffee/:id',
        loader: ({params})=> fetch(`http://localhost:7800/coffees/${params.id}`),
        element: <UpdateCoffee/>
      },
      {
        path: 'signin',
        element: <Signin/>
      },
      {
        path: 'signup',
        element: <Signup/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)
