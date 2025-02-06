import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Teachers from "./Teachers.jsx"
import App from "./App.jsx";
import Courses from "./Courses.jsx";
import TeacherProfile from "./Teacherprofile.jsx";
// Router banayein
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <App />,
    },
    {
        path:"/courses",
        element:<Courses />,
    },
    {
        path:"/academies",
        element:<Teachers />,
    },
    {
        path:"/teacherprofile",
        element:<TeacherProfile />,
    }



]);

// Root render karein
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
