---
title: Read-only by design
description: >-
  An AI assistant connected to production data should never be able to change
  it. This one has no way to.
icon: shield
features:
  - title: No write path
    description: No tool can write a value, change historian configuration, or acknowledge an alarm.
  - title: Your permissions apply
    description: On Canary, each person signs in with their own token. On AVEVA PI, reads run as a service account you control.
  - title: Role-based access
    description: Read-only, operator, and admin roles control who sees live data and diagnostics, with no restart to change them.
  - title: Single sign-on
    description: Sign in through Microsoft Entra™, Okta®, or any OpenID Connect provider, and offboard a person in one step.
  - title: Fully audited
    description: Every call is logged with who made it and which tool ran. Tokens and values are never logged.
  - title: Guardrails on every query
    description: Rate limits and time-window caps stop a runaway question from loading the historian.
---
