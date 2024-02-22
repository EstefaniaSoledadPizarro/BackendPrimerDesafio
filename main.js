class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
      if (this.products.find(product => product.code === code)) {
        throw new Error('El código del producto ya existe.');
      }

      const newProduct = {
        id: this.nextId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };

      this.products.push(newProduct);
      return newProduct;
    }

    getProducts() {
      return this.products;
    }

    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new Error('Producto no encontrado.');
      }
      return product;
    }
  }

  const manager = new ProductManager();

  try {
    console.log('caso de prueba getProducts');
    console.log(manager.getProducts());

    console.log('caso de prueba addProduct');
    const addedProduct = manager.addProduct({
      title: "producto prueba",
      description: "Este es un producto prueba",
      price: 200,
      thumbnail: "Sin imagen",
      code: "0003",
      stock: 30
    });

    console.log('caso de prueba getProducts con el nuevo insert');
    console.log(manager.getProducts());

    console.log('caso de prueba nuevo addProduct con id repetido');
    manager.addProduct({
      title: "nuevo producto prueba",
      description: "Otro producto prueba",
      price: 300,
      thumbnail: "Sin imagen",
      code: "0004",
      stock: 35
    });

  } catch (error) {
    console.error(error.message);
  }

  try {
    console.log('caso de prueba getProducts');
    console.log(manager.getProducts()); 
    console.log('caso de prueba getProductById 1');
    console.log(manager.getProductById(1)); 
    console.log('caso de prueba getProductById 345');
    console.log(manager.getProductById(345));

  } catch (error) {
    console.error(error.message);
  }