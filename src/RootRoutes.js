import React from 'react';
import {
    Route, createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import SignIn from './components/scence/SignIn';
import SignUp from './components/scence/SignUp';
import AlertAndNotifications from './components/settings/AlertAndNotifications';
import GettingPaid from './components/settings/GettingPaid';
import Security from './components/settings/Security';
import Shipping from './components/settings/shipping';
import User from './components/settings/User';
import SettingsLayout from './layouts/SettingsLayout';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <SignUp />
    },
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/setting",
        element: <SettingsLayout />,
        children: [
            {
                path: "404",
                element: <NotFoundPage />,
            },
            {
                path: "getting-paid",
                element: <GettingPaid />,
            },
            {
                path: "shipping",
                element: <Shipping />,
            },
            {
                path: "user",
                element: <User />,
            },
            {
                path: "security",
                element: <Security />,
            },
            {
                path: "alert",
                element: <AlertAndNotifications />,
            },

        ],
    },
    // {
    //     path: "*",
    //     element: <NotFoundPage />
    // },
]);

