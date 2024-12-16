import { useTheme } from "../hooks/useTheme";

const Header = () => {

    const [isDark, setTheme] = useTheme();

    return <header className={`header-container ${isDark ? 'dark' : ''}`}>
        <div className="header-content">
            <h2>Where in the world?</h2>
            <p className="theme" onClick={() => {
                setTheme(!isDark);
                localStorage.setItem("isDarkMode", !isDark);
            }}>
                <i className={`fa-regular fa-${isDark ? 'sun' : 'moon'}`}></i>
                &nbsp;&nbsp;<span>{isDark ? 'LightMode' : 'DarkMode'}</span>
            </p>
        </div>
    </header>
}

export default Header;