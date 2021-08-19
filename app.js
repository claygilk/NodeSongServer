// Require Statements
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const songRoutes = require('./routes/songRoutes');

// Create Express Instance/App
const app = express();

// configure Mongoose to supress deprecation warning
mongoose.set('returnOriginal', false);
mongoose.set('useFindAndModify', false);

// Connection String
const dbURI = 'mongodb+srv://netninja:test1234@nodetutorial.mjviw.mongodb.net/song-db?retryWrites=true&w=majority'

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {
    console.log('Succesfully Connected to Database');
    // listen for requests
    app.listen(3000);
})
.catch((error) => {
    console.log('Error Connecting to Database');
})

// Not exactly sure what they do, but using them for now
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// Use Router
app.use('/songs', songRoutes)