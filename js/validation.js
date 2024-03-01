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

    this.ndDescription.value = this.ndDescription.value.trim();
    showFeedBack(this.ndDescription, true);

    if (!this.ndCategories.checkValidity()) {
      isValid = false;
      showFeedBack(this.ndCategories, false);
      firstInvalidElement = this.ndCategories;
    } else {
      showFeedBack(this.ndCategories, true);
    }

    if (!this.ndAllergens.checkValidity()) {
      isValid = false;
      showFeedBack(this.ndAllergens, false);
      firstInvalidElement = this.ndAllergens;
    } else {
      showFeedBack(this.ndAllergens, true);
    }

    if (!this.ndUrl.checkValidity()) {
      isValid = false;
      showFeedBack(this.ndUrl, false);
      firstInvalidElement = this.ndUrl;
    } else {
      showFeedBack(this.ndUrl, true);
    }

    if (!this.ndIngredients.checkValidity()) {
      isValid = false;
      showFeedBack(this.ndIngredients, false);
      firstInvalidElement = this.ndIngredients;
    } else {
      showFeedBack(this.ndIngredients, true);
    }

    if (!this.ndName.checkValidity()) {
      isValid = false;
      showFeedBack(this.ndName, false);
      firstInvalidElement = this.ndName;
    } else {
      showFeedBack(this.ndName, true);
    }

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
        this.ndIngredients.value,
        this.ndUrl.value,
        categories,
        allergens
      );
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
    this.ndName.focus();
  });

  form.ndName.addEventListener("change", defaultCheckElement);
  form.ndDescription.addEventListener("change", defaultCheckElement);
  form.ndUrl.addEventListener("change", defaultCheckElement);
  form.ndIngredients.addEventListener("change", defaultCheckElement);
}

function newCategoryValidation(handler) {
  const form = document.forms.fNewCategory;
  form.setAttribute("novalidate", "");

  form.addEventListener("submit", function (event) {
    let isValid = true;
    let firstInvalidElement = null;

    this.ncDescription.value = this.ncDescription.value.trim();
    showFeedBack(this.ncDescription, true);

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

export { newDishValidation, newCategoryValidation };
