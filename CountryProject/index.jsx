import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

/* *** Depricated **** */

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />,
//             },
//             {
//                 path: "/:country",
//                 element: <CountryDetails />,
//             }
//         ]
//     },
// ]);

const router = <BrowserRouter future={{ v7_startTransition: true }}>
    <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/:country" element={<CountryDetails />} />
        </Route>
    </Routes>
</BrowserRouter>



const root = createRoot(document.querySelector("#root"));

root.render(router);