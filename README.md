# hello-manifesto

![hello-manifesto banner](public/banner.png)

Welcome to `hello-manifesto`.
This repository is an onboarding project for beginners who want to try [Manifesto MEL](https://github.com/manifesto-ai/manifesto) with a minimal Vue 3 app.

## Why this project exists

- Learn the basic Manifesto flow with a tiny example.
- Understand how MEL domain, runtime snapshot, and UI subscriptions work together.
- Practice making small changes before moving to real-world MEL projects.

## 1) Prerequisites

- Node.js (LTS)
- `pnpm` (recommended)

## 2) Get started

```bash
# 1. clone
git clone https://github.com/manifesto-ai/hello-manifesto.git
cd hello-manifesto

# 2. install
pnpm install

# 3. run
pnpm dev
```

Then open the local dev URL (usually `http://localhost:5173`).

### Useful scripts

- `pnpm dev` : run local dev server
- `pnpm build` : type-check + production build
- `pnpm preview` : preview build artifacts locally

## 3) Project structure

```text
.
├─ src/
│  ├─ App.vue                  # Vue UI + Manifesto snapshot binding
│  ├─ main.ts                  # App entry
│  ├─ style.css                # Styles
│  └─ domain/
│     ├─ hello.mel             # MEL domain
│     └─ hello.domain.ts       # Manual generated typings
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  │  ├─ bug_report.md
│  │  └─ feature_request.md
│  └─ pull_request_template.md  # PR checklist
├─ CONTRIBUTING.md            # Onboarding contributor guide
├─ README.md
└─ package.json
```

## 4) How this project works

### Step 1. Define your domain in MEL

`src/domain/hello.mel`:

```mel
domain HelloDomain {
    state {
        hello: string = "Hello, World!"
        counter: number = 0
    }

    computed doubled = mul(counter, 2)
    computed canDecrement = gt(counter, 0)

    action increment() {
        onceIntent {
            patch counter = add(counter, 1)
        }
    }

    action decrement() available when canDecrement {
        onceIntent {
            patch counter = sub(counter, 1)
        }
    }
}
```

### Step 2. Activate runtime and read the first snapshot

In `App.vue`, runtime is created and activated, and initial snapshot values are read from `getSnapshot()`.

### Step 3. Subscribe and keep UI in sync

When state changes, subscriptions update Vue refs (`counter`, `doubled`, `canDecrement`) automatically.

### Step 4. Dispatch actions from UI events

`increment` / `decrement` are dispatched via `dispatchAsync(createIntent(...))`.

## 5) Onboarding checklist (do these first)

1. Run `pnpm dev` and verify counter increment/decrement works.
2. Change `hello` initial text in `hello.mel`.
3. Add one computed value (for example `isEven = mod(counter, 2) == 0`).
4. Add an action that adds 2 at once.
5. Open a PR using the template and describe what changed.

## 6) Troubleshooting

- If `pnpm install` fails, confirm Node.js and pnpm versions.
- If UI does not update after dispatch, recheck subscriptions in `App.vue`.

## 7) Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for local workflow and PR checklist.
