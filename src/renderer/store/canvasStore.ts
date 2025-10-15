import { create } from 'zustand';
import { nanoid } from 'nanoid'; // 설치 안했다면: npm i nanoid
import type { CanvasState, RectShape, TextShape } from '../type';

type Actions = {
  addRect: () => void;
  addText: () => void;
  moveShape: (id: string, x: number, y: number) => void;
  select: (id: string | null) => void;
  updateText: (id: string, text: string) => void;
  removeSelected: () => void;
  clear: () => void;
};

const initial: CanvasState = {
  shapes: [],
  stage: { width: 800, height: 500 },
  selectedId: null,
};

export const useCanvasStore = create<CanvasState & Actions>((set, get) => ({
  ...initial,
  addRect: () =>
    set((s) => {
      const rect: RectShape = {
        id: nanoid(),
        type: 'rect',
        x: 80 + Math.random() * 80,
        y: 60 + Math.random() * 60,
        width: 160,
        height: 100,
      };
      return { shapes: [...s.shapes, rect] };
    }),

  addText: () =>
    set((s) => {
      const text: TextShape = {
        id: nanoid(),
        type: 'text',
        x: 100,
        y: 100,
        text: 'Hello 👋',
        fontSize: 24,
      };
      return { shapes: [...s.shapes, text] };
    }),

  moveShape: (id, x, y) =>
    set((s) => ({
      shapes: s.shapes.map((sh) => (sh.id === id ? { ...sh, x, y } : sh)),
    })),

  select: (id) => set({ selectedId: id }),

  updateText: (id, text) =>
    set((s) => ({
      shapes: s.shapes.map((sh) => (sh.id === id && sh.type === 'text' ? { ...sh, text } : sh)),
    })),

  removeSelected: () =>
    set((s) => ({
      shapes: s.shapes.filter((sh) => sh.id !== s.selectedId),
      selectedId: null,
    })),

  clear: () => set(initial),
}));
