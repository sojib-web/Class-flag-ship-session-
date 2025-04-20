// @ts-nocheck
import React, { useState } from "react";
import bannerImg from "../../assets/banner.png";
import Button from "../UI/Button";
import { CartContext } from "../../providers/Contexts";

const Hero = ({ handleSearch }) => {
  // const { cart } = useContext(CartContext);
  // console.log(cart);
  const [searchText, setSearchText] = useState("");

  return (
    <div
      className="py-12
    "
    >
      <img src={bannerImg} alt="" className="w-full mx-auto md:max-w-md" />
      <div className="text-center space-y-4">
        <h1 className="font-thin text-7xl text-gray-900">
          Browse , Search, View , Buy
        </h1>
        <p className="text-gray-500">
          "Browse, Search, View, Buy" — sounds like a clean 4-step user journey
          or feature highlight. If you’re planning to display this in a UI
        </p>
        <form
          onSubmit={(e) => {
            handleSearch(e, searchText);
            // reset input
            setSearchText("");
          }}
          className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24"
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-white border border-gray-300 rounded shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0 "
            type="text"
            placeholder="Search Phone by Name"
          />
          <Button type="submit" label="Search" />
        </form>
      </div>
    </div>
  );
};

export default Hero;
