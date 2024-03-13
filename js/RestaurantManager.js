import {
  BaseException,
  InvalidAccessConstructorException,
  EmptyValueException,
  InvalidTypeParameterException,
  InvalidValueException,
} from "./BaseException.js";

import {
  Dish,
  Category,
  Allergen,
  Menu,
  Restaurant,
  Coordinate,
} from "./ObjectsRestaurantManager.js";

//Excepción de valor inválido de Category
class CategoryRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} isn't an instance of Category. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "CategoryRestaurantManagerException";
  }
}

//Excepción de Category ya registrado
class CategoryExistsRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} exists already. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "CategoryExistsRestaurantManagerException";
  }
}

//Excepción de Category no registrado
class CategoryNotExistRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} not exist. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "CategoryNotExistRestaurantManagerException";
  }
}

//Excepción de valor inválido de Menu
class MenuRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} isn't an instance of Menu. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "MenuRestaurantManagerException";
  }
}

//Excepción de Menu ya registrado
class MenuExistsRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} exists already. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "MenuExistsRestaurantManagerException";
  }
}

//Excepción de Menu no registrado
class MenuNotExistRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} not exist. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "MenuNotExistRestaurantManagerException";
  }
}

//Excepción de valor inválido de Allergen
class AllergenRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} isn't an instance of Allergen. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "AllergenRestaurantManagerException";
  }
}

//Excepción de Allergen ya registrado
class AllergenExistsRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} exists already. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "AllergenExistsRestaurantManagerException";
  }
}

//Excepción de Allergen no registrado
class AllergenNotExistRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} not exist. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "AllergenNotExistRestaurantManagerException";
  }
}

//Excepción de valor inválido de Restaurant
class RestaurantRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} isn't an instance of Restaurant. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "RestaurantRestaurantManagerException";
  }
}

//Excepción de Restaurant ya registrado
class RestaurantExistsRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} exists already. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "RestaurantExistsRestaurantManagerException";
  }
}

//Excepción de Restaurant no registrado
class RestaurantNotExistRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} not exist. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "RestaurantNotExistRestaurantManagerException";
  }
}

//Excepción de valor inválido de Dish
class DishRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} isn't an instance of Dish. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "DishRestaurantManagerException";
  }
}

//Excepción de Dish ya registrado
class DishExistsRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} exists already. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "DishExistsRestaurantManagerException";
  }
}

//Excepción de Dish no registrado
class DishNotExistRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} not exist. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "DishNotExistRestaurantManagerException";
  }
}

//Excepción de Dish asignado a una Categoria
class DishInCategoryRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} is assigned to the category. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "DishInCategoryRestaurantManagerException";
  }
}

//Excepción de Dish no asignado a una Categoria
class DishNotInCategoryRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} isn't assigned to the category. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "DishNotInCategoryRestaurantManagerException";
  }
}

//Excepción de Dish asignado a una Alergeno
class DishInAllergenRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} is assigned to the allergen. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "DishInAllergenRestaurantManagerException";
  }
}

//Excepción de Dish no asignado a una Alergeno
class DishNotInAllergenRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} isn't assigned to the allergen. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "DishNotInAllergenRestaurantManagerException";
  }
}

//Excepción de Dish asignado a una Menu
class DishInMenuRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} is assigned in the menu. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "DishInMenuRestaurantManagerException";
  }
}

//Excepción de Dish no asignado a una Menu
class DishNotInMenuRestaurantManagerException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} isn't assigned in the menu. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "DishNotInMenuRestaurantManagerException";
  }
}

