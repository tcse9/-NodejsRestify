"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var restify_errors_1 = __importDefault(require("restify-errors"));
var ContactController = /** @class */ (function () {
    function ContactController() {
    }
    ContactController.prototype.addNewContact = function (req, res, next) {
        if (!req.body || !req.body.name || !req.body.id) {
            return next(new restify_errors_1.default.BadRequestError());
            console.log('inside if');
        }
        console.log('outside if');
        res.send(201, req.body);
        return next();
    };
    ContactController.prototype.getContacts = function (req, res, next) {
        res.send(200);
        return next();
    };
    ContactController.prototype.getContactWithID = function (req, res) {
    };
    ContactController.prototype.updateContact = function (req, res) {
    };
    ContactController.prototype.deleteContact = function (req, res) {
    };
    return ContactController;
}());
exports.ContactController = ContactController;
//# sourceMappingURL=controller.js.map