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

const LOAD_MANAGER_OBJECTS = Symbol("Load Manager Objects");

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
    this.onInit();

    this[VIEW].bindInit(this.handleInit);
  }

  [LOAD_MANAGER_OBJECTS]() {
    // let ca1 = new Category(
    //   "Entrantes",
    //   "Platos ligeros y sabrosos que se sirven al principio de la comida para abrir el apetito"
    // );
    // let ca2 = new Category(
    //   "Primeros",
    //   "Platos principales que incluyen carnes, pescados o platos vegetarianos, más abundantes que los primeros"
    // );
    // let ca3 = new Category(
    //   "Postres",
    //   "Deliciosos dulces y tentadores que se disfrutan al final de la comida para satisfacer el paladar"
    // );

    // this[MODEL].addCategory(ca1, ca2, ca3);

    // let d1 = new Dish(
    //   "Pulpo a la Gallega",
    //   "El “pulpo á feira” es un plato que consta de pulpo cocido con patatas, sal gruesa, pimentón y aceite de oliva",
    //   ["Pulpo", "Patata", "Sal", "Pimentón", "Aceite de oliva"],
    //   "https://esenciadelmar.es/wp-content/uploads/2023/08/receta-pulpo-gallega.jpeg"
    // );
    // let d2 = new Dish(
    //   "Paella Valenciana",
    //   "La paella valenciana es un plato típico de la región de Valencia que se elabora con arroz, verduras y carne o marisco.",
    //   [
    //     "Arroz",
    //     "Pollo",
    //     "Conejo",
    //     "Judías verdes",
    //     "Garrofón",
    //     "Tomate",
    //     "Azafrán",
    //     "Aceite de oliva",
    //   ],
    //   "https://www.publico.es/uploads/2021/11/09/618a5de6435a0.jpeg"
    // );
    // let d3 = new Dish(
    //   "Sushi",
    //   "El sushi es una comida japonesa que consiste en arroz adobado con vinagre de arroz, acompañado de otros ingredientes como pescado o marisco.",
    //   ["Arroz", "Vinagre de arroz", "Pescado", "Alga nori"],
    //   "https://www.asadorcitywokalfafar.com/wp-content/uploads/2021/07/variedades-sushi.jpg"
    // );
    // let d4 = new Dish(
    //   "Tacos al Pastor",
    //   "Los tacos al pastor son una deliciosa especialidad de la cocina mexicana, consisten en carne de cerdo adobada, piña y cebolla, servidos en tortillas de maíz.",
    //   ["Carne de cerdo", "Piña", "Cebolla", "Tortillas de maíz"],
    //   "https://holacarolina.org/wp-content/uploads/2022/04/Comida-Tipica-Mexicana-Tacos-Pastor-Portada.jpg"
    // );
    // let d5 = new Dish(
    //   "Lasagna",
    //   "La lasaña es un plato de origen italiano que se elabora con láminas de pasta intercaladas con carne picada, salsa de tomate y bechamel.",
    //   [
    //     "Pasta para lasaña",
    //     "Carne picada",
    //     "Salsa de tomate",
    //     "Bechamel",
    //     "Queso rallado",
    //   ],
    //   "https://www.paulinacocina.net/wp-content/uploads/2022/06/receta-de-lasagna-de-berenjenas-1200x800.jpg"
    // );
    // let d6 = new Dish(
    //   "Maki de Salmón",
    //   "El sushi de salmón es una variedad de sushi muy popular que consiste en arroz adobado con vinagre de arroz, envuelto en alga nori y relleno de salmón fresco.",
    //   ["Arroz", "Vinagre de arroz", "Alga nori", "Salmón fresco"],
    //   "https://sushi.oceanwp.org/wp-content/uploads/2022/03/nori-sushi-rolls-with-salmon-served-with-ginger-wasabi-shredded-carrot-1.jpg"
    // );
    // let d7 = new Dish(
    //   "Ceviche Peruano",
    //   "El ceviche peruano es un plato típico de la gastronomía peruana, elaborado con pescado fresco marinado en jugo de limón, cebolla, ají y cilantro.",
    //   ["Pescado fresco", "Limón", "Cebolla", "Ají", "Cilantro"],
    //   "https://gestion.pe/resizer/8c1ugDy_313ZNnDVDNxqRCIYHx0=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GFXUEOFW5BALVBMB3Y24M6V3XM.jpg"
    // );
    // let d8 = new Dish(
    //   "Hamburguesa Clásica",
    //   "La hamburguesa clásica es un sándwich elaborado con una carne de hamburguesa a la parrilla, acompañada de lechuga, tomate, cebolla y queso, todo dentro de un pan de hamburguesa.",
    //   [
    //     "Carne de hamburguesa",
    //     "Lechuga",
    //     "Tomate",
    //     "Cebolla",
    //     "Queso",
    //     "Pan de hamburguesa",
    //   ],
    //   "https://www.miguelvergara.com/actualidad/wp-content/uploads/2021/05/front-view-burger-on-stand-1200x800.jpg"
    // );
    // let d9 = new Dish(
    //   "Poke Bowl",
    //   "El poke bowl es una ensalada de origen hawaiano que se elabora con pescado crudo marinado, arroz, aguacate, pepino, cebolla y algas, todo servido en un bol.",
    //   ["Pescado crudo", "Arroz", "Aguacate", "Pepino", "Cebolla", "Algas"],
    //   "https://hips.hearstapps.com/hmg-prod/images/poke-bowl-elle-gourmet-1-1669825719.jpg"
    // );
    // let d10 = new Dish(
    //   "Cordero al Horno",
    //   "El cordero al horno es un plato tradicional de la cocina mediterránea, consiste en carne de cordero asada lentamente en el horno con hierbas aromáticas y especias.",
    //   ["Cordero", "Hierbas aromáticas", "Especias"],
    //   "https://content-cocina.lecturas.com/medio/2023/12/11/costillar-de-cordero-al-horno-istock-1400651441_d093155a_231211105736_1200x800.jpg"
    // );
    // let d11 = new Dish(
    //   "Sopa de Tomate",
    //   "La sopa de tomate es una sopa reconfortante y saludable, elaborada con tomates maduros, cebolla, ajo, caldo de verduras y hierbas aromáticas.",
    //   ["Tomates", "Cebolla", "Ajo", "Caldo de verduras", "Hierbas aromáticas"],
    //   "https://assets.elgourmet.com/wp-content/uploads/2023/03/sopa-_wiEKe3BYpGML5Q06HJUyvPOhAbxkzm.png"
    // );
    // let d12 = new Dish(
    //   "Tiramisú",
    //   "El tiramisú es un postre italiano muy popular que se elabora con capas de bizcochos de soletilla mojados en café, crema de mascarpone y cacao en polvo.",
    //   ["Bizcochos de soletilla", "Café", "Mascarpone", "Cacao en polvo"],
    //   "https://cdn-italiani-media.italiani.it/site-italiani/2020/09/tiramisu.jpg"
    // );

    // this[MODEL].addDish(d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);

    // this[MODEL].assignCategoryToDish(ca1, d1, d2, d3, d4);
    // this[MODEL].assignCategoryToDish(ca2, d5, d6, d7, d8);
    // this[MODEL].assignCategoryToDish(ca3, d9, d10, d11, d12);

    // let a1 = new Allergen(
    //   "Lácteos",
    //   "Alérgeno relacionado con productos lácteos como leche, queso y mantequilla"
    // );
    // let a2 = new Allergen(
    //   "Moluscos",
    //   "Alérgeno relacionado con moluscos como almejas, mejillones y calamares"
    // );
    // let a3 = new Allergen(
    //   "Gluten",
    //   "Alérgeno relacionado con el gluten, presente en trigo, cebada y centeno, entre otros"
    // );
    // let a4 = new Allergen(
    //   "Crustaceos",
    //   "Alérgeno relacionado con crustáceos como langostas, camarones y cangrejos"
    // );

    // this[MODEL].addAllergen(a1, a2, a3, a4);

    // this[MODEL].assignAllergenToDish(a1, d5, d12);
    // this[MODEL].assignAllergenToDish(a2, d1, d2, d3, d9);
    // this[MODEL].assignAllergenToDish(a3, d4, d5, d8);
    // this[MODEL].assignAllergenToDish(a4, d1, d3, d6, d7, d9);

    // let m1 = new Menu(
    //   "Oriental",
    //   "Este menu ofrece una distina variacion de platos de origen asiatico conprendiendo un entrante o ensalada, un principal y postre"
    // );
    // let m2 = new Menu(
    //   "Diario",
    //   "Una variedad de platos equilibrados y nutritivos, perfectos para disfrutar en el día a día"
    // );
    // let m3 = new Menu(
    //   "Mar y Montaña",
    //   "Una combinación única de ingredientes del mar y de la tierra, que ofrece una experiencia culinaria sorprendente"
    // );

    // this[MODEL].addMenu(m1, m2, m3);

    // this[MODEL].assignDishToMenu(m1, d3, d6, d9);
    // this[MODEL].assignDishToMenu(m2, d10, d11, d12);
    // this[MODEL].assignDishToMenu(m3, d1, d2, d7);

    // let c1 = new Coordinate(-89.654654, -89.23323);

    // let r1 = new Restaurant(
    //   "Restaurante Takara",
    //   "Restaurante de platos con tematica oriental",
    //   c1
    // );

    // let r2 = new Restaurant(
    //   "Casa Manolo",
    //   "Un lugar único que te transportará a Oriente con su temática oriental y una selección exquisita de platos inspirados en la cocina asiática",
    //   c1
    // );
    // let r3 = new Restaurant(
    //   "Celler de Can Roca",
    //   "Un referente mundial en la alta cocina, con una propuesta culinaria sofisticada y una experiencia gastronómica incomparable",
    //   c1
    // );

    // this[MODEL].addRestaurant(r1, r2, r3);

    this.cargarDatos();
  }

  async cargarDatosDesdeJSON() {
    try {
      const response = await fetch("data.json"); // Corregir la URL del archivo JSON
      const data = await response.json();
      return data; // Devuelve el objeto JSON obtenido del archivo
    } catch (error) {
      console.error("Error al cargar los datos desde el archivo JSON:", error);
      return null;
    }
  }

  async cargarDatos() {
    const data = await this.cargarDatosDesdeJSON();
    if (data) {
      const categorias = data.categorias;
      const platos = data.platos;
      const alergenos = data.alergenos;
      const menus = data.menus;
      const restaurantes = data.restaurantes;

      // Añade las categorías al modelo y asigna platos a categorías
      categorias.forEach((categoria) => {
        const nuevaCategoria = new Category(
          categoria.nombre,
          categoria.descripcion
        );
        this[MODEL].addCategory(nuevaCategoria);
        platos
          .filter(
            (plato) =>
              plato.categorias && plato.categorias.includes(categoria.nombre)
          )
          .forEach((plato) =>
            this[MODEL].assignCategoryToDish(nuevaCategoria, plato)
          );
      });

      // Añade platos al modelo
      platos.forEach((plato) => {
        const nuevoPlato = new Dish(
          plato.nombre,
          plato.descripcion,
          plato.ingredientes,
          plato.imagen
        );
        this[MODEL].addDish(nuevoPlato);
      });

      // Añade alérgenos al modelo y asigna alérgenos a platos
      alergenos.forEach((alergeno) => {
        const nuevoAlergeno = new Allergen(
          alergeno.nombre,
          alergeno.descripcion
        );
        this[MODEL].addAllergen(nuevoAlergeno);
        platos
          .filter(
            (plato) =>
              plato.alergenos && plato.alergenos.includes(alergeno.nombre)
          )
          .forEach((plato) =>
            this[MODEL].assignAllergenToDish(nuevoAlergeno, plato)
          );
      });

      // Añade menús al modelo y asigna platos a menús
      menus.forEach((menu) => {
        const nuevoMenu = new Menu(menu.nombre, menu.descripcion);
        this[MODEL].addMenu(nuevoMenu);
        // Asigna platos al menú (suponiendo que hay una lista de nombres de platos en la propiedad 'platos' de cada menú)
        menu.platos.forEach((nombrePlato) => {
          const plato = this[MODEL].getDish(nombrePlato);
          if (plato) {
            this[MODEL].assignDishToMenu(nuevoMenu, plato);
          } else {
            console.error(
              `El plato '${nombrePlato}' no se encontró en la lista de platos.`
            );
          }
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

      // Aquí puedes realizar cualquier otra inicialización necesaria o acciones después de cargar los datos
    }
  }

  onLoad() {
    this[LOAD_MANAGER_OBJECTS]();
    this[VIEW].showCategoriesInMenu(this[MODEL].categories);
    this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList);

    this[VIEW].showRestaurantsInMenu(this[MODEL].restaurants);
    this[VIEW].bindRestaurants(this.handleRestaurant);

    this[VIEW].showCloseWindowsOption();
    this[VIEW].bindCloseWindows();

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
      this.handleModifyCatForm
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
}
export default RestaurantManagerController;
