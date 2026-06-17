# Stockalytics Case Study

Stockalytics is a private stock analytics platform I am building to bring technical signals, market structure, options-related metrics, fundamentals, and news context into one workflow.

> This repository is a public case study. It intentionally does not include the production frontend, backend, database schema, deployment configuration, provider integrations, or internal routes.

## Live Project

- Deployed app: https://stockalytics.vercel.app
- Full source: private for security

The deployed app may require authentication or live backend availability. Public screenshots will be added only when there is a safe capture that accurately represents the real product without exposing private data.

## What The Product Does

Stockalytics is designed to help users move from quick ticker triage to deeper evidence:

- dashboard and ticker analysis pages
- overview, technical, market structure, options, news, and fundamentals sections
- live/near-live market data workflows
- options analysis concepts such as wall levels, gamma-related signals, and quality diagnostics
- news and fundamentals summaries
- frontend route splitting for heavier analysis pages
- private backend worker/API architecture for provider calls and data processing

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Query
- Recharts / charting components

### Backend and Data Layer

- Python
- FastAPI
- PostgreSQL / Supabase
- Private worker/job processing
- Market data and news provider integrations
- VPS deployment

## Sanitized Architecture

```text
React / Vite frontend
        |
        v
Private API and worker layer
        |
        v
Market data, options, news, and fundamentals providers
        |
        v
Database and cache layer
```

Production domains, internal API routes, database migrations, worker logic, provider clients, and deployment scripts are intentionally omitted.

## Why This Is A Case Study Instead Of Full Source

The real project is connected to deployed backend infrastructure and third-party provider integrations. Publishing the full source could expose implementation details that increase operational and security risk.

This repository exists to explain the project clearly for portfolio review while keeping the production system private.

## What I Learned

- Designing analysis workflows for data-heavy dashboards
- Separating frontend UX from backend data orchestration
- Handling private provider integrations and environment-based configuration
- Communicating sensitive production work safely in a public portfolio

