import restify from 'restify';
import errors from 'restify-errors';
import {Routes} from './router/route';
import bodyParser from 'body-parser';


class App{

    public app: restify.Server;
    
    //public app: this;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = restify.createServer({
            name: "ovi server"
        });
        //this.app = restify;
        this.config();     
        this.routePrv.routes(this.app);     
    }

    private config(): void{
    
        this.app.use(restify.plugins.bodyParser());   
        this.app.pre((req:restify.Request, res:restify.Response, next:restify.Next)=>{
            console.info(`${req.method} - ${req.url}`);
            return next();
        })
    }

}

export default new App().app;