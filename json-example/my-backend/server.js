const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/data', (req, res) => {
    const payload = {
        message: 'Hello, world!',
        timestamp: new Date().toISOString()
    };

    res.json(payload);
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
