import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { bootstrap } from 'safetest/react';

const rootElement = document.getElementById("root");
const element = <App />;
const isDev = process.env.NODE_ENV !== 'production';

bootstrap({
  element,
  render: (element) => ReactDOM.createRoot(rootElement!).render(element),

  // Webpack:
  webpackContext: isDev && import.meta.webpackContext('.', {
    recursive: true,
    regExp: /\.safetest$/,
    mode: 'lazy'
 })
});
