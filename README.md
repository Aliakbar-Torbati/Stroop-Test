# Stroop Game (React + TypeScript)

This project is a small Stroop-effect game implemented with **React**, **TypeScript**, and **Vite**. It demonstrates how to build an interactive cognitive task in a strongly typed React environment.

## What is the Stroop Game?

The Stroop effect is a classic psychological phenomenon: people are slower or more error-prone when the meaning of a word and its color are in conflict (e.g. the word “Red” written in blue ink).

In this implementation:

- A set of **color options** is displayed.
- Each option consists of a **text label** (e.g. `"Red"`) and a **font color** (e.g. `blue`).
- Exactly **one option is “incorrect”**: the text and the color do **not** match.
- Your task as a player is to **identify and click the incorrect option**.
- The game uses a **score** and a **countdown timer** (initialized to 10 seconds) to track performance.

This creates a simple but effective Stroop-style attention and reaction task.

## Tech Stack & Architecture

- **Framework**: React 18  
- **Language**: TypeScript  
- **Bundler/Dev Server**: Vite  
- **Styling**: Plain CSS (`App.css`, `index.css`)

Key TypeScript/React aspects:

- A `ColorOption` type (with `text` and `color` fields) describes each game option.
- Component state is **fully typed**, e.g. `useState<ColorOption[]>`, `useState<number>`, `useState<boolean>`.
- The game logic maintains:
  - `colors`: the current list of displayed options.
  - `incorrectOption`: the special mismatching option.
  - `score`: the current player score.
  - `gameStarted`: whether the game is running.
  - `timer`: remaining time for the current run.
- Color options are **shuffled** to randomize each round.


