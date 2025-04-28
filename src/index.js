import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
//import "font-awesome/css/font-awesome.min.css";
import { ThemeProvider } from './context/ThemeContext';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
