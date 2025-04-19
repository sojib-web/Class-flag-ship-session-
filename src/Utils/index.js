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
  }
};
