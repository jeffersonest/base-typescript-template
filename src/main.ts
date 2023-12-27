
import { inject, injectable } from "tsyringe";
import Express from "express";
import Routes from "./infrastructure/interface/routes";

@injectable()
class Main {
  private readonly app: Express.Application;

  constructor(
    @inject("Routes") private router: Routes
    ) {
    this.app = Express();
  }

  start(): void {
    this.app.use(this.router.getRoutes());
    this.app.listen(3000, () => console.log("Server is running"));
  }
}

export default Main;
