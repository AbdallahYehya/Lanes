# Lanes

Swipe through YouTube like a feed. Build tonight's queue. Send it to the TV.

- **Swipe up / down** – next / previous video in the same lane
- **Swipe left / right** – switch lane (Subscriptions, Trending, Liked, or any topic / @channel you add)
- **Double-tap or +** – add to tonight's queue
- **Press and hold** – hide a video for good
- **Tonight** button – reorder the queue by dragging, then **Send to TV** mirrors it into a private YouTube playlist called *Tonight*

A single-page app: `index.html`, `demo-data.js`, `manifest.json`, `sw.js`, `icons/`. No backend, no build step. Everything is stored on your phone.

## Install on your phone

1. Open the site in Safari (iPhone) or Chrome (Android).
2. Share → **Add to Home Screen**.
3. Open it from the home screen so it runs full-screen.

It starts in **Demo** mode with a few real videos so you can feel the gestures. Real YouTube lanes need the two keys below.

## Connect YouTube (10 minutes, once)

1. Go to <https://console.cloud.google.com>, create a project called **Lanes**.
2. **APIs & Services → Library** → enable **YouTube Data API v3**.
3. **Credentials → Create credentials → API key**. Copy it.
4. **OAuth consent screen** → External → fill the app name → under **Test users** add your Gmail.
5. **Credentials → Create credentials → OAuth client ID → Web application**.
   - Authorized JavaScript origins: the origin shown in the app's Settings (e.g. `https://abdallahyehya.github.io`)
   - Authorized redirect URIs: the redirect URI shown in Settings (e.g. `https://abdallahyehya.github.io/lanes/`)
6. In the app: Settings → paste the API key and client ID → **Save** → **Sign in**.

Subscriptions and Liked lanes, and Send to TV, need the sign-in. Trending and topic lanes only need the API key.

## On the TV

Open YouTube on the TV → **Library → Playlists → Tonight** → play. Every time you add or reorder, hit **Send to TV** again. If the TV doesn't pick up a new order mid-playlist, restart the playlist from Library.

## Notes

- Previews start muted; tap the video for sound.
- Daily API quota is 10,000 units. A topic lane costs about 100 per page; Subscriptions about 1 per channel. A normal night uses a few hundred.
- While the Google project is in "Testing" mode you may be asked to sign in again every few days.
