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

  console.log("books >>>", parsedResponse);

  return (
    <div className="bg-slate-50">
    <div className=" h-48 object-contain mt-8">
    <div className="border p-4 rounded shadow-lg mx:flex mx:flex-col grid grid-cols-3 gap-14">
      {parsedResponse.map((book, index) => (
        <div key={index} className="flex bg-white flex-col gap-3 border text-center border-black ">
          <p className="mt-14">id: {book.id}</p>
          <p>name: {book.name}</p>
          <p>type: {book.type}</p>
          <p className="mb-14">available: {`${book.available}`}</p>
        </div>
      ))}
    </div></div></div>
  );
};

export default Page;