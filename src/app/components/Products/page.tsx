"use client";
import useProducts from "@/app/hooks/useProducts";
import { useAppSelector } from "@/app/redux/store";
import ProductCard from "../ProductCard/page";

import styles from "./products.module.css";

const Products = () => {
  useProducts();
  const products = useAppSelector((store) => store.product.products);
  const productsTitle = useAppSelector((store) => store.product.title);
  console.log(products);

  if (products.length === 0) return null;

  return (
    <div>
      <h1>{productsTitle}</h1>
      <div className={styles.main}>
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
        {/* <ProductCard {...products[0]} /> */}
      </div>
    </div>
  );
};

export default Products;
