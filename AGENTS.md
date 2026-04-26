# Agent Instructions

## Repository Context

This repository is for Canada personal investment, tax, and credit usage. Its goal is to make this information easier to track and manage.

The project is expected to contain code for multiple ends:

- Backend: .NET Core services hosted on Azure.
- Frontend: a React website hosted on Azure.
- Mobile: planned for the future; keep space for a future mobile end.

## Agent Rules

- Keep changes focused on the user's request.
- Follow the existing project structure and conventions once they are established.
- Do not remove or overwrite user changes unless the user explicitly asks for it.
- Run unit tests before pushing changes to a remote branch.
- Do not push directly to the main branch.
- Treat financial, tax, and credit-related behavior carefully. Prefer clear, auditable logic and avoid hidden assumptions.
- Do not commit secrets, credentials, certificates, local settings, or personal financial data.
- Keep Azure deployment and hosting details configurable rather than hard-coded.
- Backend code should prefer .NET Core conventions and maintain clear API contracts.
- Frontend code should prefer React conventions and keep user-facing flows simple and easy to understand.
- Leave room for a future mobile end when introducing shared models, APIs, or documentation.
- Update documentation when behavior, setup, deployment, or project structure changes.
