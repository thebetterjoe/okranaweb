# Okrana — HIPAA-Compliant AI for Medical & Legal Practices

Landing page for [okrana.com](https://okrana.com). Static HTML site, deployed via Vercel.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Main landing page |
| `favicon.svg` | Browser tab icon (navy shield + gold O) |
| `vercel.json` | Security headers, redirects, caching |
| `robots.txt` | Search engine crawling rules |
| `sitemap.xml` | Sitemap for Google indexing |

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Vercel auto-detects static site → click **Deploy**
4. Add custom domain `okrana.com` under Settings → Domains

Every `git push` to `main` triggers an automatic redeploy.

---

## Wire up the contact form (Formspree)

The signup forms on the page use [Formspree](https://formspree.io) to send leads to your email.

1. Go to [formspree.io](https://formspree.io) → create free account → New Form
2. Name it "Okrana Demo Requests" → copy the form ID (e.g. `xpwzgkbl`)
3. In `index.html`, find this line near the bottom:
   ```js
   const FID='YOUR_FORM_ID';
   ```
4. Replace `YOUR_FORM_ID` with your actual Formspree ID:
   ```js
   const FID='xpwzgkbl';
   ```
5. Save, commit, push — Vercel redeploys automatically
6. Test by submitting the form on the live site — you'll get an email

---

## Enable Vercel Analytics

1. Vercel dashboard → your project → **Analytics** tab → Enable
2. Done. Free on the Hobby plan.

---

## Update content

All content is in `index.html`. Key things to customise:

- **Email address**: search for `hello@okrana.com` and replace with yours
- **Testimonials**: search for `Dr. Marcus Patel` — update names/quotes once you have real clients
- **Pricing**: search for `$750` — adjust tiers as needed
- **Phone/location**: add your direct phone number to the signup section

---

## Tech stack

- Pure HTML/CSS/JS — zero dependencies, no build step
- Fonts: Space Grotesk + Inter + IBM Plex Mono (Google Fonts)
- Forms: Formspree (free tier = 50 submissions/month, paid = unlimited)
- Analytics: Vercel Analytics (built in)
- Hosting: Vercel (free Hobby plan)

**Monthly infrastructure cost to run okrana.com: $0**
