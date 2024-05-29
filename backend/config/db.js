const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setupDatabase() {
    const db = await sqlite.open({ filename: ':memory:', driver: sqlite3.Database });

    await db.exec("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");
    await db.exec("CREATE TABLE orders (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, product TEXT)");

    return db;
}

module.exports = setupDatabase;
