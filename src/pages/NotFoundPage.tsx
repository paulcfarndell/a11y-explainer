import { Link } from "react-router";

export default function NotFoundPage(){
    return (
        <div>
            <h1 className="text-3xl font-bold">Page Not Found</h1>
            <Link to="/">Go to the scan page</Link>
        </div>
    )
}