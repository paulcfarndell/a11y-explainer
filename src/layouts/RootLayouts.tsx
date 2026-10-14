import { Link, NavLink, Outlet } from 'react-router';

export default function RootLayout() {
    return (
        <>
        <header>
            <Link to="/">a11y-explainer</Link>
            <nav aria-label="main">
                <ul>
                    <li><NavLink to="/">Scan</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>Accessibility explainer</footer>
        </>
    )
}