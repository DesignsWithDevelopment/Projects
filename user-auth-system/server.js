const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://admin1:root1@cluster0.4ys3vxo.mongodb.net/User-Authentication');

app.use('/api/auth', require('./routes/auth'));

app.get('/api/profile', require('./middleware/authMiddleware'), (req, res) => {
    res.json({ msg: 'Welcome to the protected profile page', userId: req.user.id });
});

app.listen(3000);