import ProductCard from "./ProductCard"; // Adjust this path to where your ProductCard component is located

const products = [
  {
    title: "AL QAWAID",
    price: 6,
    imageUrl: "/courses/1.jpg",
  },
  {
    title: "Dua Book",
    price: 4,
    imageUrl: "/courses/1.jpg",
  },
  {
    title: "Hadith Book",
    price: 8,
    imageUrl: "/courses/1.jpg",
  },
  {
    title: "Understanding Quranic Arabic",
    price: 4,
    imageUrl: "/courses/1.jpg",
  },
];

const Books = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Our Books</h2>
        <div className="mt-2 h-1 w-24 bg-blue-500 mx-auto"></div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
