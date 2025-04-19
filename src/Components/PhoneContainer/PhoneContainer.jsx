// @ts-nocheck
import React, { useEffect, useState } from "react";
import PhoneCard from "../PhoneCard/PhoneCard";
import Button from "../UI/Button";

const PhoneContainer = ({ phones }) => {
  const [displayPhone, setDisplayPhone] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayPhone(phones);
    } else {
      setDisplayPhone(phones.slice(0, 6));
    }
  }, [phones, showAll]);

  return (
    <div className="py-12">
      {displayPhone.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {displayPhone.map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>

          <Button
            type="submit"
            onClick={() => {
              setShowAll((prv) => !prv);
              if (showAll) window.scrollTo(0, 400);
            }}
            label={showAll ? "Show Less" : "Show More"}
          ></Button>
        </>
      ) : (
        <p className="text-center text-xl font-semibold mt-10 text-red-500">
          Product Not Found
        </p>
      )}
    </div>
  );
};

export default PhoneContainer;
