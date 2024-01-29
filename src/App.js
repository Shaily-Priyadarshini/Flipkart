const products = [
  {
    id: 101,
    name: "Skirt",
    image: "https://i.pravatar.cc/48?u=118836",
    price: 700,
  },
  {
    id: 102,
    name: "Jeans",
    image: "https://i.pravatar.cc/48?u=933372",
    price: 1500,
  },
  {
    id: 103,
    name: "Top",
    image: "https://i.pravatar.cc/48?u=499476",
    price: 1000,
  },
];
function App() {
  return (
    <div className="App">
      <RetriveProducts products={products} />
    </div>
  );
}
function RetriveProducts({ products }) {
  return (
    <div className="container">
      {products.map((product) => (
        <ProductList
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
        // console.log(product.name);
      ))}
    </div>
  );
}

function ProductList({ image, name, price }) {
  return (
    <div className="app">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <span>{price}</span>
      <button>Add to cart</button>
    </div>
  );
}
export default App;
