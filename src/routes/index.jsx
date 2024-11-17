import { Children } from "react";
import HomeTemplate from "../_pages/HomeTemplate";
import HomePage from "../_pages/HomeTemplate/HomePage";
import AboutPage from "../_pages/HomeTemplate/AboutPage";
import ListMovie from "../_pages/HomeTemplate/ListMoviePage";
import AdminTemplate from "../_pages/AdminTemplate";
import DashboardPage from "../_pages/AdminTemplate/DashboardPage";
import AdduserPage from "../_pages/AdminTemplate/AdduserPage";
import Authpage from "../_pages/AdminTemplate/Authpage";
import { Route } from "react-router-dom";
import ShoppingPhonePage from "../_pages/HomeTemplate/ShoppingPhonePage"

const routes = [
    {
        path: "",
        element: HomeTemplate,
        children: [
            {
                path: "",
                element: HomePage
            },
            {
                path: "about",
                element: AboutPage
            },
            {
                path: "list-movie",
                element: ListMovie
            },
            {
                path: "shopping-phone",
                element: ShoppingPhonePage,
            }
        ]
    },
    {
        path: "admin",
        element: AdminTemplate,
        children: [
            {
                path: "dashboard",
                element: DashboardPage,
            },
            {
                path: "add-user",
                element: AdduserPage,
            },
        ],
    },
    {
        path: "auth",
        element: Authpage,
    },
];

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.children) {
            return (
                <Route key={route.path} path={route.path} element={<route.element/>}>
                    {route.children.map((item) => (
                        <Route key={item.path} path={item.path} element={<item.element />} />
                    ))}
                </Route>
            )
        }else {
            return <Route key={route.path} path={route.path} element={<route.element/>}/>
        }
    })
}
export default renderRoutes;