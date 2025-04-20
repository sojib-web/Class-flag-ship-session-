import toast from "react-hot-toast";

export const getFavorite = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) return JSON.parse(favorites);
  return [];
};
export const addFavorite = (phone) => {
  const favorites = getFavorite();
  const exists = favorites.some((item) => item.id === phone.id);
  if (!exists) {
    favorites.push(phone);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    toast.success("Phone added Successfully!");
  }
};

export const removeFavorite = (id) => {
  const favorites = getFavorite();
  const remaingFavorites = favorites.filter((phone) => phone.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remaingFavorites));
  toast.success("Phone Removed from Favorite List!");
};

export const getCart = () => {
  let cart = [];
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};
export const addToCart = (phone) => {
  let cart = getCart();
  const isExist = cart.find((b) => b.id === phone.id);
  if (isExist) return toast.error("Already Added!");

  cart.push(phone);
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Cart Updated!");
};

export const removeFromCart = (id) => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  toast.info("Removed from Cart");
};
