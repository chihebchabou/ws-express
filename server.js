const express = require('express');
const path = require('node:path');
const logger = require('./middleware/logger');

const app = express();

// Middlewares
app.use(logger.mdwTest1);

app.use(logger.mdwTest2);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   // console.log(req.protocol);
//   // console.log(req.hostname);
//   // res.send('<h1>Express</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ${PORT}'));
