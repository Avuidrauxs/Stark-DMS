import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express'
import dotenv from 'dotenv';
// import routes from './routes/index';
dotenv.config();
const app = express()
const env = process.env.NODE_ENV || 'development'
const port = env === 'development' ? process.env.DEV_PORT : process.env.PORT;




// mongoose instance connection url connection
// mongoose.Promise = global.Promise;

// DB
// mongoose.connect('mongodb://localhost/TodoDB');



app.use(bodyParser.json({limit : '50mb'}));
app.use(bodyParser.urlencoded({extended : true}));

//routes
// app.use('/api/v1', routes);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Audax Simple CRUD API listening on port ${port}!`))

export default app;
