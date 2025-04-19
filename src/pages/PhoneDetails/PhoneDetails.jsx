// @ts-nocheck
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../../Components/UI/Button";
import { IoBookmarkSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { addFavorite } from "../../Utils";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  // Find the phone by id (make sure id is a number)
  const singlePhone = data.find((phone) => phone.id === parseInt(id));

  // Optional chaining to avoid crash if not found
  if (!singlePhone) {
    return (
      <div className="text-center text-red-500 text-xl mt-20">
        Phone not found!
      </div>
    );
  }

  const {
    brand,
    camera_info,
    description,
    image,
    model,
    name,
    price,
    storage,
  } = singlePhone;

  const handleFavorite = () => {
    addFavorite(singlePhone);
  };

  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <img src={image} alt={name} className="w-full rounded-2xl mx-auto" />

      <div className="mt-16 flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Name: {name}</h1>
        <div className="flex gap-3">
          <Button label={<IoBookmarkSharp />} />
          <Button onClick={handleFavorite} label={<FaShoppingCart />} />
        </div>
      </div>

      {/* details */}

      <div className="mt-8 space-y-2">
        <h2 className="text-2xl font-bold">Details</h2>

        <p>
          <strong>Price:</strong>{" "}
          <div>
            {Object.entries(price).map(([storage, price]) => (
              <p key={storage} className="">
                <span>{storage}:</span> <span>{price}</span>
              </p>
            ))}
          </div>
        </p>

        <p>
          <strong>Brand:</strong> {brand}
        </p>
        <p>
          <strong>Model:</strong> {model}
        </p>
        <p>
          <strong>Storage:</strong> {storage}
        </p>
        <p>
          <strong>Camera:</strong> {camera_info}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
    </div>
  );
};

export default PhoneDetails;
