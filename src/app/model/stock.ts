export class Stock {
  favorite: boolean = false;

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number
  ) {}

  isPositiveChange() {
    return this.price >= this.previousPrice;
  }
}
