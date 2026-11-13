# Instructions for Claude

## Git workflow

- Before making changes, create a new, clearly named branch from the latest `main`, unless the work continues something already on an open branch (then use that branch) or the user says otherwise.
- Never commit directly to `main`. Changes reach `main` only through a pull request, because merging to `main` deploys the live site.
- Say which branch is being used before making changes.

## Branch names

Use `type/short-description`, named after the change rather than a page. Mention specific pages only when the change is limited to them.

| Prefix | Use for | Example |
|---|---|---|
| `content/` | Wording, pages, images | `content/historian-mcp-and-bridge` |
| `design/` | Look and layout | `design/site-wide-typography` |
| `feature/` | New functionality | `feature/termly-consent-banner` |
| `fix/` | Something broken | `fix/roadmap-sync-token` |
| `chore/` | Upgrades and maintenance | `chore/update-workflow-actions` |
| `docs/` | Documentation and instructions | `docs/add-claude-instructions` |
