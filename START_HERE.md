# Onboarding checklist for first run

This project is the starting route for learning Manifesto through `hello-manifesto`.
Follow these steps in order to reduce setup and behavior issues.

## 1. Environment check

- Verify `node -v` (LTS)
- Verify `pnpm -v`
- Confirm `origin` is `manifesto-ai/hello-manifesto` with `git remote -v`

```bash
pnpm install
pnpm dev
```

## 2. Understand runtime behavior

1. Inspect `src/domain/hello.mel` for `counter`, `doubled`, and `canDecrement`.
2. Confirm `App.vue` uses `getSnapshot()` for initial UI values.
3. Verify `subscribe(...)` binds `counter`, `doubled`, and `canDecrement`.

## 3. First experiments (recommended order)

- Change the initial value of `hello` and confirm the UI updates.
- Add a new action that increases the counter by 1 and verify behavior.
- Add one new computed value such as `isEven = mod(counter, 2) == 0`.
- Add an action that increments by 2.

## 4. Closing checklist

- Confirm the app runs with `pnpm dev`.
- Update documentation if user-facing behavior changes.
- Summarize the change in a short PR description.
- Practice filing an issue using the issue templates.

This is the intended onboarding path. Next, extend the project with larger domains and realistic user flows.
