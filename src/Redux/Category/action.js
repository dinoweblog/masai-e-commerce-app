export const CATEGORY_LOADING = "CATEGORY_LOADING";
export const CATEGORY_SUCCESS = "CATEGORY_SUCCESS";
export const CATEGORY_ERROR = "CATEGORY_ERROR";

export const getCategoryLoading = () => ({
  type: CATEGORY_LOADING,
});

export const getCategorySuccess = (payload) => ({
  type: CATEGORY_SUCCESS,
  payload,
});

export const getCategoryError = () => ({
  type: CATEGORY_ERROR,
});

export const getCategoryData = () => (dispatch) => {
  dispatch(getCategoryLoading());
  fetch(`https://dummyjson.com/products/categories`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(getCategorySuccess(res));
    })
    .catch((error) => dispatch(getCategoryError()));
};
