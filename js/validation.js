function showFeedBack(input, valid, message) {
  const validClass = valid ? "is-valid" : "is-invalid";
  const messageDiv = valid
    ? input.parentElement.querySelector("div.valid-feedback")
    : input.parentElement.querySelector("div.invalid-feedback");
  for (const div of input.parentElement.getElementsByTagName("div")) {
    div.classList.remove("d-block");
  }
  messageDiv.classList.remove("d-none");
  messageDiv.classList.add("d-block");
  input.classList.remove("is-valid");
  input.classList.remove("is-invalid");
  input.classList.add(validClass);
  if (message) {
    messageDiv.innerHTML = message;
  }
}

function defaultCheckElement(event) {
  this.value = this.value.trim();
  if (!this.checkValidity()) {
    showFeedBack(this, false);
  } else {
    showFeedBack(this, true);
  }
}

function newDishValidation(handler) {
  const form = document.forms.fNewDish;
  form.setAttribute("novalidate", "");

  form.addEventListener("submit", function (event) {
    let isValid = true;
    let firstInvalidElement = null;

    // Trim y validación de descripción
    this.ndDescription.value = this.ndDescription.value.trim();
    if (this.ndDescription.value !== "") {
      if (!/^[a-zA-Z0-9\s]+$/.test(this.ndDescription.value)) {
        isValid = false;
        showFeedBack(this.ndDescription, false, "Formato incorrecto.");
        firstInvalidElement = this.ndDescription;
      } else {
        showFeedBack(this.ndDescription, true);
      }
    }

    // Trim y validación de URL
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    this.ndUrl.value = this.ndUrl.value.trim();
    if (this.ndUrl.value !== "") {
      if (!urlRegex.test(this.ndUrl.value)) {
        isValid = false;
        showFeedBack(this.ndUrl, false, "Formato de URL incorrecto.");
        if (!firstInvalidElement) firstInvalidElement = this.ndUrl;
      } else {
        showFeedBack(this.ndUrl, true);
      }
    } else {
      showFeedBack(this.ndUrl, true);
    }

    // Validación y formateo de ingredientes
    this.ndIngredients.value = this.ndIngredients.value.trim();
    const ingredientsArray =
      this.ndIngredients.value !== ""
        ? this.ndIngredients.value.split(/,\s*/)
        : [];
    showFeedBack(this.ndIngredients, true);

    // Validación de categorías
    if (!this.ndCategories.checkValidity()) {
      isValid = false;
      showFeedBack(this.ndCategories, false);
      if (!firstInvalidElement) firstInvalidElement = this.ndCategories;
    } else {
      showFeedBack(this.ndCategories, true);
    }

    // Validación de alérgenos
    if (!this.ndAllergens.checkValidity()) {
      isValid = false;
      showFeedBack(this.ndAllergens, false);
      if (!firstInvalidElement) firstInvalidElement = this.ndAllergens;
    } else {
      showFeedBack(this.ndAllergens, true);
    }

    // Validación de nombre
    if (!this.ndName.checkValidity()) {
      isValid = false;
      showFeedBack(this.ndName, false);
      if (!firstInvalidElement) firstInvalidElement = this.ndName;
    } else {
      showFeedBack(this.ndName, true);
    }

    // Si hay algún error de validación, enfocar en el primer elemento inválido
    if (!isValid) {
      firstInvalidElement.focus();
    } else {
      const categories = [...this.ndCategories.selectedOptions].map(
        (option) => option.value
      );
      const allergens = [...this.ndAllergens.selectedOptions].map(
        (option) => option.value
      );
      handler(
        this.ndName.value,
        this.ndDescription.value,
        ingredientsArray,
        this.ndUrl.value,
        categories,
        allergens
      );
    }

    event.preventDefault();
    event.stopPropagation();
  });

  // Manejador de evento para resetear el formulario
  form.addEventListener("reset", function (event) {
    for (const div of this.querySelectorAll(
      "div.valid-feedback, div.invalid-feedback"
    )) {
      div.classList.remove("d-block");
      div.classList.add("d-none");
    }
    for (const input of this.querySelectorAll("input")) {
      input.classList.remove("is-valid");
      input.classList.remove("is-invalid");
    }
    this.ndName.focus();
  });

  // Manejadores de evento para los campos
  form.ndName.addEventListener("change", defaultCheckElement);
  form.ndDescription.addEventListener("change", defaultCheckElement);
  form.ndIngredients.addEventListener("change", defaultCheckElement);
  form.ndUrl.addEventListener("change", defaultCheckElement);
}

