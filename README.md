# AgentShip — Landing Page

Static landing page for the AgentShip AI agent setup and implementation service.

## Local development

Requires Node.js 16+. No dependencies to install.

```bash
# Start on default port 8080
npm start

# Start on port 3000
npm run dev

# Custom port
PORT=5000 node server.js
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

## Files

```
index.html   — Main landing page
styles.css   — All styles (Stripe-inspired, responsive)
script.js    — Interactions: scroll reveal, FAQ accordion, form, nav
server.js    — Zero-dependency Node.js static file server
package.json — npm metadata and start scripts
```

## Deployment

### Any Node.js host (Railway, Render, Fly.io, etc.)

Set the `PORT` environment variable — the server reads it automatically. The start command is `npm start`.

### Static hosting (Netlify, Vercel, GitHub Pages)

Drop `index.html`, `styles.css`, and `script.js` into the host's publish directory. The `server.js` file is only needed for Node-based hosting.

### Docker (optional)

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
```

## Performance

The page uses only local assets — no external fonts, CDN scripts, or third-party requests. This means:

- **No Google Fonts round-trip** — text renders immediately using the OS system font stack (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `system-ui`). No FOIT, no layout shift from font loading.
- **No single point of external failure** — the page loads fully even when third-party CDNs are slow or blocked.
- **Minimal first-paint cost** — the browser renders `index.html` → `styles.css` → `script.js` with zero blocking network fetches beyond those three local files.

If you later want a custom web font, load it with `font-display: swap` and self-host the WOFF2 file alongside the other assets to preserve these properties.

## Customisation

- **Business name / logo**: search for `AgentShip` in `index.html`
- **Contact form**: replace the `setTimeout` in `script.js` with a real `fetch()` POST to your backend or a form service (Formspree, Resend, etc.)
- **Pricing**: edit the three `.pricing-card` blocks in `index.html`
- **Colours / fonts**: tweak CSS custom properties at the top of `styles.css`
