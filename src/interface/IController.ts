import * as express from 'express';
export default interface IController {
    path:String;
    router:express.Router;
    intializeRoutes();
}
