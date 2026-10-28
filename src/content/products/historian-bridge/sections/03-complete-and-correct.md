---
title: Complete, Correct, and Safe to Re-Run
description: >-
  A crash, a network outage, or a slow historian costs you time, never data.
  Every step commits in an order that lets the next run pick up exactly where
  the last one stopped.
icon: shield
features:
  - title: No Gaps
    description: Per-tag watermarks advance only after data is committed, so an interrupted run is redone, not skipped.
  - title: Crash-Safe at Every Step
    description: Data first, manifest last, on disk and in Azure. The Iceberg tables only ever include complete, committed batches.
  - title: Late Data Handled
    description: Sources that receive backfilled history are re-scanned behind their watermark. Re-delivered rows share a primary key, so they deduplicate cleanly.
  - title: New Tags Caught Up
    description: A tag added to the view joins the feed on the next pass, and its earlier history is recovered behind it.
  - title: Bounded Backfill
    description: Catch up from a start date far in the past in fixed-size slices that give way to the live sources.
  - title: Failures Contained
    description: Tags that fail to read are held back on their own. Every other tag still publishes.
  - title: Read-Only on the Historian
    description: Uses scoped, read-only tokens and never writes to Canary. It backs off automatically when the historian is slow to respond.
  - title: Independently Verified
    description: A built-in check reconciles published data against Canary's separate Web API, on a sample of tags.
---
