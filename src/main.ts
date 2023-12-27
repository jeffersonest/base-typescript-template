
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
    this.app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}!`));
  }
}

export default Main;
