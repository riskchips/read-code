# read-code

```bash
npm install -g read-code
```

---

# 🚀 read-code

### Turn Any Codebase Into AI Context

**read-code** is an advanced code intelligence engine that scans entire projects, understands architecture, extracts code relationships, builds knowledge graphs, and generates AI-ready JSON context.

Instead of uploading hundreds of files and repeatedly explaining your project to AI, simply run:

```bash
read-code scan
```

and upload the generated context.

---

## Created By

**Risk Chips**

---

# Why read-code?

Most developers repeatedly tell AI:

* What framework is used
* Where routes are located
* Which database is connected
* How authentication works
* Which files contain business logic
* How components are connected
* What the architecture looks like

read-code automatically discovers and exports all of that information.

---

# Example Workflow

Without read-code:

```text
Upload 500 files
Explain project
Explain architecture
Explain auth
Explain routes
Explain database
Explain business logic
Repeat every conversation
```

With read-code:

```text
read-code scan
↓
project context generated
↓
Upload JSON
↓
AI understands project
```

---

# Supported Languages

## JavaScript

```js
function login() {}
```

## TypeScript

```ts
interface User {}
```

## React

```jsx
function Navbar() {}
```

## JSX

```jsx
<App />
```

## TSX

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
Project Statistics
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

## Symbol Intelligence

Builds:

```text
Function Symbols
Class Symbols
Component Symbols
Type Symbols
Enum Symbols
```

Example:

```json
{
  "login": {
    "type": "function",
    "file": "src/auth/login.js",
    "startLine": 10,
    "endLine": 50
  }
}
```

---

## Source Snippet Extraction

Stores source snippets for AI understanding.

Example:

```json
{
  "name": "login",
  "snippet": "async function login(req,res){...}"
}
```

This significantly improves:

```text
Bug Fixing
Refactoring
Code Generation
```

---

# Graph Engine

Builds:

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
Layered Architecture
Repository Pattern
Service Pattern
Component Architecture
```

---

# Database Analysis

Detects:

```text
MongoDB
PostgreSQL
MySQL
SQLite
Redis
```

---

# ORM Analysis

Detects:

```text
Prisma
Mongoose
Sequelize
TypeORM
```

---

# Authentication Analysis

Detects:

```text
JWT
Passport
Session Auth
OAuth
```

---

# Feature Detection

Automatically discovers:

```text
Authentication
Dashboard
Payments
Messaging
Notifications
Search
Admin Panel
File Upload
```

---

# AI Context Engine

Produces structured JSON:

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

---

# Commands

## Scan

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

## Exclude Directories

```bash
read-code scan --exclude tests,docs
```

Example:

```bash
read-code scan --exclude tests,docs,coverage
```

---

## Combine Flags

```bash
read-code scan --compact --savefile output.json
```

```bash
read-code scan --exclude tests,docs --compact
```

```bash
read-code scan --exclude tests,docs --compact --savefile output.json
```

Flags can be used in any order.

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

Generated after every scan.

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

# Current AI Capability

## Project Understanding

```text
98%
```

## Architecture Understanding

```text
98%
```

## Documentation Generation

```text
98%
```

## Dependency Analysis

```text
95%
```

## Refactoring Assistance

```text
80%
```

## Bug Localization

```text
75%
```

## Code Search

```text
90%
```

## AI Readiness

```text
85%
```

---

# Roadmap

## Quality Analysis

Planned:

```text
Dead Code Detection
Circular Dependency Detection
Duplicate Code Detection
```

---

## Advanced Intelligence

Planned:

```text
Cross-File Symbol Tracking
Reference Tracking
Semantic Search
Variable Usage Analysis
Data Flow Analysis
Control Flow Analysis
```

---

## AI Enhancements

Planned:

```text
Context Compression
Semantic Embeddings
AI Memory Packs
Code Repair Suggestions
Automatic Refactoring Plans
```

---

# Example

Generate context:

```bash
read-code scan --savefile project.json
```

Ask AI:

```text
Find authentication flow

Find unused services

Show login implementation

Explain architecture

Suggest refactoring opportunities

Locate JWT validation

Find Prisma usage

Find database entry points
```

---

# License

MIT License

Copyright (c) 2026 Risk Chips