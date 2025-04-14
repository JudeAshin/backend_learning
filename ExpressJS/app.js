const express = require('express');
const learningRoutes = require('./routes');
const bodyParser = require('body-parser'); // You'll need this to parse request bodies

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json()); // For parsing application/json

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.use("/learning", learningRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});