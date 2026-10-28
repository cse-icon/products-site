---
name: AVEVA PI
anchor: pi
order: 20
icon: hierarchy
tagline: Ask your AVEVA PI System anything — Data Archive points, AF hierarchies, event frames, and PI Vision displays.
highlights:
  - title: Points and Attributes
    description: Search PI points and AF attributes by keyword, and read their properties, units, and data span.
  - title: AF Navigation
    description: Browse AF databases and elements, and compare elements built from the same template.
  - title: History & Summaries
    description: Read archived values or PI's own summaries such as Average, with quality and system states decoded.
  - title: Event Frames & Batches
    description: Read AF event frames by template and severity, with the templates you choose surfaced as batches.
  - title: Calc Failed, Explained
    description: Trace a bad AF attribute to the analyses that write it, their inputs, and the most likely cause.
  - title: PI Vision Displays
    description: Find which displays use a point or element, and check whether their AF bindings still resolve.
  - title: Live Data
    description: Poll current values for a chosen set of points or attributes, for operators and above.
  - title: Scoped to Your AF Databases
    description: Limit which AF databases users can reach. Everything else is hidden from listings and refused.
---

Reads PI through the AF SDK on the server, so PI Web API is not required. The
server machine needs the AF SDK (PI AF Client) and network access to your PI
Data Archive and AF server. Reads run as the service's Windows account, so PI
security for that account sets what the server can see. Users sign in with
personal access tokens issued in the operator portal, which name each person in
the audit log, or through your identity provider.

The PI Vision tools are optional and need PI Vision 2021 or later, with the
service account as a PI Vision Utility User.
