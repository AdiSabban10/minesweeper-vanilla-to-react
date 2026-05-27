# Minesweeper React Migration Spec

## 1. Goal
Migrate the existing Vanilla JS Minesweeper to a modern React 18 application using Vite, strictly following Clean Code principles.

## 2. Component Architecture
- **App:** Holds the global game state (board, time, lives, hints, game over status).
- **ScoreBoard:** Displays game metrics (Mines count, Time, Lives, Hints) and action buttons (Level selection, Undo, Safe Click).
- **Board:** Renders the 2D grid. Receives the board state and click handlers via props.
- **Cell:** A highly "dumb" (presentation) component representing a single square. Displays content based on its props (`isShown`, `isMine`, `isMarked`, `minesAroundCount`).

## 3. Data Structures & State Management
- **The Grid:** The board will be represented as a 2D array of objects. 
  Example Cell Object: `{ isShown: false, isMine: false, isMarked: false, minesAroundCount: 0 }`
- **Immutability:** When updating a cell, we will NOT deep copy the entire board. We will shallow copy the board array, shallow copy the specific row, and replace the specific cell object.
- **State Hooks:** Use `useState` for the board and game status. Use `useEffect` ONLY for the game timer.

## 4. Execution Plan (Step-by-Step)
Do not migrate everything at once. We will do this in atomic steps:
1. Initialize the React/Vite environment.
2. Build the static UI components (`App`, `ScoreBoard`, `Board`, `Cell`).
3. Migrate the board generation logic (pure functions).
4. Implement the core game loop (Clicking, revealing, flagging).
5. Add the advanced features (Mega Hint, Safe Click, Undo).