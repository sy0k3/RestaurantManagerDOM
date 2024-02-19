// Importando excepciones personalizadas desde un módulo separado
import {
  BaseException,
  InvalidAccessConstructorException,
  EmptyValueException,
  InvalidTypeParameterException,
  InvalidValueException,
} from "./BaseException.js";

// Definición de la clase Dish (Plato)
class Dish {
  #name;
  #description;
  #ingredients;
  #image;

  // Constructor para la clase Dish
  constructor(name, description = "", ingredients = [], image = "") {
    // Asegurar que el constructor sea llamado con la palabra clave 'new'
    if (!new.target) throw new InvalidAccessConstructorException();

    // Validación de los parámetros
    if (!name) throw new EmptyValueException("name", name);
    if (typeof name !== "string")
      throw new InvalidTypeParameterException("name", name);
    if (typeof description !== "string")
      throw new InvalidTypeParameterException("description", description);
    if (typeof image !== "string")
      throw new InvalidTypeParameterException("image", image);

    // Establecer los campos privados
    this.#name = name;
    this.#description = description;
    this.#ingredients = ingredients;
    this.#image = image;
  }

  // Getter para el nombre
  get name() {
    return this.#name;
  }

  // Setter para el nombre
  set name(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "string")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#name = value;
  }

  // Getter para la descripción
  get description() {
    return this.#description;
  }

  // Setter para la descripción
  set description(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "string")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#description = value;
  }

  // Getter para los ingredientes
  get ingredients() {
    return this.#ingredients;
  }

  // Setter para los ingredientes
  set ingredients(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "object")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#ingredients = value;
  }

  // Getter para la imagen
  get image() {
    return this.#image;
  }

  // Setter para la imagen
  set image(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "string")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#image = value;
  }

  // Método para obtener una representación en cadena del objeto
  toString() {
    return (
      "Dish: " +
      this.name +
      " (" +
      this.description +
      " " +
      this.ingredients +
      " " +
      this.image +
      ")"
    );
  }
}

// Definición de la clase Category (Categoría)
class Category {
  #name;
  #description;

  // Constructor para la clase Category
  constructor(name, description = "") {
    // Asegurar que el constructor sea llamado con la palabra clave 'new'
    if (!new.target) throw new InvalidAccessConstructorException();

    // Validación de los parámetros
    if (!name) throw new EmptyValueException("name", name);
    if (typeof name !== "string")
      throw new InvalidTypeParameterException("name", name);
    if (typeof description !== "string")
      throw new InvalidTypeParameterException("description", description);

    // Establecer los campos privados
    this.#name = name;
    this.#description = description;
  }

  // Getter para el nombre
  get name() {
    return this.#name;
  }

  // Setter para el nombre
  set name(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "string")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#name = value;
  }

  // Getter para la descripción
  get description() {
    return this.#description;
  }

  // Setter para la descripción
  set description(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "string")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#description = value;
  }

  // Método para obtener una representación en cadena del objeto
  toString() {
    return "Category: " + this.name + " (" + this.description + ")";
  }
}

// Definición de la clase Allergen (Alergeno)
class Allergen {
  #name;
  #description;

  // Constructor para la clase Allergen
  constructor(name, description = "") {
    // Asegurar que el constructor sea llamado con la palabra clave 'new'
    if (!new.target) throw new InvalidAccessConstructorException();

    // Validación de los parámetros
    if (!name) throw new EmptyValueException("name", name);
    if (typeof name !== "string")
      throw new InvalidTypeParameterException("name", name);
    if (typeof description !== "string")
      throw new InvalidTypeParameterException("description", description);

    // Establecer los campos privados
    this.#name = name;
    this.#description = description;
  }

  // Getter para el nombre
  get name() {
    return this.#name;
  }

  // Setter para el nombre
  set name(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "string")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#name = value;
  }

  // Getter para la descripción
  get description() {
    return this.#description;
  }

  // Setter para la descripción
  set description(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "string")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#description = value;
  }

  // Método para obtener una representación en cadena del objeto
  toString() {
    return "Allergen: " + this.name + " (" + this.description + ")";
  }
}

// Definición de la clase Menu
class Menu {
  #name;
  #description;

  // Constructor para la clase Menu
  constructor(name, description = "") {
    // Asegurar que el constructor sea llamado con la palabra clave 'new'
    if (!new.target) throw new InvalidAccessConstructorException();

    // Validación de los parámetros
    if (!name) throw new EmptyValueException("name", name);
    if (typeof name !== "string")
      throw new InvalidTypeParameterException("name", name);
    if (typeof description !== "string")
      throw new InvalidTypeParameterException("description", description);

    // Establecer los campos privados
    this.#name = name;
    this.#description = description;
  }

