export function addToFavorite(id) {

  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const existingFavorite = favorites.find(item => item.id === id);
  if (existingFavorite) {
      favorites = favorites.filter(item => item.id !== id)
  } else {
      favorites.push({id});
  }

  // Lưu lại giỏ hàng vào Local Storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
}



export function getCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart;
}
export function getFavorite() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites;
}


export function deleteCart() {
  localStorage.setItem('cart', JSON.stringify([]));
}


export const setFavorite = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const setCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
export const setToken = (token) => {
  localStorage.setItem('token', token);
};