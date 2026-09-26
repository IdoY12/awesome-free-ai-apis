#!/usr/bin/env python3
"""
Generates media/banner.svg and media/social-preview.svg as self-contained pixel art.
No external fonts (GitHub strips them from SVGs): every glyph is drawn from a 5x7 bitmap.
Run: python3 scripts/make-banner.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# 5x7 bitmap font (columns are x, strings are rows). '#' = lit pixel.
FONT = {
    "A": ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
    "B": ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
    "C": ["01111", "10000", "10000", "10000", "10000", "10000", "01111"],
    "D": ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
    "E": ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
    "F": ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
    "G": ["01111", "10000", "10000", "10111", "10001", "10001", "01111"],
    "H": ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
    "I": ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
    "J": ["00111", "00010", "00010", "00010", "00010", "10010", "01100"],
    "K": ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
    "L": ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
    "M": ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
    "N": ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
    "O": ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
    "P": ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
    "Q": ["01110", "10001", "10001", "10001", "10101", "10010", "01101"],
    "R": ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
    "S": ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
    "T": ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
    "U": ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
    "V": ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
    "W": ["10001", "10001", "10001", "10101", "10101", "10101", "01010"],
    "X": ["10001", "10001", "01010", "00100", "01010", "10001", "10001"],
    "Y": ["10001", "10001", "01010", "00100", "00100", "00100", "00100"],
    "Z": ["11111", "00001", "00010", "00100", "01000", "10000", "11111"],
    "0": ["01110", "10001", "10011", "10101", "11001", "10001", "01110"],
    "1": ["00100", "01100", "00100", "00100", "00100", "00100", "01110"],
    "2": ["01110", "10001", "00001", "00010", "00100", "01000", "11111"],
    "4": ["00010", "00110", "01010", "10010", "11111", "00010", "00010"],
    "7": ["11111", "00001", "00010", "00100", "01000", "01000", "01000"],
    "9": ["01110", "10001", "10001", "01111", "00001", "00001", "01110"],
    " ": ["00000"] * 7,
    ".": ["00000", "00000", "00000", "00000", "00000", "01100", "01100"],
    ":": ["00000", "01100", "01100", "00000", "01100", "01100", "00000"],
    "-": ["00000", "00000", "00000", "11111", "00000", "00000", "00000"],
    "/": ["00001", "00010", "00010", "00100", "01000", "01000", "10000"],
    ">": ["10000", "01000", "00100", "00010", "00100", "01000", "10000"],
    "_": ["00000", "00000", "00000", "00000", "00000", "00000", "11111"],
    "*": ["00000", "10101", "01110", "11111", "01110", "10101", "00000"],
    "+": ["00000", "00100", "00100", "11111", "00100", "00100", "00000"],
    "|": ["00100"] * 7,
    "~": ["00000", "00000", "01000", "10101", "00010", "00000", "00000"],
    "$": ["00100", "01111", "10100", "01110", "00101", "11110", "00100"],
}


def text_pixels(text, x, y, px, fill, gap=1, gradient=None):
    """Return SVG rects for `text` starting at (x, y); each pixel is px wide."""
    out, cx = [], x
    for ch in text.upper():
        g = FONT.get(ch, FONT[" "])
        for r, row in enumerate(g):
            for c, bit in enumerate(row):
                if bit == "1":
                    f = gradient(cx + c * px) if gradient else fill
                    out.append(f'<rect x="{cx + c * px}" y="{y + r * px}" width="{px}" height="{px}" fill="{f}"/>')
        cx += (len(g[0]) + gap) * px
    return "\n".join(out), cx


def text_width(text, px, gap=1):
    return sum((len(FONT.get(ch, FONT[" "])[0]) + gap) * px for ch in text.upper()) - gap * px


def lerp_hex(a, b, t):
    a, b = [int(a[i:i + 2], 16) for i in (1, 3, 5)], [int(b[i:i + 2], 16) for i in (1, 3, 5)]
    return "#" + "".join(f"{round(a[i] + (b[i] - a[i]) * t):02x}" for i in range(3))


def grad(x0, x1, c0, c1, c2):
    def f(x):
        t = max(0.0, min(1.0, (x - x0) / max(1, x1 - x0)))
        return lerp_hex(c0, c1, t * 2) if t < 0.5 else lerp_hex(c1, c2, (t - 0.5) * 2)
    return f


# 8-bit robot mascot, 16x16, palette indices
ROBOT = [
    "................",
    ".....111111.....",
    "....11111111....",
    "...1122112211...",
    "...1122112211...",
    "...1111111111...",
    "...1133333311...",
    "....11111111....",
    ".....4....4.....",
    "...5555555555...",
    "..556666666655..",
    "..556777777655..",
    "..556666666655..",
    "...5555555555...",
    "....55....55....",
    "....55....55....",
]
ROBOT_PAL = {"1": "#e2e8f0", "2": "#22d3ee", "3": "#0f172a", "4": "#94a3b8", "5": "#a78bfa", "6": "#7c3aed", "7": "#f472b6"}


def sprite(rows, pal, x, y, px):
    out = []
    for r, row in enumerate(rows):
        for c, ch in enumerate(row):
            if ch in pal:
                out.append(f'<rect x="{x + c * px}" y="{y + r * px}" width="{px}" height="{px}" fill="{pal[ch]}"/>')
    return "\n".join(out)


def chip(label, x, y, px, color):
    w = text_width(label, px) + px * 6
    h = px * 11
    body = (
        f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{color}" fill-opacity="0.13"/>'
        f'<rect x="{x}" y="{y}" width="{w}" height="{px}" fill="{color}"/>'
        f'<rect x="{x}" y="{y + h - px}" width="{w}" height="{px}" fill="{color}" fill-opacity="0.5"/>'
        f'<rect x="{x}" y="{y}" width="{px}" height="{h}" fill="{color}"/>'
        f'<rect x="{x + w - px}" y="{y}" width="{px}" height="{h}" fill="{color}" fill-opacity="0.5"/>'
    )
    t, _ = text_pixels(label, x + px * 3, y + px * 2, px, "#e5e7eb")
    return body + t, w


def banner(W=1280, H=340):
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" shape-rendering="crispEdges" role="img" aria-label="Awesome Free AI APIs">',
        "<defs>",
        '<pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#0b0f1a"/><rect width="1" height="16" fill="#111827"/><rect width="16" height="1" fill="#111827"/></pattern>',
        '<pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="2" fill="#000" fill-opacity="0.12"/></pattern>',
        "</defs>",
        f'<rect width="{W}" height="{H}" fill="url(#grid)"/>',
    ]
    # terminal window
    wx, wy, ww, wh = 24, 24, W - 48, H - 48
    parts.append(f'<rect x="{wx}" y="{wy}" width="{ww}" height="{wh}" fill="#0f172a" stroke="#1e293b" stroke-width="4"/>')
    parts.append(f'<rect x="{wx}" y="{wy}" width="{ww}" height="36" fill="#1e293b"/>')
    for i, c in enumerate(["#ef4444", "#f59e0b", "#22c55e"]):
        parts.append(f'<rect x="{wx + 16 + i * 22}" y="{wy + 12}" width="12" height="12" fill="{c}"/>')
    t, _ = text_pixels("~/awesome-free-ai-apis", wx + 100, wy + 11, 2, "#94a3b8")
    parts.append(t)
    # prompt line
    t, cx = text_pixels("> ls free-tiers --verified --daily", wx + 32, wy + 62, 2, "#22c55e")
    parts.append(t)
    # title with gradient
    g = grad(wx + 32, wx + 32 + text_width("AWESOME FREE", 8), "#22d3ee", "#a78bfa", "#f472b6")
    t, _ = text_pixels("AWESOME FREE", wx + 32, wy + 92, 8, None, gradient=g)
    parts.append(t)
    g2 = grad(wx + 32, wx + 32 + text_width("AI APIS_", 8), "#f472b6", "#a78bfa", "#22d3ee")
    t, _ = text_pixels("AI APIS", wx + 32, wy + 160, 8, None, gradient=g2)
    parts.append(t)
    # blinking cursor
    cx = wx + 32 + text_width("AI APIS ", 8)
    parts.append(f'<rect x="{cx}" y="{wy + 160}" width="24" height="56" fill="#22d3ee"><animate attributeName="opacity" values="1;1;0;0" dur="1.2s" repeatCount="indefinite"/></rect>')
    # subtitle
    t, _ = text_pixels("permanent free tiers . verified against official docs . data-policy fine print", wx + 32, wy + 236, 2, "#cbd5e1")
    parts.append(t)
    # status line
    parts.append(f'<rect x="{wx + 32}" y="{wy + 262}" width="10" height="10" fill="#22c55e"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></rect>')
    t, _ = text_pixels("live-checked daily", wx + 50, wy + 261, 2, "#22c55e")
    parts.append(t)
    # chips (right side)
    chips = [("LLM", "#22d3ee"), ("IMAGE", "#a78bfa"), ("SPEECH", "#f472b6"), ("EMBED", "#22d3ee"), ("VECTOR", "#a78bfa"), ("SEARCH", "#f472b6"), ("OCR", "#22d3ee"), ("SAFETY", "#a78bfa"), ("TRANSLATE", "#f472b6")]
    x0, y0, px = 760, wy + 96, 2
    x, y, rowmax = x0, y0, 0
    for i, (lbl, col) in enumerate(chips):
        s, w = chip(lbl, x, y, px, col)
        parts.append(s)
        x += w + 10
        if i in (2, 5):
            x, y = x0, y + 32
    # robot
    parts.append(sprite(ROBOT, ROBOT_PAL, W - 200, wy + 70, 9))
    # scanlines + bottom bar
    parts.append(f'<rect x="{wx}" y="{wy}" width="{ww}" height="{wh}" fill="url(#scan)"/>')
    for i, c in enumerate(["#22d3ee", "#a78bfa", "#f472b6", "#22c55e"]):
        parts.append(f'<rect x="{wx + i * (ww // 4)}" y="{wy + wh - 6}" width="{ww // 4}" height="6" fill="{c}"/>')
    parts.append("</svg>")
    return "\n".join(parts)


def social(W=1280, H=640):
    """Static (no animation) 2:1 image for GitHub's social preview."""
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" shape-rendering="crispEdges">',
        '<defs><pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#0b0f1a"/><rect width="1" height="16" fill="#111827"/><rect width="16" height="1" fill="#111827"/></pattern></defs>',
        f'<rect width="{W}" height="{H}" fill="url(#grid)"/>',
    ]
    t, _ = text_pixels("> ls free-tiers --verified --daily", 96, 130, 3, "#22c55e"); parts.append(t)
    g = grad(96, 96 + text_width("AWESOME FREE", 10), "#22d3ee", "#a78bfa", "#f472b6")
    t, _ = text_pixels("AWESOME FREE", 96, 180, 10, None, gradient=g); parts.append(t)
    g2 = grad(96, 96 + text_width("AI APIS", 10), "#f472b6", "#a78bfa", "#22d3ee")
    t, _ = text_pixels("AI APIS", 96, 270, 10, None, gradient=g2); parts.append(t)
    t, _ = text_pixels("79 providers . 11 categories . every number", 96, 380, 3, "#cbd5e1"); parts.append(t)
    t, _ = text_pixels("linked to the official page that states it", 96, 412, 3, "#cbd5e1"); parts.append(t)
    t, _ = text_pixels("github.com/IdoY12/awesome-free-ai-apis", 96, 500, 3, "#94a3b8"); parts.append(t)
    parts.append(sprite(ROBOT, ROBOT_PAL, W - 340, 150, 18))
    for i, c in enumerate(["#22d3ee", "#a78bfa", "#f472b6", "#22c55e"]):
        parts.append(f'<rect x="{i * (W // 4)}" y="{H - 10}" width="{W // 4}" height="10" fill="{c}"/>')
    parts.append("</svg>")
    return "\n".join(parts)


(ROOT / "media" / "banner.svg").write_text(banner())
(ROOT / "media" / "social-preview.svg").write_text(social())
print("wrote media/banner.svg and media/social-preview.svg")
