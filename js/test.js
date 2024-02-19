// Importando excepciones personalizadas desde un módulo separado
import {
  BaseException,
  InvalidAccessConstructorException,
  EmptyValueException,
  InvalidTypeParameterException,
  InvalidValueException,
} from "./RestaurantManager.js";

// Importando objetos desde un módulo separado
import {
  Dish,
  Category,
  Allergen,
  Menu,
  Restaurant,
  Coordinate,
} from "./RestaurantManager.js";

// Importando excepciones personalizadas del manager desde un módulo separado
import {
  CategoryRestaurantManagerException,
  MenuRestaurantManagerException,
  AllergenRestaurantManagerException,
  DishRestaurantManagerException,
  RestaurantRestaurantManagerException,
  CategoryExistsRestaurantManagerException,
  CategoryNotExistRestaurantManagerException,
  MenuExistsRestaurantManagerException,
  MenuNotExistRestaurantManagerException,
  AllergenExistsRestaurantManagerException,
  AllergenNotExistRestaurantManagerException,
  RestaurantExistsRestaurantManagerException,
  RestaurantNotExistRestaurantManagerException,
  DishExistsRestaurantManagerException,
  DishNotExistRestaurantManagerException,
  DishInCategoryRestaurantManagerException,
  DishNotInCategoryRestaurantManagerException,
  DishInAllergenRestaurantManagerException,
  DishNotInAllergenRestaurantManagerException,
  DishInMenuRestaurantManagerException,
  DishNotInMenuRestaurantManagerException,
} from "./RestaurantManager.js";

// Importando el manager desde un módulo separado
import RestaurantManager from "./RestaurantManager.js";

