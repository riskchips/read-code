# read-code

**Author:** Risk Chips

Turn any JavaScript, TypeScript, React, JSX, or TSX codebase into a structured AI-ready JSON knowledge graph.

`read-code` scans a project, understands its structure, extracts functions, classes, components, routes, architecture, dependencies, and generates a portable JSON context that can be consumed by AI systems without repeatedly explaining the project.

---

# Features

## Project Scanning

Scans:

* JavaScript (.js)
* TypeScript (.ts)
* React (.jsx)
* TSX (.tsx)
* JSON (.json)
* Markdown (.md)

Builds:

* Project Tree
* Framework Detection
* Statistics
* Dependency Graph
* Knowledge Graph
* AI Context

---

## JavaScript Analysis

Extracts:

* Imports
* Exports
* Functions
* Classes
* Require Statements

Example:

```js
import express from "express";

export async function login() {}

class UserService {}
```

---

## React Analysis

Extracts:

* Components
* Hooks
* Props

Example:

```jsx
function Navbar({ user }) {
    const [count] = useState(0);

    return <div>{user}</div>;
}
```

---

## TypeScript Analysis

Extracts:

* Interfaces
* Types
* Enums

Example:

```ts
interface User {}

type Role = "admin";

enum Status {
    ACTIVE
}
```

---

## Graph Engine

Builds:

* Dependency Graph
* Call Graph
* Component Graph
* Knowledge Graph

---

## Architecture Analysis

Detects:

* MVC
* Component Based
* Service Layers
* Repository Patterns

---

## Database Detection

Detects:

* MongoDB
* PostgreSQL
* MySQL
* SQLite
* Redis

---

## ORM Detection

Detects:

* Prisma
* Mongoose
* Sequelize
* TypeORM

---

## Authentication Detection

Detects:

* JWT
* Passport
* Auth Libraries

---

## Feature Detection

Detects:

* Authentication
* Dashboard
* Messaging
* Payments
* File Uploads
* Search
* Notifications
* Admin Panels

---

## AI Context Generation

Generates structured project intelligence:

```json
{
  "project": {},
  "frameworks": [],
  "statistics": {},
  "tree": {},
  "analysis": {},
  "graphs": {},
  "analyzers": {}
}
```

Perfect for:

* AI Coding Agents
* Documentation
* Architecture Reviews
* Code Audits
* Project Understanding

---

# Installation

```bash
npm install -g read-code
```

or

```bash
npm install read-code
```

---

# Commands

## Scan Project

```bash
read-code scan
```

Scans the current project.

Automatically saves:

```text
.read-code/latest.json
```

---

## Save Scan Output

```bash
read-code scan --savefile project.json
```

Example:

```bash
read-code scan --savefile output/project.json
```

---

## Compact Output

```bash
read-code scan --compact
```

Produces minified JSON.

---

## Exclude Folders

```bash
read-code scan --exclude tests,docs
```

Skips:

```text
tests/
docs/
```

---

## Combine Multiple Flags

```bash
read-code scan --compact --savefile project.json
```

```bash
read-code scan --exclude tests,docs --savefile project.json
```

```bash
read-code scan --exclude tests,docs --compact --savefile project.json
```

Flags work in any order.

---

## Query Project

```bash
read-code query "what frameworks are used"
```

Examples:

```bash
read-code query "what frameworks are used"

read-code query "show architecture"

read-code query "what routes exist"

read-code query "what features exist"
```

---

## Explain Project

```bash
read-code explain
```

Returns a high-level project summary.

---

## Help

```bash
read-code --help
```

---

# Output Example

```json
{
  "project": {
    "name": "my-app"
  },

  "frameworks": [
    "node",
    "react"
  ],

  "statistics": {
    "files": 127
  },

  "analysis": {
    "functions": [],
    "classes": [],
    "components": []
  },

  "graphs": {},

  "analyzers": {}
}
```

---

# Generated Files

## Automatic Cache

```text
.read-code/
└── latest.json
```

Created automatically after every scan.

---

## Custom Output

```bash
read-code scan --savefile project.json
```

Creates:

```text
project.json
```

---

# Current Roadmap

## Phase 1

* Scanner
* Tree Builder
* Framework Detection
* Statistics

## Phase 2

* JavaScript Parser
* TypeScript Parser
* React Parser

## Phase 3

* Dependency Graph
* Call Graph
* Component Graph
* Knowledge Graph

## Phase 4

* Architecture Analysis
* Database Analysis
* ORM Analysis
* Authentication Analysis
* Feature Detection

## Phase 5

* AI Context
* Search Engine
* Query Engine
* Project Intelligence

---

# Why read-code?

Most AI tools require developers to repeatedly explain:

* Project Structure
* Frameworks
* Architecture
* Routes
* Database Design
* Features

`read-code` automatically extracts that information and generates a structured project knowledge base that AI systems can understand immediately.

---

# License

MIT License

Copyright (c) 2026 Risk Chips