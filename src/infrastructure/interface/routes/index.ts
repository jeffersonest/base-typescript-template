import { Router as ExpressRouter } from 'express';
import { inject, injectable } from 'tsyringe';
import MainRoutes from './main.routes';

@injectable()
class Routes  {
  private Router: ExpressRouter;

  constructor(
    @inject('MainRoutes') private readonly mainRoutes: MainRoutes,
  ) {
    this.Router = ExpressRouter();
  }

  public getRoutes(): ExpressRouter {
    this.Router.use('/main', this.mainRoutes.getRoutes());
    return this.Router;
  }
}

export default Routes;
