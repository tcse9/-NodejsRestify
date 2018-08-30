const restify = require('restify');
const errors = require ('restify-errors');
const port = process.env.PORT || 3000;
const server  = restify.createServer({
        name: "restify headstart"

});
const controller = require('./products.controller');

server.listen(port, function(){

    console.info(`api is running on port ${port}`);
});

server.pre(function(req, res, next){

    console.info(`${req.method} - ${req.url}`);
    return next();
    
});

server.use(restify.plugins.bodyParser());


server.get("/api/products", function(req, res, next){

    res.send(200, controller.getAll());
    return next();
});

server.post('/api/products', function(req, res, next){

    if(!req.body || !req.body.name || !req.body.id){
        return next(new errors.BadRequestError());
    }

    controller.create(+req.body.id, req.body.name);
    res.send(201);
    return next();
});