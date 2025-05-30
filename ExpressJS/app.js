const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const learningRoutes = require('./routes');
const bodyParser = require('body-parser'); // You'll need this to parse request bodies

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json()); // For parsing application/json

//swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Learning API',
      version: '1.0.0',
      description: 'API for learning purposes',
    },
    servers: [
      {
        url: `http://localhost:${port}`, // Local development
        description: 'Local server'
      },
      {
        url: 'https://expressjs-learning-k65b.onrender.com/', // Replace with your real deployed URL
        description: 'Live production server'
      }
    ],
  },
  apis: ['swagger.js'], // Path to files with JSDoc comments
};



const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


app.use("/learning", learningRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});