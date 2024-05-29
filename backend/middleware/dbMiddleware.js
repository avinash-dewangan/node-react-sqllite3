const setupDatabase = require('../config/db');

async function databaseMiddleware(req, res, next) {
    if (!req.db) {
        try {
            req.db = await setupDatabase();
        } catch (err) {
            console.error('Error setting up database:', err);
            return res.status(500).send({ error: 'Failed to set up database.' });
        }
    }
    next();
}

module.exports = databaseMiddleware;
