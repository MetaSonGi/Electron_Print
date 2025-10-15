import { useCanvasStore } from '../store/canvasStore';

export default function Toolbar() {
  const { addRect, addText, removeSelected, selectedId, updateText } = useCanvasStore();

  return (
    <div className="toolbar">
      <button onClick={addRect}>사각형 추가</button>
      <button onClick={addText}>텍스트 추가</button>
      <button
        onClick={removeSelected}
        disabled={!selectedId}>
        선택 삭제
      </button>

      {selectedId && (
        <input
          style={{ marginLeft: 12 }}
          placeholder="선택한 텍스트 수정"
          onChange={(e) => updateText(selectedId, e.target.value)}
        />
      )}
    </div>
  );
}
