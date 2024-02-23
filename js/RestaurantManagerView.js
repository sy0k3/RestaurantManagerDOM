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

  bindInit(handler) {
    document.getElementById("init").addEventListener("click", (event) => {
      handler();
    });
    document.getElementById("logo").addEventListener("click", (event) => {
      handler();
    });
  }

  bindDishesCategoryList(handler) {
    const links = this.categories.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  bindDishesCategoryListInMenu(handler) {
    const links = this.menuCat.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  bindDishCardListInMenu(handler) {
    const cards = this.main.querySelectorAll("div.card");
    for (const card of cards) {
      card.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.dish);
      });
    }
  }

  bindDishCardListInCategoryMenu(handler) {
    const cards = this.menuCat.querySelectorAll("a");
    for (const card of cards) {
      card.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.dish);
      });
    }
  }

  bindDishesAllergenList(handler) {
    const links = this.categories.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.allergen);
      });
    }
  }

  bindDishesMenuList(handler) {
    const links = this.categories.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.menu);
      });
    }
  }

  bindRestaurantsInMenu(handler) {
    const links = this.menuRest.querySelectorAll("a");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.restaurant);
      });
    }
  }

  bindDishToCarousel(handler) {
    const cards = this.main.querySelectorAll("img");
    for (const card of cards) {
      card.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.dish);
      });
    }
  }

  bindAllergens(handler) {
    this.menuAllg.addEventListener("click", (event) => {
      handler();
    });
  }

  bindMenus(handler) {
    this.menuMenu.addEventListener("click", (event) => {
      handler();
    });
  }

  bindRestaurants(handler) {
    this.menuRest.addEventListener("click", (event) => {
      handler();
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
      `<div class="card" style="width: 18rem;" data-restaurant="${
        restaurant.name
      }">
        <div class="card-header h2">${restaurant.name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${restaurant.description}</li>
          <li class="list-group-item">${restaurant.location.toString()}</li>
        </ul>
      </div>`
    );
  }
}
export default RestaurantManagerView;
