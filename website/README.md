# Website

This folder contains the React website code for the Canada personal investment, tax, and credit tracking system.

## Function

The website is the primary user interface for tracking and reviewing personal investment, tax, and credit information. It should make these workflows easier to understand, organize, and manage.

## Design

The website is written with React and hosted on Azure. Code in this folder should follow React conventions, keep user-facing flows simple and predictable, and communicate clearly with the backend APIs. The interface should support accurate data entry, easy review, and future expansion for additional client ends such as mobile.

## Design Spec

The main design direction is modern and bright. The site should feel clean, organized, and practical for personal finance workflows rather than like a marketing landing page.

- Theme: bright, modern, dashboard-style, and easy to scan.
- Layout: use clear sections, stable cards, generous spacing, and responsive grids.
- Colors: prefer a light blue-white base with balanced mint, amber, sky blue, and deep teal accents.
- Typography: keep headings strong and readable, with no negative letter spacing and no viewport-width font scaling.
- UI tone: professional, calm, and approachable for personal investment, tax, and credit tracking.
- Content hierarchy: prioritize practical tracking areas, project status, and next steps over decorative content.
- Accessibility: preserve semantic headings, landmarks, readable contrast, and mobile-friendly spacing.

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a static production build:

```bash
npm run build
```

## Azure Deployment

The production build outputs static files to `dist`. This can be deployed to Azure Static Web Apps or another Azure static hosting option. The `staticwebapp.config.json` file keeps client-side routes falling back to `index.html`.

The GitHub Actions workflow for Azure Static Web Apps is stored at `.github/workflows/azure-static-web-apps.yml`.

Deployment settings:

- App location: `website`
- API location: empty for now
- Output location: `dist`
- Required GitHub secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`

To connect an Azure Static Web Apps resource, copy its deployment token from Azure and save it as the `AZURE_STATIC_WEB_APPS_API_TOKEN` repository secret in GitHub.

If the secret is missing, the workflow still runs install, test, and build checks, but the Azure deployment step is skipped. Add the secret before merging to `main` when you want production deployment to run.
