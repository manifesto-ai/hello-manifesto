# Contributing Guide

Thank you for contributing to `hello-manifesto`.

## 1) Local workflow

```bash
pnpm install
pnpm dev
```

When you change `src/domain/hello.mel`:

- Keep changes focused and small.
- Verify behavior quickly in the browser.
- Update docs when user-visible behavior changes.

## 2) Commit guidance

- Use small, focused commits.
- Keep one logical change per commit/PR.

Example commit messages:

- `feat: add derived computation in MEL domain`
- `fix: prevent invalid decrement`

## 3) PR checklist

- [ ] Feature/bug behavior verified in `pnpm dev`
- [ ] No unrelated file churn
- [ ] `README.md` updated for user-visible changes
- [ ] Relevant docs updated (`CONTRIBUTING.md`, etc.)
- [ ] Link to related issue (if any)

## 4) Project boundaries

This repo is intentionally small:

- `src/domain/*` is MEL state modeling logic.
- `src/App.vue` is UI integration and subscription wiring.
- Keep changes beginner-friendly unless intentionally expanding scope.
