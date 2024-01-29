import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

// imports edit
import EditContact, {
  action as editAction,
} from "./routes/edit";

//imports root router and loader
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";

//Imports error page
import ErrorPage from "./error-page";

//Imports contact
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";

//Imports destroy
import { action as destroyAction } from "./routes/destroy";

//Imports Index
import Index from "./routes/index";


const router = createBrowserRouter([
  {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
          {
            errorElement: <ErrorPage />,
            children: [
              { index: true, element: <Index /> },
              {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
                action: contactAction,
              },
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },    
    ],
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);