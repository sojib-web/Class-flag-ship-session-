// @ts-nocheck
import React, { useEffect, useState } from "react";
import PhoneCard from "../../Components/PhoneCard/PhoneCard";
import { getFavorite } from "../../Utils";

const Favorites = () => {
  const [displayPhone, setDisplayPhone] = useState([]);
  useEffect(() => {
    const savedPhones = getFavorite();
    setDisplayPhone(savedPhones);
  }, []);
  return (
    <div className="py-12">
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayPhone.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      </>
    </div>
  );
};

export default Favorites;
