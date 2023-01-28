import { CATEGORY_ERROR, CATEGORY_LOADING, CATEGORY_SUCCESS } from "./action";

const initialState = {
  loading: false,
  error: false,
  category: [],
};

export const categoryReducer = (store = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case CATEGORY_LOADING:
      return { ...store, loading: true };

    case CATEGORY_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        category: [...payload],
      };

    case CATEGORY_ERROR:
      return { ...store, loading: false, error: true };

    default:
      return store;
  }
};
