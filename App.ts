import  express from 'express';
import  bodyParser from 'body-parser';
import  IController from "./src/interface/IController";
 
export default class App {
  public app: express.Application;
  public Port: number;
 
  constructor(Controllers:IController[], Port:number) {
    this.app = express();
    this.Port = Port;
 
    this.initializeMiddlewares();
    this.initializeControllers(Controllers);
  }
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(Controllers:IController[]) {
    Controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.Port, () => {
      console.log(`App listening on the port ${this.Port}`);
    });
  }
}




