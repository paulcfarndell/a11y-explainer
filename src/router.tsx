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
            { index: true, element: <ScanPage /> },
            { path: 'results', element: <ResultsPage /> },
            { path: 'results/:issueId', element: <IssuePage /> },
            { path: 'about', element: <AboutPage /> },
            { path: '*', element: <NotFoundPage /> }
        ],
    },
])