function newCategoryValidation(handler) {
  const form = document.forms.fNewCategory;
  form.setAttribute("novalidate", "");

  form.addEventListener("submit", function (event) {
    let isValid = true;
    let firstInvalidElement = null;

    this.ncDescription.value = this.ncDescription.value.trim();
    if (this.ncDescription.value !== "") {
      if (!/^[a-zA-Z0-9\s]+$/.test(this.ncDescription.value)) {
        isValid = false;
        showFeedBack(this.ncDescription, false, "Formato incorrecto.");
        firstInvalidElement = this.ncDescription;
      } else {
        showFeedBack(this.ncDescription, true);
      }
    }

    if (!this.ncName.checkValidity()) {
      isValid = false;
      showFeedBack(this.ncName, false);
      firstInvalidElement = this.ncName;
    } else {
      showFeedBack(this.ncName, true);
    }

    if (!isValid) {
      firstInvalidElement.focus();
    } else {
      handler(this.ncName.value, this.ncDescription.value);
    }

    event.preventDefault();
    event.stopPropagation();
  });

  form.addEventListener("reset", function (event) {
    for (const div of this.querySelectorAll(
      "div.valid-feedback, div.invalid-feedback"
    )) {
      div.classList.remove("d-block");
      div.classList.add("d-none");
    }
    for (const input of this.querySelectorAll("input")) {
      input.classList.remove("is-valid");
      input.classList.remove("is-invalid");
    }
    this.ncName.focus();
  });

  form.ncName.addEventListener("change", defaultCheckElement);
  form.ncDescription.addEventListener("change", defaultCheckElement);
}

function newRestaurantValidation(handler) {
  const form = document.forms.fNewRest;
  form.setAttribute("novalidate", "");

  form.addEventListener("submit", function (event) {
    let isValid = true;
    let firstInvalidElement = null;

    // Trimming and validating description
    this.nrDescription.value = this.nrDescription.value.trim();
    if (this.nrDescription.value !== "") {
      if (!/^[a-zA-Z0-9\s]+$/.test(this.nrDescription.value)) {
        isValid = false;
        showFeedBack(this.nrDescription, false, "Formato incorrecto.");
        firstInvalidElement = this.nrDescription;
      } else {
        showFeedBack(this.nrDescription, true);
      }
    }

    // Trimming and validating latitude
    this.nrLatitude.value = this.nrLatitude.value.trim();
    if (this.nrLatitude.value !== "") {
      const latitudeValue = parseFloat(this.nrLatitude.value);
      if (!(latitudeValue >= -90 && latitudeValue <= 90)) {
        isValid = false;
        showFeedBack(
          this.nrLatitude,
          false,
          "Latitud debe estar entre -90 y 90."
        );
        if (!firstInvalidElement) firstInvalidElement = this.nrLatitude;
      } else {
        showFeedBack(this.nrLatitude, true);
      }
    }

    // Trimming and validating longitude
    this.nrLongitude.value = this.nrLongitude.value.trim();
    if (this.nrLongitude.value !== "") {
      const longitudeValue = parseFloat(this.nrLongitude.value);
      if (!(longitudeValue >= -180 && longitudeValue <= 180)) {
        isValid = false;
        showFeedBack(
          this.nrLongitude,
          false,
          "Longitud debe estar entre -180 y 180."
        );
        if (!firstInvalidElement) firstInvalidElement = this.nrLongitude;
      } else {
        showFeedBack(this.nrLongitude, true);
      }
    }

    // Validating name
    if (!this.nrName.checkValidity()) {
      isValid = false;
      showFeedBack(this.nrName, false, "Campo obligatorio.");
      if (!firstInvalidElement) firstInvalidElement = this.nrName;
    } else {
      showFeedBack(this.nrName, true);
    }

    if (!isValid) {
      firstInvalidElement.focus();
    } else {
      handler(
        this.nrName.value,
        this.nrDescription.value,
        this.nrLatitude.value,
        this.nrLongitude.value
      );
    }

    event.preventDefault();
    event.stopPropagation();
  });

  // Reset event
  form.addEventListener("reset", function (event) {
    for (const div of this.querySelectorAll(
      "div.valid-feedback, div.invalid-feedback"
    )) {
      div.classList.remove("d-block");
      div.classList.add("d-none");
    }
    for (const input of this.querySelectorAll("input")) {
      input.classList.remove("is-valid");
      input.classList.remove("is-invalid");
    }
    this.nrName.focus();
  });

  // Change events for fields
  form.nrName.addEventListener("change", defaultCheckElement);
  form.nrDescription.addEventListener("change", defaultCheckElement);
  form.nrLatitude.addEventListener("change", defaultCheckElement);
  form.nrLongitude.addEventListener("change", defaultCheckElement);
}

function assignDishToMenuValidation(handler) {
  const form = document.forms.fAssignDishToMenu;
  form.setAttribute("novalidate", "");

  form.addEventListener("submit", function (event) {
    let isValid = true;
    let firstInvalidElement = null;

    // Validación de categorías
    if (!this.nmDish.checkValidity()) {
      isValid = false;
      showFeedBack(this.nmDish, false);
      if (!firstInvalidElement) firstInvalidElement = this.nmDish;
    } else {
      showFeedBack(this.nmDish, true);
    }

    // Validación de nombre
    if (this.nmMenu.value == "") {
      isValid = false;
      showFeedBack(this.nmMenu, false);
      if (!firstInvalidElement) firstInvalidElement = this.nmMenu;
    } else {
      showFeedBack(this.nmMenu, true);
    }

    // Si hay algún error de validación, enfocar en el primer elemento inválido
    if (!isValid) {
      firstInvalidElement.focus();
    } else {
      const dishes = [...this.nmDish.selectedOptions].map(
        (option) => option.value
      );
      handler(this.nmMenu.value, dishes);
    }

    event.preventDefault();
    event.stopPropagation();
  });
}

export {
  newDishValidation,
  newCategoryValidation,
  newRestaurantValidation,
  assignDishToMenuValidation,
};
