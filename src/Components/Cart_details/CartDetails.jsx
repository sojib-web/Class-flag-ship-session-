// @ts-nocheck
import React from "react";
import Button from "../UI/Button";
import { Link, useRouteError } from "react-router";

const CartDetails = () => {
  // cart details pore dekhabo ekn apatoto error masg
  const error = useRouteError();
  return (
    <div className="py-24 text-center">
      <h1 className="mb-8 text-7xl font-thin text-gray-900">
        {error?.status || 404}
      </h1>
      <p className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
        {error?.error?.message || "Something Went Wrong!"}
      </p>
      <Link to="/">
        <Button label="Go To Homepage" type={undefined} onClick={undefined} />
      </Link>
    </div>
  );
};

export default CartDetails;
