# talea-website

The [Talea](https://github.com/eeeurico/talea) website — **https://talea.eurico.ws**

Plain static HTML/CSS/JS, no build step. GitHub Pages serves the repo root
directly.

## How it stays current with zero maintenance

- **Download buttons** query the GitHub Releases API for `eeeurico/talea`
  at page load and link the latest signed `.dmg`. Publishing a release
  updates the site automatically. Before the first release they fall back
  to the releases page.
- **Mappings page** renders `index.json` from the
  [`talea-mappings`](https://github.com/eeeurico/talea-mappings) repo —
  the same catalog the in-app mapping browser uses. Merging a mapping PR
  updates both. Until that repo exists it shows a friendly empty state.

## One-time setup

1. **GitHub Pages**: repo Settings → Pages → Source: *Deploy from a branch*,
   Branch: `main`, folder `/ (root)`.
2. **DNS**: add a `CNAME` record for `talea.eurico.ws` pointing to
   `eeeurico.github.io`. The `CNAME` file in this repo tells Pages the
   custom domain; tick *Enforce HTTPS* once the cert is issued.

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
