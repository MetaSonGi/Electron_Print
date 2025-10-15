/// <reference types="vite/client" />

declare global {
  interface Window {
    electron?: {
      ipcRenderer: {
        on: (ch: string, listener: (...a: any[]) => void) => void;
        send: (ch: string, ...a: any[]) => void;
        invoke: (ch: string, ...a: any[]) => Promise<any>;
      };
    };
  }
}

export {};
