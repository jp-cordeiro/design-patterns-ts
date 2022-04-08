export abstract class ProductComponent {
  abstract getPrice(): number;
  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProducComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(product: ProductComponent | ProductComponent[]): void {
    if (Array.isArray(product)) {
      this.children.push(...product);
    } else {
      this.children.push(product);
    }
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) {
      this.children.splice(productIndex, 1);
    }
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  getChildren(): ProductComponent[] {
    return this.children;
  }
}

const rice = new ProductLeaf('Arroz', 4);
const bean = new ProductLeaf('Feijão', 7);
const pasta = new ProductLeaf('Macarrão', 5);
const milkBox = new ProducComposite();
const milk = new ProductLeaf('Leite', 6);
milkBox.add([milk, milk, milk, milk, milk]);

const cart = new ProducComposite();
cart.add([rice, bean, pasta]);
cart.add(milkBox);

console.log(cart);
console.log(cart.getChildren());
console.log(cart.getPrice());
