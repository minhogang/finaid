import express from 'express';
import bodyParser from 'body-parser';
let app = express();
//bodyParser middleware for express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res, next) => {
    res.send("Hello from default route");
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})