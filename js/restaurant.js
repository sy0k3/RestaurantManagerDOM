import RestaurantManagerApp from "./RestaurantManagerApp.js";

window.addEventListener("popstate", (event) => {
  if (event.state) {
    historyActions[event.state.action](event);
  }
});

const historyActions = {
  init: () => {
    RestaurantManagerApp.handleInit();
  },

  allergens: () => {
    RestaurantManagerApp.handleAllergen();
  },

  showRestaurantsInMenu: () => {
    RestaurantManagerApp.handleRestaurant();
  },

  menus: () => {
    RestaurantManagerApp.handleMenu();
  },

  dishesCategoryList: (event) => {
    RestaurantManagerApp.handleDishesCategoryList(event.state.category);
  },

  dishesCategoryListInMenu: (event) => {
    RestaurantManagerApp.handleDishesCategoryList(event.state.category);
  },

  dishCardListInMenu: (event) => {
    RestaurantManagerApp.handleShowDishCard(event.state.dish);
  },

  dishCardListInCategoryMenu: (event) => {
    RestaurantManagerApp.handleShowDishCard(event.state.dish);
  },

  showAllergens: () => {
    RestaurantManagerApp.handleAllergen();
  },

  showMenus: () => {
    RestaurantManagerApp.handleMenu();
  },

  dishesAllergenList: (event) => {
    RestaurantManagerApp.handleShowDishWithAllergen(event.state.allergen);
  },

  dishesMenuList: (event) => {
    RestaurantManagerApp.handleShowDishInMenu(event.state.menu);
  },

  restaurantsInMenu: (event) => {
    RestaurantManagerApp.handleShowRestaurantCard(event.state.restaurant);
  },

  login: () => ManagerApp.handleLoginForm(),
};

history.replaceState({ action: "init" }, null);
