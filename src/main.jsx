import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import QuickMath from "./pages/QuickMath/QuickMath";
import ChainReaction from "./pages/ChainReaction/ChainReaction";
import Two048 from "./pages/2048/2048";

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
  {
    path: "/2048",
    element: <Two048 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
