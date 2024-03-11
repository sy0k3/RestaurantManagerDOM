import RestaurantManager from "./RestaurantManager.js";
import RestaurantManagerController from "./RestaurantManagerController.js";
import RestaurantManagerView from "./RestaurantManagerView.js";

import AuthenticationService from "./authentication.js";

const RestaurantManagerApp = new RestaurantManagerController(
  RestaurantManager.getInstance(),
  new RestaurantManagerView(),
  AuthenticationService.getInstance()
);
export default RestaurantManagerApp;
