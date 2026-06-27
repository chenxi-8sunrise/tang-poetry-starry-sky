# Arsenal XI Forge

A static Arsenal lineup generator with a game-like squad score, animated pitch UI, public player-list loading, and Wikipedia thumbnail fallback for player faces.

## Run

```bash
npm install
npm start
```

Default local URL:

```text
http://127.0.0.1:5173
```

## Data Scope

- Men's first-team competitive Arsenal players from the Arsene Wenger era onward.
- Live data loads from public Wikipedia player-list tables:
  - 100+ appearances
  - 25-99 appearances
  - 1-24 appearances
- If the live request fails, the app falls back to a representative offline seed.
- Assists are shown as `N/A` until a reliable all-competitions assist source is added.

## Scoring

Squad score is capped at 100 and uses:

- Base Ability: 40
- Arsenal Contribution: 25
- Honours Bonus: 20
- Position Fit: 15

The final squad score is the average of the selected XI plus a formation-fit bonus.