/* eslint-disable react/prop-types */
import Single_product from './Single_product';
import axios from "axios";
import { useState, useEffect } from "react";
import Single_Product_Skeleton from './Single_Product_Skeleton';

function Products({ cat, filters, sort, searchTerm }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://royalwatches-backend.onrender.com/api/products?category=${cat}`
            : "https://royalwatches-backend.onrender.com/api/products"
        );
        setProducts(res.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        console.log(err);
        setLoading(false); // Set loading to false even if there's an error
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    let tempProducts = products;

    if (searchTerm) {
      tempProducts = tempProducts.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    tempProducts = tempProducts.filter((item) =>
      Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      )
    );

    setFilteredProducts(tempProducts);
  }, [products, filters, searchTerm]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {loading
          ? Array.from({ length: 21 }, (_, index) => <Single_Product_Skeleton key={index} />)
          : filteredProducts.map((product) => (
              <Single_product product={product} key={product._id} />
            ))
        }
      </div>
    </div>
  );
}

export default Products;
