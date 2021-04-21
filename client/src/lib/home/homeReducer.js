import { HOME_GET_RECIPE_ID } from "./homeActions";

export const initialSate = {
  id: 0,
};

export default function homeReducer(state = initialSate, action) {
  switch (action.type) {
    case HOME_GET_RECIPE_ID: {
     
      return {
        ...state,
        id: action.id,
      };
    }
    default:
      //if there is no recognized action type
      return state;
  }
}
