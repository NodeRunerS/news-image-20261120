# The World in One Page — 20 November 2026

[![news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/NodeRunerS/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/NodeRunerS/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

Entry for make.fun's **"Sum up 20 November's world news in one image"**
(`news-image-20261120`, free entry, $250 shared by the top 50).

## The image

`entry.png` (1024×1024, < 1 MiB) is a newspaper front page for
**Friday, 20 November 2026**, drawn as original HTML/CSS with hand-drawn
SVG illustrations — no photographs, no AI-generated imagery, so every word
renders exactly as written:

- **Lead — Kyiv bridges hit as missiles land in Poland:** more than
  400 drones and 110 missiles; three Kyiv bridges hit, 6–8 killed, about
  30 injured; two Russian missiles fall inside NATO member Poland; Ukraine
  hits the Kerch Bridge again and liberates 14 settlements in Kharkiv.
- **Court finds Myanmar guilty of Rohingya genocide:** the ICJ's first such
  verdict against a state; the ruling is not unanimous.
- **Hormuz blockade holds as Senate blocks war vote:** the US naval
  blockade persists, tankers catch fire near the strait; the Senate blocks
  the Iran war-powers resolution 51–48; Trump says he is in no rush.
- **Trump, Xi and Putin sign peace declaration:** after Shenzhen, a joint
  declaration; the US and China agree humans must oversee military AI.
- **Antalya talks stall as activists denounce draft:** fossil-fuel talks
  stall at COP31 in Antalya.
- **Anthropic debuts up 17% in biggest IPO ever:** closes at $97.17, 17%
  above its $83 IPO price, raising $81.3bn; US stocks fall a sixth
  straight day; Google launches Gemini 4 Neon.
- **Also today:** Trump sacks the cyber chief after tech outages; Pete
  Rose pardoned posthumously; GTA 6 sales top $2.3bn; hackers leak data
  on 16,000 Visa, Mastercard and JPMorgan customers; Estonia to close its
  Russia border from 1 Dec; a Houthi missile damages Riyadh's tallest
  tower.

Stories and sources are listed in [NEWS.md](NEWS.md) (Reuters, AP, AFP,
Bloomberg, NHK, Al Jazeera and others, all checked on 20–21 November 2026).

## How it was made

`frontpage.html` is the front page. It was rendered to `entry.png` with
headless Chromium at exactly 1024×1024:

```sh
chromium --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --window-size=1024,1024 --screenshot=entry.png "file://$PWD/frontpage.html"
```

## The program

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
to the output directory. No network, no randomness — both graded runs write
identical bytes:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# wrote out/entry.png (245137 bytes)
```

## Files

| File | What it is |
| --- | --- |
| `main.ts` | Entry program: copies `entry.png` to the output dir |
| `entry.png` | The image (1024×1024 PNG, < 1 MiB) |
| `frontpage.html` | The front page source (HTML/CSS/SVG) the image was rendered from |
| `NEWS.md` | The six stories plus the "also today" items, with sources |
| `LICENSE` | MIT |
| `README.md` | This file |
