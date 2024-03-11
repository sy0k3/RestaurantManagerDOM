// Importando objetos desde un módulo separado
import {
  Dish,
  Category,
  Allergen,
  Menu,
  Restaurant,
  Coordinate,
} from "./RestaurantManager.js";

import { getCookie, greetUser } from "./util.js";

const MODEL = Symbol("RestaurantManagerModel");
const VIEW = Symbol("RestaurantManagerView");

const AUTH = Symbol("AUTH");
const USER = Symbol("USER");

const FAVORITE_DISHES = Symbol("FAVORITE_DISHES");

class RestaurantManagerController {
  constructor(model, view, auth) {
    this[MODEL] = model;
    this[VIEW] = view;
    this[AUTH] = auth;
    this[USER] = null;
    this[FAVORITE_DISHES] = [];

    this.onLoad();
  }

  loadData(data) {
    console.log(data);
    if (data) {
      const categorias = data.categorias;
      const platos = data.platos;
      const alergenos = data.alergenos;
      const menus = data.menus;
      const restaurantes = data.restaurantes;

      // Añade platos al modelo
      platos.forEach((plato) => {
        const nuevoPlato = new Dish(
          plato.nombre,
          plato.descripcion,
          plato.ingredientes,
          plato.imagen
        );
        this[MODEL].addDish(nuevoPlato);
        console.log(plato);
        console.log(nuevoPlato);
      });

      // Añade las categorías al modelo y asigna platos a categorías
      categorias.forEach((categoria) => {
        const nuevaCategoria = new Category(
          categoria.nombre,
          categoria.descripcion
        );
        this[MODEL].addCategory(nuevaCategoria);
        categoria.platos.forEach((name) => {
          const dish = this[MODEL].getDish(name);
          this[MODEL].assignCategoryToDish(nuevaCategoria, dish);
        });
      });

      // Añade alérgenos al modelo y asigna alérgenos a platos
      alergenos.forEach((alergeno) => {
        const nuevoAlergeno = new Allergen(
          alergeno.nombre,
          alergeno.descripcion
        );
        this[MODEL].addAllergen(nuevoAlergeno);
        alergeno.platos.forEach((name) => {
          const dish = this[MODEL].getDish(name);
          this[MODEL].assignAllergenToDish(nuevoAlergeno, dish);
        });
      });

      // Añade menús al modelo y asigna platos a menús
      menus.forEach((menu) => {
        const nuevoMenu = new Menu(menu.nombre, menu.descripcion);
        this[MODEL].addMenu(nuevoMenu);
        // Asigna platos al menú (suponiendo que hay una lista de nombres de platos en la propiedad 'platos' de cada menú)
        menu.platos.forEach((name) => {
          const dish = this[MODEL].getDish(name);
          this[MODEL].assignDishToMenu(nuevoMenu, dish);
        });
      });

      // Añade restaurantes al modelo
      restaurantes.forEach((restaurante) => {
        const coordenadas = new Coordinate(
          restaurante.coordenadas.latitud,
          restaurante.coordenadas.longitud
        );
        const nuevoRestaurante = new Restaurant(
          restaurante.nombre,
          restaurante.descripcion,
          coordenadas
        );
        this[MODEL].addRestaurant(nuevoRestaurante);
      });
    }
  }

  onLoad() {
    if (getCookie("accetedCookieMessage") !== "true") {
      this[VIEW].showCookiesMessage();
    }

    const userCookie = getCookie("activeUser");
    if (userCookie) {
      const user = this[AUTH].getUser(userCookie);
      if (user) {
        this[USER] = user;
        this.onOpenSession(user);
      }
    } else {
      this[VIEW].showIdentificationLink();
      this[VIEW].bindIdentificationLink(this.handleLoginForm);
      this.onCloseSession();
    }

    fetch("./js/data/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.loadData(data);
      })
      .then(() => {
        this.onInit();
        this[VIEW].bindInit(this.handleInit);
      })
      .catch((error) => {
        console.error(
          "Error al cargar los datos desde el archivo JSON:",
          error
        );
      });

