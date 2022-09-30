import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './styles/index.scss';
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Change Theme</button>

            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;