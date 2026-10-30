---
title: Lower Snowflake cost
description: >-
  Traditional ingestion runs a warehouse to copy every row into Snowflake
  storage. Here Snowflake reads the files where they already are.
icon: bolt
features:
  - title: No loading warehouse
    description: No COPY INTO jobs and no warehouse running just to load data.
  - title: Stored once
    description: Data lives in your own Azure Blob container at storage prices, not duplicated inside Snowflake.
  - title: Aggregate before you pay
    description: Publish 10-minute averages instead of every raw reading where that's all your analysts need.
  - title: Partitioned by date
    description: Files are organized by day, so queries read only the dates they ask for.
---
