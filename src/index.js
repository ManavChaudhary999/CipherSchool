import React from 'react';
import {createRoot} from "react-dom/client";

import "./global.styles.css";
import ThemeProvider from './components/ThemeProvider';
import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);