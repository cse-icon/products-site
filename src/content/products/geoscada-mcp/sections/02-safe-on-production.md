---
title: Safe on a production SCADA system
description: >-
  Built to read your live server without changing anything or adding load an
  operator would notice.
icon: shield
features:
  - title: No free-form SQL
    description: Every query is a fixed template built into the product. The assistant supplies values, never statements.
  - title: Read-only account
    description: Connects with a Geo SCADA account that has read permission only.
  - title: Bounded queries
    description: Every query has a row cap and a time window, so history is never scanned end to end.
  - title: Watchdog and small pool
    description: Long-running queries are cut off, and only two connections are used because each one takes a licence slot.
  - title: Security data withheld
    description: Credentials, access lists, and user accounts are never returned, even though the account could read them.
  - title: Gaps are reported
    description: A failed check says "could not determine," never "nothing there," so a clean answer means clean.
---
