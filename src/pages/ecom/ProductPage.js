import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon, ChevronDownIcon } from "lucide-react";
import AppContext from "../../context/AppContext/AppContext";

export default function ProductPage() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const { setCartItems, cartItems, isCartOpen, setIsCartOpen } =
    useContext(AppContext);
  useEffect(() => {
    getProductById();
  }, [id]);

  function addToCart() {
    //Check if the product is already in the cart
    const isProductInCart = cartItems.find((item) => item.id === product.id);
    //If the product is already in the cart, increase the quantity
    if (isProductInCart) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      //If the product is not in the cart, add it to the cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // setCartItems([...cartItems, product])
    setIsCartOpen(true);
  }

  async function getProductById() {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
    console.log(data);
  }
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-4">
        {/* <p className="text-sm uppercase tracking-wide">SMOOTHIE</p> */}
        <h1 className="text-4xl font-bold mt-2">{product.title}</h1>
      </div>

      <div className="md:flex md:space-x-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          {/* <p className="text-gray-600 mb-4">
          Inspired by: a wake-me-up shot of green juice
        </p> */}

          <div className="flex items-center mb-4">
            {[...Array(4)].map((_, i) => (
              <StarIcon
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
              />
            ))}
            <StarIcon
              className="w-5 h-5 text-yellow-400 fill-current"
              style={{
                clipPath: "inset(0 50% 0 0)",
              }}
            />
            <span className="ml-2 text-gray-600">888 reviews</span>
          </div>

          <p className="text-gray-700 mb-4">{product.description}</p>

          <button
            onClick={() => addToCart()}
            className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
          >
            Add To Cart - ${product.price}
          </button>
        </div>
      </div>
    </div>
  );
}
