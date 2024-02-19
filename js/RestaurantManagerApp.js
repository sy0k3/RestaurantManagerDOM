import RestaurantManager from "./RestaurantManager.js";
import RestaurantManagerController from "./RestaurantManagerController.js";
import RestaurantManagerView from "./RestaurantManagerView.js";

const RestaurantManagerApp = new RestaurantManagerController(
  RestaurantManager.getInstance(),
  new RestaurantManagerView()
);
export default RestaurantManagerApp;
