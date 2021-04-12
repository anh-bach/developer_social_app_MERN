const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB();

//Init Middlewares
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/users'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