    this[VIEW].showCategoriesInMenu(this[MODEL].categories);
    this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList);

    this[VIEW].showRestaurantsInMenu(this[MODEL].restaurants);
    this[VIEW].bindRestaurants(this.handleRestaurant);

    this[VIEW].showCloseWindowsOption();
    this[VIEW].bindCloseWindows();

    const storedFavoriteDishes = localStorage.getItem("favoriteDishes");
    if (storedFavoriteDishes) {
      this[FAVORITE_DISHES] = JSON.parse(storedFavoriteDishes);
    }
  }

  onInit() {
    this[VIEW].showCategories(this[MODEL].categories);
    this[VIEW].showDishesInCarousel(this[MODEL].dishes);

    this[VIEW].bindDishesCategoryList(this.handleDishesCategoryList);
    this[VIEW].bindDishToCarousel(this.handleShowDishCard);

    this[VIEW].bindAllergens(this.handleAllergen);
    this[VIEW].bindMenus(this.handleMenu);

    this[VIEW].showCategoriesInMenu(this[MODEL].categories);
    this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList);
  }

  handleInit = () => {
    this.onInit();
  };

  handleDishesCategoryList = (name) => {
    this[VIEW].showCategories(this[MODEL].categories);
    this[VIEW].bindDishesCategoryList(this.handleDishesCategoryList);

    const category = this[MODEL].getCategory(name);
    const dishes = this[MODEL].getDishesInCategory(category, (a, b) =>
      a.name.localeCompare(b.name)
    );
    this[VIEW].showDishesInCategory(dishes);
    this[VIEW].showDishesOfCategoryInMenu(dishes);
    this[VIEW].bindDishCardListInMenu(this.handleShowDishCard);
    this[VIEW].bindDishCardListInCategoryMenu(this.handleShowDishCard);
  };

  handleShowDishCard = (name) => {
    const userCookie = getCookie("activeUser");
    let user;
    if (userCookie) {
      user = this[AUTH].getUser(userCookie);
    }
    const dish = this[MODEL].getDish(name);
    this[VIEW].showDishCard(dish, user);
    this[VIEW].bindDishCardInWindow(this.handleShowDishCardInWindow);
    this[VIEW].bindFavoriteDish(this.addFavoriteDish);
  };

  handleShowDishCardInWindow = (name, newWindow) => {
    const dish = this[MODEL].getDish(name);
    this[VIEW].showDishCardInWindow(dish, newWindow);
  };

  handleAllergen = () => {
    this[VIEW].showCategoriesInMenu(this[MODEL].categories);
    this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList);

    this[VIEW].showAllergens(this[MODEL].allergens);
    this[VIEW].bindDishesAllergenList(this.handleShowDishWithAllergen);
  };

  handleMenu = () => {
    this[VIEW].showCategoriesInMenu(this[MODEL].categories);
    this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList);

    this[VIEW].showMenus(this[MODEL].menus);
    this[VIEW].bindDishesMenuList(this.handleShowDishInMenu);
  };

  handleRestaurant = () => {
    this[VIEW].showCategoriesInMenu(this[MODEL].categories);
    this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList);

    this[VIEW].showRestaurantsInMenu(this[MODEL].restaurants);
    this[VIEW].bindRestaurantsInMenu(this.handleShowRestaurantCard);
  };

  handleShowDishWithAllergen = (name) => {
    const allergen = this[MODEL].getAllergen(name);
    const dishes = this[MODEL].getDishesWithAllergen(allergen, (a, b) =>
      a.name.localeCompare(b.name)
    );
    this[VIEW].showDishesInCategory(dishes);
    this[VIEW].bindDishCardListInMenu(this.handleShowDishCard);
  };

  handleShowDishInMenu = (name) => {
    const menu = this[MODEL].getMenu(name);
    const dishes = this[MODEL].getDishesInMenu(menu);
    this[VIEW].showDishesInCategory(dishes);
    this[VIEW].bindDishCardListInMenu(this.handleShowDishCard);
  };

  handleShowRestaurantCard = (name) => {
    const rest = this[MODEL].getRestaurant(name);
    this[VIEW].showRestaurantCard(rest);
  };

  handleNewDishForm = () => {
    this[VIEW].showNewDishForm(this[MODEL].categories, this[MODEL].allergens);
    this[VIEW].bindNewDishForm(this.handleCreateDish);
  };

  handleCreateDish = (name, desc, ingredients, url, categories, allergens) => {
    let done;
    let error;
    let dish;

    try {
      dish = new Dish(name, desc, ingredients, url);
      this[MODEL].addDish(dish);

      categories.forEach((name) => {
        const category = this[MODEL].getCategory(name);
        this[MODEL].assignCategoryToDish(category, dish);
      });

      if (allergens.length > 0) {
        allergens.forEach((name) => {
          const allergen = this[MODEL].getAllergen(name);
          this[MODEL].assignAllergenToDish(allergen, dish);
        });
      }
      done = true;
    } catch (exception) {
      done = false;
      error = exception;
    }
    this[VIEW].showModalDish(done, dish, error);

    this[VIEW].showCategoriesInMenu(this[MODEL].categories);
    this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList);
  };

  handleRemoveDishForm = () => {
    this[VIEW].showRemoveDishForm(this[MODEL].dishes);
    this[VIEW].bindRemoveDishForm(this.handleRemoveDish);

    this[VIEW].showCategoriesInMenu(this[MODEL].categories);
    this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList);
  };

  handleRemoveDish = (name) => {
    let done;
    let error;
    let dish;
    try {
      dish = this[MODEL].getDish(name);
      this[MODEL].removeDish(dish);
      done = true;
    } catch (exception) {
      done = false;
      error = exception;
    }
    this[VIEW].showModalRemovalDish(done, dish, error);
  };

  handleAdminCategoryForm = () => {
    this[VIEW].showAdminCategoryForm(this[MODEL].categories);
    this[VIEW].bindNewCategoryForm(this.handleCreateCategory);
    this[VIEW].bindRemoveCategoryForm(this.handleRemoveCategory);
  };

  handleCreateCategory = (name, desc) => {
    let done;
    let error;
    let cat;

    try {
      cat = new Category(name, desc);
      this[MODEL].addCategory(cat);

      done = true;
    } catch (exception) {
      done = false;
      error = exception;
    }
    this[VIEW].showModalCategory(done, cat, error);

    this[VIEW].showAdminCategoryForm(this[MODEL].categories);
    this[VIEW].bindNewCategoryForm(this.handleCreateCategory);
    this[VIEW].bindRemoveCategoryForm(this.handleRemoveCategory);
    this[VIEW].showCategoriesInMenu(this[MODEL].categories);
    this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList);
  };

  handleRemoveCategory = (name) => {
    let done;
    let error;
    let cat;
    try {
      cat = this[MODEL].getCategory(name);
      this[MODEL].removeCategory(cat);
      done = true;
    } catch (exception) {
      done = false;
      error = exception;
    }
    this[VIEW].showModalRemovalCategory(done, cat, error);

    this[VIEW].showAdminCategoryForm(this[MODEL].categories);
    this[VIEW].bindNewCategoryForm(this.handleCreateCategory);
    this[VIEW].bindRemoveCategoryForm(this.handleRemoveCategory);

    this[VIEW].showCategoriesInMenu(this[MODEL].categories);
    this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList);
  };

  handleNewRestForm = () => {
    this[VIEW].showNewRestForm();
    this[VIEW].bindNewRestForm(this.handleCreateRest);
  };

  handleCreateRest = (name, desc, latitude, longitude) => {
    let done;
    let error;
    let rest;

    try {
      rest = new Restaurant(name, desc, new Coordinate(latitude, longitude));
      this[MODEL].addRestaurant(rest);

      done = true;
    } catch (exception) {
      done = false;
      error = exception;
    }
    this[VIEW].showModalRestaurant(done, rest, error);

    this[VIEW].showRestaurantsInMenu(this[MODEL].restaurants);
    this[VIEW].bindRestaurants(this.handleRestaurant);
  };

  handlerAdminMenu = () => {
    this[VIEW].showAdminMenuForm(
      this[MODEL].menus,
      this[MODEL].dishes,
      this[MODEL].getMenus()
    );
    this[VIEW].bindAdminMenuForm(
      this.handleAssignDishToMenu,
      this.handleDeassignDishToMenu,
      this.handleChangeDishesInMenu
    );
  };

  handleAssignDishToMenu = (name, dishes) => {
    let done;
    let error;
    let menu;

    try {
      menu = this[MODEL].getMenu(name);

      dishes.forEach((name) => {
        const dish = this[MODEL].getDish(name);
        this[MODEL].assignDishToMenu(menu, dish);
      });

      done = true;
    } catch (exception) {
      done = false;
      error = exception;
    }
    this[VIEW].showModalAssignDishToMenu(done, menu, error);
    this[VIEW].showAdminMenuForm(
      this[MODEL].menus,
      this[MODEL].dishes,
      this[MODEL].getMenus()
    );
    this[VIEW].bindAdminMenuForm(
      this.handleAssignDishToMenu,
      this.handleDeassignDishToMenu,
      this.handleChangeDishesInMenu
    );
  };

  handleDeassignDishToMenu = (name, dishes) => {
    let done;
    let error;
    let menu;

    try {
      menu = this[MODEL].getMenu(name);

      dishes.forEach((name) => {
        const dish = this[MODEL].getDish(name);
        this[MODEL].deassignDishToMenu(menu, dish);
      });

      done = true;
    } catch (exception) {
      done = false;
      error = exception;
    }
    this[VIEW].showModalDeassignDishToMenu(done, menu, error);
    this[VIEW].showAdminMenuForm(
      this[MODEL].menus,
      this[MODEL].dishes,
      this[MODEL].getMenus()
    );
    this[VIEW].bindAdminMenuForm(
      this.handleAssignDishToMenu,
      this.handleDeassignDishToMenu
    );
  };

  handleChangeDishesInMenu = (name, dishes) => {
    let done;
    let error;
    let menu;

    try {
      menu = this[MODEL].getMenu(name);
      const dish1 = this[MODEL].getDish(dishes[0]);
      const dish2 = this[MODEL].getDish(dishes[1]);

      this[MODEL].changeDishesPositionsInMenu(menu, dish1, dish2);

      done = true;
    } catch (exception) {
      done = false;
      error = exception;
    }
    this[VIEW].showModalChangeDishesInMenu(done, menu, error);
    this[VIEW].showAdminMenuForm(
      this[MODEL].menus,
      this[MODEL].dishes,
      this[MODEL].getMenus()
    );
    this[VIEW].bindAdminMenuForm(
      this.handleAssignDishToMenu,
      this.handleDeassignDishToMenu
    );
  };

  handleModifyCatForm = () => {
    this[VIEW].showModCategoriesForm(
      this[MODEL].dishes,
      this[MODEL].getCategories()
    );
    this[VIEW].bindModCatForm(this.handleModifyCatOfDish);
  };

  handleModifyCatOfDish = (name, catRem, catAdd) => {
    let done;
    let error;
    let dish;

    try {
      dish = this[MODEL].getDish(name);

      for (const categoryName of catRem) {
        const category = this[MODEL].getCategory(categoryName);
        this[MODEL].deassignCategoryToDish(category, dish);
      }

      for (const categoryName of catAdd) {
        const category = this[MODEL].getCategory(categoryName);
        this[MODEL].assignCategoryToDish(category, dish);
      }

      done = true;
    } catch (exception) {
      done = false;
      error = exception;
    }
    this[VIEW].showModalModifyCatOfDish(done, dish, error);

    this[VIEW].showModCategoriesForm(
      this[MODEL].dishes,
      this[MODEL].getCategories()
    );
    this[VIEW].bindModCatForm(this.handleModifyCatOfDish);
  };

  handleLoginForm = () => {
    this[VIEW].showLogin();
    this[VIEW].bindLogin(this.handleLogin);
  };

  handleLogin = (username, password, remember) => {
    if (this[AUTH].validateUser(username, password)) {
      this[USER] = this[AUTH].getUser(username);
      this.onOpenSession();

      if (remember) {
        this[VIEW].setUserCookie(this[USER]);
      }
    } else {
      this[VIEW].showInvalidUserMessage();
    }
  };

  onOpenSession() {
    this.onInit();

    this[VIEW].initHistory();
    this[VIEW].showAuthUserProfile(this[USER]);
    this[VIEW].bindCloseSession(this.handleCloseSession);

    this[VIEW].showAdminMenu();
    this[VIEW].bindAdminMenu(
      this.handleNewDishForm,
      this.handleRemoveDishForm,
      this.handlerAdminMenu,
      this.handleAdminCategoryForm,
      this.handleNewRestForm,
      this.handleModifyCatForm,
      this.generateBackup
    );

    this[VIEW].showFavoriteDishesMenu();
    this[VIEW].bindFavoriteDishMenu(this.handleShowFavoriteDishes);
    greetUser();
  }

  handleCloseSession = () => {
    this.onCloseSession();
    this.onInit();
    this[VIEW].initHistory();
  };

  onCloseSession() {
    this[USER] = null;
    this[VIEW].deleteUserCookie();
    this[VIEW].showIdentificationLink();
    this[VIEW].bindIdentificationLink(this.handleLoginForm);
    this[VIEW].removeAdminMenu();
    this[VIEW].removeFavoriteDishesMenu();
  }

  addFavoriteDish = (name) => {
    let done;
    let error;
    let dish;
    try {
      dish = this[MODEL].getDish(name);
      const index = this[FAVORITE_DISHES].findIndex(
        (favDish) => favDish.name === dish.name
      );
      if (index === -1) {
        this[FAVORITE_DISHES].push(
          JSON.stringify({
            name: dish.name,
            description: dish.description,
            ingredients: dish.ingredients,
            image: dish.image,
          })
        );
      } else {
        this[FAVORITE_DISHES].splice(index, 1);
      }
      localStorage.setItem(
        "favoriteDishes",
        JSON.stringify(this[FAVORITE_DISHES])
      );

      done = true;
    } catch (exception) {
      done = false;
      error = exception;
    }

    this[VIEW].showModalAddFavoriteDish(done, dish, error);
  };

  handleShowFavoriteDishes = () => {
    const storedFavoriteDishes = localStorage.getItem("favoriteDishes");

    if (storedFavoriteDishes) {
      this[FAVORITE_DISHES] = JSON.parse(storedFavoriteDishes);
    }
    this[VIEW].showFavoriteDishes(this[FAVORITE_DISHES]);
  };

  generateBackup = () => {
    const data = {
      categorias: [],
      platos: [],
      alergenos: [],
      menus: [],
      restaurantes: [],
    };

    // Categorías
    for (const category of this[MODEL].categories) {
      data.categorias.push({
        name: category.name,
        description: category.description,
      });
    }

    // Platos
    for (const dish of this[MODEL].dishes) {
      data.platos.push({
        name: dish.name,
        description: dish.description,
        ingredients: dish.ingredients,
        image: dish.image,
      });
    }

    // Alergenos
    for (const allergen of this[MODEL].allergens) {
      data.alergenos.push({
        name: allergen.name,
        description: allergen.description,
      });
    }

    // Menus
    for (const menu of this[MODEL].menus) {
      data.menus.push({
        name: menu.name,
        description: menu.description,
      });
    }

    // Restaurantes
    for (const restaurant of this[MODEL].restaurants) {
      data.restaurantes.push({
        name: restaurant.name,
        description: restaurant.description,
        location: {
          latitude: restaurant.location.latitude,
          longitude: restaurant.location.longitude,
        },
      });
    }
    const jsonString = JSON.stringify(data);

    const fechaActual = new Date().toISOString().replace(/:/g, "-");
    const nombreArchivo = `backup_${fechaActual}.json`;

    const formData = new FormData();
    const blob = new Blob([jsonString], { type: "application/json" });
    formData.append("file", blob, nombreArchivo);

    fetch("http://localhost/php/upload.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al guardar el archivo de respaldo.");
        }
        console.log("Archivo de respaldo subido correctamente.");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
}
export default RestaurantManagerController;
