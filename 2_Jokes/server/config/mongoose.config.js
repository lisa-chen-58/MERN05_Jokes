const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/2_Jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Note: The useNewUrlParser and useUnifiedTopology are options we pass to get rid of deprecation messages in our terminal.

    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

