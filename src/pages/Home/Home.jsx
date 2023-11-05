import ProductCard from "../../components/common/Cards/ProductCard";

const data = {
   name: "Green Apple",
   originalPrice: 20.99,
   discountPrice: 14.99,
   images: {
      src: 'https://www.freepngimg.com/thumb/apple/89-green-apple-png-image.png'
   },
   rating: 4,
   status: 'Stock',
   statusColor: 'green'
}

const Home = () => {
   return <div className="container  border">
      <div className="flex">
         <ProductCard {...data} />
         <ProductCard {...data} />
         <ProductCard {...data} />
         <ProductCard {...data} />
      </div>
      <div className="flex">
         <ProductCard {...data} />
         <ProductCard {...data} />
         <ProductCard {...data} />
         <ProductCard {...data} />
      </div>
   </div>;
};

export default Home;
