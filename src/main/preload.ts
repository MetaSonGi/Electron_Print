import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    on: (ch: string, cb: (...args: any[]) => void) => ipcRenderer.on(ch, (_e, ...args) => cb(...args)),
    send: (ch: string, ...a: any[]) => ipcRenderer.send(ch, ...a),
    invoke: (ch: string, ...a: any[]) => ipcRenderer.invoke(ch, ...a),
  },
});
