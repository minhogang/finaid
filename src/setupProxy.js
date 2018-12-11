/* This file is to proxy the React fetch() requests to the 
Express server running on port 3000. DO NOT RENAME OR MOVE THIS FILE */

const proxy = require('http-proxy-middleware');
//Proxy all requests to /api to port 3000 (Express server port)
module.exports = (app) => {
    app.use(proxy('/api', {target: 'http://localhost:3000/'}
    ));
}
