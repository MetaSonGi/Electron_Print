import { Stage, Layer, Rect, Text } from 'react-konva';
import { useCanvasStore } from '../store/canvasStore';
import type { CanvasShape } from '../types';

export default function CanvasStage() {
  const { shapes, stage, moveShape, select, selectedId } = useCanvasStore();

  const renderShape = (sh: CanvasShape) => {
    switch (sh.type) {
      case 'rect':
        return (
          <Rect
            key={sh.id}
            x={sh.x}
            y={sh.y}
            width={sh.width}
            height={sh.height}
            cornerRadius={8}
            fill={selectedId === sh.id ? '#9ecbff' : '#cfd8dc'}
            draggable
            onDragEnd={(e) => moveShape(sh.id, e.target.x(), e.target.y())}
            onClick={() => select(sh.id)}
          />
        );
      case 'text':
        return (
          <Text
            key={sh.id}
            x={sh.x}
            y={sh.y}
            text={sh.text}
            fontSize={sh.fontSize}
            draggable
            fill={selectedId === sh.id ? '#0d47a1' : '#263238'}
            onDragEnd={(e) => moveShape(sh.id, e.target.x(), e.target.y())}
            onClick={() => select(sh.id)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="canvas-wrap">
      <Stage
        width={stage.width}
        height={stage.height}
        onMouseDown={(e) => {
          // Stage를 클릭하면 선택 해제
          if (e.target === e.target.getStage()) select(null);
        }}
        style={{ border: '1px solid #eee', borderRadius: 8, background: '#fafafa' }}>
        <Layer>{shapes.map(renderShape)}</Layer>
      </Stage>
    </div>
  );
}
