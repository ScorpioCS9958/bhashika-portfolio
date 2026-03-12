# 🚀 Complete Deploy Guide: GitHub + Netlify + Gmail Notifications

---

## 📌 HOW THE CONTACT FORM WORKS

When someone submits the contact form on your live portfolio:
1. Netlify captures the form submission (FREE - up to 100/month)
2. Netlify sends an email notification → your Gmail inbox
3. You see their name, email, message, subject — all in your Gmail!

**No backend needed. No server. 100% free.**

---

## PART 1: SETUP PROJECT LOCALLY

### Step 1 — Extract the zip

```
Unzip portfolio-bhashika.zip
You will get a folder called: portfolio
```

### Step 2 — Open terminal inside the portfolio folder

```bash
cd portfolio
```

### Step 3 — Install all dependencies

```bash
npm install
```

### Step 4 — Add your profile photo

```
Copy your photo → rename it to: profile.png
Place it here:   portfolio/src/assets/profile.png
```

### Step 5 — Test locally

```bash
npm run dev
```
Open: http://localhost:5173  ✅

---

## PART 2: PUSH TO GITHUB

### Step 1 — Create GitHub account (if you don't have one)
Go to: https://github.com → Sign up FREE

### Step 2 — Create a new repository on GitHub

1. Click the **"+"** button (top right) → **"New repository"**
2. Repository name: `bhashika-portfolio`
3. Set to **Public**
4. Do NOT check "Add README"
5. Click **"Create repository"**

### Step 3 — Initialize Git in your project folder

```bash
# Inside the portfolio folder, run these one by one:

git init

git add .

git commit -m "Initial portfolio commit"

git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/bhashika-portfolio.git

git push -u origin main
```

> ⚠️ Replace `YOUR_USERNAME` with your actual GitHub username
> Example: `https://github.com/ScorpioCS9958/bhashika-portfolio.git`

✅ Your code is now on GitHub!

---

## PART 3: DEPLOY ON NETLIFY (FREE HOSTING)

### Step 1 — Create Netlify account

Go to: https://netlify.com → **"Sign up"** → **"Sign up with GitHub"**
(Using GitHub makes it easier to connect your repo)

### Step 2 — Create new site from GitHub

1. In Netlify dashboard → Click **"Add new site"**
2. Click **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub
5. Search and select: `bhashika-portfolio`

### Step 3 — Configure build settings

Netlify will auto-detect Vite. Confirm these settings:

| Setting | Value |
|---------|-------|
| Branch to deploy | `main` |
| Build command | `npm run build` |
| Publish directory | `dist` |

Click **"Deploy site"** 🚀

### Step 4 — Wait for deployment (takes ~2 minutes)

You'll see logs like:
```
Building...
✓ Build successful
Site is live!
```

Your portfolio will be live at something like:
`https://amazing-name-123456.netlify.app`

### Step 5 — Rename your site (Optional)

1. Go to **Site settings** → **General** → **Site details**
2. Click **"Change site name"**
3. Type: `bhashika-portfolio` (or anything you want)
4. Your URL becomes: `https://bhashika-portfolio.netlify.app` ✨

---

## PART 4: SETUP EMAIL NOTIFICATIONS FOR CONTACT FORM

This is the most important part — so every message goes to your Gmail!

### Step 1 — Go to Forms in Netlify

1. In your Netlify dashboard, click your site
2. In the top menu click **"Forms"**
3. You should see a form called **"contact"** listed there
   - If you don't see it yet, submit a test from your live site first

### Step 2 — Setup Email Notifications

1. Click on the **"contact"** form
2. Click **"Settings and usage"** (or go to **Site settings → Forms → Form notifications**)
3. Click **"Add notification"**
4. Select **"Email notification"**

### Step 3 — Configure the email

Fill in:
- **Email to notify**: `bhashikahiru9958@gmail.com`
- **Custom email subject**: `🔔 New Message from Portfolio - {{name}}`

Click **"Save"**

### Step 4 — Test it!

1. Go to your live portfolio URL
2. Scroll to Contact section
3. Fill the form with a test message
4. Submit it
5. Check your Gmail inbox — you should receive the notification within 1 minute! 📬

---

## PART 5: AUTO-DEPLOY ON EVERY CODE CHANGE

The best part of GitHub + Netlify integration:

Every time you push code to GitHub → Netlify **automatically rebuilds and deploys** your site!

```bash
# Make changes to your code, then:
git add .
git commit -m "Updated portfolio"
git push
```

Netlify detects the push → builds automatically → live in ~2 minutes ⚡

---

## 🔧 TROUBLESHOOTING

### Contact form not working?
- Make sure the form is on the LIVE Netlify site (not localhost)
- Check Netlify dashboard → Forms → should show "contact" form
- If form doesn't appear, check `netlify.toml` is in the root folder

### Build failing?
```bash
# Test build locally first:
npm run build
# If no errors, push to GitHub
```

### Profile photo not showing?
- Make sure file is named exactly: `profile.png`
- Must be in: `src/assets/profile.png`
- Rebuild after adding: `npm run build`

### Site showing old version?
- Go to Netlify → Deploys → Click "Trigger deploy"

---

## 📊 FREE PLAN LIMITS (Netlify)

| Feature | Free Limit |
|---------|------------|
| Bandwidth | 100 GB/month |
| Build minutes | 300 min/month |
| Form submissions | 100/month |
| Sites | Unlimited |
| Custom domains | Unlimited |

✅ More than enough for a portfolio site!

---

## 🌐 CUSTOM DOMAIN (Optional - If you buy a domain)

1. Buy a domain (Namecheap/GoDaddy/Google Domains ~$10/year)
2. In Netlify → **Domain settings** → **Add custom domain**
3. Enter your domain name
4. Netlify gives you DNS settings → Add them to your domain registrar
5. Wait 10-30 min → Your portfolio is live at your own domain!

Free SSL certificate is included automatically by Netlify 🔒

---

## ✅ FINAL CHECKLIST

- [ ] `profile.png` added to `src/assets/`
- [ ] `npm run build` runs without errors locally
- [ ] `netlify.toml` file exists in root folder
- [ ] Pushed to GitHub successfully
- [ ] Netlify connected to GitHub repo
- [ ] Site deployed and live
- [ ] Email notification setup in Netlify → Forms → Notifications
- [ ] Test contact form on live site — received email in Gmail ✅

---

🎉 Congratulations! Your portfolio is now:
- Hosted FREE on Netlify
- Auto-deploys when you push to GitHub
- Contact form sends messages straight to your Gmail
- Live at: https://bhashika-portfolio.netlify.app
