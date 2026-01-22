# Contributing to BigO.dev

First off, thank you for considering contributing to **BigO.dev**! It's people like you who make this a great educational tool.

## How Can I Contribute?

### Reporting Bugs
- Check the **Issues** tab to see if the bug has already been reported.
- Use a clear and descriptive title.
- Describe the exact steps to reproduce the problem.

### Suggesting Enhancements
- If you have an idea for a new algorithm visualization or a better way to explain complexity, open an issue to discuss it!

### Pull Requests
1. **Fork** the repository and create your branch from `main`.
2. If you've added an algorithm, ensure it includes:
   - A detailed description in `locales/en.ts` and `locales/fr.ts`.
   - Time and Space complexity analysis.
   - Proof of termination and correctness (if applicable).
3. Ensure the project builds without errors: `npm run build`.
4. Run Type checking: `npx tsc --noEmit`.

## Development Setup
- **Node.js**: Version 20 or higher recommended.
- **npm**: Use `npm ci` for a clean install of dependencies.
- **Linting**: Please follow the existing coding style (Standard React/TypeScript practices).

## Code of Conduct
By participating in this project, you agree to maintain a respectful and welcoming environment for everyone.

---

# Contribuer à BigO.dev

Merci de l'intérêt que vous portez à **BigO.dev** ! 

## Comment contribuer ?

### Rapporter des Bugs
- Vérifiez si le bug n'a pas déjà été signalé dans l'onglet **Issues**.
- Décrivez précisément les étapes pour reproduire le problème.

### Pull Requests
1. **Forkez** le projet et créez votre branche à partir de `main`.
2. Si vous ajoutez un algorithme, assurez-vous qu'il respecte le format standard (complexité, preuves, descriptions bilingues).
3. Vérifiez que le projet compile : `npm run build`.
