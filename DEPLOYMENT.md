# 🚀 How to Deploy to Render

Here are the exact steps to deploy your Next.js static site to Render.

## 1. Push Your Code to GitHub
Open your terminal and run:

```bash
git add .
git commit -m "Ready for Render deployment"
git push
```

## 2. Create Web Service on Render
1.  Go to the [Render Dashboard](https://dashboard.render.com/).
2.  Click **New +** and select **Static Site**.
3.  Connect your GitHub repository (`new_website_vision_` or similar).

## 3. Configure Settings
Fill in the form with these **exact** values:

| Field | Value |
| :--- | :--- |
| **Name** | `your-website-name` |
| **Branch** | `main` (or `master`) |
| **Root Directory** | `.` (Leave as is) |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `out` |

## 4. Add Rewrite Rule (CRITICAL)
This step ensures that refreshing a page (like `/about`) doesn't give a 404 error.

1.  After creating the site, go to the **Redirects / Rewrites** tab in the Render dashboard.
2.  Add a new rule:
    *   **Source:** `/*`
    *   **Destination:** `/index.html`
    *   **Action:** `Rewrite`
3.  Click **Save Changes**.

## 🎉 Done!
Your site will be live at `https://your-site-name.onrender.com`.
