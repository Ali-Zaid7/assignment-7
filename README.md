Next.js Rendering Demo
This project demonstrates the differences between Client-Side Rendering (CSR) and Server-Side Rendering (SSR) in a Next.js application. It uses the app directory structure and integrates with external APIs to fetch and display data dynamically.

Vercel link: https://assignment-7-three.vercel.app/

Features
Client-Side Rendering (CSR):

Fetches product data from FakeStoreAPI on the client side.

Displays product details in a responsive grid layout.

Server-Side Rendering (SSR):

Fetches book data from Simple Books API on the server side.

Displays book details in a responsive grid layout.

Shadcn UI Library:

Uses shadcn for styled and reusable components (e.g., buttons).

Responsive Design:

Optimized for both desktop and mobile views.

Technologies Used
Next.js: For server-side rendering, routing, and page rendering.

React: For building reusable components.

Tailwind CSS: For utility-first styling and responsive design.

Shadcn UI: For pre-styled and customizable UI components.

FakeStoreAPI: For fetching product data in CSR.

Simple Books API: For fetching book data in SSR.

app/
├── components/
│   ├── csr/               # Client-Side Rendering (CSR) component
│   │   └── page.tsx       # CSR page fetching and displaying product data
│   └── ssr/               # Server-Side Rendering (SSR) component
│       └── page.tsx       # SSR page fetching and displaying book data
├── page.tsx               # Main page with navigation buttons
└── globals.css            # Global styles


Code Examples
Client-Side Rendering (CSR)
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


Server-Side Rendering (SSR)
import React from "react";

interface SSRInterface {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Page = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const parsedResponse: SSRInterface[] = await response.json();

  return (
    <div className="bg-slate-50">
      <div className="h-48 object-contain mt-8">
        <div className="border p-4 rounded shadow-lg mx:flex mx:flex-col grid grid-cols-3 gap-14">
          {parsedResponse.map((book, index) => (
            <div key={index} className="flex bg-white flex-col gap-3 border text-center border-black">
              <p className="mt-14">id: {book.id}</p>
              <p>name: {book.name}</p>
              <p>type: {book.type}</p>
              <p className="mb-14">available: {`${book.available}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

