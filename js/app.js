const state = {
  searchQuery: "", 
  activeCategory: "all", 
  sortAZ: false, 
};

function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const displayOrder = shuffleArray(captions);

function getFilteredCaptions() {
  const keyword = state.searchQuery.trim().toLowerCase();

  let result = displayOrder.filter((caption) => {
    const matchCategory =
      state.activeCategory === "all" || caption.category === state.activeCategory;

    if (!matchCategory) return false;
    if (keyword === "") return true;

    return caption.content.toLowerCase().includes(keyword);
  });

  if (state.sortAZ) {
    result = [...result].sort((a, b) => a.content.localeCompare(b.content, "vi"));
  }

  return result;
}

function renderResults() {
  const filtered = getFilteredCaptions();
  renderCaptionList(filtered, captions);
  updateResultCount(filtered.length, captions.length);
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (event) => {
  state.searchQuery = event.target.value;
  renderResults();
});

const categoryFiltersContainer = document.getElementById("categoryFilters");

categoryFiltersContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-chip");
  if (!button) return;

  state.activeCategory = button.dataset.category;

  renderCategoryFilters(captions, state.activeCategory);
  renderResults();
});

const sortButton = document.getElementById("sortButton");

sortButton.addEventListener("click", () => {
  state.sortAZ = !state.sortAZ;
  sortButton.classList.toggle("active", state.sortAZ);
  sortButton.setAttribute("aria-pressed", String(state.sortAZ));
  renderResults();
});

const captionModalEl = document.getElementById("captionModal");
const captionModal = new bootstrap.Modal(captionModalEl);

function openCaptionModal(caption) {
  document.getElementById("captionModalCategory").textContent = caption.category;
  document.getElementById("captionModalContent").textContent = caption.content;
  document.getElementById("captionModalCopyBtn").dataset.id = caption.id;
  captionModal.show();
}

function findCaptionById(id) {
  return captions.find((caption) => caption.id === Number(id));
}

const randomButton = document.getElementById("randomButton");

randomButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * captions.length);
  openCaptionModal(captions[randomIndex]);
});

document.body.addEventListener("click", (event) => {
  const copyBtn = event.target.closest('[data-action="copy"]');
  if (copyBtn) {
    handleCopy(copyBtn);
    return;
  }

  const card = event.target.closest(".caption-card");
  if (card) {
    const caption = findCaptionById(card.dataset.id);
    if (caption) openCaptionModal(caption);
  }
});

document.body.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest('[data-action="copy"]')) return;
  const card = event.target.closest(".caption-card");
  if (!card) return;
  event.preventDefault();
  const caption = findCaptionById(card.dataset.id);
  if (caption) openCaptionModal(caption);
});

async function handleCopy(button) {
  const caption = findCaptionById(button.dataset.id);
  if (!caption) return;

  try {
    await navigator.clipboard.writeText(caption.content);
  } catch (error) {
    copyWithFallback(caption.content);
  }

  showCopyToast();
}

function copyWithFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

const copyToastEl = document.getElementById("copyToast");
const copyToast = new bootstrap.Toast(copyToastEl, { delay: 2000 });

function showCopyToast() {
  copyToast.show();
}

const darkModeButton = document.getElementById("darkModeToggle");

darkModeButton.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = isDark ? "light" : "dark";

  const icon = darkModeButton.querySelector("i");
  icon.classList.toggle("bi-moon-stars", isDark);
  icon.classList.toggle("bi-sun", !isDark);
});

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("show", window.scrollY > 400);
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function init() {
  renderCategoryFilters(captions, state.activeCategory);
  renderResults();
}

init();