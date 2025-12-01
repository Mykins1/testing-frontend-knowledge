
const Product = ({ items }) => {
  return (
    <ul className="grid grid-cols-3 grid-rows-4 gap-2 mt-4">
      {items.map((productName, index) => (
        <li className="border p-2 rounded-xl" key={index}>{productName}</li>
      ))}
    </ul>
  );
};

export default Product;
