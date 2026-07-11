# talea-website

The [Talea](https://github.com/eeeurico/talea) website — **https://talea.eurico.ws**

Plain static HTML/CSS/JS, no build step. Deployed on Vercel, which serves
the repo root as-is.

## How it stays current with zero maintenance

- **Download buttons** query the GitHub Releases API for `eeeurico/talea`
  at page load and link the latest signed `.dmg`. Publishing a release
  updates the site automatically. Before the first release they fall back
  to the releases page.
- **Mappings page** renders `index.json` from the
  [`talea-mappings`](https://github.com/eeeurico/talea-mappings) repo —
  the same catalog the in-app mapping browser uses. Merging a mapping PR
  updates both.

## One-time setup

1. **Vercel**: dashboard → Add New… → Project → import
   `eeeurico/talea-website`. Framework preset *Other*, no build command,
   output directory left empty (serves the repo root). Every push to
   `main` deploys.
2. **Domain**: in the project's Settings → Domains, add
   `talea.eurico.ws`. `eurico.ws` already uses Vercel DNS, so the record
   is created automatically.

## Local preview

Any static server, e.g.:

```bash
python3 -m http.server 8080
```

## Design

Tokens are mirrored from the app's design system
(`ui/src/styles/variables.css` in the main repo): warm near-black surfaces,
coral primary accent, Geist / Geist Mono. If the app's tokens change, update
`css/site.css` to match.
