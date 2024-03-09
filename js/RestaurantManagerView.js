import {
  newDishValidation,
  newCategoryValidation,
  newRestaurantValidation,
  assignDishToMenuValidation,
  deassignDishToMenuValidation,
  changeDishesInMenuValidation,
  modifyCatOfDishValidation,
} from "./validation.js";

const EXCECUTE_HANDLER = Symbol("excecuteHandler");

class RestaurantManagerView {
  constructor() {
    this.main = document.getElementsByTagName("main")[0];
    this.categories = document.getElementById("categories");
    this.menuCat = document.getElementById("menu-categories");
    this.menuAllg = document.getElementById("menu-allergens");
    this.menuMenu = document.getElementById("menu-menus");
    this.menuRest = document.getElementById("menu-restaurants");

    this.windows = [];
    this.contWind = 0;
  }

  [EXCECUTE_HANDLER](
    handler,
    handlerArguments,
    scrollElement,
    data,
    url,
    event
  ) {
    handler(...handlerArguments);
    const scroll = document.querySelector(scrollElement);
    console.log(scroll);
    if (scroll) scroll.scrollIntoView();
    history.pushState(data, null, url);
    event.preventDefault();
  }

  bindInit(handler) {
    document.getElementById("init").addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "body",
        { action: "init" },
        "#",
        event
      );
    });
  }

  bindDishesCategoryList(handler) {
    const links = this.categories.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { category } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [category],
          "body",
          { action: "dishesCategoryList", category },
          "#category-list",
          event
        );
      });
    }
  }

  bindDishesCategoryListInMenu(handler) {
    const links = this.menuCat.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { category } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [category],
          "body",
          { action: "dishesCategoryListInMenu", category },
          "#category-list",
          event
        );
      });
    }
  }

  bindDishCardListInMenu(handler) {
    const cards = this.main.querySelectorAll("div.card");
    for (const card of cards) {
      card.addEventListener("click", (event) => {
        const { dish } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [dish],
          "body",
          { action: "dishCardListInMenu", dish },
          "#category-list",
          event
        );
      });
    }
  }

  bindDishCardListInCategoryMenu(handler) {
    const cards = this.menuCat.querySelectorAll("a");
    for (const card of cards) {
      card.addEventListener("click", (event) => {
        const { dish } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [dish],
          "body",
          { action: "dishCardListInCategoryMenu", dish },
          "#menu-categories-dish",
          event
        );
      });
    }
  }

  bindDishesAllergenList(handler) {
    const links = this.categories.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { allergen } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [allergen],
          "body",
          { action: "dishesAllergenList", allergen },
          "#allergen-list",
          event
        );
      });
    }
  }

  bindDishesMenuList(handler) {
    const links = this.categories.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { menu } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [menu],
          "body",
          { action: "dishesMenuList", menu },
          "#menu-list",
          event
        );
      });
    }
  }

  bindRestaurantsInMenu(handler) {
    const links = this.menuRest.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        const { restaurant } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [restaurant],
          "body",
          { action: "restaurantsInMenu", restaurant },
          "#menu-restaurants",
          event
        );
      });
    }
  }

  bindDishToCarousel(handler) {
    const cards = this.main.querySelectorAll("img");
    for (const card of cards) {
      card.addEventListener("click", (event) => {
        const { dish } = event.currentTarget.dataset;
        this[EXCECUTE_HANDLER](
          handler,
          [dish],
          "body",
          { action: "dishToCarousel", dish },
          "#",
          event
        );
      });
    }
  }

  bindAllergens(handler) {
    this.menuAllg.addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "body",
        { action: "showAllergens" },
        "#",
        event
      );
    });
  }

  bindMenus(handler) {
    this.menuMenu.addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "body",
        { action: "showMenus" },
        "#",
        event
      );
    });
  }

  bindRestaurants(handler) {
    this.menuRest.addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        handler,
        [],
        "body",
        { action: "showRestaurantsInMenu" },
        "#",
        event
      );
    });
  }

  bindDishCardInWindow(handler) {
    let name = "dish" + this.contWind;
    this.contWind++;

    const bCard = this.main.querySelector("button.btn");
    bCard.addEventListener("click", (event) => {
      let newWindow = null;
      let dishName = event.currentTarget.dataset.dish; // Almacenar el nombre del plato fuera del alcance del listener de carga

      if (!newWindow || newWindow.closed) {
        newWindow = window.open(
          "../element.html",
          name,
          "width=800,height=600, top=250, left=250, titlebar=yes, toolbar=no,menubar=no, location=no"
        );

        newWindow.addEventListener("load", () => {
          handler(dishName, newWindow); // Pasar la ventana como un argumento adicional al handler
        });
        this.windows.push(newWindow);
      } else {
        handler(dishName, newWindow); // Pasar la ventana como un argumento adicional al handler
        newWindow.focus();
      }
    });
  }

  bindCloseWindows() {
    const bClose = document.getElementById("closeWind");
    bClose.addEventListener("click", this.closeWindows);
  }

  bindAdminMenu(
    hNewDish,
    hRemoveDish,
    hAdminMenu,
    hAdminCategory,
    hNewRest,
    hModCat
  ) {
    const newDishLink = document.getElementById("lnewDish");
    newDishLink.addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        hNewDish,
        [],
        "#new-dish",
        { action: "newDish" },
        "#",
        event
      );
    });

    const delDishLink = document.getElementById("ldelDish");
    delDishLink.addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        hRemoveDish,
        [],
        "#remove-dish",
        {
          action: "removeDish",
        },
        "#",
        event
      );
    });

    const adminMenusLink = document.getElementById("ladminMenu");
    adminMenusLink.addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        hAdminMenu,
        [],
        "#admin-menu",
        {
          action: "adminMenu",
        },
        "#",
        event
      );
    });

    const adminCategoryLink = document.getElementById("ladminCategory");
    adminCategoryLink.addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        hAdminCategory,
        [],
        "#admin-category",
        {
          action: "adminCategory",
        },
        "#",
        event
      );
    });

    const newRestLink = document.getElementById("lnewRest");
    newRestLink.addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        hNewRest,
        [],
        "#new-restaurant",
        { action: "newRest" },
        "#",
        event
      );
    });

    const modCatLink = document.getElementById("lmodCat");
    modCatLink.addEventListener("click", (event) => {
      this[EXCECUTE_HANDLER](
        hModCat,
        [],
        "#modify-categories",
        { action: "modCat" },
        "#",
        event
      );
    });
  }

  bindNewDishForm(handler) {
    newDishValidation(handler);
  }

  bindRemoveDishForm(delHandler) {
    const removeContainer = document.getElementById("remove-dish");
    const buttons = removeContainer.getElementsByTagName("button");
    for (const button of buttons) {
      button.addEventListener("click", (event) => {
        delHandler(event.currentTarget.dataset.dish);
      });
    }
  }

  bindNewCategoryForm(handler) {
    newCategoryValidation(handler);
  }

  bindRemoveCategoryForm(delHandler) {
    const removeContainer = document.getElementById("remove-category");
    const buttons = removeContainer.getElementsByTagName("button");
    for (const button of buttons) {
      button.addEventListener("click", (event) => {
        delHandler(event.currentTarget.dataset.category);
      });
    }
  }

  bindNewRestForm(handler) {
    newRestaurantValidation(handler);
  }

  bindAdminMenuForm(handlerAssign, handlerDeassign, handlerChange) {
    assignDishToMenuValidation(handlerAssign);
    deassignDishToMenuValidation(handlerDeassign);
    changeDishesInMenuValidation(handlerChange);
  }

  bindModCatForm(handler) {
    modifyCatOfDishValidation(handler);
  }

  showCategories(categories) {
    this.categories.replaceChildren();
    const container = document.createElement("div");
    container.id = "category-list";
    container.classList.add("row");
    container.classList.add("d-flex");
    container.classList.add("justify-content-center");

    for (const category of categories) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="col-lg-3 col-md-6"><a data-category="${category.name}" href="#category-list" style="text-decoration: none; color: orange; cursor: pointer">
        <div class="cat-list-text">
          <h2>${category.name}</h2>
          <div>${category.description}</div>
        </div>
      </a>
    </div>`
      );
    }
    this.categories.append(container);
  }

  showCategoriesInMenu(categories) {
    this.menuCat.replaceChildren();
    for (const category of categories) {
      this.menuCat.insertAdjacentHTML(
        "beforeend",
        `<li><a data-category="${category.name}" class="dropdown-item" href="#menu-categories">${category.name}</a></li>`
      );
    }
  }

  showDishesInCarousel(dishes) {
    // Limpiar contenido existente del contenedor principal
    this.main.replaceChildren();

    // Crear el elemento del carousel
    const carouselContainer = document.createElement("div");
    carouselContainer.id = "carouselExampleIndicators";
    carouselContainer.classList.add("carousel", "slide");

    // Crear el HTML para el carousel
    carouselContainer.innerHTML = `
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div id="carousel" class="carousel-inner"></div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    `;

    // Agregar el carousel al contenedor principal
    this.main.appendChild(carouselContainer);

    // Creamos una copia del array original para no modificarlo
    let copy = Array.from(dishes);
    let randomDishes = [];

    // Obtenemos tres elementos aleatorios sin repetir
    for (let i = 0; i < 3; i++) {
      // Generamos un índice aleatorio dentro del rango válido
      let randomIndex = Math.floor(Math.random() * copy.length);
      // Añadimos el elemento correspondiente al índice aleatorio al array de elementos aleatorios
      randomDishes.push(copy.splice(randomIndex, 1)[0]);
    }

    let carousel = document.getElementById("carousel");

    for (const dish of randomDishes) {
      carousel.insertAdjacentHTML(
        "beforeend",
        `<div class="carousel-item active">
        <img src="${dish.image}" class="d-block w-100" alt="${dish.name}" data-dish="${dish.name}"/>
      </div>`
      );
    }
  }

  showDishesInCategory(dishes) {
    this.main.replaceChildren();
    for (const dish of dishes) {
      this.main.insertAdjacentHTML(
        "beforeend",
        `<div class="card" style="width: 18rem;cursor: pointer" data-dish="${dish.name}">
        <img src="${dish.image}" class="card-img-top" alt="${dish.description}">
        <div class="card-body">
          <h5 class="card-title">${dish.name}</h5>
          <p class="card-text">${dish.description}</p>
        </div>
      </div>`
      );
    }
  }

  showDishesOfCategoryInMenu(dishes) {
    this.menuCat.replaceChildren();
    for (const dish of dishes) {
      this.menuCat.insertAdjacentHTML(
        "beforeend",
        `<li><a data-dish="${dish.name}" class="dropdown-item" href="#menu-categories-dish">${dish.name}</a></li>`
      );
    }
  }

  showDishCard(dish) {
    this.main.replaceChildren();
    const container = document.createElement("div");
    container.id = "dish-card";
    container.classList.add("my-4");
    container.classList.add("d-flex");
    container.classList.add("justify-content-center");

    container.insertAdjacentHTML(
      "beforeend",
      `<div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${dish.image}" class="img-fluid rounded-start" alt="${dish.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body px-4>
              <h5 class="card-title" style="font-size:1.8em;"><strong>${dish.name}</strong></h5>
              <p class="card-text">${dish.description}</p>
              <p class="card-text"><strong>Ingredientes:</strong> ${dish.ingredients}</p>
              <button type="button" class="btn btn-warning" data-dish="${dish.name}">Abrir en nueva ventana</button>
            </div>
          </div>
        </div>
      </div>`
    );
    this.main.append(container);
  }

  showDishCardInWindow(dish, newWindow) {
    let mainNewWind = newWindow.document.querySelector("#main");
    const container = document.createElement("div");
    container.id = "dish-window";
    container.classList.add("my-4");
    container.classList.add("d-flex");
    container.classList.add("justify-content-center");

    container.insertAdjacentHTML(
      "beforeend",
      `<div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${dish.image}" class="img-fluid rounded-start" alt="${dish.name}">
              </div>
              <div class="col-md-8">
                <div class="card-body px-4>
                  <h5 class="card-title" style="font-size:1.8em;"><strong>${dish.name}</strong></h5>
                  <p class="card-text">${dish.description}</p>
                  <p class="card-text"><strong>Ingredientes:</strong> ${dish.ingredients}</p>
                </div>
              </div>
            </div>
          </div>`
    );

    mainNewWind.append(container);
  }

  showAllergens(allergens) {
    this.categories.replaceChildren();
    this.main.replaceChildren();
    const container = document.createElement("div");
    container.id = "allergen-list";
    container.classList.add("row");
    container.classList.add("d-flex");
    container.classList.add("justify-content-center");

    for (const allergen of allergens) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="col-lg-3 col-md-6"><a data-allergen="${allergen.name}" href="#allergen-list" style="text-decoration: none; color: orange; cursor: pointer">
        <div class="cat-list-text">
          <h2>${allergen.name}</h2>
          <div>${allergen.description}</div>
        </div>
      </a>
    </div>`
      );
    }
    this.categories.append(container);
  }

  showMenus(menus) {
    this.categories.replaceChildren();
    this.main.replaceChildren();
    const container = document.createElement("div");
    container.id = "menu-list";
    container.classList.add("row");
    container.classList.add("d-flex");
    container.classList.add("justify-content-center");

    for (const menu of menus) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="col-lg-3 col-md-6"><a data-menu="${menu.name}" href="#menu-list" style="text-decoration: none; color: orange; cursor: pointer">
        <div class="cat-list-text">
          <h2>${menu.name}</h2>
          <div>${menu.description}</div>
        </div>
      </a>
    </div>`
      );
    }
    this.categories.append(container);
  }

  showRestaurantsInMenu(restaurants) {
    this.menuRest.replaceChildren();
    for (const restaurant of restaurants) {
      this.menuRest.insertAdjacentHTML(
        "beforeend",
        `<li><a data-restaurant="${restaurant.name}" class="dropdown-item" href="#menu-restaurants">${restaurant.name}</a></li>`
      );
    }
  }

  showRestaurantCard(restaurant) {
    this.categories.replaceChildren();
    this.main.replaceChildren();
    this.main.insertAdjacentHTML(
      "beforeend",
      `<div class="card" style="width: 18rem;" data-restaurant="${restaurant.name}">
        <div class="card-header h2">${restaurant.name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${restaurant.description}</li>
          <li class="list-group-item">Latitud: ${restaurant.location.latitude}, Longitud: ${restaurant.location.longitude}</li>
        </ul>
      </div>`
    );
  }

  showCloseWindowsOption() {
    let navMenu = document.getElementById("navbarNav");
    let listNav = navMenu.querySelector("ul.navbar-nav");
    listNav.insertAdjacentHTML(
      "beforeend",
      `<li class="nav-item">
      <a id="closeWind" class="nav-link" href="#">Cerrar Ventanas</a>
    </li>`
    );
  }

  closeWindows = () => {
    for (const wind of this.windows) {
      if (wind && !wind.closed) wind.close();
    }
  };

  showAdminMenu() {
    let navMenu = document.getElementById("navbarNav");
    let listNav = navMenu.querySelector("ul.navbar-nav");
    listNav.insertAdjacentHTML(
      "beforeend",
      `<li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Administración
      </a>
      <ul id="menu-admin" class="dropdown-menu">
      <li><a id="lnewDish" class="dropdown-item" href="#lnewDish">Añadir Plato</a></li>
      <li><a id="ldelDish" class="dropdown-item" href="#ldelDish">Remover Plato</a></li>
      <li><a id="ladminMenu" class="dropdown-item" href="#ladminMenu">Administrar Menus</a></li>
      <li><a id="ladminCategory" class="dropdown-item" href="#ladminCategory">Administrar Categorias</a></li>
      <li><a id="lnewRest" class="dropdown-item" href="#lnewRest">Añadir Restaurante</a></li>
      <li><a id="lmodCat" class="dropdown-item" href="#lmodCat">Modificar Categorías de Platos</a></li>
      </ul>
    </li>`
    );
  }

  showNewDishForm(categories, allergens) {
    this.main.replaceChildren();
    this.categories.replaceChildren();

    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("my-3");
    container.id = "new-dish";

    container.insertAdjacentHTML(
      "afterbegin",
      '<h1 class="display-5">Nuevo plato</h1>'
    );

    const form = document.createElement("form");
    form.name = "fNewDish";
    form.setAttribute("role", "form");
    form.setAttribute("novalidate", "");
    form.classList.add("row");
    form.classList.add("g-3");

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
        <label class="form-label" for="ndName">Nombre *</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-type"></i></span>
          <input type="text" class="form-control" id="ndName" name="ndName" placeholder="Nombre del plato" value="" required>
          <div class="invalid-feedback">El título es obligatorio.</div>
          <div class="valid-feedback">Correcto.</div>
        </div>
      </div>`
    );

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
        <label class="form-label" for="ndDescription">Descripción</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-bodytext"></i></span>
          <input type="text" class="form-control" id="ndDescription" name="ndDescription" value="">
          <div class="invalid-feedback"></div>
          <div class="valid-feedback">Correcto.</div>
        </div>
      </div>`
    );

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
        <label class="form-label" for="ndIngredients">Ingredientes</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-bodytext"></i></span>
          <input type="text" class="form-control" id="ndIngredients" name="ndIngredients" placeholder="Ingredientes (Separados por comas ej: Arros,aceite,sal)" value="">
          <div class="invalid-feedback">Ingredientes mal agregados.</div>
          <div class="valid-feedback">Correcto.</div>
        </div>
      </div>`
    );

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
        <label class="form-label" for="ndUrl">URL de la imagen </label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-fileimage"></i></span>
          <input type="url" class="form-control" id="ndUrl" name="ndUrl" placeholder="URL de la imagen" value="">
          <div class="invalid-feedback">La URL no es válida.</div>
          <div class="valid-feedback">Correcto.</div>
        </div>
      </div>`
    );

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
				<label class="form-label" for="ndCategories">Categorías *</label>
				<div class="input-group">
					<label class="input-group-text" for="ndCategories"><i class="bi bi-card-checklist"></i></label>
					<select class="form-select" name="ndCategories" id="ndCategories" multiple required>
					</select>
					<div class="invalid-feedback">El producto debe pertenecer al menos a una categoría.</div>
					<div class="valid-feedback">Correcto.</div>
				</div>
			</div>`
    );
    const ndCategories = form.querySelector("#ndCategories");
    for (const category of categories) {
      ndCategories.insertAdjacentHTML(
        "beforeend",
        `<option value="${category.name}">${category.name}</option>`
      );
    }

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6">
				<label class="form-label" for="ndCategories">Allergenos</label>
				<div class="input-group">
					<label class="input-group-text" for="ndAllergens"><i class="bi bi-card-checklist"></i></label>
					<select class="form-select" name="ndAllergens" id="ndAllergens" multiple>
					</select>
					<div class="invalid-feedback"></div>
					<div class="valid-feedback">Correcto.</div>
				</div>
			</div>`
    );
    const ndAllergens = form.querySelector("#ndAllergens");
    for (const allergen of allergens) {
      ndAllergens.insertAdjacentHTML(
        "beforeend",
        `<option value="${allergen.name}">${allergen.name}</option>`
      );
    }

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="mb-12">
          <button class="btn btn-primary" type="submit">Enviar</button>
          <button class="btn btn-primary" type="reset">Cancelar</button>
        </div>`
    );

    container.append(form);
    this.main.append(container);
  }

  showModalDish(done, dish, error) {
    const messageModalContainer = document.getElementById("messageModal");
    const messageModal = new bootstrap.Modal(messageModalContainer);

    const title = document.getElementById("messageModalTitle");
    title.innerHTML = "Plato creado";

    const body = messageModalContainer.querySelector(".modal-body");
    body.replaceChildren();

    if (done) {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="p-3">El plato <strong>${dish.name}</strong> ha sido creado correctamente.</div>`
      );
    } else {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="error text-danger p-3"><i class="bi bi-exclamation-triangle"></i> El plato <strong>${dish.name}</strong> no ha podido crearse correctamente.</div>`
      );
    }

    messageModal.show();

    const listener = (event) => {
      event.preventDefault();
      if (done) {
        const formNewDish = document.getElementById("fNewDish");
        if (formNewDish) {
          formNewDish.reset();
        }
      }
      const ndNameInput = document.querySelector(
        '#fNewDish input[name="ndName"]'
      );
      if (ndNameInput) {
        ndNameInput.focus();
      }
    };
    messageModalContainer.addEventListener("hidden.bs.modal", listener, {
      once: true,
    });
  }

  showRemoveDishForm(dishes) {
    this.main.replaceChildren();
    this.categories.replaceChildren();

    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("my-3");
    container.id = "remove-dish";

    container.insertAdjacentHTML(
      "afterbegin",
      '<h1 class="display-5">Eliminar un plato</h1>'
    );

    const row = document.createElement("div");
    row.classList.add("row");

    for (const dish of dishes) {
      row.insertAdjacentHTML(
        "beforeend",
        `<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${dish.image}" class="img-fluid rounded-start" alt="${dish.name}">
            </div>
            <div class="col-md-8">
              <div class="card-body px-4>
                <h5 class="card-title" style="font-size:1.8em;"><strong>${dish.name}</strong></h5>
                <p class="card-text">${dish.description}</p>
                <p class="card-text"><strong>Ingredientes:</strong> ${dish.ingredients}</p>
                <button class="btn btn-primary" data-dish="${dish.name}" type='button'>Eliminar</button>
              </div>
            </div>
          </div>
        </div>`
      );
    }

    container.append(row);
    this.main.append(container);
  }

  showModalRemovalDish(done, dish, error) {
    const messageModalContainer = document.getElementById("messageModal");
    const messageModal = new bootstrap.Modal(messageModalContainer);

    const title = document.getElementById("messageModalTitle");
    title.innerHTML = "Plato eliminado";

    const body = messageModalContainer.querySelector(".modal-body");
    body.replaceChildren();

    if (done) {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="p-3">El plato <strong>${dish.name}</strong> ha sido borrado correctamente.</div>`
      );
    } else {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="error text-danger p-3"><i class="bi bi-exclamation-triangle"></i> El plato <strong>${dish.name}</strong> no ha podido borrarse correctamente.</div>`
      );
    }

    messageModal.show();

    const listener = (event) => {
      event.preventDefault();
      if (done) {
        const removeDish = document.getElementById("remove-dish");
        const button = removeDish.querySelector(
          `button.btn[data-dish="${dish.name}"]`
        );
        button.parentElement.parentElement.parentElement.parentElement.remove();
      }
    };
    messageModalContainer.addEventListener("hidden.bs.modal", listener, {
      once: true,
    });
  }

  showAdminCategoryForm(categories) {
    this.main.replaceChildren();
    this.categories.replaceChildren();

    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("my-3");
    container.id = "new-category";

    container.insertAdjacentHTML(
      "afterbegin",
      '<h1 class="display-5">Nueva Categoría</h1>'
    );

    const form = document.createElement("form");
    form.name = "fNewCategory";
    form.setAttribute("role", "form");
    form.setAttribute("novalidate", "");
    form.classList.add("row");
    form.classList.add("g-3");

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
        <label class="form-label" for="ncName">Nombre *</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-type"></i></span>
          <input type="text" class="form-control" id="ncName" name="ncName" placeholder="Nombre de la Categoría" value="" required>
          <div class="invalid-feedback">El nombre es obligatorio.</div>
          <div class="valid-feedback">Correcto.</div>
        </div>
      </div>`
    );

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
        <label class="form-label" for="ncDescription">Descripción</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-bodytext"></i></span>
          <input type="text" class="form-control" id="ncDescription" name="ncDescription" value="">
          <div class="invalid-feedback"></div>
          <div class="valid-feedback">Correcto.</div>
        </div>
      </div>`
    );

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="mb-12">
          <button class="btn btn-primary" type="submit">Crear</button>
          <button class="btn btn-primary" type="reset">Cancelar</button>
        </div>`
    );

    container.append(form);
    this.main.append(container);

    const container2 = document.createElement("div");
    container2.classList.add("container");
    container2.classList.add("my-3");
    container2.id = "remove-category";
    container2.insertAdjacentHTML(
      "afterbegin",
      '<h1 class="display-5">Eliminar una categoría</h1>'
    );
    const row = document.createElement("div");
    row.classList.add("row");
    for (const category of categories) {
      row.insertAdjacentHTML(
        "beforeend",
        `<div class="col-lg-3 col-md-6">
          <div class="cat-list-text">
            <a style="font-decoration:none; color:orange;" data-category="${category.name}" href="#categorylist"><h3>${category.name}</h3></a>
          </div>
          <div><button class="btn btn-primary" data-category="${category.name}" type='button'>Eliminar</button></div>
        </div>`
      );
    }
    container2.append(row);
    this.main.append(container2);
  }

  showModalCategory(done, cat, error) {
    const messageModalContainer = document.getElementById("messageModal");
    const messageModal = new bootstrap.Modal(messageModalContainer);

    const title = document.getElementById("messageModalTitle");
    title.innerHTML = "Categoría creada";

    const body = messageModalContainer.querySelector(".modal-body");
    body.replaceChildren();

    if (done) {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="p-3">La categoría <strong>${cat.name}</strong> ha sido creado correctamente.</div>`
      );
    } else {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="error text-danger p-3"><i class="bi bi-exclamation-triangle"></i> La categoría <strong>${cat.name}</strong> no ha podido crearse correctamente.</div>`
      );
    }

    messageModal.show();

    const listener = (event) => {
      event.preventDefault();
      if (done) {
        const formNewCat = document.getElementById("fNewCategory");
        if (formNewCat) {
          formNewCat.reset();
        }
      }
      const ncNameInput = document.querySelector(
        '#fNewCategory input[name="ncName"]'
      );
      if (ncNameInput) {
        ncNameInput.focus();
      }
    };
    messageModalContainer.addEventListener("hidden.bs.modal", listener, {
      once: true,
    });
  }

  showModalRemovalCategory(done, cat, error) {
    const messageModalContainer = document.getElementById("messageModal");
    const messageModal = new bootstrap.Modal(messageModalContainer);

    const title = document.getElementById("messageModalTitle");
    title.innerHTML = "Categoría eliminada";

    const body = messageModalContainer.querySelector(".modal-body");
    body.replaceChildren();

    if (done) {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="p-3">La categoría <strong>${cat.name}</strong> ha sido borrado correctamente.</div>`
      );
    } else {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="error text-danger p-3"><i class="bi bi-exclamation-triangle"></i> La categoría <strong>${cat.name}</strong> no ha podido borrarse correctamente.</div>`
      );
    }

    messageModal.show();

    const listener = (event) => {
      event.preventDefault();
      if (done) {
        const removeCat = document.getElementById("remove-category");
        const button = removeCat.querySelector(
          `button.btn[data-dish="${cat.name}"]`
        );
        button.parentElement.parentElement.remove();
      }
    };
    messageModalContainer.addEventListener("hidden.bs.modal", listener, {
      once: true,
    });
  }

  showNewRestForm() {
    this.main.replaceChildren();
    this.categories.replaceChildren();

    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("my-3");
    container.id = "new-restaurant";

    container.insertAdjacentHTML(
      "afterbegin",
      '<h1 class="display-5">Nuevo restaurante</h1>'
    );

    const form = document.createElement("form");
    form.name = "fNewRest";
    form.setAttribute("role", "form");
    form.setAttribute("novalidate", "");
    form.classList.add("row");
    form.classList.add("g-3");

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
        <label class="form-label" for="nrName">Nombre *</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-type"></i></span>
          <input type="text" class="form-control" id="nrName" name="nrName" placeholder="Nombre del restaurante" value="" required>
          <div class="invalid-feedback">El título es obligatorio.</div>
          <div class="valid-feedback">Correcto.</div>
        </div>
      </div>`
    );

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
        <label class="form-label" for="nrDescription">Descripción</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-bodytext"></i></span>
          <input type="text" class="form-control" id="nrDescription" name="nrDescription" value="">
          <div class="invalid-feedback"></div>
          <div class="valid-feedback">Correcto.</div>
        </div>
      </div>`
    );

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
        <label class="form-label" for="nrLatitude">Latitud</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-bodytext"></i></span>
          <input type="text" class="form-control" id="nrLatitude" name="nrLatitude" placeholder="Latitud (-90 hasta 90)" value="">
          <div class="invalid-feedback">Latitud mal agregada.</div>
          <div class="valid-feedback">Correcto.</div>
        </div>
      </div>`
    );

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
        <label class="form-label" for="nrLongitude">Longitud</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-bodytext"></i></span>
          <input type="text" class="form-control" id="nrLongitude" name="nrLongitude" placeholder="Longitud (-180 hasta 180)" value="">
          <div class="invalid-feedback">Longitud mal agregada.</div>
          <div class="valid-feedback">Correcto.</div>
        </div>
      </div>`
    );

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="mb-12">
          <button class="btn btn-primary" type="submit">Añadir</button>
          <button class="btn btn-primary" type="reset">Cancelar</button>
        </div>`
    );

    container.append(form);
    this.main.append(container);
  }

  showModalRestaurant(done, rest, error) {
    const messageModalContainer = document.getElementById("messageModal");
    const messageModal = new bootstrap.Modal(messageModalContainer);

    const title = document.getElementById("messageModalTitle");
    title.innerHTML = "Restaurante creado";

    const body = messageModalContainer.querySelector(".modal-body");
    body.replaceChildren();

    if (done) {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="p-3">El restaurante <strong>${rest.name}</strong> ha sido creado correctamente.</div>`
      );
    } else {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="error text-danger p-3"><i class="bi bi-exclamation-triangle"></i> El restaurante <strong>${rest.name}</strong> no ha podido crearse correctamente.</div>`
      );
    }

    messageModal.show();

    const listener = (event) => {
      event.preventDefault();
      if (done) {
        const formNewRest = document.getElementById("fNewRest");
        if (formNewRest) {
          formNewRest.reset();
        }
      }
      const nrNameInput = document.querySelector(
        '#fNewRest input[name="nrName"]'
      );
      if (nrNameInput) {
        nrNameInput.focus();
      }
    };
    messageModalContainer.addEventListener("hidden.bs.modal", listener, {
      once: true,
    });
  }

  showAdminMenuForm(menus, dishes, menusWithDishes) {
    this.main.replaceChildren();
    this.categories.replaceChildren();

    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("my-3");
    container.id = "assign-dishes-to-menu";

    container.insertAdjacentHTML(
      "afterbegin",
      '<h1 class="display-5">Asignar plato/s a un menú</h1>'
    );

    const form = document.createElement("form");
    form.name = "fAssignDishToMenu";
    form.setAttribute("role", "form");
    form.setAttribute("novalidate", "");
    form.classList.add("row");
    form.classList.add("g-3");

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
				<label class="form-label" for="nmMenu">Menús *</label>
				<div class="input-group">
					<label class="input-group-text" for="nmMenu"><i class="bi bi-card-checklist"></i></label>
					<select class="form-select" name="nmMenu" id="nmMenu" required>
          <option value="">- Selecciona un menú -</option>
					</select>
					<div class="invalid-feedback">Debes seleccionar un menú.</div>
					<div class="valid-feedback">Correcto.</div>
				</div>
			</div>`
    );
    const nmMenu = form.querySelector("#nmMenu");
    for (const menu of menus) {
      nmMenu.insertAdjacentHTML(
        "beforeend",
        `<option value="${menu.name}">${menu.name}</option>`
      );
    }

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
				<label class="form-label" for="nmDish">Platos *</label>
				<div class="input-group">
					<label class="input-group-text" for="nmDish"><i class="bi bi-card-checklist"></i></label>
					<select class="form-select" name="nmDish" id="nmDish" multiple required>
					</select>
					<div class="invalid-feedback">Debes asignar minimo un plato.</div>
					<div class="valid-feedback">Correcto.</div>
				</div>
			</div>`
    );
    const nmDish = form.querySelector("#nmDish");
    for (const dish of dishes) {
      nmDish.insertAdjacentHTML(
        "beforeend",
        `<option value="${dish.name}">${dish.name}</option>`
      );
    }

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="my-12">
          <button class="btn btn-primary" type="submit">Asignar Plato/s</button>
        </div>`
    );

    container.append(form);

    container.insertAdjacentHTML(
      "beforeend",
      '<h1 class="display-5">Desasignar plato/s a un menú</h1>'
    );

    const form2 = document.createElement("form");
    form2.name = "fDeassignDishToMenu";
    form2.setAttribute("role", "form");
    form2.setAttribute("novalidate", "");
    form2.classList.add("row");
    form2.classList.add("g-3");

    form2.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
				<label class="form-label" for="nmMenu2">Menús *</label>
				<div class="input-group">
					<label class="input-group-text" for="nmMenu2"><i class="bi bi-card-checklist"></i></label>
					<select class="form-select" name="nmMenu2" id="nmMenu2" required>
          <option value="">- Selecciona un menú -</option>
					</select>
					<div class="invalid-feedback">Debes seleccionar un menú.</div>
					<div class="valid-feedback">Correcto.</div>
				</div>
			</div>`
    );
    const nmMenu2 = form2.querySelector("#nmMenu2");
    for (const menu of menus) {
      nmMenu2.insertAdjacentHTML(
        "beforeend",
        `<option value="${menu.name}">${menu.name}</option>`
      );
    }

    form2.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
				<label class="form-label" for="nmDish2">Platos *</label>
				<div class="input-group">
					<label class="input-group-text" for="nmDish2"><i class="bi bi-card-checklist"></i></label>
					<select class="form-select" name="nmDish2" id="nmDish2" multiple required>
					</select>
					<div class="invalid-feedback">Debes asignar minimo un plato.</div>
					<div class="valid-feedback">Correcto.</div>
				</div>
			</div>`
    );
    const nmDish2 = form2.querySelector("#nmDish2");

    form2.insertAdjacentHTML(
      "beforeend",
      `<div class="mb-12">
          <button class="btn btn-primary" type="submit">Desasignar Plato/s</button>
        </div>`
    );

    nmMenu2.addEventListener("change", () => {
      const selectedMenuName = nmMenu2.value;
      if (selectedMenuName) {
        // Limpiar el contenido actual del select de platos del menú
        nmDish2.innerHTML = "";

        // Buscar el menú seleccionado en la lista de menús
        for (const menuItem of menusWithDishes) {
          if (menuItem.menu.name === selectedMenuName) {
            // Agregar las opciones de platos del menú seleccionado al select
            for (const dish of menuItem.dishes) {
              nmDish2.insertAdjacentHTML(
                "beforeend",
                `<option value="${dish.name}">${dish.name}</option>`
              );
            }
            return; // Salir del bucle una vez que se ha encontrado el menú seleccionado
          }
        }
      }
    });

    container.append(form2);

    container.insertAdjacentHTML(
      "beforeend",
      '<h1 class="display-5">Cambiar posicion de dos platos de un menú</h1>'
    );

    const form3 = document.createElement("form");
    form3.name = "fChangeDishesInMenu";
    form3.setAttribute("role", "form");
    form3.setAttribute("novalidate", "");
    form3.classList.add("row");
    form3.classList.add("g-3");

    form3.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
				<label class="form-label" for="changeMenu">Menús *</label>
				<div class="input-group">
					<label class="input-group-text" for="changeMenu"><i class="bi bi-card-checklist"></i></label>
					<select class="form-select" name="changeMenu" id="changeMenu" required>
          <option value="">- Selecciona un menú -</option>
					</select>
					<div class="invalid-feedback">Debes seleccionar un menú.</div>
					<div class="valid-feedback">Correcto.</div>
				</div>
			</div>`
    );

    form3.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
				<label class="form-label" for="changeDish">Platos *</label>
				<div class="input-group">
					<label class="input-group-text" for="changeDish"><i class="bi bi-card-checklist"></i></label>
					<select class="form-select" name="changeDish" id="changeDish" multiple required>
					</select>
					<div class="invalid-feedback">Debes elegir dos platos.</div>
					<div class="valid-feedback">Correcto.</div>
				</div>
			</div>`
    );

    form3.insertAdjacentHTML(
      "beforeend",
      `<div class="mb-12">
          <button class="btn btn-primary" type="submit">Cambiar Platos</button>
        </div>`
    );
    container.append(form3);
    this.main.append(container);

    const changeMenu = form3.querySelector("#changeMenu");
    for (const menu of menus) {
      changeMenu.insertAdjacentHTML(
        "beforeend",
        `<option value="${menu.name}">${menu.name}</option>`
      );
    }

    const changeDish = form3.querySelector("#changeDish");
    changeMenu.addEventListener("change", () => {
      const selectedMenuName = changeMenu.value;
      if (selectedMenuName) {
        // Limpiar el contenido actual del select de platos del menú
        changeDish.innerHTML = "";

        // Buscar el menú seleccionado en la lista de menús
        for (const menuItem of menusWithDishes) {
          if (menuItem.menu.name === selectedMenuName) {
            // Agregar las opciones de platos del menú seleccionado al select
            for (const dish of menuItem.dishes) {
              changeDish.insertAdjacentHTML(
                "beforeend",
                `<option value="${dish.name}">${dish.name}</option>`
              );
            }
            return; // Salir del bucle una vez que se ha encontrado el menú seleccionado
          }
        }
      }
    });
  }

  showModalAssignDishToMenu(done, menu, error) {
    const messageModalContainer = document.getElementById("messageModal");
    const messageModal = new bootstrap.Modal(messageModalContainer);

    const title = document.getElementById("messageModalTitle");
    title.innerHTML = "Platos asignados al menú";

    const body = messageModalContainer.querySelector(".modal-body");
    body.replaceChildren();

    if (done) {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="p-3">Platos asigandos al menú <strong>${menu.name}</strong> correctamente.</div>`
      );
    } else {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="error text-danger p-3"><i class="bi bi-exclamation-triangle"></i> Los platos no han podido ser asignados al menú <strong>${menu.name}</strong> correctamente.</div>`
      );
    }

    messageModal.show();

    const listener = (event) => {
      event.preventDefault();
      if (done) {
        const formNewRest = document.getElementById("fAssignDishToMenu");
        if (formNewRest) {
          formNewRest.reset();
        }
      }
      const nmNameInput = document.querySelector(
        '#fAssignDishToMenu select[name="nmMenu"]'
      );
      if (nmNameInput) {
        nmNameInput.focus();
      }
    };
    messageModalContainer.addEventListener("hidden.bs.modal", listener, {
      once: true,
    });
  }

  showModalDeassignDishToMenu(done, menu, error) {
    const messageModalContainer = document.getElementById("messageModal");
    const messageModal = new bootstrap.Modal(messageModalContainer);

    const title = document.getElementById("messageModalTitle");
    title.innerHTML = "Platos desasignados del menú";

    const body = messageModalContainer.querySelector(".modal-body");
    body.replaceChildren();

    if (done) {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="p-3">Platos desasigandos del menú <strong>${menu.name}</strong> correctamente.</div>`
      );
    } else {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="error text-danger p-3"><i class="bi bi-exclamation-triangle"></i> Los platos no han podido ser desasignados del menú <strong>${menu.name}</strong> correctamente.</div>`
      );
    }

    messageModal.show();

    const listener = (event) => {
      event.preventDefault();
      if (done) {
        const formDeassignDishToMenu = document.getElementById(
          "fDeassignDishToMenu"
        );
        if (formDeassignDishToMenu) {
          formDeassignDishToMenu.reset();
        }
      }
      const nmMenuInput = document.querySelector(
        '#fDeassignDishToMenu select[name="nmMenu2"]'
      );
      if (nmMenuInput) {
        nmMenuInput.focus();
      }
    };
    messageModalContainer.addEventListener("hidden.bs.modal", listener, {
      once: true,
    });
  }

  showModalChangeDishesInMenu(done, menu, error) {
    const messageModalContainer = document.getElementById("messageModal");
    const messageModal = new bootstrap.Modal(messageModalContainer);

    const title = document.getElementById("messageModalTitle");
    title.innerHTML = "Platos desasignados del menú";

    const body = messageModalContainer.querySelector(".modal-body");
    body.replaceChildren();

    if (done) {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="p-3">Platos cambiados de posicion del menú <strong>${menu.name}</strong> correctamente.</div>`
      );
    } else {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="error text-danger p-3"><i class="bi bi-exclamation-triangle"></i> Los platos no han podido ser cambiados de posicion del menú <strong>${menu.name}</strong> correctamente.</div>`
      );
    }

    messageModal.show();

    const listener = (event) => {
      event.preventDefault();
      if (done) {
        const formChangeDishesInMenu = document.getElementById(
          "fChangeDishesInMenu"
        );
        if (formChangeDishesInMenu) {
          formChangeDishesInMenu.reset();
        }
      }
      const changeMenuInput = document.querySelector(
        '#fChangeDishesInMenu select[name="changeMenu"]'
      );
      if (changeMenuInput) {
        changeMenuInput.focus();
      }
    };
    messageModalContainer.addEventListener("hidden.bs.modal", listener, {
      once: true,
    });
  }

  showModCategoriesForm(dishes, catWithDish) {
    this.main.replaceChildren();
    this.categories.replaceChildren();

    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("my-3");
    container.id = "modify-categories-to-dish";

    container.insertAdjacentHTML(
      "afterbegin",
      '<h1 class="display-5">Modificar categorias de un plato</h1>'
    );

    const form = document.createElement("form");
    form.name = "fModifyCatOfDish";
    form.setAttribute("role", "form");
    form.setAttribute("novalidate", "");
    form.classList.add("row");
    form.classList.add("g-3");

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-12 mb-3">
				<label class="form-label" for="modDish">Platos *</label>
				<div class="input-group">
					<label class="input-group-text" for="modDish"><i class="bi bi-card-checklist"></i></label>
					<select class="form-select" name="modDish" id="modDish" required>
          <option value="">- Selecciona un plato -</option>
					</select>
					<div class="invalid-feedback">Debes seleccionar un plato.</div>
					<div class="valid-feedback">Correcto.</div>
				</div>
			</div>`
    );
    const modDish = form.querySelector("#modDish");
    for (const dish of dishes) {
      modDish.insertAdjacentHTML(
        "beforeend",
        `<option value="${dish.name}">${dish.name}</option>`
      );
    }

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
				<label class="form-label" for="modRemCat">Categorías del plato (seleccionar para quitar) *</label>
				<div class="input-group">
					<label class="input-group-text" for="modRemCat"><i class="bi bi-card-checklist"></i></label>
					<select class="form-select" name="modRemCat" id="modRemCat" multiple required>
					</select>
					<div class="invalid-feedback">Debes asignar minimo un plato.</div>
					<div class="valid-feedback">Correcto.</div>
				</div>
			</div>`
    );
    const modRemCat = form.querySelector("#modRemCat");

    modDish.addEventListener("change", () => {
      const selectedDishName = modDish.value;
      if (selectedDishName) {
        // Limpiar el contenido actual del select de platos del menú
        modRemCat.innerHTML = "";
        // Buscar el plato seleccionado en la lista de menús
        for (const catItem of catWithDish) {
          for (const dishItem of catItem.dishes) {
            if (dishItem.name === selectedDishName) {
              modRemCat.insertAdjacentHTML(
                "beforeend",
                `<option value="${catItem.category.name}">${catItem.category.name}</option>`
              );
            }
          }
        }
      }
    });

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="col-md-6 mb-3">
				<label class="form-label" for="modAddCat">Categorías del plato restantes (seleccionar para añadir) *</label>
				<div class="input-group">
					<label class="input-group-text" for="modAddCat"><i class="bi bi-card-checklist"></i></label>
					<select class="form-select" name="modAddCat" id="modAddCat" multiple required>
					</select>
					<div class="invalid-feedback">Debes asignar minimo un plato.</div>
					<div class="valid-feedback">Correcto.</div>
				</div>
			</div>`
    );
    const modAddCat = form.querySelector("#modAddCat");

    modDish.addEventListener("change", () => {
      const selectedDishName = modDish.value;
      if (selectedDishName) {
        // Limpiar el contenido actual del select de platos del menú
        modRemCat.innerHTML = "";
        modAddCat.innerHTML = "";
        // Buscar el plato seleccionado en la lista de menús
        for (const catItem of catWithDish) {
          const isDishInCategory = catItem.dishes.some(
            (dish) => dish.name === selectedDishName
          );
          if (isDishInCategory) {
            // Si el plato está en la categoría actual, insertarlo en el select de categorías
            modRemCat.insertAdjacentHTML(
              "beforeend",
              `<option value="${catItem.category.name}">${catItem.category.name}</option>`
            );
          } else {
            // Si el plato no está en la categoría actual, insertarlo en el select de categorías restantes
            modAddCat.insertAdjacentHTML(
              "beforeend",
              `<option value="${catItem.category.name}">${catItem.category.name}</option>`
            );
          }
        }
      }
    });

    form.insertAdjacentHTML(
      "beforeend",
      `<div class="mb-12">
          <button class="btn btn-primary" type="submit">Modificar</button>
        </div>`
    );

    container.append(form);
    this.main.append(container);
  }

  showModalModifyCatOfDish(done, dish, error) {
    const messageModalContainer = document.getElementById("messageModal");
    const messageModal = new bootstrap.Modal(messageModalContainer);

    const title = document.getElementById("messageModalTitle");
    title.innerHTML = "Categorias modificadas";

    const body = messageModalContainer.querySelector(".modal-body");
    body.replaceChildren();

    if (done) {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="p-3">Las categorias del plato <strong>${dish.name}</strong> han sido modificadas correctamente.</div>`
      );
    } else {
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="error text-danger p-3"><i class="bi bi-exclamation-triangle"></i> Las categorias del plato <strong>${dish.name}</strong> no han sido modificadas correctamente.</div>`
      );
    }

    messageModal.show();

    const listener = (event) => {
      event.preventDefault();
      if (done) {
        const formModCatOfDish = document.getElementById("fModifyCatOfDish");
        if (formModCatOfDish) {
          formModCatOfDish.reset();
        }
      }
      const modDishInput = document.querySelector(
        '#fModifyCatOfDish select[name="modDish"]'
      );
      if (modDishInput) {
        modDishInput.focus();
      }
    };
    messageModalContainer.addEventListener("hidden.bs.modal", listener, {
      once: true,
    });
  }
}
export default RestaurantManagerView;
