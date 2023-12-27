import { inject, injectable } from "tsyringe";
import MainController from "../controllers/main.controller";
import { Router as ExpressRouter } from 'express';

@injectable()
class MainRoutes {
  public router: ExpressRouter;
  constructor(
    @inject("MainController") private mainController: MainController,
  ) {
    this.router = ExpressRouter();
    this.router.get("/say-hello", this.mainController.getHello.bind(this.mainController));
  }

  public getRoutes(): ExpressRouter {
    return this.router;
  }
}

export default MainRoutes;