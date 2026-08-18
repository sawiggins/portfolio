# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Node version

This project requires **Node 22** (`.nvmrc` pins 22.11.0). Gatsby 5 declares `engines: >=18 <26`, so the Homebrew `node@26` on this machine will not work — installs fail and builds are unsupported.

mise manages Node here but does **not** read `.nvmrc` (`idiomatic_version_file_enable_tools` is `[]`), and there is no `mise.toml` in this repo. Until one is added, prefix commands:

```bash
mise exec node@22.11.0 -- npm install
```

Netlify reads `.nvmrc` directly, so CI is already pinned.

## Commands

```bash
npm install          # ~1500 packages, no native compile step
npm run develop      # dev server at localhost:8000, GraphiQL at localhost:8000/___graphql
npm run build        # production build into public/
npm run serve        # serve the built output
npm run clean        # wipe .cache/ and public/ — do this when GraphQL queries or gatsby-config change
```

There is no test suite, linter, or formatter configured (Gatsby runs its own eslint during `develop`). Verification is visual, plus `npm run build` as the real correctness check — GraphQL query errors only surface at build time.

`main` auto-deploys to https://stephaniewiggins.me/ via Netlify.

## Architecture

Gatsby 5 / React 18 static portfolio site. No CMS or remote data source — the only GraphQL data is local images sourced from `src/images` by `gatsby-source-filesystem` and processed by `gatsby-plugin-sharp`.

**Routing is file-based, and every page is self-contained.** `src/pages/index.js` → `/`, `src/pages/portfolio/<slug>.js` → `/portfolio/<slug>`. There is no `Layout` wrapper and no `gatsby-node.js`; each page imports and composes its own nav, header, and footer.

**Page titles use the Gatsby Head API**, exported at the bottom of each page file:

```js
export const Head = () => <title>Stephanie Wiggins | Project Name</title>
```

Not react-helmet, and not an inline `<title>` in the component body.

**Each page exports its own page-level `graphql` query.** The consistent shape across every page:

```js
Alias: file(relativePath: { eq: "image-name.png" }) {
  childImageSharp {
    gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
  }
}
```

rendered with `<GatsbyImage image={getImage(data.Alias)} alt="..." />` from `gatsby-plugin-image`. Adding an image to a page means adding both the query alias and the `<GatsbyImage>`. Note `getImage` takes the file node itself, not `.childImageSharp.gatsbyImageData`.

Some images bypass GraphQL and are imported directly (`import SWLogo from '../images/stephanie-wiggins_logo.png'`) for logos and homepage cards; small ones get inlined as base64 by webpack. Both patterns are in use; follow whichever the surrounding file uses.

**Styling is one global stylesheet.** `gatsby-browser.js` imports `src/styles/main.scss`, which imports all of Bootstrap 5 first, then `index.scss` (homepage-specific rules) and each partial under `src/styles/components/`. Consequences:

- A new `.scss` partial does nothing until it is added to the `@import` list in `main.scss`.
- Because Bootstrap is imported before the partials, partials can use Bootstrap mixins directly (e.g. `@include media-breakpoint-up(md)`).
- Brand colors (`$navy: #002642`, `$yellow: #E59500`, `$red: #840032`, `$gray-yellow: #EEEDEA`) are re-declared separately in `main.scss` and `index.scss` rather than shared. Changing a color means changing it in each file that declares it.
- The stylesheets still use `@import` and other legacy Sass syntax. `gatsby-config.js` lists those deprecations under `sassOptions.silenceDeprecations` so builds stay readable — if you migrate to `@use`, trim that list rather than leaving it stale.

## Adding a portfolio project

1. Drop images in `src/images/` (existing convention: `<project>_<description>.png`).
2. Create `src/pages/portfolio/<slug>.js` — copy an existing one such as `stjude-cloud.js`. The composition order is `PortfolioNav` → `PortfolioHeader` → content `Container`s → `PortfolioMoreProjects` → `Footer`, with `export const Head` last.
3. Add the project card to the Projects section of `src/pages/index.js`, including its image alias in that file's query.

## Known quirks

- `src/components/portfolio-brief.js` is unused and broken — it renders an undefined `title` and takes a `header` prop it never uses. Fix it before rendering it anywhere.
- `PortfolioMoreProjects` links to `/#porfolio` (misspelled) while `index.js` defines the anchor as `about`/`portfolio`, so that link lands on the homepage top rather than the Projects section.
- Homepage section anchors use the legacy `<a name="..." />` form; this is what Gatsby's eslint reports as `jsx-a11y/anchor-is-valid` warnings during `develop`. The nav in `nav.js` also uses plain `href` rather than Gatsby `Link`, so homepage nav clicks do a full page load.
- `npm run build` prints `ERROR UNKNOWN` followed by a punycode `DeprecationWarning`. That is Gatsby mislabeling a Node stderr notice, not a build failure.
- The build also prints four `SvgoParserError: Non-whitespace before first tag` lines while minifying CSS. These come from Bootstrap's URL-encoded SVG data URIs; the affected SVGs are simply left unoptimized and the emitted CSS is intact.
