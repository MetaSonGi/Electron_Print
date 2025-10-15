import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';

const isDev = !app.isPackaged;
let win: BrowserWindow | null = null;

async function createWindow() {
  win = new BrowserWindow({
    width: 1100,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    title: 'Vite + Electron + React',
  });

  if (isDev) {
    await win.loadURL(process.env.VITE_DEV_SERVER_URL || 'http://localhost:5173');
    win.webContents.openDevTools({ mode: 'detach' });
  } else {
    await win.loadFile(path.join(__dirname, '../index.html'));
  }

  // 테스트: 렌더러로 메시지
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', '👋 hello from main');
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// IPC 핸들러(테스트용)
ipcMain.on('ping', (e, payload) => e.sender.send('pong', { ok: true, echo: payload }));
ipcMain.handle('sum', (_e, a: number, b: number) => a + b);
