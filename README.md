# Electron_Print

프린터 출력물(라벨 등) 편집기를 목표로 한 Electron + React + Vite 데스크톱 앱 초기 버전입니다.

## 현재 기능
- Konva 캔버스에 사각형·텍스트 추가, 드래그로 이동, 선택·삭제, 선택한 텍스트 수정
- 상태 관리: Zustand (`src/renderer/store/canvasStore.ts`)
- 아직 실제 인쇄(IPC로 프린터 호출)는 구현되지 않았습니다.

## 실행
```bash
npm ci
npm run dev      # 개발 실행
npm run build    # tsc + vite build + electron-builder 설치 파일
```

## 2026-11 수정
- `CanvasStage.tsx`가 존재하지 않는 `../types`를 불러와 `npm run build`(tsc)가 실패하던 문제 → `../type`으로 수정
- 사용하지 않는 변수(`require`, `get`) 제거로 tsc 오류 해결

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
