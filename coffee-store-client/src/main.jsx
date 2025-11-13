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
import Users from './components/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index: true,
        loader: ()=> fetch('https://coffee-store-server-lac-psi-86.vercel.app/coffees'),
        element: <Home/>
      },
      {
        path: 'addCoffee',
        element: <AddCoffee/>
      },
      {
        path: 'coffee/:id',
        loader: ({params})=> fetch(`https://coffee-store-server-lac-psi-86.vercel.app/coffees/${params.id}`),
        element: <CoffeeDetails/>
      },
      {
        path: 'UpdateCoffee/:id',
        loader: ({params})=> fetch(`https://coffee-store-server-lac-psi-86.vercel.app/coffees/${params.id}`),
        element: <UpdateCoffee/>
      },
      {
        path: 'signin',
        element: <Signin/>
      },
      {
        path: 'signup',
        element: <Signup/>
      },
      {
        path: 'users',
        loader: () => fetch('https://coffee-store-server-lac-psi-86.vercel.app/users'),
        element: <Users/>
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
