exports.createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await req.db.run("INSERT INTO users (name) VALUES (?)", [name]);
        const userId = result.lastID;
        res.status(201).send({ userId });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).send({ error: 'Failed to create user.' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await req.db.all("SELECT * FROM users");
        res.status(200).send(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send({ error: 'Failed to fetch users.' });
    }
};
