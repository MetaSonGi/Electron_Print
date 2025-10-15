import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// 안전 가드 + 예제 리스너
const ipc = window.electron?.ipcRenderer;
ipc?.on('main-process-message', (msg: any) => console.log('[main → renderer]', msg));
ipc?.on('pong', (data: any) => console.log('[main pong]', data));
