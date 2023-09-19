const ProductManager = require('./ProductManager'); 

const productManager = new ProductManager('Products.json');

const newProduct = {
    title: 'Nombre del Producto',
    description: 'Descripción del Producto',
    price: 'Precio del Producto',
    thumbnail: 'Ruta de Imagen del Producto',
    code: 'Codigo del Producto',
    stock: 'Stock del Producto',
  };

  productManager.addProduct(newProduct);


const allProducts = productManager.getProducts();

console.log("Lista de todos los productos actuales:");
allProducts.forEach(product => {
  console.log(`ID: ${product.id}`);
  console.log(`Título: ${product.title}`);
  console.log(`Descripción: ${product.description}`);
  console.log(`Precio: ${product.price}`);
  console.log(`Thumbnail: ${product.thumbnail}`);
  console.log(`Código: ${product.code}`);
  console.log(`Stock: ${product.stock}`);
  console.log('------------------------');
});

productManager.deleteProduct(1);