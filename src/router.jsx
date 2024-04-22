import {createBrowserRouter} from "react-router-dom";

import {Layout} from "./components/layout/component.jsx";
import {RestaurantsPage} from "./pages/restaurants.jsx";
import {MainPage} from "./pages/main.jsx";
import {Restaurant} from "./components/restaurant/component.jsx";
import {Reviews as ReviewsContainer} from "./components/reviews/component.jsx";
import {MenuContainer} from "./components/menu/container.jsx";
import {DishPage} from "./pages/dish/dish.jsx";
import {AboutUs} from "./pages/about-us.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <MainPage/>,
            },
            {
                path: '/restaurants',
                element: <RestaurantsPage/>,
                children: [
                    {
                        path: ':restaurantId',
                        element: <Restaurant/>,
                        children: [
                            {
                                index: true,
                                element: <MenuContainer/>
                            },
                            {
                                path: 'menu',
                                element: <MenuContainer/>,
                            },
                            {
                                path: 'reviews',
                                element: <ReviewsContainer/>,
                            },
                        ]
                    }
                ]
            },
            {
                path: '/dish/:dishId',
                element: <DishPage/>,
            },
            {
                path: '/about-us',
                element: <AboutUs/>
            }
        ]
    },
])