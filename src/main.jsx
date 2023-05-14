import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import QuickMath from "./pages/QuickMath/QuickMath";
import ChainReaction from "./pages/ChainReaction/ChainReaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tictactoe",
    element: <TicTacToe />,
  },
  {
    path: "/quickmath",
    element: <QuickMath />,
  },
  {
    path: "/chainreaction",
    element: <ChainReaction />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
