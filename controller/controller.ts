import restify from 'restify';
import errors from 'restify-errors';

export class ContactController{


    public addNewContact(req:restify.Request, res:restify.Response, next:restify.Next){
        
        if(!req.body || !req.body.name || !req.body.id){
            return next(new errors.BadRequestError());
            console.log('inside if');
        }
        console.log('outside if');
        res.send(201, req.body);
        return next();
        
    }

    public getContacts(req:restify.Request, res:restify.Response, next:restify.Next){
        res.send(200);
        return next();
    }

    public getContactWithID (req:Request, res:Response){
        
    }

    public updateContact(req:Request, res:Response){

       
    }

    public deleteContact (req:Request, res:Response){
      
    }

}