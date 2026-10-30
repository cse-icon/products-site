---
name: AVEVA PI System
anchor: pi
order: 20
icon: hierarchy
tagline: Ask your AVEVA PI System anything — AVEVA PI Data Archive points, AF hierarchies, event frames, and AVEVA PI Vision displays.
highlights:
  - title: Points and Attributes
    description: Search PI points and AF attributes by keyword, and read their properties, units, and data span.
  - title: AF Navigation
    description: Browse AF databases and elements, and compare elements built from the same template.
  - title: History & Summaries
    description: Read archived values or AVEVA PI System's own summaries such as Average, with quality and system states decoded.
  - title: Event Frames & Batches
    description: Read AF event frames by template and severity, with the templates you choose surfaced as batches.
  - title: Calc Failed, Explained
    description: Trace a bad AF attribute to the analyses that write it, their inputs, and the most likely cause.
  - title: AVEVA PI Vision Displays
    description: Find which displays use a point or element, and check whether their AF bindings still resolve.
  - title: Live Data
    description: Poll current values for a chosen set of points or attributes, for operators and above.
  - title: Scoped to Your AF Databases
    description: Limit which AF databases users can reach. Everything else is hidden from listings and refused.
---

Reads AVEVA PI System through the AVEVA PI AF SDK on the server, so AVEVA PI
Web API is not required. The server machine needs the AVEVA PI AF SDK (AVEVA PI
AF Client) and network access to your AVEVA PI Data Archive and AVEVA PI AF
Server. Reads run as the service's Windows account, so AVEVA PI System security
for that account sets what the server can see. Users sign in with
personal access tokens issued in the operator portal, which name each person in
the audit log, or through your identity provider.

The AVEVA PI Vision tools are optional and need AVEVA PI Vision 2021 or later, with the
service account as a PI Vision Utility User.
