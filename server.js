import express from 'express';
import bodyParser from 'body-parser';
let app = express();
/* Body Parser extracts the body portion of an incoming request and exposes it 
on req.body */
app.use(bodyParser.json()); //support parsing of application/json type post data
bodyParser.urlencoded({extended: true}); //support parsing of application/x-www-form-urlencoded post data

app.get('/api/test', (req, res, next) => {
    res.send("Hello from testing api");
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})