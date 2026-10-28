---
title: Safe on a Production SCADA System
description: >-
  It queries your live SCADA server, not a replica, so it is built to read
  without changing anything and without adding load an operator would notice.
icon: shield
features:
  - title: No Free-Form SQL
    description: Out of the box, every query is a fixed template in the product. The assistant supplies values, never statements.
  - title: Read-Only Account
    description: Connects through its own ODBC data source with a Geo SCADA account that has read permission only.
  - title: Bounded Queries
    description: Every query has a row cap, history is never scanned unbounded, and journal reads need a time window.
  - title: Watchdog and Small Pool
    description: Overrunning queries are cut off, and the connection pool defaults to two, because each connection uses a licence slot.
  - title: Security Data Withheld
    description: Access-control lists, credentials, and user account records are withheld from every tool, even though the read-only account could read them.
  - title: Honest Answers
    description: A failed check is "could not determine", never "nothing there". Empty history carries its caveats, and truncation is disclosed.
---
