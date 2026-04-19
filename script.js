const CLOUD_NAME = "dyqdfbaln";

function cloudinary(publicId, width = 900) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto:eco,w_${width}/${publicId}`;
}

const imageMap = {
  food1: cloudinary("food1_ba7eyd", 900),
  food2: cloudinary("food2_iejzsd", 900),
  food3: cloudinary("food3_jipqcy", 900),
  food4: cloudinary("food4_kxjemm", 900),
  food5: cloudinary("food5_gwupvx", 900),
  food6: cloudinary("food6_ncy11x", 900),
};

const ui = {
  currentLang: "ar",
  currentCategory: "all",
  searchQuery: "",
  selectedItemId: null,
};

const translations = {
  ar: {
    dir: "rtl",
    htmlLang: "ar",
    langTitle: "اختر اللغة",
    langText: "يرجى اختيار اللغة لعرض منيو قرية كورال",
    topEyebrow: "Coral Village",
    topTitle: "منيو قرية كورال",
    langSwitchText: "اللغة",
    heroKicker: "مطعم قرية كورال",
    heroTitle: "منيو إلكتروني سريع وواضح",
    heroDesc: "تصفح الأقسام، ابحث عن الأطباق، وانتقل بين الأصناف بسهولة حتى مع الإنترنت الضعيف.",
    searchPlaceholder: "ابحث عن طبق أو مشروب...",
    resetBtnText: "إعادة ضبط",
    categoriesTitle: "الأقسام",
    categoriesSub: "اختر القسم لعرض الأطباق المتوفرة",
    menuSectionTitle: "المنيو",
    menuSectionSub: "عرض سريع وواضح لأصناف المطعم",
    resultsLabel: "عنصر",
    emptyTitle: "لا توجد نتائج",
    emptyDesc: "جرّب قسمًا آخر أو كلمة بحث مختلفة.",
    detailsBtn: "التفاصيل",
    sameCategoryBtn: "عرض القسم",
    selectLangAgain: "اللغة",
    modalBadges: {
      available: "متوفر الآن",
      chef: "اختيار الشيف",
      popular: "الأكثر طلبًا",
      quick: "تقديم سريع",
    },
    categories: {
      all: "الكل",
      appetizers: "المقبلات",
      soups: "الشوربات",
      main_courses: "الأطباق الرئيسية",
      eastern: "الأطباق الشرقية",
      western: "الأطباق الغربية",
      drinks: "المشاريب",
      desserts: "الحلويات",
      shisha: "النراكيل",
    },
  },
  en: {
    dir: "ltr",
    htmlLang: "en",
    langTitle: "Choose language",
    langText: "Please choose your language to view Coral Village menu",
    topEyebrow: "Coral Village",
    topTitle: "Coral Village Menu",
    langSwitchText: "Language",
    heroKicker: "Coral Village Restaurant",
    heroTitle: "Fast and clear digital menu",
    heroDesc: "Browse categories, search items, and move through the menu smoothly even with weak internet.",
    searchPlaceholder: "Search for a dish or drink...",
    resetBtnText: "Reset",
    categoriesTitle: "Categories",
    categoriesSub: "Choose a category to view available items",
    menuSectionTitle: "Menu",
    menuSectionSub: "Quick and clear view of restaurant items",
    resultsLabel: "items",
    emptyTitle: "No results found",
    emptyDesc: "Try another category or a different search term.",
    detailsBtn: "Details",
    sameCategoryBtn: "View category",
    selectLangAgain: "Language",
    modalBadges: {
      available: "Available now",
      chef: "Chef choice",
      popular: "Most ordered",
      quick: "Quick serve",
    },
    categories: {
      all: "All",
      appetizers: "Appetizers",
      soups: "Soups",
      main_courses: "Main Courses",
      eastern: "Eastern Dishes",
      western: "Western Dishes",
      drinks: "Drinks",
      desserts: "Desserts",
      shisha: "Shisha",
    },
  },
};

const categoryIcons = {
  all: "fa-solid fa-utensils",
  appetizers: "fa-solid fa-plate-wheat",
  soups: "fa-solid fa-bowl-food",
  main_courses: "fa-solid fa-drumstick-bite",
  eastern: "fa-solid fa-mortar-pestle",
  western: "fa-solid fa-burger",
  drinks: "fa-solid fa-mug-hot",
  desserts: "fa-solid fa-ice-cream",
  shisha: "fa-solid fa-smoking",
};

const menuItems = [
  {
    id: 1,
    category: "appetizers",
    image: imageMap.food4,
    badges: ["available", "chef"],
    title: {
      ar: "حمص بالطحينة",
      en: "Hummus with Tahini",
    },
    desc: {
      ar: "حمص كريمي محضر يوميًا مع الطحينة وزيت الزيتون ويقدم مع خبز دافئ.",
      en: "Fresh daily hummus blended with tahini and olive oil, served with warm bread.",
    },
    price: {
      ar: "8,000 د.ع",
      en: "8,000 IQD",
    },
  },
  {
    id: 2,
    category: "appetizers",
    image: imageMap.food5,
    badges: ["available", "popular"],
    title: {
      ar: "بطاطا ويدجز مقرمشة",
      en: "Crispy Potato Wedges",
    },
    desc: {
      ar: "بطاطا متبلة ومقرمشة تقدم مع صلصة خاصة خفيفة.",
      en: "Seasoned crispy potato wedges served with a light signature sauce.",
    },
    price: {
      ar: "7,000 د.ع",
      en: "7,000 IQD",
    },
  },
  {
    id: 3,
    category: "soups",
    image: imageMap.food2,
    badges: ["available", "quick"],
    title: {
      ar: "شوربة عدس",
      en: "Lentil Soup",
    },
    desc: {
      ar: "شوربة عدس ناعمة وغنية بالنكهة تقدم ساخنة مع الليمون.",
      en: "Smooth flavorful lentil soup served hot with lemon.",
    },
    price: {
      ar: "6,000 د.ع",
      en: "6,000 IQD",
    },
  },
  {
    id: 4,
    category: "soups",
    image: imageMap.food3,
    badges: ["available", "chef"],
    title: {
      ar: "شوربة فطر كريمية",
      en: "Creamy Mushroom Soup",
    },
    desc: {
      ar: "شوربة كريمية خفيفة بالفطر الطازج ولمسة فلفل أسود.",
      en: "Light creamy mushroom soup with fresh mushrooms and black pepper.",
    },
    price: {
      ar: "7,500 د.ع",
      en: "7,500 IQD",
    },
  },
  {
    id: 5,
    category: "main_courses",
    image: imageMap.food1,
    badges: ["available", "popular"],
    title: {
      ar: "مشويات قرية كورال",
      en: "Coral Village Mixed Grill",
    },
    desc: {
      ar: "تشكيلة مشاوي مشكلة مع أرز وخضار مشوية وصلصات جانبية.",
      en: "Mixed grill platter served with rice, grilled vegetables, and side sauces.",
    },
    price: {
      ar: "28,000 د.ع",
      en: "28,000 IQD",
    },
  },
  {
    id: 6,
    category: "main_courses",
    image: imageMap.food2,
    badges: ["available", "chef"],
    title: {
      ar: "فيليه دجاج مشوي",
      en: "Grilled Chicken Fillet",
    },
    desc: {
      ar: "صدر دجاج متبل ومشوي يقدم مع بطاطا وصوص أعشاب.",
      en: "Seasoned grilled chicken fillet served with potatoes and herb sauce.",
    },
    price: {
      ar: "22,000 د.ع",
      en: "22,000 IQD",
    },
  },
  {
    id: 7,
    category: "eastern",
    image: imageMap.food1,
    badges: ["available", "popular"],
    title: {
      ar: "كباب عراقي",
      en: "Iraqi Kebab",
    },
    desc: {
      ar: "كباب عراقي على الفحم يقدم مع خبز حار وطماطم مشوية.",
      en: "Traditional charcoal Iraqi kebab served with hot bread and grilled tomatoes.",
    },
    price: {
      ar: "19,000 د.ع",
      en: "19,000 IQD",
    },
  },
  {
    id: 8,
    category: "eastern",
    image: imageMap.food3,
    badges: ["available", "chef"],
    title: {
      ar: "دولمة مشكلة",
      en: "Mixed Dolma",
    },
    desc: {
      ar: "دولمة عراقية مشكلة محضرة بتتبيلة خاصة ونكهة منزلية.",
      en: "Iraqi mixed dolma prepared with a special home-style seasoning.",
    },
    price: {
      ar: "18,000 د.ع",
      en: "18,000 IQD",
    },
  },
  {
    id: 9,
    category: "western",
    image: imageMap.food6,
    badges: ["available", "popular"],
    title: {
      ar: "ستيك بصوص خاص",
      en: "Steak with Signature Sauce",
    },
    desc: {
      ar: "شريحة لحم تقدم مع صوص خاص وخضار موسمية.",
      en: "Steak served with signature sauce and seasonal vegetables.",
    },
    price: {
      ar: "34,000 د.ع",
      en: "34,000 IQD",
    },
  },
  {
    id: 10,
    category: "western",
    image: imageMap.food5,
    badges: ["available", "chef"],
    title: {
      ar: "باستا ألفريدو",
      en: "Alfredo Pasta",
    },
    desc: {
      ar: "باستا بصوص ألفريدو كريمي مع جبنة بارميزان ولمسة فلفل.",
      en: "Pasta in creamy Alfredo sauce with parmesan and pepper.",
    },
    price: {
      ar: "17,000 د.ع",
      en: "17,000 IQD",
    },
  },
  {
    id: 11,
    category: "drinks",
    image: imageMap.food4,
    badges: ["available", "quick"],
    title: {
      ar: "عصير برتقال طازج",
      en: "Fresh Orange Juice",
    },
    desc: {
      ar: "عصير برتقال طبيعي طازج يقدم باردًا.",
      en: "Fresh natural orange juice served chilled.",
    },
    price: {
      ar: "5,000 د.ع",
      en: "5,000 IQD",
    },
  },
  {
    id: 12,
    category: "drinks",
    image: imageMap.food2,
    badges: ["available", "quick"],
    title: {
      ar: "آيس لاتيه",
      en: "Iced Latte",
    },
    desc: {
      ar: "قهوة باردة بالحليب مناسبة للجلسات الهادئة.",
      en: "Cold milk coffee ideal for relaxed dining.",
    },
    price: {
      ar: "6,500 د.ع",
      en: "6,500 IQD",
    },
  },
  {
    id: 13,
    category: "desserts",
    image: imageMap.food6,
    badges: ["available", "popular"],
    title: {
      ar: "تشيزكيك",
      en: "Cheesecake",
    },
    desc: {
      ar: "تشيزكيك ناعم بطبقة خفيفة وقوام غني.",
      en: "Smooth cheesecake with a light topping and rich texture.",
    },
    price: {
      ar: "8,500 د.ع",
      en: "8,500 IQD",
    },
  },
  {
    id: 14,
    category: "desserts",
    image: imageMap.food5,
    badges: ["available", "chef"],
    title: {
      ar: "براوني ساخن",
      en: "Warm Brownie",
    },
    desc: {
      ar: "براوني يقدم دافئًا مع صوص شوكولاتة.",
      en: "Warm brownie served with chocolate sauce.",
    },
    price: {
      ar: "8,000 د.ع",
      en: "8,000 IQD",
    },
  },
  {
    id: 15,
    category: "shisha",
    image: imageMap.food1,
    badges: ["available", "popular"],
    title: {
      ar: "أراكيل تفاحتين",
      en: "Double Apple Shisha",
    },
    desc: {
      ar: "نكهة كلاسيكية بطعم واضح وجلسة هادئة.",
      en: "Classic flavor with a bold taste for a relaxed session.",
    },
    price: {
      ar: "10,000 د.ع",
      en: "10,000 IQD",
    },
  },
  {
    id: 16,
    category: "shisha",
    image: imageMap.food3,
    badges: ["available", "chef"],
    title: {
      ar: "أراكيل عنب ونعناع",
      en: "Grape Mint Shisha",
    },
    desc: {
      ar: "مزيج عنب ونعناع بطعم منعش ومتوازن.",
      en: "Balanced grape and mint mix with a refreshing finish.",
    },
    price: {
      ar: "10,000 د.ع",
      en: "10,000 IQD",
    },
  },
];

const categoryOrder = [
  "all",
  "appetizers",
  "soups",
  "main_courses",
  "eastern",
  "western",
  "drinks",
  "desserts",
  "shisha",
];

const elements = {
  html: document.documentElement,
  body: document.body,
  langModal: document.getElementById("langModal"),
  langTitle: document.getElementById("langTitle"),
  langText: document.getElementById("langText"),
  openLangBtn: document.getElementById("openLangBtn"),
  langSwitchText: document.getElementById("langSwitchText"),
  topEyebrow: document.getElementById("topEyebrow"),
  topTitle: document.getElementById("topTitle"),
  heroKicker: document.getElementById("heroKicker"),
  heroTitle: document.getElementById("heroTitle"),
  heroDesc: document.getElementById("heroDesc"),
  searchInput: document.getElementById("searchInput"),
  resetBtn: document.getElementById("resetBtn"),
  resetBtnText: document.getElementById("resetBtnText"),
  categoriesTitle: document.getElementById("categoriesTitle"),
  categoriesSub: document.getElementById("categoriesSub"),
  menuSectionTitle: document.getElementById("menuSectionTitle"),
  menuSectionSub: document.getElementById("menuSectionSub"),
  resultsText: document.getElementById("resultsText"),
  emptyState: document.getElementById("emptyState"),
  emptyTitle: document.getElementById("emptyTitle"),
  emptyDesc: document.getElementById("emptyDesc"),
  categoriesGrid: document.getElementById("categoriesGrid"),
  menuGrid: document.getElementById("menuGrid"),
  itemModal: document.getElementById("itemModal"),
  itemModalBackdrop: document.getElementById("itemModalBackdrop"),
  itemModalClose: document.getElementById("itemModalClose"),
  itemModalImage: document.getElementById("itemModalImage"),
  itemModalCategory: document.getElementById("itemModalCategory"),
  itemModalPrice: document.getElementById("itemModalPrice"),
  itemModalTitle: document.getElementById("itemModalTitle"),
  itemModalDesc: document.getElementById("itemModalDesc"),
  itemModalBadge1: document.getElementById("itemModalBadge1"),
  itemModalBadge2: document.getElementById("itemModalBadge2"),
};

function t(path) {
  const parts = path.split(".");
  let value = translations[ui.currentLang];
  for (const part of parts) value = value?.[part];
  return value ?? "";
}

function setLanguage(lang) {
  ui.currentLang = lang;

  elements.html.lang = translations[lang].htmlLang;
  elements.html.dir = translations[lang].dir;

  elements.langTitle.textContent = t("langTitle");
  elements.langText.textContent = t("langText");
  elements.topEyebrow.textContent = t("topEyebrow");
  elements.topTitle.textContent = t("topTitle");
  elements.langSwitchText.textContent = t("langSwitchText");
  elements.heroKicker.textContent = t("heroKicker");
  elements.heroTitle.textContent = t("heroTitle");
  elements.heroDesc.textContent = t("heroDesc");
  elements.searchInput.placeholder = t("searchPlaceholder");
  elements.resetBtnText.textContent = t("resetBtnText");
  elements.categoriesTitle.textContent = t("categoriesTitle");
  elements.categoriesSub.textContent = t("categoriesSub");
  elements.menuSectionTitle.textContent = t("menuSectionTitle");
  elements.menuSectionSub.textContent = t("menuSectionSub");
  elements.emptyTitle.textContent = t("emptyTitle");
  elements.emptyDesc.textContent = t("emptyDesc");

  renderCategories();
  renderMenu();
}

function getFilteredItems() {
  return menuItems.filter((item) => {
    const matchesCategory =
      ui.currentCategory === "all" || item.category === ui.currentCategory;

    const query = ui.searchQuery.trim().toLowerCase();
    const title = item.title[ui.currentLang].toLowerCase();
    const desc = item.desc[ui.currentLang].toLowerCase();

    const matchesSearch =
      !query || title.includes(query) || desc.includes(query);

    return matchesCategory && matchesSearch;
  });
}

function renderCategories() {
  elements.categoriesGrid.innerHTML = "";

  categoryOrder.forEach((key) => {
    const btn = document.createElement("button");
    btn.className = `category-btn ${ui.currentCategory === key ? "active" : ""}`;
    btn.dataset.category = key;
    btn.innerHTML = `
      <i class="${categoryIcons[key]}"></i>
      <span>${t(`categories.${key}`)}</span>
    `;

    btn.addEventListener("click", () => {
      ui.currentCategory = key;
      renderCategories();
      renderMenu();
      scrollToMenu();
    });

    elements.categoriesGrid.appendChild(btn);
  });
}

function createBadgeText(badgeKey) {
  return t(`modalBadges.${badgeKey}`);
}

function renderMenu() {
  const items = getFilteredItems();
  elements.menuGrid.innerHTML = "";

  const resultWord = t("resultsLabel");
  elements.resultsText.textContent = `${items.length} ${resultWord}`;

  if (!items.length) {
    elements.emptyState.classList.remove("hidden");
    return;
  }

  elements.emptyState.classList.add("hidden");

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.innerHTML = `
      <div class="menu-card__image-wrap">
        <img
          src="${item.image}"
          alt="${item.title[ui.currentLang]}"
          class="menu-card__image"
          loading="lazy"
          decoding="async"
          width="900"
          height="650"
        />
        <span class="menu-card__badge">${t(`categories.${item.category}`)}</span>
      </div>

      <div class="menu-card__body">
        <div class="menu-card__top">
          <h3 class="menu-card__title">${item.title[ui.currentLang]}</h3>
          <span class="menu-card__price">${item.price[ui.currentLang]}</span>
        </div>

        <p class="menu-card__desc">${item.desc[ui.currentLang]}</p>

        <div class="menu-card__meta">
          <span class="meta-pill">${createBadgeText(item.badges[0])}</span>
          <span class="meta-pill">${createBadgeText(item.badges[1])}</span>
        </div>

        <div class="menu-card__actions">
          <button class="details-btn" data-item-id="${item.id}">
            ${t("detailsBtn")}
          </button>
          <button class="category-link-btn" data-category-jump="${item.category}">
            ${t("sameCategoryBtn")}
          </button>
        </div>
      </div>
    `;

    const detailsBtn = card.querySelector(".details-btn");
    const categoryBtn = card.querySelector(".category-link-btn");

    detailsBtn.addEventListener("click", () => openItemModal(item.id));
    categoryBtn.addEventListener("click", () => {
      ui.currentCategory = item.category;
      renderCategories();
      renderMenu();
      scrollToMenu();
    });

    elements.menuGrid.appendChild(card);
  });
}

function openItemModal(itemId) {
  const item = menuItems.find((entry) => entry.id === itemId);
  if (!item) return;

  ui.selectedItemId = itemId;

  elements.itemModalImage.src = item.image;
  elements.itemModalImage.alt = item.title[ui.currentLang];
  elements.itemModalCategory.textContent = t(`categories.${item.category}`);
  elements.itemModalPrice.textContent = item.price[ui.currentLang];
  elements.itemModalTitle.textContent = item.title[ui.currentLang];
  elements.itemModalDesc.textContent = item.desc[ui.currentLang];
  elements.itemModalBadge1.textContent = createBadgeText(item.badges[0]);
  elements.itemModalBadge2.textContent = createBadgeText(item.badges[1]);

  elements.itemModal.classList.add("active");
  elements.itemModal.setAttribute("aria-hidden", "false");
  elements.body.classList.add("modal-open");
}

function closeItemModal() {
  elements.itemModal.classList.remove("active");
  elements.itemModal.setAttribute("aria-hidden", "true");
  elements.body.classList.remove("modal-open");
}

function openLanguageModal() {
  elements.langModal.classList.add("active");
  elements.langModal.setAttribute("aria-hidden", "false");
  elements.body.classList.add("modal-open");
}

function closeLanguageModal() {
  elements.langModal.classList.remove("active");
  elements.langModal.setAttribute("aria-hidden", "true");

  if (!elements.itemModal.classList.contains("active")) {
    elements.body.classList.remove("modal-open");
  }
}

function resetFilters() {
  ui.currentCategory = "all";
  ui.searchQuery = "";
  elements.searchInput.value = "";
  renderCategories();
  renderMenu();
}

function scrollToMenu() {
  elements.menuGrid.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function setupLanguageButtons() {
  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      setLanguage(lang);
      closeLanguageModal();
    });
  });
}

function setupEvents() {
  elements.openLangBtn.addEventListener("click", openLanguageModal);

  elements.searchInput.addEventListener("input", (event) => {
    ui.searchQuery = event.target.value;
    renderMenu();
  });

  elements.resetBtn.addEventListener("click", resetFilters);

  elements.itemModalClose.addEventListener("click", closeItemModal);
  elements.itemModalBackdrop.addEventListener("click", closeItemModal);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeItemModal();
      closeLanguageModal();
    }
  });
}

function setupReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function init() {
  setupLanguageButtons();
  setupEvents();
  setupReveal();

  // default render before language modal closes
  setLanguage("ar");
  openLanguageModal();
}

init();