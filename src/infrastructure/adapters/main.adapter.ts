import { injectable } from "tsyringe";
import MainPort from "../../core/ports/main.port";

@injectable()
class MainAdapter implements MainPort {
  async getHello(): Promise<string> {
    return "Hello World";
  }
}

export default MainAdapter;