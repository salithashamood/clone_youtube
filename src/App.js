import './App.css';
import React, { useEffect, useState } from 'react';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';

function App() {

    const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

    // const [theme] = useState(isBrowserDefaultDark() ? 'light' : 'light');
    const [theme] = useState(isBrowserDefaultDark() ? 'dark' : 'light');

    // const toggleTheme = () => {
    //     if (theme === 'light') {
    //         setTheme('dark');
    //     } else {
    //         setTheme('light');
    //     }
    // };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <BrowserRouter>
            <div className={`${theme}`} >
                {/*<button onClick={toggleTheme}>Toggle Theme</button>*/}
                <HomePage theme = {theme}/>

            </div>
        </BrowserRouter>

    );
}

export default App;
