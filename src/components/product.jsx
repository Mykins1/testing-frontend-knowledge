
const Product = ({ items }) => {
  return (
    <ul>
      {items.map((productName, index) => (
        <li key={index}>{productName}</li>
      ))}
    </ul>
  );
};

export default Product;
