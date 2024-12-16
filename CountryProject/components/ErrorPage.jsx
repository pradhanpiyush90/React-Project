import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    let error = useRouteError();

    return <h1>Something went wrong {error.status}</h1>
}
