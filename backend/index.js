const express =require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Transaction = require('./models/Transaction.js');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/backend/test' , (req,res) => {
    res.json('test ok2');
});

app.post('/backend/transaction', async(req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const {price, name, description, datetime} = req.body;
    const transaction = await Transaction.create({
        price, name, description, datetime
    });
    res.json(transaction);

});

app.get('/backend/transactions', async(req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);
});

app.listen(5000);

//7i5j73nYklQ0MlW0