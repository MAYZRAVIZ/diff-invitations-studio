/* Diff Invitations Studio — Canva-like editor BUILD_MARKER=canva-v3-splash-20261102 */
(function () {
  "use strict";

  const FB_PAGE = "https://www.facebook.com/share/19ZiMRxuKm/?mibextid=wwXIfr";
  const LIVE_APP = "https://mayzraviz.github.io/diff-invitations-studio/";
  const STORAGE_KEY = "diff-invites-canva-v3";
  const W = 360, H = 640;
  const BUILD_MARKER = "canva-v3-splash-20261102";

  const FONTS = {
    serif: 'Georgia, "Times New Roman", Times, serif',
    sans: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    script: '"Segoe Script", "Brush Script MT", "Apple Chancery", cursive',
    display: 'Palatino, "Palatino Linotype", "Book Antiqua", serif'
  };

  function uid() {
    return "e" + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
  }
  function formatPhp(n) { return "₱" + n.toLocaleString("en-PH"); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function occasionLabel(o) { return o === "Baptism" ? "Binyag" : o; }
  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
  function deepClone(o) { return JSON.parse(JSON.stringify(o)); }

  function textEl(opts) {
    return {
      id: uid(), type: "text",
      x: opts.x, y: opts.y, w: opts.w || 280, h: opts.h || 36,
      rotation: opts.rotation || 0, opacity: opts.opacity == null ? 1 : opts.opacity,
      text: opts.text || "Text",
      fontFamily: opts.fontFamily || "serif",
      fontSize: opts.fontSize || 18,
      color: opts.color || "#2C2C2C",
      align: opts.align || "center",
      bold: !!opts.bold, italic: !!opts.italic,
      letterSpacing: opts.letterSpacing || 0
    };
  }
  function shapeEl(opts) {
    return {
      id: uid(), type: "shape",
      x: opts.x, y: opts.y, w: opts.w, h: opts.h,
      rotation: opts.rotation || 0, opacity: opts.opacity == null ? 1 : opts.opacity,
      shape: opts.shape || "rect", // rect | ellipse | line | leaf | arch | triangle
      fill: opts.fill || "#6B7F5E",
      stroke: opts.stroke || "transparent",
      strokeWidth: opts.strokeWidth || 0,
      radius: opts.radius || 0
    };
  }
  function imageEl(opts) {
    return {
      id: uid(), type: "image",
      x: opts.x, y: opts.y, w: opts.w, h: opts.h,
      rotation: opts.rotation || 0, opacity: opts.opacity == null ? 1 : opts.opacity,
      src: opts.src || null,
      radius: opts.radius || 0,
      placeholder: opts.placeholder || "#E8E4D9"
    };
  }

  function buildTemplate(meta, bg, elements) {
    return { ...meta, bg, elements };
  }

  const TEMPLATES = [
    buildTemplate(
      { id: 1, occasion: "Wedding", theme: "Sage Arch Botanical", pricePhp: 699, tier: "Suite" },
      { color: "#F4F1EA", image: null },
      [
        shapeEl({ x: 48, y: 70, w: 264, h: 150, shape: "arch", fill: "transparent", stroke: "#6B7F5E", strokeWidth: 2.2 }),
        shapeEl({ x: 58, y: 82, w: 244, h: 138, shape: "arch", fill: "transparent", stroke: "#C9A96E", strokeWidth: 1 }),
        shapeEl({ x: 56, y: 110, w: 28, h: 14, shape: "leaf", fill: "#6B7F5E", rotation: -40 }),
        shapeEl({ x: 276, y: 110, w: 28, h: 14, shape: "leaf", fill: "#6B7F5E", rotation: 40 }),
        imageEl({ x: 132, y: 102, w: 96, h: 96, radius: 48, placeholder: "#9A9A8D" }),
        textEl({ x: 40, y: 250, w: 280, h: 28, text: "WE'RE GETTING MARRIED", fontSize: 13, color: "#6B7F5E", letterSpacing: 2, fontFamily: "serif" }),
        textEl({ x: 40, y: 286, w: 280, h: 40, text: "Maria & Juan", fontSize: 28, bold: true, color: "#2C2C2C", fontFamily: "serif" }),
        shapeEl({ x: 110, y: 336, w: 140, h: 2, shape: "line", fill: "#C9A96E" }),
        textEl({ x: 40, y: 352, w: 280, h: 28, text: "Saturday, 14 March 2027", fontSize: 13, color: "#2C2C2C" }),
        textEl({ x: 40, y: 380, w: 280, h: 24, text: "3:00 in the afternoon", fontSize: 12, color: "#9A9A8D" }),
        textEl({ x: 40, y: 408, w: 280, h: 28, text: "The Garden Pavilion, Tagaytay", fontSize: 12, color: "#2C2C2C" }),
        textEl({ x: 40, y: 452, w: 280, h: 48, text: "With joyful hearts we invite you to celebrate our wedding day.", fontSize: 11, color: "#9A9A8D" }),
        textEl({ x: 40, y: 512, w: 280, h: 28, text: "RSVP by 1 Feb · 0917 000 0000", fontSize: 11, color: "#6B7F5E" }),
        textEl({ x: 40, y: 590, w: 280, h: 20, text: "DIFF INVITATIONS", fontSize: 9, color: "#9A9A8D", letterSpacing: 2 })
      ]
    ),
    buildTemplate(
      { id: 2, occasion: "Debut (18th)", theme: "Blush Champagne Glam", pricePhp: 549, tier: "Editable" },
      { color: "#FFF5F7", image: null },
      [
        shapeEl({ x: 28, y: 28, w: 304, h: 584, shape: "rect", fill: "transparent", stroke: "#D4AF37", strokeWidth: 1.2, radius: 4 }),
        shapeEl({ x: 34, y: 34, w: 292, h: 572, shape: "rect", fill: "transparent", stroke: "#E8B4B8", strokeWidth: 0.6, radius: 4 }),
        imageEl({ x: 120, y: 70, w: 120, h: 120, radius: 60, placeholder: "#F5E6D3" }),
        textEl({ x: 40, y: 210, w: 280, h: 24, text: "TURNING EIGHTEEN", fontSize: 12, color: "#E8B4B8", letterSpacing: 2, fontFamily: "script" }),
        textEl({ x: 40, y: 240, w: 280, h: 44, text: "Isabella Reyes", fontSize: 30, bold: true, color: "#4A3728", fontFamily: "script" }),
        shapeEl({ x: 110, y: 294, w: 140, h: 2, shape: "line", fill: "#D4AF37" }),
        textEl({ x: 40, y: 312, w: 280, h: 28, text: "Saturday, 6 June 2026", fontSize: 13, color: "#4A3728", fontFamily: "script" }),
        textEl({ x: 40, y: 340, w: 280, h: 24, text: "6:00 in the evening", fontSize: 12, color: "#E8B4B8", fontFamily: "script" }),
        textEl({ x: 40, y: 368, w: 280, h: 28, text: "Grand Ballroom, Makati", fontSize: 12, color: "#4A3728", fontFamily: "script" }),
        textEl({ x: 40, y: 416, w: 280, h: 48, text: "Please join us as we celebrate her debut — a night of grace and joy.", fontSize: 11, color: "#E8B4B8", fontFamily: "script" }),
        textEl({ x: 40, y: 480, w: 280, h: 28, text: "RSVP · isabella.debut@email.com", fontSize: 11, color: "#E8B4B8", fontFamily: "script" })
      ]
    ),
    buildTemplate(
      { id: 3, occasion: "Baptism", theme: "Ivory Dove Soft", pricePhp: 399, tier: "Editable" },
      { color: "#FFFEF9", image: null },
      [
        shapeEl({ x: 24, y: 24, w: 312, h: 592, shape: "rect", fill: "transparent", stroke: "#C0C0C0", strokeWidth: 1 }),
        shapeEl({ x: 32, y: 32, w: 296, h: 576, shape: "rect", fill: "transparent", stroke: "#A8C5D4", strokeWidth: 0.8 }),
        shapeEl({ x: 144, y: 98, w: 72, h: 44, shape: "ellipse", fill: "#A8C5D4", opacity: 0.9 }),
        textEl({ x: 40, y: 200, w: 280, h: 24, text: "HOLY BAPTISM", fontSize: 13, color: "#A8C5D4", letterSpacing: 2 }),
        textEl({ x: 40, y: 232, w: 280, h: 36, text: "Baby Lucas Santos", fontSize: 24, bold: true, color: "#5C6B73" }),
        shapeEl({ x: 110, y: 280, w: 140, h: 2, shape: "line", fill: "#C0C0C0" }),
        textEl({ x: 40, y: 298, w: 280, h: 28, text: "Sunday, 12 April 2026", fontSize: 13, color: "#5C6B73" }),
        textEl({ x: 40, y: 326, w: 280, h: 24, text: "10:00 in the morning", fontSize: 12, color: "#E8E4D9" }),
        textEl({ x: 40, y: 354, w: 280, h: 40, text: "Parish of the Holy Family, Quezon City", fontSize: 12, color: "#5C6B73" }),
        textEl({ x: 40, y: 410, w: 280, h: 48, text: "With grateful hearts we invite you to the baptism of our little one.", fontSize: 11, color: "#E8E4D9" }),
        textEl({ x: 40, y: 478, w: 280, h: 28, text: "Godparents & family · please confirm by SMS", fontSize: 11, color: "#A8C5D4" })
      ]
    ),
    buildTemplate(
      { id: 4, occasion: "Kids Birthday", theme: "Jungle Safari Friends", pricePhp: 299, tier: "Basic" },
      { color: "#FFF8E7", image: null },
      [
        shapeEl({ x: -10, y: -10, w: 100, h: 100, shape: "ellipse", fill: "#5B8C5A", opacity: 0.15 }),
        shapeEl({ x: 280, y: 40, w: 80, h: 80, shape: "ellipse", fill: "#E8A838", opacity: 0.2 }),
        shapeEl({ x: 110, y: 48, w: 140, h: 56, shape: "rect", fill: "#E8A838", radius: 28 }),
        textEl({ x: 110, y: 58, w: 140, h: 40, text: "AGE 5", fontSize: 22, bold: true, color: "#2F4A3C", fontFamily: "sans" }),
        shapeEl({ x: 48, y: 186, w: 44, h: 28, shape: "ellipse", fill: "#5B8C5A" }),
        shapeEl({ x: 272, y: 196, w: 36, h: 24, shape: "ellipse", fill: "#D4654A" }),
        imageEl({ x: 105, y: 130, w: 150, h: 110, radius: 16, placeholder: "#E8A838" }),
        textEl({ x: 40, y: 270, w: 280, h: 24, text: "JUNGLE BIRTHDAY PARTY", fontSize: 14, color: "#5B8C5A", fontFamily: "sans", letterSpacing: 1 }),
        textEl({ x: 40, y: 300, w: 280, h: 36, text: "Mateo turns 5!", fontSize: 26, bold: true, color: "#2F4A3C", fontFamily: "sans" }),
        textEl({ x: 40, y: 350, w: 280, h: 28, text: "Sunday, 9 August 2026", fontSize: 13, color: "#2F4A3C", fontFamily: "sans" }),
        textEl({ x: 40, y: 378, w: 280, h: 24, text: "2:00 – 5:00 pm", fontSize: 12, color: "#D4654A", fontFamily: "sans" }),
        textEl({ x: 40, y: 406, w: 280, h: 28, text: "Backyard Safari, Parañaque", fontSize: 12, color: "#2F4A3C", fontFamily: "sans" }),
        textEl({ x: 40, y: 450, w: 280, h: 48, text: "Come roar, swing, and celebrate with Mateo and his safari friends!", fontSize: 11, color: "#D4654A", fontFamily: "sans" }),
        textEl({ x: 40, y: 514, w: 280, h: 28, text: "Text Mama · 0918 111 2222", fontSize: 11, color: "#5B8C5A", fontFamily: "sans" })
      ]
    ),
    buildTemplate(
      { id: 5, occasion: "Baby Shower", theme: "Sage Neutral Sprinkle", pricePhp: 449, tier: "Editable" },
      { color: "#FAF9F6", image: null },
      [
        shapeEl({ x: 40, y: 36, w: 8, h: 8, shape: "ellipse", fill: "#B7C9A8" }),
        shapeEl({ x: 80, y: 50, w: 6, h: 6, shape: "ellipse", fill: "#F5E6CC" }),
        shapeEl({ x: 200, y: 40, w: 8, h: 8, shape: "ellipse", fill: "#B7C9A8" }),
        shapeEl({ x: 280, y: 52, w: 6, h: 6, shape: "ellipse", fill: "#F5E6CC" }),
        shapeEl({ x: 50, y: 84, w: 28, h: 14, shape: "leaf", fill: "#B7C9A8", rotation: -30 }),
        shapeEl({ x: 282, y: 90, w: 28, h: 14, shape: "leaf", fill: "#B7C9A8", rotation: 25 }),
        imageEl({ x: 110, y: 90, w: 140, h: 140, radius: 12, placeholder: "#F5E6CC" }),
        textEl({ x: 40, y: 250, w: 280, h: 24, text: "BABY SHOWER", fontSize: 13, color: "#B7C9A8", letterSpacing: 2 }),
        textEl({ x: 40, y: 282, w: 280, h: 36, text: "Welcome Baby Cruz", fontSize: 24, bold: true, color: "#6B7C6E" }),
        textEl({ x: 40, y: 332, w: 280, h: 28, text: "Saturday, 25 July 2026", fontSize: 13, color: "#6B7C6E" }),
        textEl({ x: 40, y: 360, w: 280, h: 24, text: "1:00 in the afternoon", fontSize: 12, color: "#D4C4B0" }),
        textEl({ x: 40, y: 388, w: 280, h: 28, text: "Casa Verde, Pasig", fontSize: 12, color: "#6B7C6E" }),
        textEl({ x: 40, y: 432, w: 280, h: 48, text: "Join us for games, gifts, and gentle celebration as we await baby.", fontSize: 11, color: "#D4C4B0" }),
        textEl({ x: 40, y: 498, w: 280, h: 28, text: "RSVP to Ana · 0920 333 4444", fontSize: 11, color: "#B7C9A8" })
      ]
    ),
    buildTemplate(
      { id: 6, occasion: "Gender Reveal", theme: "Peach Sky Surprise", pricePhp: 399, tier: "Editable" },
      { color: "#FFF5F0", image: null },
      [
        shapeEl({ x: 0, y: 0, w: 180, h: 640, shape: "rect", fill: "#F4A89A", opacity: 0.12 }),
        shapeEl({ x: 180, y: 0, w: 180, h: 640, shape: "rect", fill: "#A8D5E5", opacity: 0.15 }),
        textEl({ x: 40, y: 100, w: 280, h: 60, text: "?", fontSize: 48, bold: true, color: "#5A6A7A" }),
        textEl({ x: 40, y: 180, w: 280, h: 24, text: "GENDER REVEAL PARTY", fontSize: 13, color: "#F4A89A", letterSpacing: 2 }),
        textEl({ x: 40, y: 214, w: 280, h: 36, text: "Boy or Girl?", fontSize: 26, bold: true, color: "#5A6A7A" }),
        textEl({ x: 40, y: 268, w: 280, h: 28, text: "Sunday, 3 May 2026", fontSize: 13, color: "#5A6A7A" }),
        textEl({ x: 40, y: 296, w: 280, h: 24, text: "4:00 in the afternoon", fontSize: 12, color: "#F7E7CE" }),
        textEl({ x: 40, y: 324, w: 280, h: 28, text: "Sky Lounge, BGC", fontSize: 12, color: "#5A6A7A" }),
        textEl({ x: 40, y: 372, w: 280, h: 48, text: "Help us pop the surprise — pink or blue, love is true.", fontSize: 11, color: "#F7E7CE" }),
        textEl({ x: 40, y: 440, w: 280, h: 28, text: "RSVP · reveal@family.ph", fontSize: 11, color: "#F4A89A" })
      ]
    ),
    buildTemplate(
      { id: 7, occasion: "Corporate", theme: "Midnight Navy Formal", pricePhp: 599, tier: "Editable" },
      { color: "#FFFFFF", image: null },
      [
        shapeEl({ x: 0, y: 0, w: 360, h: 150, shape: "rect", fill: "#1B2A4A" }),
        shapeEl({ x: 40, y: 148, w: 280, h: 3, shape: "line", fill: "#C9A96E" }),
        textEl({ x: 40, y: 48, w: 280, h: 24, text: "FORMAL INVITATION", fontSize: 11, color: "#C9A96E", letterSpacing: 3, fontFamily: "sans" }),
        textEl({ x: 40, y: 80, w: 280, h: 36, text: "You Are Cordially Invited", fontSize: 20, bold: true, color: "#FFFFFF", fontFamily: "sans" }),
        imageEl({ x: 120, y: 175, w: 120, h: 90, radius: 4, placeholder: "#E8E8E8" }),
        textEl({ x: 40, y: 290, w: 280, h: 36, text: "Diff Co. Leadership Summit", fontSize: 20, bold: true, color: "#1B2A4A", fontFamily: "sans" }),
        textEl({ x: 40, y: 340, w: 280, h: 28, text: "Thursday, 15 October 2026", fontSize: 13, color: "#4A5568", fontFamily: "sans" }),
        textEl({ x: 40, y: 368, w: 280, h: 24, text: "6:30 pm reception", fontSize: 12, color: "#4A5568", fontFamily: "sans" }),
        textEl({ x: 40, y: 396, w: 280, h: 28, text: "Shangri-La The Fort, Taguig", fontSize: 12, color: "#4A5568", fontFamily: "sans" }),
        textEl({ x: 40, y: 444, w: 280, h: 48, text: "Join us for an evening of insight, networking, and celebration.", fontSize: 11, color: "#4A5568", fontFamily: "sans" }),
        textEl({ x: 40, y: 510, w: 280, h: 28, text: "rsvp@diffco.ph · Business attire", fontSize: 11, color: "#1B2A4A", fontFamily: "sans" })
      ]
    ),
    buildTemplate(
      { id: 8, occasion: "Milestone Birthday", theme: "Noir Gold Jubilee", pricePhp: 499, tier: "Editable" },
      { color: "#1C1C1C", image: null },
      [
        shapeEl({ x: 18, y: 18, w: 324, h: 604, shape: "rect", fill: "transparent", stroke: "#D4AF37", strokeWidth: 2 }),
        shapeEl({ x: 26, y: 26, w: 308, h: 588, shape: "rect", fill: "transparent", stroke: "#D4AF37", strokeWidth: 0.7 }),
        textEl({ x: 40, y: 100, w: 280, h: 24, text: "CELEBRATING", fontSize: 14, color: "#D4AF37", letterSpacing: 4 }),
        textEl({ x: 40, y: 150, w: 280, h: 24, text: "GOLDEN JUBILEE", fontSize: 13, color: "#D4AF37", letterSpacing: 2 }),
        textEl({ x: 40, y: 186, w: 280, h: 40, text: "Carmen turns 50", fontSize: 28, bold: true, color: "#F5F0E6" }),
        shapeEl({ x: 110, y: 240, w: 140, h: 2, shape: "line", fill: "#D4AF37" }),
        textEl({ x: 40, y: 260, w: 280, h: 28, text: "Saturday, 21 November 2026", fontSize: 13, color: "#F5F0E6" }),
        textEl({ x: 40, y: 288, w: 280, h: 24, text: "7:00 in the evening", fontSize: 12, color: "#8B7355" }),
        textEl({ x: 40, y: 316, w: 280, h: 28, text: "The Peninsula Manila", fontSize: 12, color: "#F5F0E6" }),
        textEl({ x: 40, y: 364, w: 280, h: 48, text: "Fifty years of grace — dinner, dancing, and champagne toast.", fontSize: 11, color: "#8B7355" }),
        textEl({ x: 40, y: 430, w: 280, h: 28, text: "RSVP by 1 Nov · 0917 555 6666", fontSize: 11, color: "#D4AF37" })
      ]
    ),
    buildTemplate(
      { id: 9, occasion: "Bridal Shower", theme: "Terracotta Fan Romance", pricePhp: 449, tier: "Editable" },
      { color: "#FBF7F2", image: null },
      [
        shapeEl({ x: 100, y: 80, w: 160, h: 120, shape: "triangle", fill: "transparent", stroke: "#C4785A", strokeWidth: 1.5 }),
        shapeEl({ x: 120, y: 100, w: 120, h: 90, shape: "triangle", fill: "#E8D5C4", stroke: "#D4A574", strokeWidth: 1, opacity: 0.5 }),
        textEl({ x: 40, y: 250, w: 280, h: 24, text: "BRIDAL SHOWER", fontSize: 13, color: "#C4785A", letterSpacing: 2, fontFamily: "script" }),
        textEl({ x: 40, y: 284, w: 280, h: 40, text: "For the Bride-to-Be", fontSize: 26, bold: true, color: "#5C4033", fontFamily: "script" }),
        textEl({ x: 40, y: 340, w: 280, h: 28, text: "Sunday, 8 February 2026", fontSize: 13, color: "#5C4033", fontFamily: "script" }),
        textEl({ x: 40, y: 368, w: 280, h: 24, text: "11:00 am brunch", fontSize: 12, color: "#E8D5C4", fontFamily: "script" }),
        textEl({ x: 40, y: 396, w: 280, h: 28, text: "Amelie's Café, Alabang", fontSize: 12, color: "#5C4033", fontFamily: "script" }),
        textEl({ x: 40, y: 444, w: 280, h: 48, text: "Sip, shower, and spoil our dear bride before the big day.", fontSize: 11, color: "#E8D5C4", fontFamily: "script" }),
        textEl({ x: 40, y: 510, w: 280, h: 40, text: "Hosted by the bridal party · RSVP via Messenger", fontSize: 11, color: "#C4785A", fontFamily: "script" })
      ]
    ),
    buildTemplate(
      { id: 10, occasion: "Engagement", theme: "Quiet Luxury Ivory", pricePhp: 799, tier: "Suite" },
      { color: "#FAF8F5", image: null },
      [
        shapeEl({ x: 40, y: 48, w: 280, h: 544, shape: "rect", fill: "transparent", stroke: "#E8DFD0", strokeWidth: 1 }),
        shapeEl({ x: 138, y: 98, w: 84, h: 84, shape: "ellipse", fill: "transparent", stroke: "#C9A96E", strokeWidth: 1.2 }),
        textEl({ x: 138, y: 124, w: 84, h: 36, text: "A&B", fontSize: 22, bold: true, color: "#3D3D3D", letterSpacing: 2 }),
        imageEl({ x: 140, y: 100, w: 80, h: 80, radius: 40, placeholder: "transparent" }),
        textEl({ x: 40, y: 220, w: 280, h: 24, text: "ENGAGEMENT DINNER", fontSize: 11, color: "#C9A96E", letterSpacing: 2 }),
        textEl({ x: 40, y: 252, w: 280, h: 36, text: "A & B", fontSize: 24, bold: true, color: "#3D3D3D" }),
        textEl({ x: 40, y: 304, w: 280, h: 28, text: "Friday, 18 December 2026", fontSize: 13, color: "#3D3D3D" }),
        textEl({ x: 40, y: 332, w: 280, h: 24, text: "7:00 in the evening", fontSize: 12, color: "#B8A99A" }),
        textEl({ x: 40, y: 360, w: 280, h: 28, text: "Private dining · Rockwell", fontSize: 12, color: "#3D3D3D" }),
        textEl({ x: 40, y: 408, w: 280, h: 48, text: "Celebrate with us as we begin this quiet, joyful chapter together.", fontSize: 11, color: "#B8A99A" }),
        textEl({ x: 40, y: 476, w: 280, h: 28, text: "Kindly reply by 1 Dec", fontSize: 11, color: "#C9A96E" })
      ]
    )
  ];

  const OCCASIONS = ["All", "Wedding", "Debut (18th)", "Baptism", "Kids Birthday", "Baby Shower", "Gender Reveal", "Corporate", "Milestone Birthday", "Bridal Shower", "Engagement"];

  // —— State ——
  let tab = "gallery";
  let filter = "All";
  let toast = null;
  let toastTimer = null;
  let doc = null; // { templateId, bg, elements }
  let selectedId = null;
  let editingTextId = null;
  let history = [];
  let histIndex = -1;
  let downloading = false;
  let scale = 1; // stage CSS scale vs design coords

  function showToast(msg) {
    toast = msg;
    render();
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast = null; render(); }, 2400);
  }

  function templateById(id) {
    return TEMPLATES.find((t) => t.id === id) || TEMPLATES[0];
  }

  function pushHistory() {
    if (!doc) return;
    history = history.slice(0, histIndex + 1);
    history.push(deepClone(doc));
    if (history.length > 40) history.shift();
    histIndex = history.length - 1;
    autosave();
  }

  function undo() {
    if (histIndex <= 0) return;
    histIndex--;
    doc = deepClone(history[histIndex]);
    selectedId = null;
    editingTextId = null;
    render();
  }
  function redo() {
    if (histIndex >= history.length - 1) return;
    histIndex++;
    doc = deepClone(history[histIndex]);
    selectedId = null;
    editingTextId = null;
    render();
  }

  function autosave() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ doc, histIndex, ts: Date.now(), marker: BUILD_MARKER }));
    } catch (_) {}
  }
  function loadAutosave() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (_) { return null; }
  }

  function openTemplate(t) {
    doc = {
      templateId: t.id,
      bg: deepClone(t.bg),
      elements: deepClone(t.elements).map((e) => ({ ...e, id: uid() }))
    };
    selectedId = null;
    editingTextId = null;
    history = [deepClone(doc)];
    histIndex = 0;
    tab = "edit";
    autosave();
    syncNav();
    render();
  }

  function selected() {
    if (!doc || !selectedId) return null;
    return doc.elements.find((e) => e.id === selectedId) || null;
  }

  // —— Shape SVG helpers ——
  function shapeInner(el) {
    const sw = el.strokeWidth || 0;
    const stroke = el.stroke || "transparent";
    const fill = el.fill || "#ccc";
    if (el.shape === "ellipse") {
      return `<svg width="100%" height="100%" viewBox="0 0 ${el.w} ${el.h}" preserveAspectRatio="none"><ellipse cx="${el.w/2}" cy="${el.h/2}" rx="${el.w/2 - sw}" ry="${el.h/2 - sw}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/></svg>`;
    }
    if (el.shape === "line") {
      return `<svg width="100%" height="100%" viewBox="0 0 ${el.w} ${Math.max(el.h, 4)}" preserveAspectRatio="none"><rect x="0" y="${Math.max(0,(el.h-2)/2)}" width="${el.w}" height="${Math.max(2, el.h)}" fill="${fill}" rx="1"/></svg>`;
    }
    if (el.shape === "leaf") {
      return `<svg width="100%" height="100%" viewBox="0 0 28 14" preserveAspectRatio="xMidYMid meet"><ellipse cx="14" cy="7" rx="14" ry="6" fill="${fill}" opacity="0.9"/></svg>`;
    }
    if (el.shape === "arch") {
      return `<svg width="100%" height="100%" viewBox="0 0 ${el.w} ${el.h}" preserveAspectRatio="none"><path d="M0 ${el.h} Q0 0 ${el.w/2} 0 Q${el.w} 0 ${el.w} ${el.h}" fill="none" stroke="${stroke}" stroke-width="${sw || 2}"/></svg>`;
    }
    if (el.shape === "triangle") {
      return `<svg width="100%" height="100%" viewBox="0 0 ${el.w} ${el.h}" preserveAspectRatio="none"><path d="M${el.w/2} 0 L${el.w} ${el.h} L0 ${el.h} Z" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/></svg>`;
    }
    // rect
    const r = el.radius || 0;
    return `<svg width="100%" height="100%" viewBox="0 0 ${el.w} ${el.h}" preserveAspectRatio="none"><rect x="${sw/2}" y="${sw/2}" width="${el.w-sw}" height="${el.h-sw}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/></svg>`;
  }

  function elStyle(el) {
    return `left:${el.x}px;top:${el.y}px;width:${el.w}px;height:${el.h}px;transform:rotate(${el.rotation || 0}deg);opacity:${el.opacity == null ? 1 : el.opacity};`;
  }

  function renderElementHTML(el, opts) {
    opts = opts || {};
    const sel = !opts.thumb && el.id === selectedId;
    const editing = !opts.thumb && el.id === editingTextId;
    let body = "";
    if (el.type === "text") {
      const ff = FONTS[el.fontFamily] || FONTS.serif;
      const style = `font-family:${ff};font-size:${el.fontSize}px;color:${el.color};text-align:${el.align};font-weight:${el.bold ? 700 : 400};font-style:${el.italic ? "italic" : "normal"};letter-spacing:${el.letterSpacing || 0}px;`;
      if (editing) {
        body = `<div class="el-body" contenteditable="true" data-edit-text="${el.id}" style="${style}" spellcheck="false">${esc(el.text).replace(/\n/g, "<br>")}</div>`;
      } else {
        body = `<div class="el-body" style="${style}">${esc(el.text)}</div>`;
      }
    } else if (el.type === "image") {
      const r = el.radius || 0;
      if (el.src) {
        body = `<div class="el-body" style="border-radius:${r}px;overflow:hidden"><img src="${el.src}" alt=""/></div>`;
      } else if (el.placeholder === "transparent") {
        body = `<div class="el-body" style="border-radius:${r}px"></div>`;
      } else {
        body = `<div class="el-body" style="border-radius:${r}px;background:${el.placeholder || "#ddd"};color:#888;font-size:11px">Tap · Add photo</div>`;
      }
    } else if (el.type === "shape") {
      body = `<div class="el-body">${shapeInner(el)}</div>`;
    }
    let chrome = "";
    if (sel && !editing) {
      chrome = `<div class="sel-box"></div>
        <div class="handle nw" data-handle="nw"></div>
        <div class="handle ne" data-handle="ne"></div>
        <div class="handle sw" data-handle="sw"></div>
        <div class="handle se" data-handle="se"></div>
        <div class="handle rot" data-handle="rot" title="Rotate">↻</div>`;
    }
    return `<div class="el ${el.type}${sel ? " selected" : ""}" data-id="${el.id}" style="${elStyle(el)}">${body}${chrome}</div>`;
  }

  function renderStageHTML(docObj, opts) {
    opts = opts || {};
    const bg = docObj.bg || { color: "#fff" };
    const bgStyle = `background-color:${bg.color || "#fff"};${bg.image ? `background-image:url(${bg.image});` : ""}`;
    const els = (docObj.elements || []).map((e) => renderElementHTML(e, opts)).join("");
    return `<div class="canvas-bg" style="${bgStyle}"></div>${els}`;
  }

  // —— Pointer interaction ——
  let drag = null;

  function stageScale() {
    const stage = document.querySelector(".canvas-stage");
    if (!stage) return 1;
    return stage.getBoundingClientRect().width / W;
  }

  function bindCanvasInteractions() {
    const stage = document.querySelector(".canvas-stage");
    if (!stage || !doc) return;
    scale = stageScale();

    // Deselect on background
    stage.addEventListener("pointerdown", (ev) => {
      if (ev.target === stage || ev.target.classList.contains("canvas-bg")) {
        if (editingTextId) commitTextEdit();
        selectedId = null;
        renderEditCanvasOnly();
      }
    });

    stage.querySelectorAll(".el").forEach((node) => {
      const id = node.getAttribute("data-id");
      node.addEventListener("pointerdown", (ev) => onElPointerDown(ev, id, node));
      node.addEventListener("dblclick", (ev) => {
        ev.preventDefault();
        const el = doc.elements.find((e) => e.id === id);
        if (el && el.type === "text") startTextEdit(id);
      });
      // iOS double-tap approx
      let lastTap = 0;
      node.addEventListener("pointerup", (ev) => {
        if (ev.pointerType === "touch") {
          const now = Date.now();
          if (now - lastTap < 320) {
            const el = doc.elements.find((e) => e.id === id);
            if (el && el.type === "text") startTextEdit(id);
          }
          lastTap = now;
        }
      });
    });
  }

  function onElPointerDown(ev, id, node) {
    if (editingTextId && editingTextId !== id) commitTextEdit();
    if (editingTextId === id) return; // let contenteditable work

    const handle = ev.target.closest("[data-handle]");
    const el = doc.elements.find((e) => e.id === id);
    if (!el) return;

    ev.preventDefault();
    ev.stopPropagation();
    try { node.setPointerCapture(ev.pointerId); } catch (_) {}

    selectedId = id;
    scale = stageScale();
    const startX = ev.clientX, startY = ev.clientY;
    const orig = deepClone(el);

    if (handle) {
      const corner = handle.getAttribute("data-handle");
      drag = { mode: corner === "rot" ? "rotate" : "resize", corner, id, startX, startY, orig, moved: false };
    } else {
      drag = { mode: "move", id, startX, startY, orig, moved: false };
    }
    renderEditCanvasOnly();

    const onMove = (e) => {
      if (!drag || drag.id !== id) return;
      e.preventDefault();
      const dx = (e.clientX - drag.startX) / scale;
      const dy = (e.clientY - drag.startY) / scale;
      if (Math.abs(dx) + Math.abs(dy) > 2) drag.moved = true;
      const target = doc.elements.find((x) => x.id === id);
      if (!target) return;
      if (drag.mode === "move") {
        target.x = Math.round(drag.orig.x + dx);
        target.y = Math.round(drag.orig.y + dy);
      } else if (drag.mode === "resize") {
        applyResize(target, drag.orig, drag.corner, dx, dy);
      } else if (drag.mode === "rotate") {
        const cx = drag.orig.x + drag.orig.w / 2;
        const cy = drag.orig.y + drag.orig.h / 2;
        const rect = document.querySelector(".canvas-stage").getBoundingClientRect();
        const px = (e.clientX - rect.left) / scale;
        const py = (e.clientY - rect.top) / scale;
        const ang = Math.atan2(py - cy, px - cx) * (180 / Math.PI) + 90;
        target.rotation = Math.round(ang);
      }
      paintEl(node, target);
    };
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      if (drag && drag.moved) pushHistory();
      drag = null;
      renderEditCanvasOnly();
      renderPropBar();
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  }

  function applyResize(target, orig, corner, dx, dy) {
    let x = orig.x, y = orig.y, w = orig.w, h = orig.h;
    if (corner.includes("e")) w = orig.w + dx;
    if (corner.includes("s")) h = orig.h + dy;
    if (corner.includes("w")) { x = orig.x + dx; w = orig.w - dx; }
    if (corner.includes("n")) { y = orig.y + dy; h = orig.h - dy; }
    w = Math.max(24, w); h = Math.max(18, h);
    target.x = Math.round(x); target.y = Math.round(y);
    target.w = Math.round(w); target.h = Math.round(h);
  }

  function paintEl(node, el) {
    node.style.left = el.x + "px";
    node.style.top = el.y + "px";
    node.style.width = el.w + "px";
    node.style.height = el.h + "px";
    node.style.transform = `rotate(${el.rotation || 0}deg)`;
    node.style.opacity = el.opacity == null ? 1 : el.opacity;
    if (el.type === "shape") {
      const body = node.querySelector(".el-body");
      if (body) body.innerHTML = shapeInner(el);
    }
  }

  function startTextEdit(id) {
    selectedId = id;
    editingTextId = id;
    renderEditCanvasOnly();
    const node = document.querySelector(`[data-edit-text="${id}"]`);
    if (node) {
      node.focus();
      // place caret at end
      try {
        const range = document.createRange();
        range.selectNodeContents(node);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } catch (_) {}
      node.addEventListener("blur", () => commitTextEdit(), { once: true });
      node.addEventListener("keydown", (e) => {
        if (e.key === "Escape") { e.preventDefault(); commitTextEdit(); }
      });
    }
  }

  function commitTextEdit() {
    if (!editingTextId || !doc) { editingTextId = null; return; }
    const node = document.querySelector(`[data-edit-text="${editingTextId}"]`);
    const el = doc.elements.find((e) => e.id === editingTextId);
    if (node && el) {
      const text = node.innerText.replace(/\u00a0/g, " ").trimEnd();
      if (text !== el.text) {
        el.text = text || el.text;
        pushHistory();
      }
    }
    editingTextId = null;
    renderEditCanvasOnly();
    renderPropBar();
  }

  function renderEditCanvasOnly() {
    const wrap = document.querySelector(".canvas-stage");
    if (!wrap || !doc) return;
    // Preserve scale transform on thumb? main stage uses CSS aspect-ratio; elements in design coords
    // Scale children via transform on an inner design layer
    let design = wrap.querySelector(".design-layer");
    if (!design) {
      wrap.innerHTML = `<div class="design-layer" style="position:absolute;left:0;top:0;width:${W}px;height:${H}px;transform-origin:top left;"></div>`;
      design = wrap.querySelector(".design-layer");
    }
    const s = wrap.clientWidth / W;
    design.style.transform = `scale(${s})`;
    design.innerHTML = renderStageHTML(doc, {});
    bindCanvasInteractions();
  }

  function renderPropBar() {
    const bar = document.getElementById("prop-bar");
    if (!bar) return;
    const el = selected();
    if (!el) {
      bar.innerHTML = `<div class="hint" style="margin:0">Tap any text, photo, or shape to edit · Drag to move · Handles to resize/rotate · Double-tap text to type</div>`;
      return;
    }
    let html = `<div class="row">`;
    if (el.type === "text") {
      html += `
        <label>Font<select data-prop="fontFamily">
          <option value="serif"${el.fontFamily==="serif"?" selected":""}>Serif</option>
          <option value="sans"${el.fontFamily==="sans"?" selected":""}>Sans</option>
          <option value="script"${el.fontFamily==="script"?" selected":""}>Script</option>
          <option value="display"${el.fontFamily==="display"?" selected":""}>Display</option>
        </select></label>
        <label>Size<input type="number" min="8" max="96" data-prop="fontSize" value="${el.fontSize}"/></label>
        <label>Color<input type="color" data-prop="color" value="${el.color}"/></label>
        <button type="button" class="btn icon" data-act="bold" style="font-weight:700">B</button>
        <button type="button" class="btn icon" data-act="italic" style="font-style:italic">I</button>
        <button type="button" class="btn icon" data-act="align-left">☰</button>
        <button type="button" class="btn icon" data-act="align-center">≡</button>
        <button type="button" class="btn icon" data-act="align-right">☰</button>`;
    } else if (el.type === "shape") {
      html += `
        <label>Fill<input type="color" data-prop="fill" value="${toHex(el.fill)}"/></label>
        <label>Stroke<input type="color" data-prop="stroke" value="${toHex(el.stroke === "transparent" ? "#000000" : el.stroke)}"/></label>`;
    } else if (el.type === "image") {
      html += `<button type="button" class="btn primary" data-act="replace-photo">Replace photo</button>
        <button type="button" class="btn" data-act="clear-photo">Clear</button>`;
    }
    html += `
      <label>Opacity<input type="range" min="0.1" max="1" step="0.05" data-prop="opacity" value="${el.opacity == null ? 1 : el.opacity}"/></label>
      <button type="button" class="btn icon" data-act="layer-up" title="Layer up">⬆</button>
      <button type="button" class="btn icon" data-act="layer-down" title="Layer down">⬇</button>
      <button type="button" class="btn icon" data-act="duplicate" title="Duplicate">⧉</button>
      <button type="button" class="btn icon" data-act="delete" title="Delete">🗑</button>
    </div>`;
    bar.innerHTML = html;
    bindPropBar();
  }

  function toHex(c) {
    if (!c || c === "transparent") return "#cccccc";
    if (c[0] === "#") return c.length === 7 ? c : "#000000";
    return "#888888";
  }

  function bindPropBar() {
    const bar = document.getElementById("prop-bar");
    if (!bar) return;
    bar.querySelectorAll("[data-prop]").forEach((inp) => {
      const evName = inp.type === "color" || inp.type === "range" ? "input" : "change";
      inp.addEventListener(evName, () => {
        const el = selected();
        if (!el) return;
        const key = inp.getAttribute("data-prop");
        let val = inp.value;
        if (key === "fontSize") val = Number(val) || 16;
        if (key === "opacity") val = Number(val);
        el[key] = val;
        pushHistory();
        renderEditCanvasOnly();
      });
    });
    bar.querySelectorAll("[data-act]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const act = btn.getAttribute("data-act");
        const el = selected();
        if (!el && act !== "replace-photo") return;
        if (act === "bold") { el.bold = !el.bold; pushHistory(); }
        else if (act === "italic") { el.italic = !el.italic; pushHistory(); }
        else if (act === "align-left") { el.align = "left"; pushHistory(); }
        else if (act === "align-center") { el.align = "center"; pushHistory(); }
        else if (act === "align-right") { el.align = "right"; pushHistory(); }
        else if (act === "layer-up") {
          const i = doc.elements.findIndex((e) => e.id === el.id);
          if (i < doc.elements.length - 1) {
            const t = doc.elements[i]; doc.elements[i] = doc.elements[i + 1]; doc.elements[i + 1] = t;
            pushHistory();
          }
        } else if (act === "layer-down") {
          const i = doc.elements.findIndex((e) => e.id === el.id);
          if (i > 0) {
            const t = doc.elements[i]; doc.elements[i] = doc.elements[i - 1]; doc.elements[i - 1] = t;
            pushHistory();
          }
        } else if (act === "duplicate") {
          const copy = deepClone(el); copy.id = uid(); copy.x += 12; copy.y += 12;
          doc.elements.push(copy); selectedId = copy.id; pushHistory();
        } else if (act === "delete") {
          doc.elements = doc.elements.filter((e) => e.id !== el.id);
          selectedId = null; pushHistory();
        } else if (act === "replace-photo") {
          pickPhoto((dataUrl) => {
            if (el && el.type === "image") { el.src = dataUrl; pushHistory(); renderEditCanvasOnly(); renderPropBar(); showToast("Photo updated"); }
          });
          return;
        } else if (act === "clear-photo") {
          el.src = null; pushHistory();
        }
        renderEditCanvasOnly();
        renderPropBar();
      });
    });
  }

  function pickPhoto(cb) {
    const input = document.getElementById("photo-input");
    if (!input) return;
    input.onchange = () => {
      const f = input.files && input.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = () => { if (typeof reader.result === "string") cb(reader.result); };
      reader.readAsDataURL(f);
      input.value = "";
    };
    input.click();
  }

  function addText() {
    if (!doc) return;
    const el = textEl({ x: 60, y: 280, w: 240, h: 40, text: "New text", fontSize: 20, color: "#333333" });
    doc.elements.push(el); selectedId = el.id; pushHistory(); render();
  }
  function addPhoto() {
    if (!doc) return;
    pickPhoto((dataUrl) => {
      const el = imageEl({ x: 90, y: 200, w: 180, h: 180, radius: 12, src: dataUrl });
      doc.elements.push(el); selectedId = el.id; pushHistory(); render(); showToast("Photo added");
    });
  }
  function addShape(kind) {
    if (!doc) return;
    let el;
    if (kind === "circle") el = shapeEl({ x: 130, y: 240, w: 100, h: 100, shape: "ellipse", fill: "#FF3E9A", opacity: 0.85 });
    else if (kind === "leaf") el = shapeEl({ x: 140, y: 260, w: 40, h: 20, shape: "leaf", fill: "#6B7F5E", rotation: -20 });
    else el = shapeEl({ x: 110, y: 250, w: 140, h: 80, shape: "rect", fill: "#C9A96E", radius: 12, opacity: 0.9 });
    doc.elements.push(el); selectedId = el.id; pushHistory(); render();
  }

  // —— Export PNG (2x) with iOS-friendly share/open ——
  async function exportPng() {
    if (!doc) return;
    downloading = true; render();
    try {
      const canvas = document.createElement("canvas");
      canvas.width = W * 2; canvas.height = H * 2;
      const ctx = canvas.getContext("2d");
      ctx.scale(2, 2);
      ctx.fillStyle = doc.bg.color || "#fff";
      ctx.fillRect(0, 0, W, H);
      if (doc.bg.image) {
        try {
          const img = await loadImg(doc.bg.image);
          ctx.drawImage(img, 0, 0, W, H);
        } catch (_) {}
      }
      for (const el of doc.elements) {
        ctx.save();
        ctx.globalAlpha = el.opacity == null ? 1 : el.opacity;
        const cx = el.x + el.w / 2, cy = el.y + el.h / 2;
        ctx.translate(cx, cy);
        ctx.rotate(((el.rotation || 0) * Math.PI) / 180);
        ctx.translate(-cx, -cy);
        if (el.type === "text") {
          const ff = FONTS[el.fontFamily] || FONTS.serif;
          ctx.fillStyle = el.color;
          ctx.font = `${el.italic ? "italic " : ""}${el.bold ? "700 " : "400 "}${el.fontSize}px ${ff}`;
          ctx.textAlign = el.align || "center";
          ctx.textBaseline = "top";
          const x = el.align === "left" ? el.x + 4 : el.align === "right" ? el.x + el.w - 4 : el.x + el.w / 2;
          wrapText(ctx, el.text, x, el.y + 4, el.w - 8, el.fontSize * 1.25);
        } else if (el.type === "image" && el.src) {
          try {
            const img = await loadImg(el.src);
            roundedClip(ctx, el.x, el.y, el.w, el.h, el.radius || 0);
            ctx.drawImage(img, el.x, el.y, el.w, el.h);
            ctx.restore(); ctx.save();
            ctx.globalAlpha = el.opacity == null ? 1 : el.opacity;
            ctx.translate(cx, cy); ctx.rotate(((el.rotation || 0) * Math.PI) / 180); ctx.translate(-cx, -cy);
          } catch (_) {}
        } else if (el.type === "shape") {
          drawShape(ctx, el);
        } else if (el.type === "image" && !el.src && el.placeholder && el.placeholder !== "transparent") {
          roundedClip(ctx, el.x, el.y, el.w, el.h, el.radius || 0);
          ctx.fillStyle = el.placeholder;
          ctx.fillRect(el.x, el.y, el.w, el.h);
        }
        ctx.restore();
      }
      const blob = await new Promise((res) => canvas.toBlob(res, "image/png"));
      if (!blob) { showToast("Could not create PNG"); downloading = false; render(); return; }
      const file = new File([blob], `diff-invite-${doc.templateId}.png`, { type: "image/png" });
      const nav = navigator;
      // iOS Safari: prefer share sheet with file
      if (nav.canShare && nav.canShare({ files: [file] })) {
        try {
          await nav.share({ files: [file], title: "Diff Invitation" });
          showToast("Share sheet opened — Save Image");
          downloading = false; render(); return;
        } catch (_) {}
      }
      if (typeof nav.share === "function") {
        try {
          const url = URL.createObjectURL(blob);
          // open image tab as fallback for long-press save
          const w = window.open(url, "_blank");
          if (!w) {
            // download anchor
            const a = document.createElement("a");
            a.href = url; a.download = file.name; a.rel = "noopener";
            document.body.appendChild(a); a.click(); a.remove();
          }
          showToast("Image opened — long-press to Save Image");
          setTimeout(() => URL.revokeObjectURL(url), 60000);
          downloading = false; render(); return;
        } catch (_) {}
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = file.name; a.rel = "noopener";
      document.body.appendChild(a); a.click(); a.remove();
      // Also open for iOS long-press
      setTimeout(() => { try { window.open(url, "_blank"); } catch (_) {} }, 300);
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      showToast("PNG ready — long-press image to save on iPhone");
    } catch (e) {
      showToast("Export failed");
    }
    downloading = false; render();
  }

  function loadImg(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }
  function roundedClip(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.clip();
  }
  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = String(text).split(/\s+/);
    let line = "";
    let yy = y;
    for (let n = 0; n < words.length; n++) {
      const test = line ? line + " " + words[n] : words[n];
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, x, yy); yy += lineHeight; line = words[n];
      } else line = test;
    }
    if (line) ctx.fillText(line, x, yy);
  }
  function drawShape(ctx, el) {
    ctx.fillStyle = el.fill || "#ccc";
    ctx.strokeStyle = el.stroke || "transparent";
    ctx.lineWidth = el.strokeWidth || 0;
    if (el.shape === "ellipse") {
      ctx.beginPath();
      ctx.ellipse(el.x + el.w / 2, el.y + el.h / 2, el.w / 2, el.h / 2, 0, 0, Math.PI * 2);
      ctx.fill(); if (el.strokeWidth) ctx.stroke();
    } else if (el.shape === "line") {
      ctx.fillRect(el.x, el.y + el.h / 2 - 1, el.w, Math.max(2, el.h));
    } else if (el.shape === "leaf") {
      ctx.beginPath();
      ctx.ellipse(el.x + el.w / 2, el.y + el.h / 2, el.w / 2, el.h / 2, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (el.shape === "arch") {
      ctx.beginPath();
      ctx.moveTo(el.x, el.y + el.h);
      ctx.quadraticCurveTo(el.x, el.y, el.x + el.w / 2, el.y);
      ctx.quadraticCurveTo(el.x + el.w, el.y, el.x + el.w, el.y + el.h);
      ctx.strokeStyle = el.stroke || el.fill;
      ctx.lineWidth = el.strokeWidth || 2;
      ctx.stroke();
    } else if (el.shape === "triangle") {
      ctx.beginPath();
      ctx.moveTo(el.x + el.w / 2, el.y);
      ctx.lineTo(el.x + el.w, el.y + el.h);
      ctx.lineTo(el.x, el.y + el.h);
      ctx.closePath();
      ctx.fill(); if (el.strokeWidth) ctx.stroke();
    } else {
      const r = el.radius || 0;
      roundedClip(ctx, el.x, el.y, el.w, el.h, r);
      ctx.fillRect(el.x, el.y, el.w, el.h);
      if (el.strokeWidth) ctx.strokeRect(el.x, el.y, el.w, el.h);
    }
  }

  async function shareInvite() {
    const t = templateById(doc ? doc.templateId : 1);
    const textEl0 = (doc && doc.elements.find((e) => e.type === "text")) || {};
    const payload = {
      title: (textEl0.text || t.theme) + " · Diff Invitations",
      text: `${t.theme}\n${formatPhp(t.pricePhp)}\nMade with Diff Invitations Studio\n${LIVE_APP}`
    };
    try {
      if (navigator.share) { await navigator.share(payload); showToast("Share sheet opened"); return; }
    } catch (_) {}
    try { await navigator.clipboard.writeText(payload.text); showToast("Copied"); }
    catch (_) { showToast("Share unavailable"); }
  }

  // —— UI render ——
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
      const thumbDoc = { bg: t.bg, elements: t.elements };
      const scale = 150 / H;
      return `<button type="button" class="card" data-open="${t.id}">
        <div class="thumb-wrap" style="background:${t.bg.color}">
          <div class="thumb-stage" style="transform:scale(${scale})">${renderStageHTML(thumbDoc, { thumb: true })}</div>
        </div>
        <div class="theme">${esc(t.theme)}</div>
        <div class="meta">${esc(occasionLabel(t.occasion))} · ${esc(t.tier)}</div>
        <div class="price">${formatPhp(t.pricePhp)}</div>
      </button>`;
    }).join("");
    return `<div class="hint">Tap a template to open the Canva-like editor — drag, resize, and edit any element.</div>
      <div class="chips">${chips}</div>
      <div class="grid">${cards}</div>
      <div class="build-marker" data-build="${BUILD_MARKER}"></div>`;
  }

  function renderEdit() {
    if (!doc) {
      return `<div class="hint">Pick a template from Templates to start designing.</div>
        <button type="button" class="btn primary" id="btn-goto-gallery">Browse templates</button>`;
    }
    const t = templateById(doc.templateId);
    return `
      <div class="edit-top">
        <div>
          <div class="title">${esc(t.theme)}</div>
          <div class="meta">${esc(occasionLabel(t.occasion))} · ${formatPhp(t.pricePhp)} · Canva-like editor</div>
        </div>
        <button type="button" class="chip" id="btn-change-template">Templates</button>
      </div>
      <div class="toolbar">
        <button type="button" class="btn icon" id="btn-undo" title="Undo">↶</button>
        <button type="button" class="btn icon" id="btn-redo" title="Redo">↷</button>
        <span class="sep"></span>
        <button type="button" class="btn" id="btn-add-text">＋ Text</button>
        <button type="button" class="btn" id="btn-add-photo">＋ Photo</button>
        <button type="button" class="btn" id="btn-add-shape">＋ Shape</button>
        <button type="button" class="btn" id="btn-add-sticker">＋ Sticker</button>
        <span class="sep"></span>
        <label class="btn" style="display:inline-flex;align-items:center;gap:4px">BG
          <input type="color" id="bg-color" value="${toHex(doc.bg.color)}" style="width:28px;height:28px;border:none;padding:0;background:transparent"/>
        </label>
        <button type="button" class="btn" id="btn-bg-image">BG image</button>
      </div>
      <div class="canvas-wrap">
        <div class="canvas-stage" id="canvas-stage"></div>
      </div>
      <div class="prop-bar" id="prop-bar"></div>
      <div class="toolbar">
        <button type="button" class="btn primary" id="btn-download"${downloading ? " disabled" : ""}>${downloading ? "Exporting…" : "Download PNG"}</button>
        <button type="button" class="btn" id="btn-share">Share</button>
        <button type="button" class="btn" id="btn-order-fb">Order on FB</button>
      </div>
      <input type="file" id="photo-input" accept="image/*" class="hidden"/>
      <div class="build-marker" data-build="${BUILD_MARKER}"></div>`;
  }

  function renderOrder() {
    return `<div class="order">
      <h2>Order a custom design</h2>
      <p class="hint">Diff Invitations — editable digital invites for Filipino celebrations. Template prices start at ${formatPhp(299)}. Message Facebook for a custom suite.</p>
      <button type="button" class="btn primary" id="btn-order-main">Order custom design on Facebook</button>
      <a class="link" href="${FB_PAGE}" target="_blank" rel="noopener noreferrer">${FB_PAGE}</a>
      <a class="link" href="${LIVE_APP}">Open free Design Studio →</a>
      <div class="order-box">No login and no payment in this Studio. Design for free; paid custom Canva suites are arranged on Facebook. Prices ${formatPhp(299)}–${formatPhp(799)}.</div>
      <div class="build-marker" data-build="${BUILD_MARKER}"></div>
    </div>`;
  }

  const LOGO_SVG = `<svg class="brand-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" aria-hidden="true"><g transform="rotate(-20 60 62)"><rect x="28" y="52" width="64" height="48" rx="10" fill="#FF3E9A"/><path d="M22 58 L60 18 L98 58 Z" fill="#FF3E9A"/><circle cx="60" cy="20" r="8" fill="#FF3E9A"/><circle cx="26" cy="56" r="8" fill="#FF3E9A"/><circle cx="94" cy="56" r="8" fill="#FF3E9A"/><rect x="42" y="68" width="10" height="18" rx="5" fill="#fff"/><rect x="68" y="68" width="10" height="18" rx="5" fill="#fff"/></g></svg>`;

  function render() {
    const root = document.getElementById("app");
    const body = tab === "gallery" ? renderGallery() : tab === "edit" ? renderEdit() : renderOrder();
    root.innerHTML = `
      <div class="brand">
        <div class="brand-left">
          ${LOGO_SVG}
          <div>
            <h1>Diff Invitations Studio</h1>
            <div class="sub">Canva-like editor · from ${formatPhp(299)} · PH</div>
          </div>
        </div>
        <a href="${FB_PAGE}" target="_blank" rel="noopener noreferrer">Order on FB →</a>
      </div>
      ${toast ? `<div class="toast">${esc(toast)}</div>` : ""}
      ${body}`;
    bind();
    if (tab === "edit" && doc) {
      renderEditCanvasOnly();
      renderPropBar();
    }
  }

  function bind() {
    document.querySelectorAll("[data-filter]").forEach((el) => {
      el.addEventListener("click", () => { filter = el.getAttribute("data-filter"); render(); });
    });
    document.querySelectorAll("[data-open]").forEach((el) => {
      el.addEventListener("click", () => {
        const t = templateById(Number(el.getAttribute("data-open")));
        openTemplate(t);
      });
    });
    const goto = document.getElementById("btn-goto-gallery");
    if (goto) goto.addEventListener("click", () => { tab = "gallery"; syncNav(); render(); });
    const change = document.getElementById("btn-change-template");
    if (change) change.addEventListener("click", () => { tab = "gallery"; syncNav(); render(); });

    const u = document.getElementById("btn-undo"); if (u) u.addEventListener("click", undo);
    const r = document.getElementById("btn-redo"); if (r) r.addEventListener("click", redo);
    const at = document.getElementById("btn-add-text"); if (at) at.addEventListener("click", addText);
    const ap = document.getElementById("btn-add-photo"); if (ap) ap.addEventListener("click", addPhoto);
    const as = document.getElementById("btn-add-shape"); if (as) as.addEventListener("click", () => addShape("rect"));
    const ast = document.getElementById("btn-add-sticker"); if (ast) ast.addEventListener("click", () => addShape("leaf"));
    const bgc = document.getElementById("bg-color");
    if (bgc) bgc.addEventListener("input", () => { if (!doc) return; doc.bg.color = bgc.value; pushHistory(); renderEditCanvasOnly(); });
    const bgi = document.getElementById("btn-bg-image");
    if (bgi) bgi.addEventListener("click", () => pickPhoto((url) => { if (!doc) return; doc.bg.image = url; pushHistory(); renderEditCanvasOnly(); showToast("Background image set"); }));

    const dl = document.getElementById("btn-download"); if (dl) dl.addEventListener("click", exportPng);
    const sh = document.getElementById("btn-share"); if (sh) sh.addEventListener("click", shareInvite);
    const of = document.getElementById("btn-order-fb"); if (of) of.addEventListener("click", () => { window.open(FB_PAGE, "_blank", "noopener,noreferrer"); showToast("Opening Facebook"); });
    const om = document.getElementById("btn-order-main"); if (om) om.addEventListener("click", () => { window.open(FB_PAGE, "_blank", "noopener,noreferrer"); });
  }

  document.querySelectorAll(".nav button").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (editingTextId) commitTextEdit();
      tab = btn.getAttribute("data-tab");
      syncNav();
      render();
    });
  });

  // Prevent iOS rubber-band zoom while interacting with canvas
  document.addEventListener("gesturestart", (e) => {
    if (e.target.closest && e.target.closest(".canvas-wrap")) e.preventDefault();
  }, { passive: false });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").then((reg) => {
        reg.update();
      }).catch(() => {});
    });
  }


  // —— Splash + Install (iOS / Android) ——
  const SPLASH_KEY = "diff-invites-splash-seen-v1";
  let deferredInstallPrompt = null;
  let showIosSheet = false;

  function isStandalone() {
    return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches)
      || window.navigator.standalone === true;
  }
  function isIos() {
    const ua = navigator.userAgent || "";
    return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }
  function hideSplash() {
    const splash = document.getElementById("splash");
    if (splash) splash.classList.add("hidden");
    document.body.classList.remove("show-splash");
    try { sessionStorage.setItem(SPLASH_KEY, "1"); } catch (_) {}
  }
  function showSplashIfNeeded() {
    if (isStandalone()) {
      document.body.classList.add("standalone-app");
      hideSplash();
      const btn = document.getElementById("btn-install-app");
      if (btn) btn.style.display = "none";
      return;
    }
    let seen = false;
    try { seen = sessionStorage.getItem(SPLASH_KEY) === "1"; } catch (_) {}
    if (seen) { hideSplash(); return; }
    document.body.classList.add("show-splash");
    const splash = document.getElementById("splash");
    if (splash) splash.classList.remove("hidden");
    updateInstallButtonVisibility();
  }
  function updateInstallButtonVisibility() {
    const btn = document.getElementById("btn-install-app");
    if (!btn) return;
    if (isStandalone()) { btn.style.display = "none"; return; }
    btn.style.display = "";
  }
  function renderIosSheet() {
    const root = document.getElementById("ios-install-root");
    if (!root) return;
    if (!showIosSheet) { root.innerHTML = ""; return; }
    root.innerHTML = `
      <div class="ios-sheet-backdrop" id="ios-sheet-backdrop">
        <div class="ios-sheet" role="dialog" aria-label="Install on iPhone">
          <div class="ios-illus" aria-hidden="true">
            <span>⬆️</span><span style="font-size:18px;color:#666">Share</span>
            <span>→</span>
            <span>➕</span><span style="font-size:18px;color:#666">Add to Home Screen</span>
          </div>
          <h3>Install Diff Invitations</h3>
          <p>Add this app to your Home Screen for a full-screen, offline-ready experience. No App Store needed.</p>
          <div class="ios-steps">
            <div class="ios-step"><div class="num">1</div><div class="label">Tap the <strong>Share</strong> button in Safari (square with an arrow up).</div></div>
            <div class="ios-step"><div class="num">2</div><div class="label">Scroll and tap <strong>Add to Home Screen</strong>.</div></div>
            <div class="ios-step"><div class="num">3</div><div class="label">Tap <strong>Add</strong> — then open Diff Invites from your Home Screen.</div></div>
          </div>
          <button type="button" class="btn-close" id="btn-close-ios-sheet">Got it</button>
        </div>
      </div>`;
    const close = () => { showIosSheet = false; renderIosSheet(); };
    document.getElementById("btn-close-ios-sheet")?.addEventListener("click", close);
    document.getElementById("ios-sheet-backdrop")?.addEventListener("click", (e) => {
      if (e.target.id === "ios-sheet-backdrop") close();
    });
  }
  async function onInstallClick() {
    if (isStandalone()) return;
    // iOS Safari never gets beforeinstallprompt — always show the guide.
    if (isIos()) {
      showIosSheet = true;
      renderIosSheet();
      return;
    }
    if (deferredInstallPrompt) {
      try {
        deferredInstallPrompt.prompt();
        const choice = await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
        updateInstallButtonVisibility();
        if (choice && choice.outcome === "accepted") showToast("App installed");
      } catch (_) {
        showToast("Install prompt unavailable — use browser menu → Install app");
      }
      return;
    }
    showToast("Use your browser menu → Install app / Add to Home Screen");
  }
  function wireSplash() {
    const start = document.getElementById("btn-start-designing");
    const install = document.getElementById("btn-install-app");
    if (start) start.addEventListener("click", () => { hideSplash(); render(); });
    if (install) install.addEventListener("click", onInstallClick);
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      updateInstallButtonVisibility();
    });
    window.addEventListener("appinstalled", () => {
      deferredInstallPrompt = null;
      updateInstallButtonVisibility();
      hideSplash();
      showToast("Installed — open from Home Screen");
    });
    showSplashIfNeeded();
  }


  // Restore autosave
  const saved = loadAutosave();
  if (saved && saved.doc) {
    doc = saved.doc;
    history = [deepClone(doc)];
    histIndex = 0;
  }

  window.__DIFF_BUILD__ = BUILD_MARKER;
  wireSplash();
  render();
})();
