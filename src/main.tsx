import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotWorkingSuspense } from "./NotWorkingSuspense.tsx";
import { SleepSuspense } from "./SleepSuspense.tsx";
import { UseSuspense } from "./UseSuspense.tsx";
import { ErrorSuspense } from "./ErrorSuspense.tsx";
import { ReactQuerySuspense } from "./ReactQuerySuspense.tsx";
import { ConditionalUseSuspense } from "./ConditionalUseSuspense.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "sleep", element: <SleepSuspense /> },
      { path: "not-working", element: <NotWorkingSuspense /> },
      { path: "use", element: <UseSuspense /> },
      { path: "error", element: <ErrorSuspense /> },
      { path: "rq", element: <ReactQuerySuspense /> },
      { path: "conditional", element: <ConditionalUseSuspense /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
