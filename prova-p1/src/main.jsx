import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from './routes/Home';
import NewPost from './routes/NewPost';
import Detail from './routes/Detail';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/${post.id}",
        element: <Detail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
