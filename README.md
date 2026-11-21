# The World in One Page — 20 November 2026

[![news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/NodeRunerS/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/NodeRunerS/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

Entry for make.fun's **"Sum up 20 November's world news in one image"**
(`news-image-20261120`, free entry, $250 shared by the top 50).

## The image

`entry.png` (1024×1024, < 1 MiB) is a dense broadsheet front page for
**Friday, 20 November 2026**, drawn as original HTML/CSS with hand-drawn
SVG illustrations — no photographs, no AI-generated imagery, so every word
renders exactly as written. A left-aligned masthead with an "In today's
page" contents box, a slim LATEST ticker, a lead story beside a second
lead, a 3-column story grid, a briefs strip, a sport strip and a full
markets / crypto / weather band:

- **Lead — Kyiv bridges hit as missiles land in Poland:** more than
  400 drones and 110 missiles; three Kyiv bridges hit, 6–8 killed, about
  30 injured; two Russian missiles fall inside NATO member Poland; Ukraine
  hits the Kerch Bridge again and liberates 14 settlements in Kharkiv.
- **Second lead — Court finds Myanmar guilty of Rohingya genocide:** the
  ICJ's first such verdict against a state; the ruling is not unanimous.
- **Hormuz blockade holds as Senate blocks war vote:** the US naval
  blockade persists, tankers catch fire near the strait; the Senate blocks
  the Iran war-powers resolution 51–48; Trump says he is in no rush.
- **Trump, Xi and Putin sign peace declaration:** after Shenzhen, a joint
  declaration; the US and China agree humans must oversee military AI.
- **Antalya talks stall as activists denounce draft:** fossil-fuel talks
  stall at COP31 in Antalya.
- **Anthropic debuts up 17% in biggest IPO ever:** closes at $97.17, 17%
  above its $83 IPO price, raising $81.3bn; US stocks fall a sixth
  straight day.
- **Trump sacks the cyber chief** after tech outages.
- **Pete Rose pardoned** posthumously, decades after the ban.
- **Also in brief:** GTA 6 sales top $2.3bn; hackers leak data on 16,000
  Visa, Mastercard and JPMorgan customers; Estonia to close its Russia
  border from 1 Dec; Hungary lifts its veto on Ukraine EU talks; Google
  launches Gemini 4 Neon.
- **Sport — 20 Nov results:** Knicks 102–99 Timberwolves, Grizzlies
  126–98 Warriors, Nuggets 133–124 Rockets (Durant 16, Şengün
  triple-double); Shelton into the ATP Finals last four; Barcelona 6–0
  Servette, Lyonnes 2–0 Arsenal; Pakistan beat Sri Lanka by 8 wickets;
  Lightning 3–1 Oilers, ending McDavid's 23-game point streak.
- **Latest ticker:** Russian missiles fall inside Poland; Nvidia −14% on
  an SEC accounting-inquiry report; ICJ: Myanmar guilty of Rohingya
  genocide; Houthi missile damages Riyadh's tallest tower.
- **Markets — Friday close (12 indices):** S&P 500 6,910.39 −3.70%,
  Nasdaq 22,617.73 −5.28%, Dow 48,147.33 −1.93%, Russell 2000 2,581.79
  −2.76%, FTSE 100 10,346.34 −1.02%, DAX 24,802.78 −2.60%, CAC 40
  7,927.75 −1.89%, Nikkei 225 56,436.65 −5.06%, Shanghai 3,533.79
  −1.22%, Hang Seng 22,410.80 −1.89%, BIST 100 11,131.32 −2.36%, Nifty 50
  25,800.60 +1.12%; Gold $3,515.40 −4.62%, Silver $41.07 −7.41%, Brent
  $92.57 +0.64%, WTI $83.98 +0.93%, VIX 35.89; week: worst in 18 months,
  S&P −8.61%, Nasdaq −10.02%.
- **Crypto — Friday close:** Bitcoin $58,810 −5.0% (broke below $60,000,
  −15.1% on the week), Ethereum $1,620 −7.7%, Solana $68.71 −6.0%,
  XRP ~$0.90, BNB $535.78 −7.9%.
- **World weather — Saturday 21 November (12 cities):** London 9°/5°
  partly cloudy, New York 19°/12° partly cloudy, Istanbul 18°/13°
  thunderstorms, Tokyo 14°/5° clear, Dubai 31°/22° sunny, Kyiv 6°/0°
  overcast, Moscow 5°/0° light rain, Paris 11°/7° cloudy, Berlin 6°/0°
  light rain, Madrid 14°/8° rain, Cairo 29°/17° clear, Delhi 26°/14°
  clear.

Stories and sources are listed in [NEWS.md](NEWS.md) (Reuters, AP, AFP,
Bloomberg, NHK, Al Jazeera and others, all checked on 20–21 November 2026).

## How it was made

`frontpage.html` is the front page. It was rendered to `entry.png` with
headless Chromium (Playwright) at exactly 1024×1024, and the render was
measured to fit the frame with nothing clipped or overlapping:

```sh
# render frontpage.html to entry.png at 1024x1024 with headless Chromium
# (Playwright's bundled chromium-1255) and verify the page fits the frame
```

## The program

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
to the output directory. No network, no randomness — both graded runs write
identical bytes:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# wrote out/entry.png (329263 bytes)
```

## Files

| File | What it is |
| --- | --- |
| `main.ts` | Entry program: copies `entry.png` to the output dir |
| `entry.png` | The image (1024×1024 PNG, < 1 MiB) |
| `frontpage.html` | The front page source (HTML/CSS/SVG) the image was rendered from |
| `NEWS.md` | The thirteen stories, sport, markets, crypto and weather, with sources |
| `LICENSE` | MIT |
| `README.md` | This file |
