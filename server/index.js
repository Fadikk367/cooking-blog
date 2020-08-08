const express = require('express');
const mongoose = require('mongoose');

// Import middlewares
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

// Import routes
const routing = require('./routes');


// Load environmental variables if in development
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}

// Connect to the database
mongoose.connect(
  process.env.MONGO_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  (err) => {
    if (err) {
      console.error('Cannot connect to the database...')
      console.error(err);
    } else {
      console.log('Connected to the database');
    }
  }
);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routing
app.use('/recipes', routing.recipesRoute);

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.get('*', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname })
  });
}


// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(500).send('Something broke!')
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});