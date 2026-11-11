import { Link, NavLink, Outlet } from 'react-router'
import { useRouteChangeFocus } from '../hooks/useRouteChangeFocus'

const navLinkClass = ({ isActive }: { isActive:boolean }) => `underline underline-offset-4 ${isActive ? 'font-bold' : ''}`

export default function RootLayout() {
    useRouteChangeFocus()

    return (
        <div className="flex min-h-screen flex-col bg-paper text-link">
            <a href="#main" className="sr-only underline focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-paper focus:px-4 focus:py-2">
                Skip to main content    
            </a>
            <header className="border-b border-border bg-surface">
                <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4"></div>
                <Link to="/" className="text-xl font-bold">a11y-explainer</Link>
                <nav aria-label="main">
                    <ul className="flex gap-6">
                        <li><NavLink to="/" className={navLinkClass}>Scan</NavLink></li>
                        <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main id="main" tabIndex={-1} className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
                <Outlet />
            </main>
            <footer className="border-t border-border bg-surface">
                <p className="mx-auto">Accessibility explainer</p>
            </footer>
            
        </div>
    )
}