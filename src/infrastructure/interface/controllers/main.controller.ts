import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import MainService from "../../../core/use-cases/main.service";

@injectable()
class MainController {

  constructor(
    @inject("MainService") private mainService: MainService,
  ) {}
  
  async getHello(_req: Request, res: Response): Promise<Response<string>> {
    const message = await this.mainService.getHello();
    return res.send({ message, status: true });
  }
}



export default MainController;