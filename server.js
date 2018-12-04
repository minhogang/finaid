import express from 'express';
import bodyParser from 'body-parser';
import express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';
let app = express();

var schema = buildSchema(`
    type Query {
        message: String
    }
`)

app.get('/', (req, res, next) => {
    res.send("Hello from default route");
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})