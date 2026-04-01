# Golden Path: First-run Manifesto checklist

이 프로젝트는 `hello-manifesto`를 시작으로 Manifesto를 익히기 위한 **첫 사용자를 위한 정해진 루트**입니다.
아래 순서를 그대로 따라오면 실패 지점을 빠르게 줄일 수 있습니다.

## 1. 환경 확인

- `node -v`로 최근 LTS 실행
- `pnpm -v` 확인
- `git remote -v`에서 `origin`이 `manifesto-ai/hello-manifesto`인지 확인

```bash
pnpm install
pnpm dev
```

## 2. 런타임 이해

1. `src/domain/hello.mel`에서 `counter`, `doubled`, `canDecrement`를 확인한다.
2. `App.vue`에서 `getSnapshot()` 값이 UI 초기값으로 반영되는지 본다.
3. `subscribe(...)`가 `counter`, `doubled`, `canDecrement`를 각각 바인딩하는지 본다.

## 3. 첫 실험 (권장 순서)

- 인사말(`hello`) 기본값만 바꿔서 화면 변화 확인
- `counter`를 1 증가 버튼을 추가하는 새 액션 작성 후 동작 확인
- `isEven` 같은 새 computed를 하나 추가
- `add by 2` 액션 추가

## 4. 마무리 체크리스트

- 앱이 빌드/실행 가능한 상태인지 확인(`pnpm dev`)
- README 수정이 필요한지 점검
- 변경 내용을 짧게 PR 설명에 정리
- 이슈 템플릿으로 버그/개선사항 제출 연습

이 가이드는 Golden Path의 끝이 아니라 시작점입니다. 다음 단계는 더 큰 도메인과 실제 유저 플로우로 확장하면 됩니다.
