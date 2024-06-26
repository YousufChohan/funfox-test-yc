import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import Error from "./routes/Error";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Page2 from "./Page2";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
