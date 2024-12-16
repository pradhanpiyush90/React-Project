import Search from "./Search";
import CountryList from "./CountryList";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
    let [query, setQuery] = useState("");
    const [isDark] = useTheme();

    return (
        <main className={`${isDark ? 'dark' : ''}`}>
            <Search setQuery={setQuery} />
            <CountryList query={query} />
        </main>
    )
}