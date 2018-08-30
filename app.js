"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var restify_1 = __importDefault(require("restify"));
var route_1 = require("./router/route");
var App = /** @class */ (function () {
    function App() {
        //public app: this;
        this.routePrv = new route_1.Routes();
        this.app = restify_1.default.createServer({
            name: "ovi server"
        });
        //this.app = restify;
        this.config();
        this.routePrv.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(restify_1.default.plugins.bodyParser());
        this.app.pre(function (req, res, next) {
            console.info(req.method + " - " + req.url);
            return next();
        });
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map