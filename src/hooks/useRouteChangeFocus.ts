import { useEffect, useRef } from "react";
import { useLocation, useMatches } from "react-router";

type RouteHandle = { title?: string }
const SITE_NAME = 'a11y-explainer'

export function useRouteChangeFocus() {
    const { pathname } = useLocation()
    const matches = useMatches()
    const title = (matches.at(-1)?.handle as RouteHandle | undefined)?.title
    const previousPathname = useRef(pathname)

    // Keep the browser tab title in sync with the page
    useEffect(() => {
        document.title = title ? `${title} - ${SITE_NAME}` : SITE_NAME
    }, [title])

    // Move focus to the next pages h1, but only when the path really changes
    useEffect(() => {
        if(previousPathname.current === pathname) return
        previousPathname.current = pathname
        const heading = document.querySelector<HTMLElement>('main h1')
        if(heading) {
            heading.tabIndex = -1
            heading.focus()
        }
    }, [pathname])
}