function testRestaurantManager() {
  function testCoordinate() {
    console.log("##### Testeo Objeto Coordinate. ##### ");
    //Coordenadas c1: -90, 90
    console.log("Coordenadas c1: " + c1.latitude + ", " + c1.longitude);

    try {
      let c2 = new Coordinate(-190, 90);
      console.log("Coordenadas c1: " + c1.latitude + ", " + c1.longitude);
    } catch (err) {
      //Error: InvalidValueException: Error: The paramenter latitude has an invalid value. (latitude: -190)
      console.error("Error: " + err.toString());
    }

    try {
      let c3 = new Coordinate(-90, 190);
      console.log("Coordenadas c1: " + c1.latitude + ", " + c1.longitude);
    } catch (err) {
      //Error: InvalidValueException: Error: The paramenter longitude has an invalid value. (longitude: 190)
      console.error("Error: " + err.toString());
    }
    console.log("##### Fin: Testeo Objeto Coordinate. ##### ");
    console.log("");
    console.log("");
  }

  let c1 = new Coordinate(-89.654654, -89.23323);
  testCoordinate();

  function testDish() {
    console.log("##### Testeo Objeto Dish. ##### ");
    //Dish d1 (Con todos las propiedades)
    console.log("Plato d1: " + d1.toString());
    //Dish d2 (Solo con la propiedad name)
    console.log("Plato d2: " + d2.toString());

    try {
      let d3 = new Dish("");
      console.log("Plato d3: " + d3.toString());
    } catch (err) {
      //Error: EmptyValueException: Error: The paramenter name has an empty value. (name: "")
      console.error("Error: " + err.toString());
    }

    try {
      let d4 = new Dish(190);
      console.log("Plato d4: " + d4.toString());
    } catch (err) {
      //Error: InvalidValueException: Error: The paramenter name has an invalid value. (name: 190)
      console.error("Error: " + err.toString());
    }

    console.log("##### Fin: Testeo Objeto Dish. ##### ");
    console.log("");
    console.log("");
  }

  let d1 = new Dish(
    "Pulpo a la Gallega",
    "El “pulpo á feira” es un plato que consta de pulpo cocido con patatas, sal gruesa, pimentón y aceite de oliva",
    ["Pulpo", "Patata", "Sal", "Pimentón", "Aceite de oliva"],
    "https://cdn.recetasderechupete.com/wp-content/uploads/2009/11/pulpo_gallega.jpg"
  );

  let d2 = new Dish("Patatas bravas");
  let d3 = new Dish("Patatas alioli");
  let d4 = new Dish("Ratatouille");
  testDish();

  function testCategory() {
    console.log("##### Testeo Objeto Category. ##### ");
    //Category ca1 (Con todos las propiedades)
    console.log("Category ca1: " + ca1.toString());
    //Category ca2 (Solo con la propiedad name)
    console.log("Category ca2: " + ca2.toString());

    try {
      let ca3 = new Category("");
      console.log("Category ca3: " + ca3.toString());
    } catch (err) {
      //Error: EmptyValueException: Error: The paramenter name has an empty value. (name: "")
      console.error("Error: " + err.toString());
    }

    try {
      let ca4 = new Category(190);
      console.log("Category ca4: " + ca4.toString());
    } catch (err) {
      //Error: InvalidValueException: Error: The paramenter name has an invalid value. (name: 190)
      console.error("Error: " + err.toString());
    }

    console.log("##### Fin: Testeo Objeto Category. ##### ");
    console.log("");
    console.log("");
  }
  let ca1 = new Category(
    "Entrantes",
    "Es un plato de comida que puede consumirse como 1er plato (antes que todos los otros platos), Es un plato de menor cantidad de comida que el plato principal."
  );

  let ca2 = new Category("Primeros");
  let ca3 = new Category("Segundos");
  let ca4 = new Category("Postres");
  testCategory();

  function testAllergen() {
    console.log("##### Testeo Objeto Allergen. ##### ");
    //Allergen a1 (Con todos las propiedades)
    console.log("Allergen a1: " + a1.toString());
    //Allergen a2 (Solo con la propiedad name)
    console.log("Allergen a2: " + a2.toString());

    try {
      let a3 = new Allergen("");
      console.log("Allergen a3: " + a3.toString());
    } catch (err) {
      //Error: EmptyValueException: Error: The paramenter name has an empty value. (name: "")
      console.error("Error: " + err.toString());
    }

    try {
      let a4 = new Allergen(190);
      console.log("Allergen a4: " + a4.toString());
    } catch (err) {
      //Error: InvalidValueException: Error: The paramenter name has an invalid value. (name: 190)
      console.error("Error: " + err.toString());
    }

    console.log("##### Fin: Testeo Objeto Allergen. ##### ");
    console.log("");
    console.log("");
  }
  let a1 = new Allergen(
    "Lácteos",
    "Un producto lácteo se entiende como un producto obtenido mediante cualquier elaboración de la leche, que puede contener aditivos alimentarios y otros ingredientes funcionalmente necesarios para la elaboración"
  );

  let a2 = new Allergen("Moluscos");
  let a3 = new Allergen("Gluten");
  let a4 = new Allergen("Crustaceos");
  testAllergen();

  function testMenu() {
    console.log("##### Testeo Objeto Menu. ##### ");
    //Menu a1 (Con todos las propiedades)
    console.log("Menu m1: " + m1.toString());
    //Menu a2 (Solo con la propiedad name)
    console.log("Menu m2: " + m2.toString());

    try {
      let m3 = new Menu("");
      console.log("Menu a3: " + m3.toString());
    } catch (err) {
      //Error: EmptyValueException: Error: The paramenter name has an empty value. (name: "")
      console.error("Error: " + err.toString());
    }

    try {
      let m4 = new Menu(190);
      console.log("Menu a4: " + m4.toString());
    } catch (err) {
      //Error: InvalidValueException: Error: The paramenter name has an invalid value. (name: 190)
      console.error("Error: " + err.toString());
    }

    console.log("##### Fin: Testeo Objeto Menu. ##### ");
    console.log("");
    console.log("");
  }
  let m1 = new Menu(
    "Oriental",
    "Este menu ofrece una distina variacion de platos de origen asiatico conprendiendo un entrante o ensalada, un principal y postre"
  );

  let m2 = new Menu("Infantil");
  let m3 = new Menu(
    "Diario",
    "Una variedad de platos equilibrados y nutritivos, perfectos para disfrutar en el día a día"
  );
  let m4 = new Menu(
    "Mar y Montaña",
    "Una combinación única de ingredientes del mar y de la tierra, que ofrece una experiencia culinaria sorprendente"
  );
  testMenu();

  function testRestaurant() {
    console.log("##### Testeo Objeto Restaurant. ##### ");
    //Restaurant r1 (Con todos las propiedades)
    console.log("Restaurant r1: " + r1.toString());
    //Restaurant r2 (Solo con la propiedad name)
    console.log("Restaurant r2: " + r2.toString());

    try {
      let r3 = new Restaurant("");
      console.log("Restaurant r3: " + r3.toString());
    } catch (err) {
      //Error: EmptyValueException: Error: The paramenter name has an empty value. (name: "")
      console.error("Error: " + err.toString());
    }

    try {
      let r4 = new Restaurant(190);
      console.log("Restaurant a4: " + r4.toString());
    } catch (err) {
      //Error: InvalidValueException: Error: The paramenter name has an invalid value. (name: 190)
      console.error("Error: " + err.toString());
    }

    console.log("##### Fin: Testeo Objeto Restaurant. ##### ");
    console.log("");
    console.log("");
  }
  let r1 = new Restaurant(
    "Restaurante Takara",
    "Restaurante de platos con tematica oriental",
    c1
  );

  let r2 = new Restaurant("Casa Manolo");
  let r3 = new Restaurant("Diverxo");
  let r4 = new Restaurant("Celler de Can Roca");
  testRestaurant();

  console.log("##### Inicio: Testeo RestaurantManager. ##### ");

  // Crear un gestor de restaurantes
  const restaurantManager = RestaurantManager.getInstance();

  // Pruebas para añadir y eliminar categorías
  restaurantManager.addCategory(ca1, ca3).addCategory(ca2, ca4);
  console.log("Categories after adding:");
  for (const category of restaurantManager.categories) {
    console.log(category.toString());
  }

  restaurantManager.removeCategory(ca1);
  console.log("Categories after removing:");
  for (const category of restaurantManager.categories) {
    console.log(category.toString());
  }

  // Intentar añadir la misma categoría nuevamente
  try {
    restaurantManager.addCategory(c2);
  } catch (error) {
    console.error("Error adding category:", error.message);
  }

  // Intentar eliminar una categoría que no existe
  try {
    restaurantManager.removeCategory(new Category("Nonexistent Category"));
  } catch (error) {
    console.error("Error removing category:", error.message);
  }

  // Pruebas para añadir y eliminar menús
  restaurantManager.addMenu(m1, m3).addMenu(m2, m4);
  console.log("Menus after adding:");
  for (const menu of restaurantManager.menus) {
    console.log(menu.toString());
  }

  restaurantManager.removeMenu(m1);
  console.log("Menus after removing:");
  for (const menu of restaurantManager.menus) {
    console.log(menu.toString());
  }

  // Intentar añadir el misma menu nuevamente
  try {
    restaurantManager.addMenu(m2);
  } catch (error) {
    console.error("Error adding menu:", error.message);
  }

  // Intentar eliminar un menu que no existe
  try {
    restaurantManager.removeMenu(new Menu("Nonexistent Menu"));
  } catch (error) {
    console.error("Error removing menu:", error.message);
  }

  // Pruebas para añadir y eliminar alérgenos
  restaurantManager.addAllergen(a1, a3).addAllergen(a2, a4);
  console.log("Allergens after adding:");
  for (const allergen of restaurantManager.allergens) {
    console.log(allergen.toString());
  }

  restaurantManager.removeAllergen(a1);
  console.log("Allergens after removing:");
  for (const allergen of restaurantManager.allergens) {
    console.log(allergen.toString());
  }

  // Intentar añadir el mismo alergeno nuevamente
  try {
    restaurantManager.addAllergen(a2);
  } catch (error) {
    console.error("Error adding allergen:", error.message);
  }

  // Intentar eliminar un alergeno que no existe
  try {
    restaurantManager.removeAllergen(new Allergen("Nonexistent Allergen"));
  } catch (error) {
    console.error("Error removing allergen:", error.message);
  }

  // Pruebas para añadir y eliminar platos
  restaurantManager.addDish(d1, d3).addDish(d2, d4);

  restaurantManager.removeDish(d1);
  console.log("Dishes after removing:");

  // Intentar añadir el mismo plato nuevamente
  try {
    restaurantManager.addDish(d2);
  } catch (error) {
    console.error("Error adding dish:", error.message);
  }

  // Intentar eliminar un plato que no existe
  try {
    restaurantManager.removeDish(new Dish("Nonexistent Dish"));
  } catch (error) {
    console.error("Error removing dish:", error.message);
  }

  // Pruebas para añadir y eliminar restaurantes
  restaurantManager.addRestaurant(r1, r3).addRestaurant(r2, r4);
  console.log("Restaurants after adding:");
  for (const restaurant of restaurantManager.restaurants) {
    console.log(restaurant.toString());
  }

  restaurantManager.removeRestaurant(r1);
  console.log("Restaurants after removing:");
  for (const restaurant of restaurantManager.restaurants) {
    console.log(restaurant.toString());
  }

  // Intentar añadir el mismo restaurante nuevamente
  try {
    restaurantManager.addRestaurant(r2);
  } catch (error) {
    console.error("Error adding category:", error.message);
  }

  // Intentar eliminar un restaurante que no existe
  try {
    restaurantManager.removeRestaurant(
      new Restaurant("Nonexistent Restaurant")
    );
  } catch (error) {
    console.error("Error removing restaurant:", error.message);
  }

  // Asignar una categoría a un plato
  restaurantManager.assignCategoryToDish(ca2, d2);
  console.log("Dishes in Category after assignment:");
  for (const dish of restaurantManager.getDishesInCategory(ca2, (a, b) =>
    a.name.localeCompare(b.name)
  )) {
    console.log(dish.toString());
  }

  // Intentar asignar el mismo plato a la misma categoría nuevamente (debería lanzar una excepción)
  try {
    restaurantManager.assignCategoryToDish(ca2, d2);
  } catch (error) {
    console.error("Error assigning dish to category:", error.message);
  }

  // Desasignar un plato de una categoría
  restaurantManager.deassignCategoryToDish(ca2, d2);
  console.log("Dishes in Category after deassignment:");
  for (const dish of restaurantManager.getDishesInCategory(ca2, (a, b) =>
    a.name.localeCompare(b.name)
  )) {
    console.log(dish.toString());
  }

  // Intentar desasignar un plato que no está en la categoría (debería lanzar una excepción)
  try {
    restaurantManager.deassignCategoryToDish(ca2, d2);
  } catch (error) {
    console.error("Error deassigning dish from category:", error.message);
  }

  // Asignar un alergeno a un plato
  restaurantManager.assignAllergenToDish(a2, d2);
  console.log("Dishes in Allergen after assignment:");
  for (const dish of restaurantManager.getDishesWithAllergen(a2, (a, b) =>
    a.name.localeCompare(b.name)
  )) {
    console.log(dish.toString());
  }

  // Intentar asignar el mismo plato a el mismo alergeno nuevamente (debería lanzar una excepción)
  try {
    restaurantManager.assignAllergenToDish(c2, d2);
  } catch (error) {
    console.error("Error assigning dish to allergen:", error.message);
  }

  // Desasignar un plato de un alergeno
  restaurantManager.deassignAllergenToDish(a2, d2);
  console.log("Dishes in Allergen after deassignment:");
  for (const dish of restaurantManager.getDishesWithAllergen(a2, (a, b) =>
    a.name.localeCompare(b.name)
  )) {
    console.log(dish.toString());
  }

  // Intentar desasignar un plato que no está en el alergeno (debería lanzar una excepción)
  try {
    restaurantManager.deassignAllergenToDish(a2, d2);
  } catch (error) {
    console.error("Error deassigning dish from allergen:", error.message);
  }

  // Asignar un plato a un menu
  restaurantManager.assignDishToMenu(m2, d2, d3, d4);
  console.log("Dishes in Menu after assignment:");
  for (const dish of restaurantManager.getDishesInMenu(m2)) {
    console.log(dish.toString());
  }

  // Intentar asignar el mismo plato a el mismo menu nuevamente (debería lanzar una excepción)
  try {
    restaurantManager.assignDishToMenu(m2, d2);
  } catch (error) {
    console.error("Error assigning dish to menu:", error.message);
  }

  // Desasignar un plato de un menu
  restaurantManager.deassignDishToMenu(m2, d2);
  console.log("Dishes in Menu after deassignment:");
  for (const dish of restaurantManager.getDishesInMenu(m2)) {
    console.log(dish.toString());
  }

  // Intentar desasignar un plato que no está en el menu (debería lanzar una excepción)
  try {
    restaurantManager.deassignDishToMenu(m2, d2);
  } catch (error) {
    console.error("Error deassigning dish from menu:", error.message);
  }

  // Cambiar las posiciones de dos platos en el menú
  restaurantManager.changeDishesPositionsInMenu(m2, d3, d4);
  console.log("Dishes in Menu after changing positions:");
  for (const dish of restaurantManager.getDishesInMenu(m2)) {
    console.log(dish.toString());
  }

  // Intentar cambiar posiciones con un plato inexistente en el menú (debería lanzar una excepción)
  try {
    const nonExistentDish = new Dish("Non-Existent Dish");
    restaurantManager.changeDishesPositionsInMenu(m2, d2, nonExistentDish);
  } catch (error) {
    console.error("Error changing positions:", error.message);
  }

  // Buscar platos que cumplan con ciertos criterios
  const filteredDishes = restaurantManager.findDishes(
    d3,
    (dish) => dish.description === "",
    (a, b) => a.name.localeCompare(b.name)
  );
  console.log("Filtered Dishes:", [...filteredDishes]);

  // Crear instancias de otras entidades
  const allergen = restaurantManager.createAllergen(
    "Allergen 1",
    "Allergen Description 1"
  );
  const category = restaurantManager.createCategory(
    "Category 1",
    "Category Description 1"
  );
  const restaurant = restaurantManager.createRestaurant(
    "Restaurant 1",
    "Restaurant Description 1"
  );

  console.log("##### Fin: Testeo RestaurantManager. ##### ");
  console.log("");
  console.log("");
}
window.onload = testRestaurantManager;
