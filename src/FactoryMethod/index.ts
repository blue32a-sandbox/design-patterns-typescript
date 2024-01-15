export {};

abstract class Creator {
  public abstract FactoryMethod(): Product;

  public someOperation(): string {
    const product = this.FactoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

class ConcreateCreator1 extends Creator {
  public FactoryMethod(): Product {
    return new ConcreateProduct1();
  }
}

class ConcreateCreator2 extends Creator {
  public FactoryMethod(): Product {
    return new ConcreateProduct2();
  }
}

interface Product {
  operation(): string;
}

class ConcreateProduct1 implements Product {
  public operation(): string {
    return '{Result of the ConcreateProduct1}';
  }
}

class ConcreateProduct2 implements Product {
  public operation(): string {
    return '{Result of the ConcreateProduct2}';
  }
}

function clientCode(creator: Creator) {
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
  console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreateCreator1.');
clientCode(new ConcreateCreator1());
console.log('');

console.log('App: Launched with the ConcreateCreator2.');
clientCode(new ConcreateCreator2());
