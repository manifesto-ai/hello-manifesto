# hello-manifesto

![hello-manifesto banner](public/banner.png)

Welcome to `hello-manifesto`.
This repository is the **onboarding project** for first-time [Manifesto](https://github.com/manifesto-ai/core) users.
If this is your first Manifesto project, start here.

## 1) Onboarding goal

By the end of this project, you should be able to:

- define a simple MEL domain
- activate a Manifesto runtime
- bind runtime snapshots to Vue UI
- dispatch intents from UI events
- make one confident feature update and verify it

## 2) Prerequisites

- Node.js (LTS)
- `pnpm` (recommended)

## 3) Get started

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

## 4) Project structure

```text
.
├─ src/
│  ├─ App.vue                  # Vue UI + Manifesto snapshot binding
│  ├─ main.ts                  # App entry
│  ├─ style.css                # Styles
│  └─ domain/
│     ├─ hello.mel             # MEL domain
│     └─ hello.domain.ts       # Manual generated typings
├─ CONTRIBUTING.md            # Onboarding contributor guide
├─ START_HERE.md              # First-run onboarding instructions
├─ README.md
└─ package.json
```

## 5) How this project works

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

### Step 2. Activate runtime and read first snapshot

In `App.vue`, runtime is created and activated, and the initial snapshot is read from `getSnapshot()`.

### Step 3. Subscribe and keep UI in sync

As state changes, subscriptions update Vue refs (`counter`, `doubled`, `canDecrement`).

### Step 4. Dispatch intents from UI events

`increment` / `decrement` are dispatched via `dispatchAsync(createIntent(...))`.

## 6) Onboarding checklist

1. Run `pnpm dev` and confirm the counter and doubled value update correctly.
2. Change the initial `hello` text in `hello.mel` and confirm runtime snapshot updates.
3. Add one computed value (for example `isEven = mod(counter, 2) == 0`).
4. Add one action that increments by 2.
5. Submit your change using the PR template.

## 7) Troubleshooting

- If `pnpm install` fails, confirm Node.js and pnpm versions.
- If UI does not update after dispatch, check subscriptions in `App.vue`.

## 8) Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for workflow and review checklist.

## 9) Next step

See [`START_HERE.md`](START_HERE.md) for the next concrete tasks after this project.
