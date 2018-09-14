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

### Release

```
yarn release
```

After that, you can run `npm publish`.


## Example

Learn more at [Commander.js API Documentation](http://tj.github.io/commander.js/).

### Help

Run `yarn build` and `./bin/cli -h`.

```
Usage: cli [options] [command]

Options:

  -v, --version    output the version number
  -h, --help       output usage information

Commands:

  greet [options]  display greeting
```

#### Help for a sub command

Run `./bin/cli greet -h`.

```
Usage: greet [options]

display greeting

Options:

  -n, --your-name <your-name>  the name that I greet
  -e, --good-evening           a greeting in the evening
  -h, --help                   output usage information
```

### Greet command

- `./bin/cli greet`

```
Hello!
```

- `./bin/cli greet --your-name 'Node CLI'`

```
Hello, Node CLI!
```

- `./bin/cli greet --good-evening`

```
Good Evening!
```

- `./bin/cli greet --good-evening --your-name 'Node CLI'`

```
Good Evening, Node CLI!
```


## How it works

### Flow

`yarn build` transpiles the source codes from `src/` to `lib/`.

See `.babelrc`.

### husky & lint-staged

husky provides hooks for git, e.g. pre-commit, pre-push.

lint-staged gives the git staging files to any command.

You can format and lint the source codes with them before they are commited.

See `.huskyrc.json` and `.lintagedrc.json`.

### Prettier & ESLint

Pretiter is a code formatter.

ESLint configurations cover Prettier ones, so they are conflicted.

eslint-config-prettier invalidates the ESLint configurations conflicted with Prettier.

eslint-preset-prettier turns off all rules that are unnecessary or might conflict with Prettier.

eslint-plugin-prettier runs Prettier on ESLint.

See `.prettierrc` and `.eslintrc.json`.

### Jest

Jest is a test runner.

See `jest.config.js`.

## Editor configuration

### VSCode

Install the extensions below, like `ext install <package-name>`.

- flowtype.flow-for-vscode
- dbaeumer.vscode-eslint
- esbenp.prettier-vscode`

See Workspace Settings in VSCode or `.vscode/setting.json`.
