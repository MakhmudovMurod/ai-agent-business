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

## Customisation

- **Business name / logo**: search for `AgentShip` in `index.html`
- **Contact form**: replace the `setTimeout` in `script.js` with a real `fetch()` POST to your backend or a form service (Formspree, Resend, etc.)
- **Pricing**: edit the three `.pricing-card` blocks in `index.html`
- **Colours / fonts**: tweak CSS custom properties at the top of `styles.css`
