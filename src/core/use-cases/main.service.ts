import { inject, injectable } from "tsyringe";
import MainAdapter from "../../infrastructure/adapters/main.adapter";

@injectable()
class MainService {
  constructor(
    @inject("MainAdapter") private readonly mainAdapter: MainAdapter,
  ) {}

  async getHello(): Promise<string> {
    return this.mainAdapter.getHello();
  }
}

export default MainService;