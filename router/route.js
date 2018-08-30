"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("../controller/controller");
var Routes = /** @class */ (function () {
    function Routes() {
        this.contactController = new controller_1.ContactController();
    }
    Routes.prototype.routes = function (app) {
        app.post("/api/products", this.contactController.addNewContact);
        app.get("/api/products", this.contactController.getContacts);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=route.js.map