exports.transaction = async (req, res) => {
    try {
        await req.db.exec("BEGIN TRANSACTION");

        const { name, product } = req.body;

        // Insert user
        const result1 = await req.db.run("INSERT INTO users (name) VALUES (?)", [name]);
        const userId = result1.lastID;
        console.log('Inserted user ID:', userId);

        // Insert order
        const result2 = await req.db.run("INSERT INTO orders (user_id, product) VALUES (?, ?)", [userId, product]);
        const orderId = result2.lastID;
        console.log('Inserted order ID:', orderId);

        // If everything is successful, commit the transaction
        await req.db.exec("COMMIT");
        console.log('Transaction committed successfully.');

        res.status(200).send({ message: 'Transaction committed successfully.' });
    } catch (err) {
        console.error('Error during transaction, rolling back...', err);
        await req.db.exec("ROLLBACK");
        res.status(500).send({ error: 'Transaction failed and rolled back.' });
    }
};