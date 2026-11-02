#!/bin/sh
set -e
cd "$(dirname "$0")"
for f in icon-192.png icon-512.png apple-touch-icon.png favicon-32.png; do
  if [ -f "$f.b64" ]; then
    base64 -d "$f.b64" > "$f"
    echo "decoded $f"
  fi
done
# favicon.ico from favicon-32 if needed
if [ -f favicon.ico.b64 ]; then
  base64 -d favicon.ico.b64 > favicon.ico
fi
