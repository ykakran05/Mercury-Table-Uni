# Transaction Table UI

This project is a simple React-based UI that displays a list of financial transactions grouped by date. It includes hover functionality to reveal the transaction date when the user hovers over any row in that group.

---

To run locally:

1. Clone the repo
2. Run `npm install` (if you add dependencies)
3. Run `npm start`

---

## Features

- **Grouped Transactions**: Transactions are grouped by date, and the date is shown once per group.
- **Hover Behavior**: On hovering over a row, the date becomes visible for better context.
- **Responsive Design**: Clean and responsive layout that adapts to smaller screen sizes.
- **Reusable Components**: Code is split into modular components (`App`, `TransactionTable`, and `TransactionRow`) for better readability and maintenance.
- **Custom Hook**: A `useFetch` hook is used to simulate fetching transaction data in a clean and reusable way.

## Tech Stack

- React.js (functional components, hooks)
- CSS (custom styling with responsiveness)
- Custom Hook (`useFetch`) for simulated data fetching

## How It Works

- `App.js` uses a custom hook `useFetch` to retrieve transaction data and renders the table.
- `useFetch.js` is a reusable hook that returns an array of static transaction objects.
- `TransactionTable.js` handles grouping of transactions by date.
- `TransactionRow.js` manages hover interaction to conditionally show the date.
- Styling is applied using `styles.css`, including responsive media queries.

## Notes

- The project avoids third-party libraries to keep the implementation simple and transparent.
- Hover-based date visibility ensures a cleaner UI without losing context.
- `useFetch` enhances code modularity and mimics API-based data fetching.

