import Product from "../components/product";

const ProductList = () => {
  const products = ["Laptop", "Smartphone", "Monitor", "Keyboard", "Mouse", "Router"];

  return (
    <div>
      <h1 className="font-bold">Available Products</h1>
      <Product items={products} />
    </div>
  );
};

export default ProductList;
