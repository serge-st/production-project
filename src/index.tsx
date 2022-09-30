import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeProvider from './theme/ThemeProvider';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    rootElement
);