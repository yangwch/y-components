class IdentifyCreator {
  private order: number = 1;

  private static instance: IdentifyCreator | null = null;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new IdentifyCreator();
    }
    return this.instance;
  }
  create = () => {
    return this.order++;
  };
}

export default IdentifyCreator;
