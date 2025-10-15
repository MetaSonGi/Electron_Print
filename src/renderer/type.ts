export type ShapeType = 'rect' | 'text';

export interface CanvasShapeBase {
  id: string;
  type: ShapeType;
  x: number;
  y: number;
  rotation?: number;
  isSelected?: boolean;
}

export interface RectShape extends CanvasShapeBase {
  type: 'rect';
  width: number;
  height: number;
}

export interface TextShape extends CanvasShapeBase {
  type: 'text';
  text: string;
  fontSize: number;
}

export type CanvasShape = RectShape | TextShape;

export interface CanvasState {
  shapes: CanvasShape[];
  stage: { width: number; height: number };
  selectedId: string | null;
}
