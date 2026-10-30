---
title: Complete, correct, and safe to re-run
description: >-
  A crash or outage costs you time, never data. Every run picks up where the
  last one stopped.
icon: shield
features:
  - title: No gaps
    description: Progress is saved only after data is committed, so an interrupted run is redone, never skipped.
  - title: Crash-safe at every step
    description: Your tables only ever include complete batches, even if the host loses power mid-run.
  - title: Late data handled
    description: Backfilled history in Canary is picked up automatically, and duplicate rows are removed.
  - title: New tags caught up
    description: A tag added to the view joins the feed on the next run, along with its earlier history.
  - title: Failures contained
    description: A tag that fails to read is held back on its own while every other tag keeps publishing.
  - title: Read-only on the historian
    description: Uses scoped read-only tokens, never writes to Canary, and backs off when the historian is busy.
---