let RestaurantManager = (function () {
  let instantiated;

  function init() {
    class RestaurantManager {
      #name = "RestaurantManager";
      #categories = [];
      #allergens = [];
      #menus = [];
      #dishes = [];
      #restaurants = [];

      //    #categories:{
      //                category,
      //                dishes: []
      //                }
      //      #allerges:{
      //                allerge,
      //                dishes: []
      //                }
      //         #menus:{
      //                menu,
      //                dishes: []
      //                }

      //Dado una categoría, devuelve la posición de esa categoría en el array de categorías o -1 si no lo encontramos.
      //Hemos elegido comparar por contenido no por referencia.
      #getCategoryPosition(category) {
        if (!(category instanceof Category)) {
          throw new CategoryRestaurantManagerException("category", category);
        }

        function compareElements(element) {
          return element.category.name === category.name;
        }

        return this.#categories.findIndex(compareElements);
      }

      //Dado un nombre de categoria la devuelve
      //Hemos elegido comparar por contenido no por referencia.
      getCategory(name) {
        if (!name) {
          throw new CategoryRestaurantManagerException("name", name);
        }

        function compareElements(element) {
          return element.category.name === name;
        }

        let index = this.#categories.findIndex(compareElements);

        if (index != -1) {
          return this.#categories[index].category;
        } else {
          return index;
        }
      }

      //Dado un alergeno, devuelve la posición de esa categoría en el array de categorías o -1 si no lo encontramos.
      //Hemos elegido comparar por contenido no por referencia.
      #getAllergenPosition(allergen) {
        if (!(allergen instanceof Allergen)) {
          throw new AllergenRestaurantManagerException("allergen", allergen);
        }

        function compareElements(element) {
          return element.allergen.name === allergen.name;
        }

        return this.#allergens.findIndex(compareElements);
      }

      //Dado un nombre de alergeno lo devuelve
      //Hemos elegido comparar por contenido no por referencia.
      getAllergen(name) {
        if (!name) {
          throw new AllergenRestaurantManagerException("name", name);
        }

        function compareElements(element) {
          return element.allergen.name === name;
        }

        let index = this.#allergens.findIndex(compareElements);

        if (index != -1) {
          return this.#allergens[index].allergen;
        } else {
          return index;
        }
      }

      //Dado un menu, devuelve la posición de esa categoría en el array de categorías o -1 si no lo encontramos.
      //Hemos elegido comparar por contenido no por referencia.
      #getMenuPosition(menu) {
        if (!(menu instanceof Menu)) {
          throw new MenuRestaurantManagerException("menu", menu);
        }

        function compareElements(element) {
          return element.menu.name === menu.name;
        }

        return this.#menus.findIndex(compareElements);
      }

      //Dado un nombre de menu lo devuelve
      //Hemos elegido comparar por contenido no por referencia.
      getMenu(name) {
        if (!name) {
          throw new MenuRestaurantManagerException("name", name);
        }

        function compareElements(element) {
          return element.menu.name === name;
        }

        let index = this.#menus.findIndex(compareElements);

        if (index != -1) {
          return this.#menus[index].menu;
        } else {
          return index;
        }
      }

      //Dado un restaurante, devuelve la posición de esa categoría en el array de categorías o -1 si no lo encontramos.
      //Hemos elegido comparar por contenido no por referencia.
      #getRestaurantPosition(restaurant) {
        if (!(restaurant instanceof Restaurant)) {
          throw new RestaurantRestaurantManagerException(
            "restaurant",
            restaurant
          );
        }

        function compareElements(element) {
          return element.name === restaurant.name;
        }

        return this.#restaurants.findIndex(compareElements);
      }

      //Dado un nombre de restaurtante lo devuelve
      //Hemos elegido comparar por contenido no por referencia.
      getRestaurant(name) {
        if (!name) {
          throw new RestaurantRestaurantManagerException("name", name);
        }
        function compareElements(element) {
          return element.name === name;
        }

        let index = this.#restaurants.findIndex(compareElements);

        if (index != -1) {
          return this.#restaurants[index];
        } else {
          return index;
        }
      }

      //Dado un plato, devuelve la posición de esa categoría en el array de categorías o -1 si no lo encontramos.
      //Hemos elegido comparar por contenido no por referencia.
      #getDishPosition(dish) {
        if (!(dish instanceof Dish)) {
          throw new DishRestaurantManagerException("dish", dish);
        }

        function compareElements(element) {
          return element.name === dish.name;
        }

        return this.#dishes.findIndex(compareElements);
      }

      //Dado un plato y la posicion de la categoria, devuelve la posición de es plato en el array platos de categorías o -1 si no lo encontramos.
      //Hemos elegido comparar por contenido no por referencia.
      #getDishInCategoryPosition(posCategory, dish) {
        if (typeof posCategory !== "number" || posCategory < 0)
          throw new InvalidValueException("posCategory", posCategory);
        if (!(dish instanceof Dish)) {
          throw new DishRestaurantManagerException("dish", dish);
        }

        function compareElements(element) {
          return element.name === dish.name;
        }

        return this.#categories[posCategory].dishes.findIndex(compareElements);
      }

      //Dado un plato y la posicion del menu, devuelve la posición de es plato en el array platos de menus o -1 si no lo encontramos.
      //Hemos elegido comparar por contenido no por referencia.
      #getDishInMenuPosition(posMenu, dish) {
        if (typeof posMenu !== "number" || posMenu < 0)
          throw new InvalidValueException("posMenu", posMenu);
        if (!(dish instanceof Dish)) {
          throw new DishRestaurantManagerException("dish", dish);
        }

        function compareElements(element) {
          return element.name === dish.name;
        }

        return this.#menus[posMenu].dishes.findIndex(compareElements);
      }

      //Dado un plato y la posicion del alergeno, devuelve la posición de es plato en el array platos de alergenos o -1 si no lo encontramos.
      //Hemos elegido comparar por contenido no por referencia.
      #getDishInAllergenPosition(posAllergen, dish) {
        if (typeof posAllergen !== "number" || posAllergen < 0)
          throw new InvalidValueException("posAllergen", posAllergen);
        if (!(dish instanceof Dish)) {
          throw new DishRestaurantManagerException("dish", dish);
        }

        function compareElements(element) {
          return element.name === dish.name;
        }

        return this.#allergens[posAllergen].dishes.findIndex(compareElements);
      }

      //Dado un nombre de categoria la devuelve
      //Hemos elegido comparar por contenido no por referencia.
      getDish(name) {
        if (!name) {
          throw new DishRestaurantManagerException("name", name);
        }
        function compareElements(element) {
          return element.name === name;
        }

        let index = this.#dishes.findIndex(compareElements);

        if (index != -1) {
          return this.#dishes[index];
        } else {
          return index;
        }
      }

      //Devuelve un iterator de los categorias del gestor
      get categories() {
        // referencia para habilitar el closure en el objeto
        let array = this.#categories;
        return {
          *[Symbol.iterator]() {
            for (let i = 0; i < array.length; i++) {
              yield array[i].category;
            }
          },
        };
      }

      getCategories() {
        // referencia para habilitar el closure en el objeto
        let array = this.#categories;
        return {
          *[Symbol.iterator]() {
            for (let i = 0; i < array.length; i++) {
              yield array[i];
            }
          },
        };
      }

      //Devuelve un iterator de los menus del gestor
      get menus() {
        // referencia para habilitar el closure en el objeto
        let array = this.#menus;
        return {
          *[Symbol.iterator]() {
            for (let i = 0; i < array.length; i++) {
              yield array[i].menu;
            }
          },
        };
      }

      getMenus() {
        // referencia para habilitar el closure en el objeto
        let array = this.#menus;
        return {
          *[Symbol.iterator]() {
            for (let i = 0; i < array.length; i++) {
              yield array[i];
            }
          },
        };
      }

      //Devuelve un iterator de los alergenos del gestor
      get allergens() {
        // referencia para habilitar el closure en el objeto
        let array = this.#allergens;
        return {
          *[Symbol.iterator]() {
            for (let i = 0; i < array.length; i++) {
              yield array[i].allergen;
            }
          },
        };
      }

      //Devuelve un iterator de los platos del gestor
      get dishes() {
        // referencia para habilitar el closure en el objeto
        let array = this.#dishes;
        return {
          *[Symbol.iterator]() {
            for (let i = 0; i < array.length; i++) {
              yield array[i];
            }
          },
        };
      }

      //Devuelve un iterator de los restaurantes del gestor
      get restaurants() {
        // referencia para habilitar el closure en el objeto
        let array = this.#restaurants;
        return {
          *[Symbol.iterator]() {
            for (let i = 0; i < array.length; i++) {
              yield array[i];
            }
          },
        };
      }

      //Añade una categoria al gestor
      addCategory(...category) {
        for (let i = 0; i < arguments.length; i++) {
          if (!(category[i] instanceof Category) || typeof category[i] === null)
            throw new CategoryRestaurantManagerException(
              "category",
              category[i]
            );
          let position = this.#getCategoryPosition(category[i]);
          if (position === -1) {
            // Añade objeto literal con una propiedad para la categoría y un array para las imágenes dentro de la categoría
            this.#categories.push({
              category: category[i],
              dishes: [],
            });
          } else {
            throw new CategoryExistsRestaurantManagerException();
          }
        }

        return this;
      }

      //Elimina una categoría del gestor
      removeCategory(...category) {
        for (let i = 0; i < arguments.length; i++) {
          if (!(category[i] instanceof Category)) {
            throw new CategoryRestaurantManagerException(
              "category",
              category[i]
            );
          }
          let position = this.#getCategoryPosition(category[i]);
          if (position !== -1) {
            this.#categories.splice(position, 1);
          } else {
            throw new CategoryNotExistRestaurantManagerException(
              "category",
              category[i]
            );
          }
        }
        return this;
      }

      //Añade una menu al gestor
      addMenu(...menu) {
        for (let i = 0; i < arguments.length; i++) {
          if (!(menu[i] instanceof Menu) || typeof menu[i] === null)
            throw new MenuRestaurantManagerException("menu", menu[i]);
          let position = this.#getMenuPosition(menu[i]);
          if (position === -1) {
            // Añade objeto literal con una propiedad para la menu y un array para los platos dentro del menu
            this.#menus.push({
              menu: menu[i],
              dishes: [],
            });
          } else {
            throw new MenuExistsRestaurantManagerException("menu", menu[i]);
          }
        }

        return this;
      }

      //Elimina una menu del gestor
      removeMenu(...menu) {
        for (let i = 0; i < arguments.length; i++) {
          if (!(menu[i] instanceof Menu)) {
            throw new MenuRestaurantManagerException("menu", menu[i]);
          }
          let position = this.#getMenuPosition(menu[i]);
          if (position !== -1) {
            this.#menus.splice(position, 1);
          } else {
            throw new MenuNotExistRestaurantManagerException("menu", menu[i]);
          }
        }
        return this;
      }

      //Añade una alergeno al gestor
      addAllergen(...allergen) {
        for (let i = 0; i < arguments.length; i++) {
          if (!(allergen[i] instanceof Allergen) || typeof allergen[i] === null)
            throw new AllergenRestaurantManagerException(
              "allergen",
              allergen[i]
            );
          let position = this.#getAllergenPosition(allergen[i]);
          if (position === -1) {
            // Añade objeto literal con una propiedad para la alergeno y un array para los platos dentro del alergeno
            this.#allergens.push({
              allergen: allergen[i],
              dishes: [],
            });
          } else {
            throw new AllergenExistsRestaurantManagerException(
              "allergen",
              allergen[i]
            );
          }
        }

        return this;
      }

      //Elimina una alergeno del gestor
      removeAllergen(...allergen) {
        for (let i = 0; i < arguments.length; i++) {
          if (!(allergen[i] instanceof Allergen)) {
            throw new AllergenRestaurantManagerException(
              "allergen",
              allergen[i]
            );
          }
          let position = this.#getAllergenPosition(allergen[i]);
          if (position !== -1) {
            this.#allergens.splice(position, 1);
          } else {
            throw new AllergenNotExistRestaurantManagerException(
              "allergen",
              allergen[i]
            );
          }
        }
        return this;
      }

      //Añade una plato al gestor
      addDish(...dish) {
        for (let i = 0; i < arguments.length; i++) {
          if (!(dish[i] instanceof Dish) || typeof dish[i] === null)
            throw new DishRestaurantManagerException("dish", dish[i]);
          let position = this.#getDishPosition(dish[i]);
          if (position === -1) {
            // Añade objeto literal con una propiedad para la alergeno y un array para los platos dentro del alergeno
            this.#dishes.push(dish[i]);
          } else {
            throw new DishExistsRestaurantManagerException("dish", dish[i]);
          }
        }

        return this;
      }

      //Elimina una plato del gestor
      removeDish(...dish) {
        for (let i = 0; i < arguments.length; i++) {
          if (!(dish[i] instanceof Dish)) {
            throw new DishRestaurantManagerException("dish", dish[i]);
          }
          let position = this.#getDishPosition(dish[i]);
          if (position !== -1) {
            this.#dishes.splice(position, 1);

            // Eliminar el plato de todos los arreglos de platos dentro de cada categoría
            for (let j = 0; j < this.#categories.length; j++) {
              const category = this.#categories[j];
              const dishIndex = this.#getDishInCategoryPosition(j, dish[i]);
              if (dishIndex !== -1) {
                category.dishes.splice(dishIndex, 1);
              }
            }

            // Eliminar el plato de todos los arreglos de platos dentro de cada alergeno
            for (let k = 0; k < this.#allergens.length; k++) {
              const allergen = this.#allergens[k];
              const dishIndex = this.#getDishInAllergenPosition(k, dish[i]);
              if (dishIndex !== -1) {
                allergen.dishes.splice(dishIndex, 1);
              }
            }

            // Eliminar el plato de todos los arreglos de platos dentro de cada menu
            for (let l = 0; l < this.#menus.length; l++) {
              const menu = this.#menus[l];
              const dishIndex = this.#getDishInMenuPosition(l, dish[i]);
              if (dishIndex !== -1) {
                menu.dishes.splice(dishIndex, 1);
              }
            }
          } else {
            throw new DishNotExistRestaurantManagerException("dish", dish[i]);
          }
        }
        return this;
      }

      //Añade una restaurante al gestor
      addRestaurant(...restaurant) {
        for (let i = 0; i < arguments.length; i++) {
          if (
            !(restaurant[i] instanceof Restaurant) ||
            typeof restaurant[i] === null
          )
            throw new RestaurantRestaurantManagerException(
              "restaurant",
              restaurant[i]
            );
          let position = this.#getRestaurantPosition(restaurant[i]);
          if (position === -1) {
            // Añade objeto literal con una propiedad para la alergeno y un array para los platos dentro del alergeno
            this.#restaurants.push(restaurant[i]);
          } else {
            throw new RestaurantExistsRestaurantManagerException(
              "restaurant",
              restaurant[i]
            );
          }
        }

        return this;
      }

      //Elimina una restaurante del gestor
      removeRestaurant(...restaurant) {
        for (let i = 0; i < arguments.length; i++) {
          if (!(restaurant[i] instanceof Restaurant)) {
            throw new RestaurantRestaurantManagerException(
              "restaurant",
              restaurant[i]
            );
          }
          let position = this.#getRestaurantPosition(restaurant[i]);
          if (position !== -1) {
            this.#restaurants.splice(position, 1);
          } else {
            throw new RestaurantNotExistRestaurantManagerException(
              "restaurant",
              restaurant[i]
            );
          }
        }
        return this;
      }

      // Método para asignar una categoría a varios platos
      assignCategoryToDish(category, ...dish) {
        // Validación de la categoría
        if (typeof category === null)
          throw new CategoryRestaurantManagerException("category", category);

        // Obtener la posición de la categoría en el arreglo
        let posCategory = this.#getCategoryPosition(category);

        // Si la categoría no existe, agregarla
        if (posCategory === -1) {
          this.addCategory(category);
          posCategory = this.#categories.length - 1;
        }

        // Iterar sobre los platos proporcionados
        for (let i = 0; i < dish.length; i++) {
          // Obtener la posición del plato en el arreglo
          let posDish = this.#getDishPosition(dish[i]);

          // Si el plato no existe, agregarlo
          if (posDish === -1) this.addDish(dish[i]);

          // Obtener la posición del plato en la categoría
          let posDishInCategory = this.#getDishInCategoryPosition(
            posCategory,
            dish[i]
          );

          // Si el plato no está en la categoría, agregarlo
          if (posDishInCategory === -1) {
            this.#categories[posCategory].dishes.push(this.#dishes[posDish]);
          } else {
            throw new DishInCategoryRestaurantManagerException("dish", dish[i]);
          }
        }
        return this;
      }

      // Método para desasignar una categoría de un plato
      deassignCategoryToDish(category, dish) {
        // Obtener la posición de la categoría en el arreglo
        let posCategory = this.#getCategoryPosition(category);

        // Validar la existencia de la categoría
        if (typeof category === null || posCategory === -1)
          throw new CategoryRestaurantManagerException("category", category);

        // Obtener la posición del plato en la categoría
        let posDishInCategory = this.#getDishInCategoryPosition(
          posCategory,
          dish
        );

        // Validar la existencia del plato en la categoría
        if (typeof dish === null)
          throw new DishRestaurantManagerException("dish", dish);
        if (posDishInCategory === -1)
          throw new DishNotInCategoryRestaurantManagerException("dish", dish);

        // Eliminar el plato de la categoría
        this.#categories[posCategory].dishes.splice(posDishInCategory, 1);
        return this;
      }

      // Método para asignar un alérgeno a varios platos
      assignAllergenToDish(allergen, ...dish) {
        // Validación del alérgeno
        if (typeof allergen === null)
          throw new AllergenRestaurantManagerException("allergen", allergen);

        // Obtener la posición del alérgeno en el arreglo
        let posAllergen = this.#getAllergenPosition(allergen);

        // Si el alérgeno no existe, agregarlo
        if (posAllergen === -1) {
          this.addAllergen(allergen);
          posAllergen = this.#allergens.length - 1;
        }

        // Iterar sobre los platos proporcionados
        for (let i = 0; i < dish.length; i++) {
          // Obtener la posición del plato en el arreglo
          let posDish = this.#getDishPosition(dish[i]);

          // Si el plato no existe, agregarlo
          if (posDish === -1) this.addDish(dish[i]);

          // Obtener la posición del plato en el alérgeno
          let posDishInAllergen = this.#getDishInAllergenPosition(
            posAllergen,
            dish[i]
          );

          // Si el plato no está en el alérgeno, agregarlo
          if (posDishInAllergen === -1) {
            this.#allergens[posAllergen].dishes.push(this.#dishes[posDish]);
          } else {
            throw new DishInAllergenRestaurantManagerException("dish", dish[i]);
          }
        }
        return this;
      }

      // Método para desasignar un alérgeno de un plato
      deassignAllergenToDish(allergen, dish) {
        // Obtener la posición del alérgeno en el arreglo
        let posAllergen = this.#getAllergenPosition(allergen);

        // Validar la existencia del alérgeno
        if (typeof allergen === null || posAllergen === -1)
          throw new AllergenRestaurantManagerException("allergen", allergen);

        // Obtener la posición del plato en el alérgeno
        let posDishInAllergen = this.#getDishInAllergenPosition(
          posAllergen,
          dish
        );

        // Validar la existencia del plato en el alérgeno
        if (typeof dish === null)
          throw new DishRestaurantManagerException("dish", dish);
        if (posDishInAllergen === -1)
          throw new DishNotInAllergenRestaurantManagerException("dish", dish);

        // Eliminar el plato del alérgeno
        this.#allergens[posAllergen].dishes.splice(posDishInAllergen, 1);
        return this;
      }

      // Método para asignar un plato a varios menús
      assignDishToMenu(menu, ...dish) {
        // Validación del menú
        if (typeof menu === null)
          throw new MenuRestaurantManagerException("menu", menu);

        // Obtener la posición del menú en el arreglo
        let posMenu = this.#getMenuPosition(menu);

        // Si el menú no existe, agregarlo
        if (posMenu === -1) {
          this.addMenu(menu);
          posMenu = this.#menus.length - 1;
        }

        // Iterar sobre los platos proporcionados
        for (let i = 0; i < dish.length; i++) {
          // Obtener la posición del plato en el arreglo
          let posDish = this.#getDishPosition(dish[i]);

          // Si el plato no existe, agregarlo
          if (posDish === -1) this.addDish(dish[i]);

          // Obtener la posición del plato en el menú
          let posDishInMenu = this.#getDishInMenuPosition(posMenu, dish[i]);

          // Si el plato no está en el menú, agregarlo
          if (posDishInMenu === -1) {
            this.#menus[posMenu].dishes.push(this.#dishes[posDish]);
          } else {
            throw new DishInMenuRestaurantManagerException("dish", dish[i]);
          }
        }
        return this;
      }

      // Método para desasignar un plato de un menú
      deassignDishToMenu(menu, dish) {
        // Obtener la posición del menú en el arreglo
        let posMenu = this.#getMenuPosition(menu);

        // Validar la existencia del menú
        if (typeof menu === null || posMenu === -1)
          throw new MenuRestaurantManagerException("menu", menu);

        // Obtener la posición del plato en el menú
        let posDishInMenu = this.#getDishInMenuPosition(posMenu, dish);

        // Validar la existencia del plato en el menú
        if (typeof dish === null)
          throw new DishRestaurantManagerException("dish", dish);
        if (posDishInMenu === -1)
          throw new DishNotInMenuRestaurantManagerException("dish", dish);

        // Eliminar el plato del menú
        this.#menus[posMenu].dishes.splice(posDishInMenu, 1);
        return this;
      }

      // Método para cambiar la posición de dos platos en un menú
      changeDishesPositionsInMenu(menu, firstDish, secondDish) {
        // Obtener la posición del menú en el arreglo
        let posMenu = this.#getMenuPosition(menu);

        // Validar la existencia del menú
        if (typeof menu === null || posMenu === -1)
          throw new MenuRestaurantManagerException();

        // Obtener la posición de los platos en el arreglo
        let posFirstDish = this.#getDishPosition(firstDish);
        let posSecondDish = this.#getDishPosition(secondDish);

        // Obtener la posición de los platos en el menú
        let posFirstDishInMenu = this.#getDishInMenuPosition(
          posMenu,
          firstDish
        );
        let posSecondDishInMenu = this.#getDishInMenuPosition(
          posMenu,
          secondDish
        );

        // Validar la existencia de los platos
        if (typeof firstDish === null || posFirstDish === -1)
          throw new DishRestaurantManagerException("dish", firstDish);
        if (typeof secondDish === null || posSecondDish === -1)
          throw new DishRestaurantManagerException("dish", secondDish);

        // Validar la existencia de los platos en el menú
        if (posFirstDishInMenu === -1)
          throw new DishNotInMenuRestaurantManagerException("dish", firstDish);
        if (posSecondDishInMenu === -1)
          throw new DishNotInMenuRestaurantManagerException("dish", secondDish);

        // Cambiar las posiciones de los platos en el menú
        this.#menus[posMenu].dishes.splice(
          posFirstDishInMenu,
          1,
          this.#dishes[posSecondDish]
        );
        this.#menus[posMenu].dishes.splice(
          posSecondDishInMenu,
          1,
          this.#dishes[posFirstDish]
        );

        return this;
      }

      // Método para obtener los platos en una categoría con un orden específico
      getDishesInCategory(category, order) {
        // Obtener la posición de la categoría en el arreglo
        let posCategory = this.#getCategoryPosition(category);

        // Validar la existencia de la categoría
        if (typeof category === null || posCategory === -1)
          throw new CategoryRestaurantManagerException("category", category);

        // Crear una copia del arreglo de platos en la categoría y ordenarla
        let array = [...this.#categories[posCategory].dishes];
        array.sort(order);

        // Devolver un iterable para los platos ordenados
        return {
          *[Symbol.iterator]() {
            for (let i = 0; i < array.length; i++) {
              yield array[i];
            }
          },
        };
      }

      // Método para obtener los platos con un alérgeno específico y un orden dado
      getDishesWithAllergen(allergen, order) {
        // Obtener la posición del alérgeno en el arreglo
        let posAllergen = this.#getAllergenPosition(allergen);

        // Validar la existencia del alérgeno
        if (typeof allergen === null || posAllergen === -1)
          throw new AllergenRestaurantManagerException("allergen", allergen);

        // Crear una copia del arreglo de platos con el alérgeno y ordenarla
        let array = [...this.#allergens[posAllergen].dishes];
        array.sort(order);

        // Devolver un iterable para los platos ordenados
        return {
          *[Symbol.iterator]() {
            for (let i = 0; i < array.length; i++) {
              yield array[i];
            }
          },
        };
      }

      // Método opcional para obtener los platos asignados a un menú
      getDishesInMenu(menu) {
        // Obtener la posición del menú en el arreglo
        let posMenu = this.#getMenuPosition(menu);

        // Validar la existencia del menú
        if (typeof menu === null || posMenu === -1)
          throw new CategoryRestaurantManagerException("menu", menu);

        // Crear una copia del arreglo de platos en el menú
        let array = [...this.#menus[posMenu].dishes];

        // Devolver un iterable para los platos en el menú
        return {
          *[Symbol.iterator]() {
            for (let i = 0; i < array.length; i++) {
              yield array[i];
            }
          },
        };
      }

      // Método para buscar platos con un callback y un orden dado
      findDishes(dish, callback, order) {
        // Obtener la posición del plato en el arreglo
        let posDish = this.#getDishPosition(dish);

        // Validar la existencia del plato
        if (typeof dish === null || posDish === -1)
          throw new DishRestaurantManagerException("dish", dish);

        // Crear una copia del arreglo de platos filtrados y ordenarla
        let array = [...this.#dishes.filter(callback)];
        array.sort(order);

        // Devolver un iterable para los platos ordenados
        return {
          *[Symbol.iterator]() {
            for (let i = 0; i < array.length; i++) {
              yield array[i];
            }
          },
        };
      }

      // Método para crear un plato con opciones predeterminadas
      createDish(name, description = "", ingredients = [], image = "") {
        // Crear un nuevo plato
        let dish = new Dish(name, description, ingredients, image);

        // Obtener la posición del plato en el arreglo
        let posDish = this.#getDishPosition(dish);

        // Si el plato no existe, agregarlo; de lo contrario, devolver el existente
        if (posDish === -1) {
          this.addDish(dish);
        } else {
          return this.#dishes[posDish];
        }
      }

      // Método para crear un menú con opciones predeterminadas
      createMenu(name, description = "") {
        // Crear un nuevo menú
        let menu = new Menu(name, description);

        // Obtener la posición del menú en el arreglo
        let posMenu = this.#getMenuPosition(menu);

        // Si el menú no existe, agregarlo; de lo contrario, devolver el existente
        if (posMenu === -1) {
          this.addMenu(menu);
        } else {
          return this.#menus[posMenu].menu;
        }
      }

      // Método para crear un alérgeno con opciones predeterminadas
      createAllergen(name, description = "") {
        // Crear un nuevo alérgeno
        let allergen = new Allergen(name, description);

        // Obtener la posición del alérgeno en el arreglo
        let posAllergen = this.#getAllergenPosition(allergen);

        // Si el alérgeno no existe, agregarlo; de lo contrario, devolver el existente
        if (posAllergen === -1) {
          this.addAllergen(allergen);
        } else {
          return this.#allergens[posAllergen].allergen;
        }
      }

      // Método para crear una categoría con opciones predeterminadas
      createCategory(name, description = "") {
        // Crear una nueva categoría
        let category = new Category(name, description);

        // Obtener la posición de la categoría en el arreglo
        let posCategory = this.#getCategoryPosition(category);

        // Si la categoría no existe, agregarla; de lo contrario, devolver la existente
        if (posCategory === -1) {
          this.addCategory(category);
        } else {
          return this.#categories[posCategory].category;
        }
      }

      // Método para crear un restaurante con opciones predeterminadas
      createRestaurant(name, description = "", location = new Coordinate()) {
        // Crear un nuevo restaurante
        let restaurant = new Restaurant(name, description, location);

        // Obtener la posición del restaurante en el arreglo
        let posRestaurant = this.#getRestaurantPosition(restaurant);

        // Si el restaurante no existe, agregarlo; de lo contrario, devolver el existente
        if (posRestaurant === -1) {
          this.addRestaurant(restaurant);
        } else {
          return this.#restaurants[posRestaurant].restaurant;
        }
      }

      getCategoryObject(name, description = "") {
        let cat = this.getCategory(name);
        if (cat == -1) {
          cat = new Category(name, description);
        }
        return cat;
      }

      getAllergenObject(name, description = "") {
        let al = this.getAllergen(name);
        if (al == -1) {
          al = new Allergen(name, description);
        }
        return al;
      }

      getMenuObject(name, description = "") {
        let menu = this.getMenu(name);
        if (menu == -1) {
          menu = new Menu(name, description);
        }
        return menu;
      }

      getRestaurantObject(name, description = "", location = new Coordinate()) {
        let rest = this.getRestaurant(name);
        if (rest == -1) {
          rest = new Restaurant(name, description, location);
        }
        return rest;
      }

      getDishObject(name, description = "", ingredients = [], image = "") {
        let dish = this.getDish(name);
        if (dish == -1) {
          dish = new Dish(name, description, ingredients, image);
        }
        return dish;
      }
    }

    let instance = new RestaurantManager(); //Devolvemos el objeto RestaurantManager para que sea una instancia única.
    Object.freeze(instance);
    return instance;
  }
  return {
    // Devuelve un objeto con el método getInstance
    getInstance: function () {
      if (!instantiated) {
        //Si la variable instantiated es undefined, primera ejecución, ejecuta init.
        instantiated = init(); //instantiated contiene el objeto único
      }
      return instantiated; //Si ya está asignado devuelve la asignación.
    },
  };
})();

// Exportar las clases para su uso en otros módulos
export {
  BaseException,
  InvalidAccessConstructorException,
  EmptyValueException,
  InvalidTypeParameterException,
  InvalidValueException,
};

// Exportar las clases para su uso en otros módulos
export { Dish, Category, Allergen, Menu, Restaurant, Coordinate };

// Exportar las clases para su uso en otros módulos
export {
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
};

// Exportar las clases para su uso en otros módulos
export default RestaurantManager;
