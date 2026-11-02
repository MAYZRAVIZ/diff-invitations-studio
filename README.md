# Diff Invitations Studio

Standalone installable PWA for editing Philippine event invitation templates — customize names, colors, fonts, and photos, then download PNG, share, or order a custom design on Facebook.

**Live:** https://mayzraviz.github.io/diff-invitations-studio/

**Repo:** https://github.com/MAYZRAVIZ/diff-invitations-studio

## Install

- **iPhone:** Open in Safari → Share → Add to Home Screen
- **Android:** Open in Chrome → menu → Install app (or Add to Home Screen)

## Features

- 10 unique occasion templates
- Live editor (text, palette, fonts, photo upload)
- PNG download & native share
- Order link: [Facebook](https://www.facebook.com/share/19ZiMRxuKm/?mibextid=wwXIfr)
- Offline via service worker
- Hot-pink house brand mark

## Local

```bash
./decode-icons.sh   # builds PNG icons from *.b64
npx --yes serve -l 4173
```

PNG icons are stored as `*.png.b64` (GitHub connector text uploads) and decoded by `decode-icons.sh` / the Pages deploy workflow.
