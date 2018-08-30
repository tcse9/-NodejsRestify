import restify from 'restify';
import app from "./app";

const port:number = 3000;
app.listen(port, ()=>{

    console.info(`ovi api is running on port ${port}`);
});
