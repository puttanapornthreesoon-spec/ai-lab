# Security Policy

## Supported version

Security fixes target the latest release on the default branch.

## Reporting a vulnerability

Email `hello@digitalgigz.ai` with the subject `Security report`. Do not include
patient information, live credentials, access tokens, or exploit data that is
not necessary to explain the issue.

Please include:

- the affected route or component;
- the expected and observed behavior;
- minimal reproduction steps;
- likely impact;
- a safe way to contact you.

Do not open a public issue for an unpatched vulnerability.

## Data boundary

The current product uses browser-local storage for theme and favorites. It does
not provide authenticated accounts, clinical data storage, or a messaging
backend. Those boundaries must be reassessed before adding hosted persistence,
analytics, third-party AI, email delivery, or authentication.
