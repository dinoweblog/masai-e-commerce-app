export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

export const getProductsLoading = () => ({
  type: PRODUCTS_LOADING,
});

export const getProductsSuccess = (payload) => ({
  type: PRODUCTS_SUCCESS,
  payload,
});

export const getProductsError = () => ({
  type: PRODUCTS_ERROR,
});

export const getProductsData = (categoryName) => (dispatch) => {
  dispatch(getProductsLoading());
  fetch(`https://dummyjson.com/products/category/${categoryName}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(getProductsSuccess(res));
    })
    .catch((error) => dispatch(getProductsError()));
};
