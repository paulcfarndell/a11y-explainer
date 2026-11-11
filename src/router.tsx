import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayouts";
import ScanPage from "./pages/ScanPage";
import ResultsPage from "./pages/ResultsPage";
import IssuePage from "./pages/IssuePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <ScanPage />, handle: { title: 'Check your HTML'} },
            { path: 'results', element: <ResultsPage />, handle: { title: 'Results'} },
            { path: 'results/:issueId', element: <IssuePage />, handle: { title: 'Issue detail'} },
            { path: 'about', element: <AboutPage />, handle: { title: 'About'} },
            { path: '*', element: <NotFoundPage />, handle: { title: 'Page not found'} }
        ],
    },
])