# English with Brian — Website

A simple 4-page website: Home, About, Pricing, Contact. Plain HTML/CSS/JS —
no build tools, no frameworks. You can edit any `.html` file directly in
GitHub's web editor, no coding tools required.

## What's in here

```
index.html      → Home page
about.html       → About Brian page
pricing.html     → Pricing page
contact.html      → Contact / booking form
css/style.css     → All styling (colors, fonts, layout)
js/main.js        → Mobile menu behavior
images/brian-photo.jpg  → PLACEHOLDER — replace with your real photo
robots.txt        → Tells search engines they can index the site
sitemap.xml        → Lists your pages for search engines
```

---

## Before you go live: 4 things to finish

### 1. Replace the placeholder photo
`images/brian-photo.jpg` is currently a gray silhouette, not your real photo.
On GitHub: open the `images` folder → click **Add file → Upload files** →
upload your photo and name it exactly `brian-photo.jpg` (this replaces the
placeholder automatically). Use a photo that's roughly portrait-shaped
(taller than wide) — it'll be cropped to a 4:5 rectangle.

### 2. Pick your real business name / brand
I used **"English with Brian"** as a placeholder brand name everywhere
(page titles, the logo in the header, the footer). If you want something
different, tell me and I'll do a clean find-and-replace across every file —
don't do this manually, it's easy to miss one and break something.

### 3. Connect the contact form (so messages actually reach you)
Right now the form on `contact.html` points to a placeholder. To make it work:
1. Go to **formspree.io** and sign up for a **free account** (no credit card,
   50 submissions/month free forever).
2. Create a new form, connected to your real email address.
3. Formspree gives you a form ID that looks like `xandpqrs`.
4. In `contact.html`, find this line near the top of the `<form>` tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with the ID Formspree gave you.
5. Also update the `mailto:hello@englishwithbrian.com` link nearby to your
   real email.

**Why Formspree and not something else:** static sites (no server) can't
process a form by themselves. Formspree is the simplest free way to receive
form submissions by email without building a backend. If you'd rather not
sign up for anything yet, tell me and I'll temporarily swap the form for a
plain `mailto:` link instead — less reliable, but zero setup.

### 4. Double-check your prices and cancellation policy
Prices are on `pricing.html`: $6 trial, $10 single lesson, $36 for 4, $64
for 8. Edit the numbers directly in that file if you want to adjust them
before going live.

---

## Deploying: GitHub → Cloudflare Pages

**What we're doing:** GitHub stores your website's files and their history.
Cloudflare Pages reads those files from GitHub and serves your website to
visitors, worldwide, for free. Every time you edit a file on GitHub and
save it, Cloudflare automatically republishes the site within about a
minute — you never manually "upload" anything after the first time.

### Step A — Create the GitHub repository
1. Go to **github.com** and log in (create a free account if you don't have one).
2. Click the **+** icon top-right → **New repository**.
3. Name it something like `english-with-brian-website`.
4. Set it to **Public** (needed for Cloudflare Pages' free tier to read it).
5. Do **not** check "Add a README" (we already have one) — leave it empty.
6. Click **Create repository**.

**What you'll see:** an empty repository page with setup instructions.

### Step B — Upload the website files
1. On that empty repo page, click **uploading an existing file**.
2. Drag in every file and folder from the folder I'm giving you (`index.html`,
   `about.html`, `pricing.html`, `contact.html`, `css/`, `js/`, `images/`,
   `robots.txt`, `sitemap.xml`, `README.md`).
3. Scroll down, write a commit message like "Initial website", click
   **Commit changes**.

**Verify:** refresh the repo page — you should see all your files listed.

### Step C — Connect Cloudflare Pages
1. Go to **dash.cloudflare.com**, log in or create a free account.
2. In the left sidebar: **Workers & Pages → Create → Pages → Connect to Git**.
3. Authorize Cloudflare to access your GitHub account, and select the
   `english-with-brian-website` repo.
4. Build settings: leave **Framework preset** as "None" — this is a plain
   HTML site, it needs no build step. Leave the build command and output
   directory blank (or output directory as `/` if it asks).
5. Click **Save and Deploy**.

**What you'll see:** Cloudflare builds and deploys the site, then gives you
a free URL like `english-with-brian-website.pages.dev`. Open it — that's
your live site.

**If something looks broken:** the most common cause is a typo in a file
path (e.g. `css/style.css` vs `Css/Style.css` — capitalization matters on
the web, unlike on Windows). Tell me exactly what you see and I'll help
you find it.

### Step D — Connect your real domain (once you've bought one)
Once you register a domain (e.g. on Namecheap, Cloudflare Registrar, or
similar):
1. In the same Cloudflare Pages project: **Custom domains → Set up a domain**.
2. Enter your domain and follow the DNS instructions shown.
3. If your domain is registered elsewhere, Cloudflare will show you exactly
   which DNS records to add at your registrar.

We'll do this together step by step once you actually own a domain — no
need to prepare anything for this yet.

---

## Making future edits (day to day)

For small text changes, you don't need git or a code editor:
1. Open the file on GitHub (e.g. `pricing.html`).
2. Click the pencil icon (**Edit this file**).
3. Make your change.
4. Scroll down, click **Commit changes**.
5. Cloudflare Pages automatically republishes within about a minute.

That's the whole workflow for a while — no command line needed until you
want more control.
