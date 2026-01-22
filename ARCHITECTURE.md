# Project Structure & Architecture

This document describes how the **BigO.dev** project is organized.

## Directory Layout

- **`.github/workflows/`**: Continuous Integration and Deployment (GitHub Actions).
- **`components/`**: All UI components.
    - `Complexity/`: Comparison tables and notation explanations.
    - `Sheets/`: Technical sheets for algorithms.
    - `Visualizer/`: Algorithm execution logic and display.
    - `Quiz/`: Learning assessment module.
- **`contexts/`**: React Contexts for Global State.
    - `LanguageContext.tsx`: Manages i18n (EN/FR).
    - `ThemeContext.tsx`: Manages the 7+ premium color palettes.
- **`data/`**: Static data and algorithm metadata.
    - `algorithms.ts`: The source of truth for all algorithm properties, complexity, and proofs.
    - `quizzes.ts`: Question sets for both languages.
- **`locales/`**: i18n JSON-like objects for English and French.
- **`utils/`**: Helper functions for algorithm execution and colors.

## Key Technical Decisions

### 1. Thematic Engine
Instead of using hardcoded Tailwind classes for every color, we use **CSS Variables** defined in `ThemeContext.tsx`. This allows for smooth transitions between 7+ completely different color identities without reloading the DOM.

### 2. Algorithm Stepper
The visualizer doesn't just "run" code; it generates a list of `Steps`. This allows the user to:
- Step backwards and forwards.
- Control the execution speed.
- View real-time statistics (comparisons, swaps).

### 3. Asymptotic Notation Logic
We distinguish between $O$, $\Omega$, and $\Theta$ dynamically.
- If $Best == Worst$, the UI automatically labels it as **Exact ($\Theta$)**.
- Otherwise, it differentiates between **Average ($O$)** and **Best ($\Omega$)**.
