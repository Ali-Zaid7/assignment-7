"use client";
import React, { useEffect, useState } from "react";

interface CSRINterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Page = () => {
  const [data, setData] = useState<CSRINterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const parsedResponse: CSRINterface[] = await response.json();
      console.log("products >>>", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-lg flex flex-col gap-5">
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <div>
            <p>Rating:</p>
            <p>Rate: {product.rating.rate}</p>
            <p>Count: {product.rating.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
