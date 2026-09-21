# project-floriograph

Floriograph is a web application for flower enthusiasts. Design elaborate bouquets that convey any message you want.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

## Table of contents

- [Overview](#overview)
- [Getting started](#getting-started)
- [Development](#development)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

Floriograph is a web application for flower enthusiasts. Design elaborate bouquets that convey any message you want.

## Getting started

Ensure [Node.js](https://nodejs.org/) `>= 20.19` is installed, then:

```bash
git clone https://github.com/JoaquinLuisGuevarra96/project-floriograph.git
cd project-floriograph

npm install
npm run dev
```

`npm run dev` starts the development server; open the printed URL in your browser.

## Development

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the development server         |
| `npm run build`        | Build the app for production         |
| `npm run preview`      | Preview the production build locally |
| `npm run check`        | Typecheck the project                |
| `npm run lint`         | Lint the source                      |
| `npm run format`       | Format the source                    |
| `npm run format:check` | Verify formatting without writing    |
| `npm run test`         | Run the test suite once              |
| `npm run test:watch`   | Run the test suite in watch mode     |

## Project structure

```
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE/
├── .vscode/
│   └── extensions.json
├── public/
│   └── favicon.svg
├── src/
│   ├── test/
│   ├── App.svelte
│   ├── App.svelte.test.ts
│   ├── app.css
│   └── main.ts
├── .editorconfig
├── .gitignore
├── .prettierignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── eslint.config.js
├── index.html
├── LICENSE.md
├── package.json
├── prettier.config.js
├── README.md
├── SECURITY.md
├── svelte.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines. By contributing, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

Distributed under the [MIT License](LICENSE.md).
