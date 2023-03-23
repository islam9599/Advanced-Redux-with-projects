import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const dummyProducts = [
  {
    id: "p1",
    price: 6,
    title: "My 1st book!",
    description: "My first book i ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My 2nd book!",
    description: "My second book i ever wrote",
  },
  {
    id: "p3",
    price: 7,
    title: "My 3rd book!",
    description: "My third book i ever wrote",
  },
  {
    id: "p4",
    price: 9,
    title: "My 4th book!",
    description: "My fourth book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
