const express = require('express');
const learningRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.use("/learning", learningRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});