import axios from 'axios';

export const FETCH_PRODUCTS = 'fetchProducts';

const ROOT_URL = "https://5b8293bf2fd7f20014179146.mockapi.io"

export const fetchProducts = () => {
  const request = axios.get(`${ROOT_URL}/products`);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}
