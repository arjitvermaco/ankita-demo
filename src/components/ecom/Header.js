import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext/AppContext";
import { Link } from "react-router-dom";
import CartComponent from "./CartComponent";

export default function Header() {
  const { appName } = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  const {isCartOpen, setIsCartOpen} = useContext(AppContext)
  useEffect(() => {
    getAllCategories();
  }, []);

  async function getAllCategories() {
    let response = await fetch("https://fakestoreapi.com/products/categories");
    let data = await response.json();
    setCategories(data);
  }

  return (
    <header className="bg-blue-500 text-white h-12 flex justify-between items-center">
      <CartComponent/>
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
       <Link to="/">{appName}</Link>

        <nav className="flex gap-4">
          {categories.map((category) => {
            return <Link to={`/category/${category}`} className=" capitalize">{category}</Link>;
          })}
         <button onClick={()=>setIsCartOpen(true)}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
         </button>
        </nav>
      </div>
    </header>
  );
}
