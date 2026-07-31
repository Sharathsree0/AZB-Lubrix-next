# AZB Energy — Next.js conversion (starter)

Converted from `nav.php` + `index.php`. Pattern applied here repeats for your
remaining ~78 `.php` pages.

## Setup

```bash
npm install
```

Move all images/PDFs from your PHP site into `/public` at the same relative
paths used in code (`/banner/...`, `/portfolio/...`, `/img/...`, `logo4.png`,
`logonew-1.png`, `catalogue.pdf`, etc). Then:

```bash
npm run dev
```

## What changed and why

| PHP | Next.js | Reason |
|---|---|---|
| `nav.php` via `<?php include("nav.php"); ?>` | `components/Navbar.jsx`, rendered once in `app/layout.jsx` | Next.js layouts replace PHP includes — shared UI lives in `layout.jsx` and wraps every page automatically |
| `$current_page = basename($_SERVER['PHP_SELF'])` | `usePathname()` from `next/navigation` | No server-side PHP; route awareness comes from Next's router hook instead |
| `<a href="page.php">` | `<Link href="/page">` | Next.js client-side routing; `.php` extension dropped, each page is a folder/route |
| Inline `onclick="fn(this)"` (mobile accordion, video play) | `data-toggle` attributes + `useEffect` (`SiteScripts.jsx`), or React `onClick` + `useState` (video, slider) | JSX doesn't execute inline string handlers like HTML did |
| `<script>` blocks in `index.php` (mobile menu, sticky nav, back-to-top, scroll-reveal, active-nav-tracking) | `components/SiteScripts.jsx`, mounted once in `layout.jsx` | Kept as direct DOM manipulation (same approach as original) inside `useEffect` so behavior matches 1:1, instead of rewriting into React state |
| Hero slider (manual DOM class toggling + `setInterval`) | React state (`useState` + `setInterval` in `app/page.jsx`) | Slide is now driven by state, not manual class add/remove — cleaner in React, same visual result |
| PHP contact `<form>` (no backend wired) | Same form JSX, `onSubmit` still a no-op placeholder | You said you're building the backend separately — wire this to an API route (`app/api/contact/route.js`) or server action when ready |

## Repeating this for other pages

Each remaining `.php` file (e.g. `hydraulic-oil.php`) becomes
`app/hydraulic-oil/page.jsx`. Steps per file:

1. Strip `<!DOCTYPE html>`, `<html>`, `<head>`, `<?php include("nav.php") ?>`,
   `</body></html>` — that's all handled by `layout.jsx` now.
2. Convert `class=` → `className=`, `for=` → `htmlFor=`.
3. Any inline `style="..."` string → JS object (`style={{ backgroundColor: '...' }}`).
4. Any `<?php ... ?>` logic → decide: static content (hardcode), route-based
   (`usePathname`), or real dynamic data (fetch from your new backend once built).
5. Self-close void tags: `<img ...>` → `<img ... />`.
6. Save as `app/[slug]/page.jsx` matching the original filename minus `.php`.

`product-detail.php` and `sidebar.php` are shared partials like `nav.php` —
turn those into `components/ProductDetail.jsx` / `components/Sidebar.jsx` and
import into whichever pages used them.

## Not yet done

- Only `nav.php` + `index.php` converted (this was the requested starter/template).
- Remaining ~78 pages not converted — use the pattern above, ideally with
  Claude Code on your full project folder (no per-page chat limit there).
- Images/PDFs not included — copy your assets into `/public` yourself.
- Contact form has no backend — connect once your Next.js API/backend exists.
