import Product from "../components/product";

const ProductList = () => {
  const products = ["Laptop", "Smartphone", "Monitor", "Keyboard", "Mouse", "Router", "Headphones", "Chargers", "UPS", "Printer"];

  return (
    <div>
      <h1>Available Products</h1>
      <Product items={products} />
    </div>
  );
};

export default ProductList;
