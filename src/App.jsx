import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'

import Login from './component/Login';
import Mainlayout from './Layout/Mainlayout';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Users from './component/Users';
import Registation from './component/Registation';
import Logregnav from './Layout/logregnav';
import Reglayout from './Layout/Reglayout';
import Forgotpass from './component/Forgotpass';
import Forgotlayout from './Layout/forgotlayout';
import Allcountrydeatiles from './component/country/Allcountrydeatiles';
import Countryfulldetalis from './component/country/Countryfulldetalis';
import Errorpage from './component/Errorpage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/allcountry",
          element: <Allcountrydeatiles />,
          loader: async () => {
          return fetch(`https://restcountries.com/v3.1/all`);
          },
        },
        {
          path: "/Countryfulldetalis/:code",
          element: <Countryfulldetalis />,
          loader: async ({ params }) => fetch(`https://restcountries.com/v3.1/alpha/${params.code}`),
        },
      ],
    },
    {
      path: "/login",
      element: <Logregnav />,
      children:[
        {
          path: "/login",
          element: <Login />,
        },
      ]
    },
    {
      path: "/registation",
      element: <Reglayout />,
      children:[
        {
          path: "/registation",
          element: <Registation />,
        }, 
      ]
    },
    {
      path: "/forgot",
      element: <Forgotlayout />,
      children:[
        {
          path: "/forgot",
          element: <Forgotpass />,
        }, 
      ]
    },
    {
      path: "*",
      element: <Errorpage />,
    },
    
    
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
