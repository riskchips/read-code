# read-code

### Install Globally

```bash
npm install -g read-code
```

### Install In A Project

```bash
npm install read-code
```

### Verify Installation

```bash
read-code --help
```

---

# 🚀 read-code

### Turn Any Codebase Into AI Context

**read-code** is an advanced code intelligence engine that scans entire projects, understands architecture, extracts relationships, builds knowledge graphs, and generates AI-ready JSON context.

Instead of uploading hundreds of files and repeatedly explaining your project to AI, simply run:

```bash
read-code scan
```

and upload the generated JSON.

---

# 👨‍💻 Author

**Risk Chips**

---

# Why read-code?

Normally:

```text
Upload project
Explain architecture
Explain database
Explain routes
Explain auth
Explain features
Repeat every conversation
```

With read-code:

```text
read-code scan
↓
Generate AI Context
↓
Upload JSON
↓
AI Understands Project
```

---

# Supported Technologies

### JavaScript

```js
function login() {}
```

### TypeScript

```ts
interface User {}
```

### React

```jsx
function Navbar() {}
```

### JSX

```jsx
<App />
```

### TSX

```tsx
<App />
```

---

# Core Features

## Project Scanner

Scans:

```text
.js
.ts
.jsx
.tsx
.json
.md
```

Builds:

```text
Project Tree
Statistics
Framework Detection
AI Context
```

---

## JavaScript Intelligence

Extracts:

```text
Functions
Classes
Imports
Exports
Arrow Functions
```

---

## TypeScript Intelligence

Extracts:

```text
Interfaces
Types
Enums
```

---

## React Intelligence

Extracts:

```text
Components
Hooks
Props
Routes
```

---

# Symbol Intelligence

Builds a project-wide symbol table.

Example:

```json
{
  "login": {
    "type": "function",
    "file": "src/auth/login.js",
    "startLine": 12,
    "endLine": 48
  }
}
```

Detects:

```text
Functions
Classes
Components
Interfaces
Types
Enums
```

---

# Source Snippet Extraction

Stores implementation snippets.

Example:

```json
{
  "name": "login",
  "snippet": "async function login(req,res){...}"
}
```

This dramatically improves:

```text
Bug Fixing
Refactoring
Code Understanding
AI Reasoning
```

---

# Graph Engine

## Dependency Graph

```text
File → Imports
```

## Call Graph

```text
Function → Function
```

## Component Graph

```text
Component → Component
```

## Knowledge Graph

```text
Project → Relationships
```

---

# Architecture Analysis

Detects:

```text
MVC
Repository Pattern
Service Pattern
Layered Architecture
Component Architecture
```

---

# Database Detection

Detects:

```text
MongoDB
PostgreSQL
MySQL
SQLite
Redis
```

---

# ORM Detection

Detects:

```text
Prisma
Mongoose
Sequelize
TypeORM
```

---

# Authentication Detection

Detects:

```text
JWT
Passport
OAuth
Session Auth
```

---

# Feature Detection

Automatically discovers:

```text
Authentication
Dashboard
Messaging
Notifications
Payments
Admin Panels
File Uploads
Search
```

---

# AI Context Engine

Generates:

```json
{
  "project": {},
  "frameworks": [],
  "statistics": {},
  "tree": {},
  "analysis": {},
  "graphs": {},
  "analyzers": {},
  "symbols": {}
}
```

Perfect for:

```text
AI Agents
Code Reviews
Architecture Reviews
Documentation
Bug Fixing
Refactoring
Project Understanding
```

---

# Commands

## Scan Project

```bash
read-code scan
```

Creates:

```text
.read-code/latest.json
```

---

## Save Output

```bash
read-code scan --savefile project.json
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

Example:

```bash
read-code scan --exclude tests,docs,coverage
```

---

## Combine Multiple Flags

```bash
read-code scan --savefile project.json --compact
```

```bash
read-code scan --exclude tests,docs --compact
```

```bash
read-code scan --exclude tests,docs --compact --savefile output.json
```

Flags work in any order.

---

## Query Project

```bash
read-code query "what frameworks are used"
```

Examples:

```bash
read-code query "show architecture"

read-code query "what routes exist"

read-code query "what features exist"

read-code query "where is login"

read-code query "show code for login"

read-code query "jwt"

read-code query "prisma"
```

---

## Explain Project

```bash
read-code explain
```

---

## Help

```bash
read-code --help
```

---

# Generated Files

## Automatic Cache

```text
.read-code/
└── latest.json
```

Generated automatically after every scan.

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

# Example Workflow

Generate context:

```bash
read-code scan --savefile project.json
```

Upload:

```text
project.json
```

Ask AI:

```text
Explain architecture

Find JWT validation

Show login implementation

Locate Prisma usage

Find authentication flow

Suggest refactoring opportunities

Find database entry points

Identify dead code
```

---

# Current Capability

| Capability                 | Accuracy |
| -------------------------- | -------- |
| Project Understanding      | 98%      |
| Architecture Understanding | 98%      |
| Documentation Generation   | 98%      |
| Dependency Analysis        | 95%      |
| Code Search                | 90%      |
| Refactoring Assistance     | 80%      |
| Bug Localization           | 75%      |
| AI Readiness               | 85%      |

---

# Roadmap

### Quality Analysis

```text
Dead Code Detection
Circular Dependency Detection
Duplicate Code Detection
```

### Advanced Intelligence

```text
Cross File Symbol Tracking
Reference Tracking
Variable Usage Analysis
Data Flow Analysis
Control Flow Analysis
```

### AI Enhancements

```text
Context Compression
Semantic Search
Embeddings
AI Memory Packs
Automatic Refactoring Plans
```

---

# License

MIT License

Copyright (c) 2026 Risk Chips
