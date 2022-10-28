class IdentifyCreator {
  private order: number = 1;

  create = () => {
    return this.order++;
  };
}

export default new IdentifyCreator();
