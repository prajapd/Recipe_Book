export const HOME_GET_RECIPE_ID = "HOME_GET_RECIPE_ID";

export function updateSelectedRecipe(id) {
  return {
    type: HOME_GET_RECIPE_ID,
    id,
  };
}
