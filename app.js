/* Diff Invitations Studio — standalone PWA */
(function () {
  "use strict";

  const FB_PAGE = "https://www.facebook.com/share/19ZiMRxuKm/?mibextid=wwXIfr";

  const TEMPLATES = [
    {
      id: 1, occasion: "Wedding", theme: "Sage Arch Botanical", pricePhp: 1150, tier: "Suite",
      blurb: "Mediterranean arch, eucalyptus line-art, soft gold rules.", layout: "arch",
      palette: { bg: "#F4F1EA", accent: "#6B7F5E", accent2: "#C9A96E", ink: "#2C2C2C", soft: "#9A9A8D" },
      defaults: { names: "Maria & Juan", title: "We're Getting Married", date: "Saturday, 14 March 2027", time: "3:00 in the afternoon", venue: "The Garden Pavilion, Tagaytay", rsvp: "RSVP by 1 Feb · 0917 000 0000", message: "With joyful hearts we invite you to celebrate our wedding day." }
    },
    {
      id: 2, occasion: "Debut (18th)", theme: "Blush Champagne Glam", pricePhp: 895, tier: "Editable",
      blurb: "Romantic blush wash, champagne script, soft floral corners.", layout: "glam",
      palette: { bg: "#FFF5F7", accent: "#E8B4B8", accent2: "#D4AF37", ink: "#4A3728", soft: "#F5E6D3" },
      defaults: { names: "Isabella Reyes", title: "Turning Eighteen", date: "Saturday, 6 June 2026", time: "6:00 in the evening", venue: "Grand Ballroom, Makati", rsvp: "RSVP · isabella.debut@email.com", message: "Please join us as we celebrate her debut — a night of grace and joy." }
    },
    {
      id: 3, occasion: "Baptism", theme: "Ivory Dove Soft", pricePhp: 640, tier: "Editable",
      blurb: "Quiet ivory, dusty-blue wash, dove motif for binyag.", layout: "dove",
      palette: { bg: "#FFFEF9", accent: "#A8C5D4", accent2: "#C0C0C0", ink: "#5C6B73", soft: "#E8E4D9" },
      defaults: { names: "Baby Lucas Santos", title: "Holy Baptism", date: "Sunday, 12 April 2026", time: "10:00 in the morning", venue: "Parish of the Holy Family, Quezon City", rsvp: "Godparents & family · please confirm by SMS", message: "With grateful hearts we invite you to the baptism of our little one." }
    },
    {
      id: 4, occasion: "Kids Birthday", theme: "Jungle Safari Friends", pricePhp: 510, tier: "Basic",
      blurb: "Playful safari, leafy greens, friendly animal silhouettes.", layout: "safari",
      palette: { bg: "#FFF8E7", accent: "#5B8C5A", accent2: "#E8A838", ink: "#2F4A3C", soft: "#D4654A" },
      defaults: { names: "Mateo turns 5!", title: "Jungle Birthday Party", date: "Sunday, 9 August 2026", time: "2:00 – 5:00 pm", venue: "Backyard Safari, Parañaque", rsvp: "Text Mama · 0918 111 2222", message: "Come roar, swing, and celebrate with Mateo and his safari friends!" }
    },
    {
      id: 5, occasion: "Baby Shower", theme: "Sage Neutral Sprinkle", pricePhp: 765, tier: "Editable",
      blurb: "Gender-neutral sage leaves and warm sand accents.", layout: "sprinkle",
      palette: { bg: "#FAF9F6", accent: "#B7C9A8", accent2: "#F5E6CC", ink: "#6B7C6E", soft: "#D4C4B0" },
      defaults: { names: "Welcome Baby Cruz", title: "Baby Shower", date: "Saturday, 25 July 2026", time: "1:00 in the afternoon", venue: "Casa Verde, Pasig", rsvp: "RSVP to Ana · 0920 333 4444", message: "Join us for games, gifts, and gentle celebration as we await baby." }
    },
    {
      id: 6, occasion: "Gender Reveal", theme: "Peach Sky Surprise", pricePhp: 700, tier: "Editable",
      blurb: "Soft peach and sky blue with subtle confetti dots.", layout: "reveal",
      palette: { bg: "#FFF5F0", accent: "#F4A89A", accent2: "#A8D5E5", ink: "#5A6A7A", soft: "#F7E7CE" },
      defaults: { names: "Boy or Girl?", title: "Gender Reveal Party", date: "Sunday, 3 May 2026", time: "4:00 in the afternoon", venue: "Sky Lounge, BGC", rsvp: "RSVP · reveal@family.ph", message: "Help us pop the surprise — pink or blue, love is true." }
    },
    {
      id: 7, occasion: "Corporate", theme: "Midnight Navy Formal", pricePhp: 955, tier: "Editable",
      blurb: "Navy panels, gold accent rule, generous whitespace.", layout: "navy",
      palette: { bg: "#FFFFFF", accent: "#1B2A4A", accent2: "#C9A96E", ink: "#4A5568", soft: "#E8E8E8" },
      defaults: { names: "Diff Co. Leadership Summit", title: "You Are Cordially Invited", date: "Thursday, 15 October 2026", time: "6:30 pm reception", venue: "Shangri-La The Fort, Taguig", rsvp: "rsvp@diffco.ph · Business attire", message: "Join us for an evening of insight, networking, and celebration." }
    },
    {
      id: 8, occasion: "Milestone Birthday", theme: "Noir Gold Jubilee", pricePhp: 830, tier: "Editable",
      blurb: "Bold black-and-gold frame for 30th / 40th / 50th.", layout: "noir",
      palette: { bg: "#1C1C1C", accent: "#D4AF37", accent2: "#F5F0E6", ink: "#FFFFFF", soft: "#8B7355" },
      defaults: { names: "Carmen turns 50", title: "Golden Jubilee", date: "Saturday, 21 November 2026", time: "7:00 in the evening", venue: "The Peninsula Manila", rsvp: "RSVP by 1 Nov · 0917 555 6666", message: "Fifty years of grace — dinner, dancing, and champagne toast." }
    },
    {
      id: 9, occasion: "Bridal Shower", theme: "Terracotta Fan Romance", pricePhp: 765, tier: "Editable",
      blurb: "Warm terracotta with geometric fan and arch line work.", layout: "fan",
      palette: { bg: "#FBF7F2", accent: "#C4785A", accent2: "#D4A574", ink: "#5C4033", soft: "#E8D5C4" },
      defaults: { names: "For the Bride-to-Be", title: "Bridal Shower", date: "Sunday, 8 February 2026", time: "11:00 am brunch", venue: "Amelie's Café, Alabang", rsvp: "Hosted by the bridal party · RSVP via Messenger", message: "Sip, shower, and spoil our dear bride before the big day." }
    },
    {
      id: 10, occasion: "Engagement", theme: "Quiet Luxury Ivory", pricePhp: 1020, tier: "Suite",
      blurb: "Understated ivory, taupe, muted gold — monogram-ready.", layout: "quiet",
      palette: { bg: "#FAF8F5", accent: "#C9A96E", accent2: "#B8A99A", ink: "#3D3D3D", soft: "#E8DFD0" },
      defaults: { names: "A & B", title: "Engagement Dinner", date: "Friday, 18 December 2026", time: "7:00 in the evening", venue: "Private dining · Rockwell", rsvp: "Kindly reply by 1 Dec", message: "Celebrate with us as we begin this quiet, joyful chapter together." }
    }
  ];

  const OCCASIONS = ["All", "Wedding", "Debut (18th)", "Baptism", "Kids Birthday", "Baby Shower", "Gender Reveal", "Corporate", "Milestone Birthday", "Bridal Shower", "Engagement"];

  const FONT_STACKS = {
    serif: 'Georgia, "Times New Roman", Times, serif',
    sans: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    script: '"Segoe Script", "Brush Script MT", "Apple Chancery", cursive',
    display: 'Palatino, "Palatino Linotype", "Book Antiqua", serif'
  };
  const FONT_LABELS = [
    { key: "serif", label: "Elegant Serif" },
    { key: "sans", label: "Modern Sans" },
    { key: "script", label: "Soft Script" },
    { key: "display", label: "Classic Display" }
  ];

  const LOGO_SVG = `<svg class="brand-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" aria-hidden="true"><g transform="rotate(-20 60 62)"><rect x="28" y="52" width="64" height="48" rx="10" fill="#FF3E9A"/><path d="M22 58 L60 18 L98 58 Z" fill="#FF3E9A"/><circle cx="60" cy="20" r="8" fill="#FF3E9A"/><circle cx="26" cy="56" r="8" fill="#FF3E9A"/><circle cx="94" cy="56" r="8" fill="#FF3E9A"/><rect x="42" y="68" width="10" height="18" rx="5" fill="#fff"/><rect x="68" y="68" width="10" height="18" rx="5" fill="#fff"/></g></svg>`;

  function formatPhp(n) { return "₱" + n.toLocaleString("en-PH"); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function initialsFromNames(names) {
    const parts = names.replace(/[&!]/g, " ").split(/\s+/).filter(Boolean);
    if (!parts.length) return "D";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  function occasionLabel(o) { return o === "Baptism" ? "Binyag" : o; }

  let tab = "gallery";
  let filter = "All";
  let activeId = 1;
  let toast = null;
  let toastTimer = null;
  let downloading = false;
  let state = {
    ...TEMPLATES[0].defaults,
    font: "serif",
    palette: { ...TEMPLATES[0].palette },
    photoDataUrl: null
  };

  function template() {
    return TEMPLATES.find((t) => t.id === activeId) || TEMPLATES[0];
  }

  function showToast(msg) {
    toast = msg;
    render();
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast = null; render(); }, 2600);
  }

  function openTemplate(t) {
    activeId = t.id;
    const font =
      t.layout === "glam" || t.layout === "fan" ? "script" :
      t.layout === "navy" || t.layout === "safari" ? "sans" : "serif";
    state = { ...t.defaults, font, palette: { ...t.palette }, photoDataUrl: null };
    tab = "edit";
    syncNav();
    render();
  }

  function patch(key, value) {
    state = { ...state, [key]: value };
    render();
  }

  function leaf(p, x, y, rot, s) {
    s = s == null ? 1 : s;
    return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})">
      <ellipse cx="0" cy="0" rx="14" ry="6" fill="${p.accent}" opacity="0.85"/>
      <path d="M-12 0 Q0 -2 12 0" stroke="${p.ink}" stroke-width="0.6" fill="none" opacity="0.35"/>
    </g>`;
  }

  function cornerFlourish(p, ox, oy, flipX, flipY) {
    return `<g transform="translate(${ox} ${oy}) scale(${flipX} ${flipY})">
      <path d="M8 8 C28 10, 40 28, 42 48" stroke="${p.accent2}" stroke-width="1.2" fill="none"/>
      ${leaf(p, 18, 14, -40, 0.7)}${leaf(p, 30, 28, 20, 0.55)}
    </g>`;
  }

  function bodyBlock(p, font, opts) {
    const ax = opts.align === "start" ? "start" : "middle";
    const x = opts.align === "start" ? 48 : 180;
    const nameSize = opts.nameSize || 26;
    const titleSize = opts.titleSize || 13;
    const nameFill = opts.nameFill || p.ink;
    const muted = opts.muted || p.soft;
    let y = opts.yStart;
    let html = "";
    html += `<text x="${x}" y="${y}" text-anchor="${ax}" fill="${p.accent}" font-family="${esc(font)}" font-size="${titleSize}" letter-spacing="2">${esc(state.title.toUpperCase())}</text>`;
    y += nameSize + 10;
    html += `<text x="${x}" y="${y}" text-anchor="${ax}" fill="${nameFill}" font-family="${esc(font)}" font-size="${nameSize}" font-weight="600">${esc(state.names)}</text>`;
    y += 22;
    html += `<line x1="${opts.align === "start" ? x : 110}" y1="${y}" x2="${opts.align === "start" ? x + 120 : 250}" y2="${y}" stroke="${p.accent2}" stroke-width="1"/>`;
    y += 28;
    html += `<text x="${x}" y="${y}" text-anchor="${ax}" fill="${nameFill}" font-family="${esc(font)}" font-size="13">${esc(state.date)}</text>`;
    y += 20;
    html += `<text x="${x}" y="${y}" text-anchor="${ax}" fill="${muted}" font-family="${esc(font)}" font-size="12">${esc(state.time)}</text>`;
    y += 22;
    html += `<text x="${x}" y="${y}" text-anchor="${ax}" fill="${nameFill}" font-family="${esc(font)}" font-size="12">${esc(state.venue)}</text>`;
    y += 36;
    let msg = state.message.length > 90 ? state.message.slice(0, 87) + "…" : state.message;
    const half = Math.ceil(msg.length / 2);
    const breakAt = msg.lastIndexOf(" ", half);
    const m1 = breakAt > 20 ? msg.slice(0, breakAt) : msg;
    const m2 = breakAt > 20 ? msg.slice(breakAt + 1) : "";
    html += `<text x="${x}" y="${y}" text-anchor="${ax}" fill="${muted}" font-family="${esc(font)}" font-size="11">${esc(m1)}</text>`;
    if (m2) {
      y += 16;
      html += `<text x="${x}" y="${y}" text-anchor="${ax}" fill="${muted}" font-family="${esc(font)}" font-size="11">${esc(m2)}</text>`;
    }
    y += 28;
    html += `<text x="${x}" y="${y}" text-anchor="${ax}" fill="${p.accent}" font-family="${esc(font)}" font-size="11" letter-spacing="0.5">${esc(state.rsvp)}</text>`;
    return html;
  }

  function renderInviteArt(t, st, forThumb) {
    const p = st.palette;
    const font = FONT_STACKS[st.font];
    const layout = t.layout;
    const mono = initialsFromNames(st.names);
    const uid = forThumb ? "t" + t.id : "m" + t.id;
    let inner = "";

    const defs = `<defs>
      <clipPath id="photoClip-${uid}"><rect x="110" y="72" width="140" height="140" rx="${layout === "quiet" ? 70 : 12}"/></clipPath>
      <linearGradient id="grad-${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${p.accent}" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="${p.bg}" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="360" height="640" fill="${p.bg}"/>`;

    if (layout === "arch") {
      inner = `
        <path d="M48 220 Q48 70 180 70 Q312 70 312 220" fill="none" stroke="${p.accent}" stroke-width="2.2"/>
        <path d="M58 220 Q58 82 180 82 Q302 82 302 220" fill="none" stroke="${p.accent2}" stroke-width="1"/>
        ${leaf(p, 70, 120, -50)}${leaf(p, 290, 120, 50)}${leaf(p, 90, 160, -20, 0.8)}${leaf(p, 270, 160, 20, 0.8)}
        ${st.photoDataUrl
          ? `<clipPath id="archPhoto-${uid}"><circle cx="180" cy="150" r="48"/></clipPath>
             <image href="${st.photoDataUrl}" x="132" y="102" width="96" height="96" preserveAspectRatio="xMidYMid slice" clip-path="url(#archPhoto-${uid})"/>`
          : `<circle cx="180" cy="150" r="48" fill="${p.soft}" opacity="0.35" stroke="${p.accent2}" stroke-width="1"/>`}
        ${bodyBlock(p, font, { yStart: 260, nameSize: 28 })}
        <text x="180" y="610" text-anchor="middle" fill="${p.soft}" font-family="${esc(font)}" font-size="9" letter-spacing="2">DIFF INVITATIONS</text>`;
    } else if (layout === "glam") {
      inner = `
        <rect x="0" y="0" width="360" height="640" fill="url(#grad-${uid})"/>
        ${cornerFlourish(p, 0, 0, 1, 1)}${cornerFlourish(p, 360, 0, -1, 1)}
        ${cornerFlourish(p, 0, 640, 1, -1)}${cornerFlourish(p, 360, 640, -1, -1)}
        <rect x="28" y="28" width="304" height="584" fill="none" stroke="${p.accent2}" stroke-width="1.2"/>
        <rect x="34" y="34" width="292" height="572" fill="none" stroke="${p.accent}" stroke-width="0.6" opacity="0.5"/>
        ${st.photoDataUrl
          ? `<clipPath id="glamPhoto-${uid}"><rect x="120" y="70" width="120" height="120" rx="60"/></clipPath>
             <image href="${st.photoDataUrl}" x="120" y="70" width="120" height="120" preserveAspectRatio="xMidYMid slice" clip-path="url(#glamPhoto-${uid})"/>`
          : ""}
        ${bodyBlock(p, font, { yStart: st.photoDataUrl ? 230 : 160, nameSize: 30, titleSize: 12 })}`;
    } else if (layout === "dove") {
      inner = `
        <rect x="24" y="24" width="312" height="592" fill="none" stroke="${p.accent2}" stroke-width="1"/>
        <rect x="32" y="32" width="296" height="576" fill="none" stroke="${p.accent}" stroke-width="0.8"/>
        <ellipse cx="180" cy="120" rx="36" ry="22" fill="${p.accent}" opacity="0.9"/>
        <path d="M150 118 Q180 95 210 118 Q180 130 150 118" fill="${p.bg}" opacity="0.9"/>
        <circle cx="188" cy="112" r="2" fill="${p.ink}"/>
        <line x1="180" y1="145" x2="180" y2="175" stroke="${p.accent2}" stroke-width="1.5"/>
        <line x1="165" y1="160" x2="195" y2="160" stroke="${p.accent2}" stroke-width="1.5"/>
        ${bodyBlock(p, font, { yStart: 220, nameSize: 24 })}`;
    } else if (layout === "safari") {
      const age = (st.names.match(/\d+/) || ["5"])[0];
      inner = `
        <circle cx="40" cy="40" r="50" fill="${p.accent}" opacity="0.15"/>
        <circle cx="320" cy="80" r="40" fill="${p.accent2}" opacity="0.2"/>
        <circle cx="50" cy="560" r="60" fill="${p.soft}" opacity="0.15"/>
        ${leaf(p, 40, 100, 10, 1.2)}${leaf(p, 320, 140, -30, 1.1)}${leaf(p, 60, 500, 40, 1)}${leaf(p, 300, 520, -10, 1.2)}
        <rect x="110" y="48" width="140" height="56" rx="28" fill="${p.accent2}"/>
        <text x="180" y="84" text-anchor="middle" fill="${p.ink}" font-family="${esc(font)}" font-size="22" font-weight="700">AGE ${esc(age)}</text>
        <ellipse cx="70" cy="200" rx="22" ry="14" fill="${p.accent}"/><circle cx="88" cy="192" r="10" fill="${p.accent}"/>
        <ellipse cx="290" cy="210" rx="18" ry="12" fill="${p.soft}"/><circle cx="305" cy="202" r="8" fill="${p.soft}"/>
        ${st.photoDataUrl
          ? `<clipPath id="safariPhoto-${uid}"><rect x="105" y="130" width="150" height="110" rx="16"/></clipPath>
             <image href="${st.photoDataUrl}" x="105" y="130" width="150" height="110" preserveAspectRatio="xMidYMid slice" clip-path="url(#safariPhoto-${uid})"/>`
          : ""}
        ${bodyBlock(p, font, { yStart: st.photoDataUrl ? 280 : 240, nameSize: 26, titleSize: 14 })}`;
    } else if (layout === "sprinkle") {
      const dotsTop = [40, 80, 120, 200, 260, 300].map((x, i) =>
        `<circle cx="${x}" cy="${40 + (i % 3) * 18}" r="${3 + (i % 2)}" fill="${i % 2 === 0 ? p.accent : p.accent2}" opacity="0.7"/>`
      ).join("");
      const dotsBot = [50, 100, 160, 220, 280].map((x, i) =>
        `<circle cx="${x}" cy="${580 - (i % 3) * 14}" r="2.5" fill="${p.accent}" opacity="0.55"/>`
      ).join("");
      inner = `
        ${dotsTop}${dotsBot}
        ${leaf(p, 50, 90, -30, 0.9)}${leaf(p, 310, 100, 25, 0.9)}${leaf(p, 60, 520, 15, 0.8)}${leaf(p, 300, 510, -20, 0.8)}
        ${st.photoDataUrl
          ? `<image href="${st.photoDataUrl}" x="110" y="90" width="140" height="140" preserveAspectRatio="xMidYMid slice" clip-path="url(#photoClip-${uid})"/>`
          : `<rect x="110" y="90" width="140" height="140" rx="12" fill="${p.accent2}" opacity="0.45"/>`}
        ${bodyBlock(p, font, { yStart: 270, nameSize: 24 })}`;
    } else if (layout === "reveal") {
      const conf = [0,1,2,3,4,5,6,7].map((i) =>
        `<circle cx="${40 + i * 40}" cy="${50 + (i % 2) * 24}" r="4" fill="${i % 2 === 0 ? p.accent : p.accent2}"/>`
      ).join("");
      inner = `
        <rect x="0" y="0" width="180" height="640" fill="${p.accent}" opacity="0.12"/>
        <rect x="180" y="0" width="180" height="640" fill="${p.accent2}" opacity="0.15"/>
        ${conf}
        <text x="180" y="140" text-anchor="middle" fill="${p.ink}" font-family="${esc(font)}" font-size="48" font-weight="700">?</text>
        ${bodyBlock(p, font, { yStart: 200, nameSize: 26 })}`;
    } else if (layout === "navy") {
      inner = `
        <rect x="0" y="0" width="360" height="150" fill="${p.accent}"/>
        <line x1="40" y1="150" x2="320" y2="150" stroke="${p.accent2}" stroke-width="3"/>
        <text x="180" y="70" text-anchor="middle" fill="${p.accent2}" font-family="${esc(font)}" font-size="11" letter-spacing="3">FORMAL INVITATION</text>
        <text x="180" y="110" text-anchor="middle" fill="#FFFFFF" font-family="${esc(font)}" font-size="22" font-weight="600">${esc(st.title)}</text>
        ${st.photoDataUrl
          ? `<clipPath id="navyPhoto-${uid}"><rect x="120" y="175" width="120" height="90" rx="4"/></clipPath>
             <image href="${st.photoDataUrl}" x="120" y="175" width="120" height="90" preserveAspectRatio="xMidYMid slice" clip-path="url(#navyPhoto-${uid})"/>`
          : ""}
        ${bodyBlock(p, font, { yStart: st.photoDataUrl ? 300 : 220, nameSize: 22, titleSize: 11, nameFill: p.accent, muted: p.ink })}`;
    } else if (layout === "noir") {
      inner = `
        <rect x="18" y="18" width="324" height="604" fill="none" stroke="${p.accent}" stroke-width="2"/>
        <rect x="26" y="26" width="308" height="588" fill="none" stroke="${p.accent}" stroke-width="0.7"/>
        <path d="M40 40 H80 M40 40 V80" stroke="${p.accent}" stroke-width="2"/>
        <path d="M280 40 H320 M320 40 V80" stroke="${p.accent}" stroke-width="2"/>
        <path d="M40 560 V600 H80" stroke="${p.accent}" stroke-width="2"/>
        <path d="M320 560 V600 H280" stroke="${p.accent}" stroke-width="2"/>
        <text x="180" y="120" text-anchor="middle" fill="${p.accent}" font-family="${esc(font)}" font-size="14" letter-spacing="4">CELEBRATING</text>
        ${bodyBlock(p, font, { yStart: 170, nameSize: 28, nameFill: p.accent2, muted: p.soft })}`;
    } else if (layout === "fan") {
      inner = `
        <path d="M180 80 L260 200 L100 200 Z" fill="none" stroke="${p.accent}" stroke-width="1.5"/>
        <path d="M180 100 L240 190 L120 190 Z" fill="${p.soft}" opacity="0.5" stroke="${p.accent2}" stroke-width="1"/>
        <path d="M60 220 Q180 160 300 220" fill="none" stroke="${p.accent}" stroke-width="1.5"/>
        <path d="M70 230 Q180 180 290 230" fill="none" stroke="${p.accent2}" stroke-width="1"/>
        ${bodyBlock(p, font, { yStart: 280, nameSize: 26 })}`;
    } else if (layout === "quiet") {
      inner = `
        <rect x="40" y="48" width="280" height="544" fill="none" stroke="${p.soft}" stroke-width="1"/>
        <circle cx="180" cy="140" r="42" fill="none" stroke="${p.accent}" stroke-width="1.2"/>
        ${st.photoDataUrl
          ? `<clipPath id="quietPhoto-${uid}"><circle cx="180" cy="140" r="40"/></clipPath>
             <image href="${st.photoDataUrl}" x="140" y="100" width="80" height="80" preserveAspectRatio="xMidYMid slice" clip-path="url(#quietPhoto-${uid})"/>`
          : `<text x="180" y="148" text-anchor="middle" fill="${p.ink}" font-family="${esc(font)}" font-size="22" font-weight="600" letter-spacing="2">${esc(mono)}</text>`}
        ${bodyBlock(p, font, { yStart: 230, nameSize: 24, titleSize: 11 })}`;
    }

    const idAttr = forThumb ? "" : ' id="invite-svg"';
    return `<svg${idAttr} viewBox="0 0 360 640" width="100%" xmlns="http://www.w3.org/2000/svg">${defs}${inner}</svg>`;
  }

  async function downloadPng() {
    const svg = document.getElementById("invite-svg");
    if (!svg) { showToast("Preview not ready"); return; }
    downloading = true;
    render();
    try {
      const serializer = new XMLSerializer();
      let svgStr = serializer.serializeToString(svg);
      if (!svgStr.includes("xmlns=")) {
        svgStr = svgStr.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
      }
      if (!/\swidth=/.test(svgStr)) {
        svgStr = svgStr.replace("<svg", '<svg width="1080" height="1920"');
      } else {
        svgStr = svgStr.replace(/\swidth="[^"]*"/, ' width="1080"').replace(/\sheight="[^"]*"/, ' height="1920"');
      }
      const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      const drawn = await new Promise((resolve) => {
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = 1080;
          canvas.height = 1920;
          const ctx = canvas.getContext("2d");
          if (!ctx) { resolve(null); return; }
          ctx.fillStyle = state.palette.bg;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas);
        };
        img.onerror = () => resolve(null);
        img.src = url;
      });
      URL.revokeObjectURL(url);
      if (!drawn) {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "diff-invite-" + template().id + ".svg";
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        a.remove();
        showToast("Saved as SVG (PNG raster failed)");
        downloading = false;
        render();
        return;
      }
      const pngBlob = await new Promise((resolve) => drawn.toBlob((b) => resolve(b), "image/png"));
      if (!pngBlob) { showToast("Could not create PNG"); downloading = false; render(); return; }
      const pngUrl = URL.createObjectURL(pngBlob);
      const a = document.createElement("a");
      a.href = pngUrl;
      a.download = "diff-invite-" + template().id + ".png";
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(pngUrl), 2000);
      showToast("PNG download started");
    } catch (e) {
      showToast("Download failed — try Share or Order");
    }
    downloading = false;
    render();
  }

  async function shareInvite() {
    const text = `${state.names} — ${state.title}\n${state.date} · ${state.time}\n${state.venue}\n${state.message}\n${state.rsvp}\n\nMade with Diff Invitations Studio`;
    const payload = { title: `${state.names} · Diff Invitations`, text };
    try {
      if (typeof navigator.share === "function") {
        await navigator.share(payload);
        showToast("Share sheet opened");
        return;
      }
    } catch (_) {}
    try {
      await navigator.clipboard.writeText(text);
      showToast("Invite text copied");
    } catch (_) {
      showToast("Share unavailable — copy manually from Edit");
    }
  }

  function orderFacebook() {
    window.open(FB_PAGE, "_blank", "noopener,noreferrer");
    showToast("Opening Facebook page");
  }

  function onPhoto(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        state = { ...state, photoDataUrl: reader.result };
        showToast("Photo added to invite");
      }
    };
    reader.readAsDataURL(file);
  }

  function syncNav() {
    document.querySelectorAll(".nav button").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tab);
    });
  }

  function renderGallery() {
    const filtered = filter === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.occasion === filter);
    const chips = OCCASIONS.map((o) =>
      `<button type="button" class="chip${filter === o ? " active" : ""}" data-filter="${esc(o)}">${esc(occasionLabel(o))}</button>`
    ).join("");
    const cards = filtered.map((t) => {
      const fake = { ...t.defaults, font: "serif", palette: t.palette, photoDataUrl: null };
      return `<button type="button" class="card" data-open="${t.id}">
        <div class="thumb-wrap" style="background:${t.palette.bg}"><div class="thumb-inner">${renderInviteArt(t, fake, true)}</div></div>
        <div class="theme">${esc(t.theme)}</div>
        <div class="meta">${esc(occasionLabel(t.occasion))} · ${esc(t.tier)}</div>
        <div class="price">${formatPhp(t.pricePhp)}</div>
      </button>`;
    }).join("");
    return `<div class="hint">Choose a template for your event. Each design is unique — tap to edit live.</div>
      <div class="chips">${chips}</div>
      <div class="grid">${cards}</div>`;
  }

  function renderEdit() {
    const t = template();
    const fields = [
      ["names", "Names", false],
      ["title", "Event title", false],
      ["date", "Date", false],
      ["time", "Time", false],
      ["venue", "Venue", false],
      ["rsvp", "RSVP", false],
      ["message", "Message", true]
    ].map(([key, label, multi]) =>
      multi
        ? `<label class="field"><span>${label}</span><textarea data-field="${key}" rows="3">${esc(state[key])}</textarea></label>`
        : `<label class="field"><span>${label}</span><input type="text" data-field="${key}" value="${esc(state[key])}"/></label>`
    ).join("");

    const colorKeys = [
      ["bg", "Background"], ["accent", "Accent"], ["accent2", "Gold / 2nd"], ["ink", "Text"], ["soft", "Soft"]
    ].map(([key, label]) =>
      `<label><input type="color" data-color="${key}" value="${state.palette[key]}" aria-label="${label}"/>${label}</label>`
    ).join("");

    const swatches = TEMPLATES.map((tt) =>
      `<button type="button" class="swatch" title="${esc(tt.theme)}" data-palette="${tt.id}" style="background:linear-gradient(135deg, ${tt.palette.bg} 40%, ${tt.palette.accent} 40%, ${tt.palette.accent} 70%, ${tt.palette.accent2} 70%)"></button>`
    ).join("");

    const fonts = FONT_LABELS.map((f) =>
      `<button type="button" class="chip${state.font === f.key ? " active" : ""}" data-font="${f.key}" style="font-family:${FONT_STACKS[f.key]}">${esc(f.label)}</button>`
    ).join("");

    return `
      <div class="edit-header">
        <div>
          <div class="title">${esc(t.theme)}</div>
          <div class="meta">${esc(occasionLabel(t.occasion))} · ${formatPhp(t.pricePhp)}</div>
        </div>
        <button type="button" class="chip" id="btn-change-template">Change template</button>
      </div>
      <div class="preview">${renderInviteArt(t, state, false)}</div>
      <div class="actions">
        <button type="button" class="btn primary" id="btn-download"${downloading ? " disabled" : ""}>${downloading ? "Saving…" : "Download PNG"}</button>
        <button type="button" class="btn" id="btn-share">Share</button>
        <button type="button" class="btn" id="btn-order-fb">Order on FB</button>
      </div>
      <div class="fields">${fields}</div>
      <div class="section">
        <div class="section-label">Color palette</div>
        <div class="colors">${colorKeys}<button type="button" class="chip" id="btn-reset-colors">Reset colors</button></div>
        <div class="section-label">Quick swaps from other Diff templates</div>
        <div class="swatches">${swatches}</div>
      </div>
      <div class="section">
        <div class="section-label">Font</div>
        <div class="chips">${fonts}</div>
      </div>
      <div class="section">
        <div class="section-label">Photo</div>
        <input type="file" id="photo-input" accept="image/*" class="hidden"/>
        <div class="actions" style="grid-template-columns:1fr${state.photoDataUrl ? " 1fr" : ""}">
          <button type="button" class="btn" id="btn-upload">Upload photo</button>
          ${state.photoDataUrl ? '<button type="button" class="btn" id="btn-remove-photo">Remove photo</button>' : ""}
        </div>
      </div>`;
  }

  function renderOrder() {
    return `<div class="order">
      <h2>Order a custom design</h2>
      <p class="hint">Diff Invitations creates editable digital invites for Filipino celebrations — wedding, debut, binyag, birthdays, and more. Message the Facebook page for a custom suite; template list prices start around ${formatPhp(510)}.</p>
      <button type="button" class="btn primary" id="btn-order-main">Order custom design on Facebook</button>
      <a class="link" href="${FB_PAGE}" target="_blank" rel="noopener noreferrer">${FB_PAGE}</a>
      <div class="order-box">No login and no payment in this Studio. Download or share your edit for free preview use; paid custom work and Canva suites are arranged on Facebook.</div>
    </div>`;
  }

  function render() {
    const root = document.getElementById("app");
    const body =
      tab === "gallery" ? renderGallery() :
      tab === "edit" ? renderEdit() :
      renderOrder();
    root.innerHTML = `
      <div class="brand">
        <div class="brand-left">
          ${LOGO_SVG}
          <div>
            <h1>Diff Invitations Studio</h1>
            <div class="sub">Digital invites · Philippines · prices in ₱</div>
          </div>
        </div>
        <a href="${FB_PAGE}" target="_blank" rel="noopener noreferrer">Order on FB →</a>
      </div>
      ${toast ? `<div class="toast">${esc(toast)}</div>` : ""}
      ${body}`;
    bind();
  }

  function bind() {
    document.querySelectorAll("[data-filter]").forEach((el) => {
      el.addEventListener("click", () => { filter = el.getAttribute("data-filter"); render(); });
    });
    document.querySelectorAll("[data-open]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = Number(el.getAttribute("data-open"));
        const t = TEMPLATES.find((x) => x.id === id);
        if (t) openTemplate(t);
      });
    });
    const change = document.getElementById("btn-change-template");
    if (change) change.addEventListener("click", () => { tab = "gallery"; syncNav(); render(); });

    document.querySelectorAll("[data-field]").forEach((el) => {
      const key = el.getAttribute("data-field");
      el.addEventListener("input", () => {
        state = { ...state, [key]: el.value };
        const preview = document.querySelector(".preview");
        if (preview) preview.innerHTML = renderInviteArt(template(), state, false);
      });
    });
    document.querySelectorAll("[data-color]").forEach((el) => {
      el.addEventListener("input", () => {
        const key = el.getAttribute("data-color");
        state = { ...state, palette: { ...state.palette, [key]: el.value } };
        const preview = document.querySelector(".preview");
        if (preview) preview.innerHTML = renderInviteArt(template(), state, false);
      });
    });
    document.querySelectorAll("[data-palette]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = Number(el.getAttribute("data-palette"));
        const t = TEMPLATES.find((x) => x.id === id);
        if (t) { state = { ...state, palette: { ...t.palette } }; render(); }
      });
    });
    document.querySelectorAll("[data-font]").forEach((el) => {
      el.addEventListener("click", () => { state = { ...state, font: el.getAttribute("data-font") }; render(); });
    });
    const reset = document.getElementById("btn-reset-colors");
    if (reset) reset.addEventListener("click", () => { state = { ...state, palette: { ...template().palette } }; render(); });

    const dl = document.getElementById("btn-download");
    if (dl) dl.addEventListener("click", () => downloadPng());
    const sh = document.getElementById("btn-share");
    if (sh) sh.addEventListener("click", () => shareInvite());
    const of = document.getElementById("btn-order-fb");
    if (of) of.addEventListener("click", () => orderFacebook());
    const om = document.getElementById("btn-order-main");
    if (om) om.addEventListener("click", () => orderFacebook());

    const upload = document.getElementById("btn-upload");
    const photoInput = document.getElementById("photo-input");
    if (upload && photoInput) {
      upload.addEventListener("click", () => photoInput.click());
      photoInput.addEventListener("change", () => {
        const f = photoInput.files && photoInput.files[0];
        onPhoto(f);
      });
    }
    const rem = document.getElementById("btn-remove-photo");
    if (rem) rem.addEventListener("click", () => { state = { ...state, photoDataUrl: null }; render(); });
  }

  document.querySelectorAll(".nav button").forEach((btn) => {
    btn.addEventListener("click", () => {
      tab = btn.getAttribute("data-tab");
      syncNav();
      render();
    });
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }

  render();
})();