  // Getter para el nombre
  get name() {
    return this.#name;
  }

  // Setter para el nombre
  set name(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "string")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#name = value;
  }

  // Getter para la descripción
  get description() {
    return this.#description;
  }

  // Setter para la descripción
  set description(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "string")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#description = value;
  }

  // Método para obtener una representación en cadena del objeto
  toString() {
    return "Menu: " + this.name + " (" + this.description + ")";
  }
}

// Definición de la clase Restaurant (Restaurante)
class Restaurant {
  #name;
  #description;
  #location;

  // Constructor para la clase Restaurant
  constructor(name, description = "", location = new Coordinate(0, 0)) {
    // Asegurar que el constructor sea llamado con la palabra clave 'new'
    if (!new.target) throw new InvalidAccessConstructorException();

    // Validación de los parámetros
    if (!name) throw new EmptyValueException("name", name);
    if (typeof name !== "string")
      throw new InvalidTypeParameterException("name", name);
    if (typeof description !== "string")
      throw new InvalidTypeParameterException("description", description);
    if (location === "undefined" || location == null)
      throw new EmptyValueException("location");
    if (!(location instanceof Coordinate))
      throw new InvalidTypeParameterException("location", location);

    // Establecer los campos privados
    this.#name = name;
    this.#description = description;
    this.#location = location;
  }

  // Getter para el nombre
  get name() {
    return this.#name;
  }

  // Setter para el nombre
  set name(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "string")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#name = value;
  }

  // Getter para la descripción
  get description() {
    return this.#description;
  }

  // Setter para la descripción
  set description(value) {
    // Validación del parámetro value
    if (!value) throw new EmptyValueException("value", value);
    if (typeof value !== "string")
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#description = value;
  }

  // Getter para la ubicación
  get location() {
    return this.#location;
  }

  // Setter para la ubicación
  set location(value) {
    // Validación del parámetro value
    if (value === "undefined" || value == null)
      throw new EmptyValueException("value");
    if (!(value instanceof Coordinate))
      throw new InvalidTypeParameterException("value", value);

    // Establecer el campo privado
    this.#location = value;
  }

  // Método para obtener una representación en cadena del objeto
  toString() {
    return (
      "Restaurant: " +
      this.name +
      " (" +
      this.description +
      " " +
      this.location +
      ")"
    );
  }
}

// Objeto Coordinate para definir coordenadas.
class Coordinate {
  #latitude;
  #longitude;

  // Constructor para la clase Coordinate
  constructor(latitude, longitude) {
    // Asegurar que el constructor sea llamado con la palabra clave 'new'
    if (!new.target) throw new InvalidAccessConstructorException();

    // Validación y asignación de valores para la latitud
    latitude = typeof latitude !== "undefined" ? Number(latitude).valueOf() : 0;
    if (Number.isNaN(latitude) || latitude < -90 || latitude > 90)
      throw new InvalidValueException("latitude", latitude);

    // Validación y asignación de valores para la longitud
    longitude =
      typeof longitude !== "undefined" ? Number(longitude).valueOf() : 0;
    if (Number.isNaN(longitude) || longitude < -180 || longitude > 180)
      throw new InvalidValueException("longitude", longitude);

    // Establecer los campos privados
    this.#latitude = latitude;
    this.#longitude = longitude;
  }

  // Getter para la latitud
  get latitude() {
    return this.#latitude;
  }

  // Setter para la latitud
  set latitude(value) {
    // Validación y asignación de valores para la latitud
    value = typeof value !== "undefined" ? Number(value).valueOf() : 0;
    if (Number.isNaN(value) || value < -90 || value > 90)
      throw new InvalidValueException("latitude", value);

    // Establecer el campo privado
    this.#latitude = value;
  }

  // Getter para la longitud
  get longitude() {
    return this.#longitude;
  }

  // Setter para la longitud
  set longitude(value) {
    // Validación y asignación de valores para la longitud
    value = typeof value !== "undefined" ? Number(value).valueOf() : 0;
    if (Number.isNaN(value) || value < -180 || value > 180)
      throw new InvalidValueException("longitude", value);

    // Establecer el campo privado
    this.#longitude = value;
  }
}

// Exportar las clases para su uso en otros módulos
export { Dish, Category, Allergen, Menu, Restaurant, Coordinate };
