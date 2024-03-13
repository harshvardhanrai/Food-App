import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contacts from './components/Contacts';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


// Composing Components

const AppLayout = () => {
  return (
    <React.Fragment>
    <Header />
    <Outlet />
    </React.Fragment>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contacts",
      element: <Contacts />
    },
    { path: "/restaurants/:resID", // This is Dynamic Routing
      element: <RestaurantMenu />,
    }],
      errorElement: <Error />
    }
  ]
  
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);