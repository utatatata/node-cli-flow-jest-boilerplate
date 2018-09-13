node-cli-flow-jest-boilerplate
==============================

A node command line interface application boilerplate with Flow & Jest


## Requirement

- Node v10.10.0 or later
- Yarn


## Installation

Clone this repository and run `yarn install` in the project root.


## Usage

### Build

```
yarn build
```

Outputed into `lib/`.

### Test

```
yarn test
```

### Coverage

```
yarn coverage
```

Open `coverage/lcov-report/index.html` in a browser.


## How it works

### Flow

`yarn build` transpiles the source codes from `src/` to `lib/`.

See `.babelrc`.

### husky & lint-staged

husky provides hooks for git, e.g. pre-commit, pre-push.

lint-staged gives the git staging files to any command.

You can format and lint the source codes with them before they are commited.

See `.huskyrc.json` and `.lintstagedrc.json`.

### Prettier & ESLint

Pretiter is a code formatter.

ESLint configurations cover Prettier ones, so they are conflicted.

eslint-config-prettier invalidates the ESLint configurations conflicted with Prettier.

eslint-preset-prettier turns off all rules that are unnecessary or might conflict with Prettier.

eslint-plugin-prettier runs Prettier on ESLint.

See `.prettierrc` and `.eslintrc.json`.

### Jest(ts-jest)

Jest is a test runner.

See `jest.config.js`.

## Editor configuration

### VSCode

Install the extensions below.

- prettier-vscode
- eslint

Adding these settings for VSCode.

```
{
    "[javascript]": {
        "editor.formatOnSave": true
    },
    "[json]": {
        "editor.formatOnSave": true
    }
}
```

If Prettier has been installed either local or global and `editor.formatOnSave` is true, Prettier is run automatically on save and formats your source code.

`[javascript]` means those settings is valid only when the editing file type is JavaScript.


