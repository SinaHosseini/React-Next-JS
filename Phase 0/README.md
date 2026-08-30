# NPM Commands Cheat Sheet

## Install a package

```bash
npm install <package>
```

Installs a package as a local project dependency.

---

## Install a development package

```bash
npm install -D <package>
```

or:

```bash
npm install --save-dev <package>
```

Installs the package as a `devDependency`.

---

## Install globally

```bash
npm install -g <package>
```

Installs a package globally on your system. Use this only when necessary.

---

## Uninstall a package

```bash
npm uninstall <package>
```

Removes a package from the project.

---

## Run a script

```bash
npm run <script>
```

Runs a script defined in `package.json`.

Example:

```bash
npm run dev
npm run build
npm run start
```

# NPM, Vite, ESLint and Prettier Guide

A quick guide for creating a JavaScript project and setting up development tools.

---

## 1. Create a Node.js Project

```bash
npm init -y
```

Creates a `package.json` file with default settings.

---

## 2. Run a Custom Script

If you have a script named `hello` inside `package.json`:

```bash
npm run hello
```

Example:

```json
{
  "scripts": {
    "hello": "echo Hello World"
  }
}
```

---

# Vite

## 3. Create a New Vite Project

```bash
npm create vite@latest my-vite-app -- --template vanilla
```

Creates a new Vite project named `my-vite-app` using the Vanilla JavaScript template.

---

## 4. Create a Vite Project in the Current Directory

```bash
npm create vite@latest . -- --template vanilla
```

Creates the Vite project in the current directory.

---

## 5. Install Dependencies

After creating or cloning a project:

```bash
npm install
```

Installs all dependencies defined in `package.json`.

---

## 6. Start the Development Server

```bash
npm run dev
```

Starts the Vite development server.

---

## 7. Build the Project

```bash
npm run build
```

Creates an optimized production build.

The generated files are usually placed in:

```text
dist/
```

---

## 8. Preview the Production Build

```bash
npm run preview
```

Runs a local server to preview the production build.

---

# ESLint and Prettier

## 9. Install ESLint and Prettier

```bash
npm install -D eslint prettier eslint-config-prettier
```

Installs:

* `eslint` → Finds code quality problems.
* `prettier` → Formats code.
* `eslint-config-prettier` → Prevents conflicts between ESLint and Prettier.

---

## 10. Install ESLint JavaScript Configuration

```bash
npm install -D @eslint/js
```

Provides the recommended JavaScript configuration for modern ESLint.

---

## 11. Install Globals

```bash
npm install -D globals
```

Provides definitions for global variables such as:

* `window`
* `document`
* `console`

---

## 12. Run ESLint Manually

```bash
npx eslint src
```

Runs ESLint on the `src` directory.

---

## 13. Run the Lint Script

```bash
npm run lint
```

Runs the `lint` script defined in `package.json`.

Example:

```json
{
  "scripts": {
    "lint": "eslint src"
  }
}
```

---

## 14. Run the Format Script

```bash
npm run format
```

Runs the formatting script defined in `package.json`.

Example:

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

---

# Typical Workflow

```bash
# Create a project
npm create vite@latest my-vite-app -- --template vanilla

# Go to the project
cd my-vite-app

# Install dependencies
npm install

# Start development
npm run dev

# Check code
npm run lint

# Format code
npm run format

# Create production build
npm run build

# Preview production build
npm run preview
```

## Summary

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm init -y`     | Create a Node.js project     |
| `npm install`     | Install project dependencies |
| `npm run dev`     | Start development server     |
| `npm run build`   | Create production build      |
| `npm run preview` | Preview production build     |
| `npm run lint`    | Run ESLint                   |
| `npm run format`  | Format code with Prettier    |
| `npx eslint src`  | Run ESLint manually          |
