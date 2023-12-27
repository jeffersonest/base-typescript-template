abstract class MainPort {
  abstract getHello(): Promise<string>;
}

export default MainPort;