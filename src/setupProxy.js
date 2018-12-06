/* This file is to proxy the React fetch() requests to the 
Express server running on port 3000. DO NOT RENAME THIS FILE */

const proxy = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(proxy('/api', {target: 'http://localhost:3000/'}
    ));
}