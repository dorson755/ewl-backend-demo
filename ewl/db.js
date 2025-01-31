// db.js
import Database from 'better-sqlite3';

const db = new Database('leaderboard.db');

// Create a table to store scores
db.exec(`
  CREATE TABLE IF NOT EXISTS scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    score INTEGER NOT NULL
  );
`);

export default db;