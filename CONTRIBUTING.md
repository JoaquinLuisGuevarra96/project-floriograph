# Contributing

Thanks for taking the time to contribute to **Floriograph**! This document covers the basic guidelines for contributing.

## Code of Conduct

By contributing to this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).

## Ways of Contributing

Contribution includes but is not limited to the following ways:

- Reporting bugs
- Updating documentation
- Proposing new features
- Outlining tasks
- Submitting code changes

## Instructions Before Contributing

Please read the following instructions before making any contribution to the project:

- Search existing issues and pull requests to avoid duplicate work.
- For anything larger than a small fix, open an issue first so we can agree on the approach before you invest time in a PR.

## Development Setup

```bash
git clone https://github.com/JoaquinLuisGuevarra96/project-floriograph.git
cd project-floriograph
npm install
```

## Branches

Use a short, prefixed, kebab-case name. An example is: `chore/init-setup`. Below is a table of official prefixes for branch naming.

| Prefix      | Purpose                            |
| ----------- | ---------------------------------- |
| `feat/`     | New feature                        |
| `fix/`      | Bug fix                            |
| `chore/`    | Tooling, dependencies, maintenance |
| `docs/`     | Documentation only                 |
| `refactor/` | Behaviour-preserving code change   |
| `test/`     | Tests only                         |

## Commits

This project follows [Conventional Commits](https://www.conventionalcommits.org/). The subject line should be kept under ~72 characters and in the imperative mood.

The format of commits is as follows:

```text
<type>(<optional scope>): <short description>

<optional body>

<optional footer>
```

Here are some examples of commits:

```text
feat(auth): add token refresh endpoint
fix(parser): handle trailing commas in arrays
chore: initialise repository scaffolding
```

## Changes and Forks

1. Fork the repository and create your branch from `main`.
2. Make your changes, keeping commits focused and reviewable.
3. Add or update tests for any behaviour change.
4. Run the full check suite locally (lint, format, tests).
5. Update documentation if the change affects public behaviour.
6. Open a pull request against `main`.

## Pull Requests

A good pull request observes the following properties:

- Has a descriptive title following the commit convention
- Explains **what** changed and **why**
- Links the relevant issue (`Closes #123`)
- Includes screenshots or output for user-visible changes
- Passes CI

Draft pull requests are welcome for early feedback.

## Review Process

- A maintainer will review as soon as time allows.
- Address feedback with additional commits; we'll squash on merge.
- Reviews are about the code, not the person — and the same applies in reverse.

## Reporting Bugs

Include:

- What you expected to happen
- What actually happened
- Steps to reproduce
- Environment details (OS, runtime version, dependency versions)
- Relevant logs or error output

## Security Issues

Do **not** open a public issue for security vulnerabilities. See
[SECURITY.md](SECURITY.md).
