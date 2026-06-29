# NPM and Installing External Node Modules

## Overview
npm (Node Package Manager) is the default package manager for Node.js. It helps you install, manage, and share JavaScript packages (modules) for your projects. Project metadata and dependency listings are stored in `package.json`; exact installed versions are recorded in `package-lock.json`.

## Quick commands
- `npm init` — create a `package.json` for a new project.
- `npm install <pkg>` — install a package locally and add to `dependencies`.
- `npm install <pkg> --save-dev` — install a development-only package.
- `npm install -g <pkg>` — install a package globally (system-wide CLI tools).
- `npm uninstall <pkg>` — remove a package.
- `npm update` — update installed packages.
- `npx <tool>` — run a CLI from a package without global install.

## What beginners must learn
- How `package.json` works and where dependencies are listed.
- Difference between `dependencies` and `devDependencies`.
- Installing a specific version: `npm install pkg@1.2.3`.
- Using `--save-dev` for build/test tools.
- The role of `package-lock.json` and why you should commit it.
- Running scripts via the `scripts` section: `npm run start`.

## One-time vs repetitive work
- Installing a package into a specific project is usually one-time for that project (until you update or remove it).
- Across multiple projects, you will repeat installs—so installation is repetitive across projects but typically one-time per project.
- Dependency updates and maintenance are ongoing tasks.

## Example
Initialize a project and install Express locally:

```bash
npm init -y
npm install express
```

This adds `express` to `dependencies` in `package.json` and places the code in `node_modules`.

## Tips
- Prefer local installs for project libraries; use global installs only for tools you need system-wide.
- Understand semantic versioning: `^1.2.3` vs `~1.2.3`.
- Commit `package-lock.json` so installs are reproducible.
- Use `npx` for one-off CLI usage without global installs.
