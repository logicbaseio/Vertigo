# Vertigo

Static marketing site for Vertigo, structured for GitHub and Vercel.

## Stack
- `index.html` for the app shell
- `styles.css` for all styling
- `script.js` for routing and interactions
- `api/start-project.js` for the Vercel email submission endpoint

## Local preview
Open `index.html` directly in a browser, or serve the folder with any static server.

Direct `file://` preview cannot send email automatically. It will show the email fallback button. Automatic sending works after deploying to Vercel with the environment variables below.

## Deploy to Vercel
- Push this repository to GitHub.
- Import it into Vercel as a static site.
- No build step is required.

## Start a project email setup
The form posts to `/api/start-project` and sends the complete request summary to `work@vertigodigital.co` through Resend.

Set these Vercel environment variables:

- `RESEND_API_KEY`: Resend API key.
- `EMAIL_FROM`: Verified sender, for example `Vertigo <noreply@vertigodigital.co>`.
- `EMAIL_TO`: Optional override. Defaults to `work@vertigodigital.co`.

Verify `vertigodigital.co` in Resend before using a `vertigodigital.co` sender address.
