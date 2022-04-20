import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

const PORT = 3000;

const CONNECTION_URL = 'mongodb+srv://lekevin2013:codesmith22@cluster0.u1rlg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Starting path for all routers
app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

//useNewUrlParser and useUnified Topology not required but will give errors if not used
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); }))
    .catch((error) => console.log(error.message));

/**
* Set our Express view engine as ejs.
* This means whenever we call res.render, embedded JavaScript(ejs) will be used to compile the template.
* ejs templates are located in the client/ directory
*/
app.set('view engine', 'ejs');
