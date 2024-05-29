exports.createOrder = async (req, res) => {
    try {
        const { userId, product } = req.body;
        const result = await req.db.run("INSERT INTO orders (user_id, product) VALUES (?, ?)", [userId, product]);
        const orderId = result.lastID;
        res.status(201).send({ orderId });
    } catch (err) {
        console.error('Error creating order:', err);
        res.status(500).send({ error: 'Failed to create order.' });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await req.db.all("SELECT * FROM orders");
        res.status(200).send(orders);
    } catch (err) {
        console.error('Error fetching orders:', err);
        res.status(500).send({ error: 'Failed to fetch orders.' });
    }
};



