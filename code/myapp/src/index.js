// import React from 'react';
// import { ReactDOM } from 'react';
// import { createRoot } from 'react-dom/client'

// // createRoot(document.getElementById('root')).render(<div>234</div>);

// import App from './03-hooks/14-自訂義hooks'

// createRoot(document.getElementById('root')).render(<App></App>)

// // react18里面已经弃用了ReactDOM.render,不过浏览器依旧能正常运行ReactDOM.render，react18里用下面方法构建dom。
// // import {createRoot} from "react-dom/client";

// // const container=document.getElementById("root")
// // const root=createRoot(container)
// // root.render(<Element></Element>)
// // jsx == js + xml


//練習React route 
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./04-route/index.css";
import Root, { loader as rootLoader, action as rootAction } from "./04-route/routes/root"
import ErrorPage from "./04-route/error-page";
import Contact from "./04-route/contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        Children: [
            {
                path: "contacts/:contactId",
                element: <Contact />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);