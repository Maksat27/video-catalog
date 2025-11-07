# Video Catalog (Next.js + React + TypeScript)

A video catalog with **SSR rendering**, **debounced search**, and **duration filtering**.
Data is fetched from a local API `/api/videos` that simulates **network delay** and **occasional errors** — the UI gracefully handles **loading**, **empty**, and **error** states **without layout shifts**.
Asynchronous data is managed using **TanStack Query** with **hydration** support.

Styling is done with **Tailwind CSS** — neutral color palette + accent color.
Accessibility features include **visible focus outlines**, **keyboard tab navigation**, and a **clickable card** that navigates to a mock detail page.
Thumbnails are rendered with `next/image` using **lazy loading** and correct `sizes`.
Search and filter state are synchronized with the **URL query parameters**.

---

## Run the project

```bash
pnpm install
pnpm dev
```
