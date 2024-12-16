import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

const AppContainer = () => {

    return (
        <ThemeProvider>
            <Header />
            <Outlet />
        </ThemeProvider>
    )
}

export default AppContainer;