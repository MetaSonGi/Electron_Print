import './App.css';
import Toolbar from './components/Toolbar';
import CanvasStage from './components/CanvasStage';

export default function App() {
  return (
    <div style={{ maxWidth: 980, margin: '24px auto', padding: '0 16px 40px' }}>
      <h1>Canvas + Zustand + IPC ✅</h1>
      <Toolbar />
      <CanvasStage />
      <small>빈 공간 클릭: 선택 해제 · 도형은 드래그 가능</small>
    </div>
  );
}
