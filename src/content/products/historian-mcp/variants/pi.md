---
name: AVEVA PI System
anchor: pi
order: 20
icon: hierarchy
tagline: AVEVA PI Data Archive points, AF hierarchies, event frames, and AVEVA PI Vision displays.
highlights:
  - title: Points and attributes
    description: Search PI points and AF attributes by keyword and see their units and data span.
  - title: AF navigation
    description: Browse AF databases and elements, and compare elements built from the same template.
  - title: History & summaries
    description: Read archived values or PI's own summaries, with quality and system states decoded.
  - title: Event frames & batches
    description: Read event frames by template and severity, with the templates you choose shown as batches.
  - title: Calc Failed, explained
    description: Trace a bad AF attribute back to the analysis that writes it and the most likely cause.
  - title: AVEVA PI Vision displays
    description: Find which displays use a point, and check whether their bindings still resolve.
  - title: Live data
    description: Poll current values for a chosen set of points or attributes, for operators and above.
  - title: Scoped to your AF databases
    description: Choose which AF databases users can reach. Everything else stays hidden.
---

Reads through the AVEVA PI AF SDK, so AVEVA PI Web API is not required. Reads run as the service's Windows account, so your existing PI security for that account controls what the server can see. Users sign in with personal access tokens from the operator portal, so the audit log names each person, or through your identity provider.

AVEVA PI Vision tools need AVEVA PI Vision 2021 or later.
