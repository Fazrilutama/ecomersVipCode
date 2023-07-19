import React from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus
        ullam necessitatibus, excepturi exercitationem iure possimus earum
        voluptatem distinctio repellendus impedit ad adipisci veniam minima et
        eveniet placeat sunt alias.`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 500.000",
    image: "/images/shoes.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus
        ullam necessitatibus`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
