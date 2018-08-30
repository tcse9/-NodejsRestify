import restify from 'restify';
import { ContactController } from "../controller/controller";
import errors from 'restify-errors';


export class Routes {  
    contactController = new ContactController();

    public routes(app:restify.Server): void {          
    
        app.post("/api/products", this.contactController.addNewContact);
        app.get("/api/products", this.contactController.getContacts);
    }

}