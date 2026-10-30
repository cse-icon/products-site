---
title: Read-Only by Design
description: >-
  An AI assistant connected to production data should never be able to change
  it. The server has no way to write to, delete from, or reconfigure the
  historian it reads.
icon: shield
features:
  - title: No Write Path
    description: No tool can write a value, change historian configuration, or acknowledge an alarm.
  - title: Your Permissions Apply
    description: On Canary Historian, each person signs in with their own API token and sees only what it can see. On AVEVA PI System, reads run as a service account you control.
  - title: Role-Based Access
    description: Read-only, operator, and administrator roles gate live data, diagnostics, and access management. Grant a role without a restart.
  - title: Single Sign-On
    description: OAuth 2.1 sign-in, optionally through Microsoft Entra, Okta, or another OpenID Connect provider. Offboard a person in one step.
  - title: Audited
    description: Every call is logged with who made it, the tool, and how long it took. Argument values and tokens are never logged.
  - title: Guardrails on Every Query
    description: Per-user rate limits, bounded time windows, point-count caps, and a circuit breaker keep a runaway question off the historian.
  - title: Strict Input Validation
    description: Every tool rejects arguments it does not declare, rather than quietly answering a different question.
  - title: Signed and Verifiable
    description: The executable and installer are code-signed, and every release ships SHA-256 checksums.
---
