const TAPE_COLOR_COUNT = 5;
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function getUniqueCategories(data) {
  const seen = new Set();
  const result = [];
  data.forEach((item) => {
    if (!seen.has(item.category)) {
      seen.add(item.category);
      result.push(item.category);
    }
  });
  return result;
}

function countByCategory(data, category) {
  return data.filter((item) => item.category === category).length;
}

function renderCategoryFilters(allData, activeCategory) {
  const container = document.getElementById("categoryFilters");
  const categories = getUniqueCategories(allData);
  let html = `
    <button
      type="button"
      class="filter-chip ${activeCategory === "all" ? "active" : ""}"
      data-category="all"
    >
      Tất cả <span class="filter-chip__count">${allData.length}</span>
    </button>
  `;
  categories.forEach((category, index) => {
    const tapeIndex = index % TAPE_COLOR_COUNT;
    const isActive = activeCategory === category;
    const count = countByCategory(allData, category);

    html += `
      <button
        type="button"
        class="filter-chip tape-${tapeIndex} ${isActive ? "active" : ""}"
        data-category="${escapeHtml(category)}"
      >
        ${escapeHtml(category)} <span class="filter-chip__count">${count}</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

function createCaptionCardHTML(caption, tapeIndex) {
  return `
    <div class="col">
      <div
        class="caption-card"
        data-id="${caption.id}"
        role="button"
        tabindex="0"
        aria-label="Xem chi tiết caption"
      >
        <span class="caption-card__tape tape-${tapeIndex}">${escapeHtml(caption.category)}</span>

        <p class="caption-card__content">${escapeHtml(caption.content)}</p>

        <div class="caption-card__footer">
          <button
            type="button"
            class="btn btn-sm btn-copy"
            data-action="copy"
            data-id="${caption.id}"
          >
            <i class="bi bi-clipboard"></i> Copy
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderCaptionList(list, allData) {
  const listContainer = document.getElementById("captionList");
  const emptyState = document.getElementById("emptyState");
  const categories = getUniqueCategories(allData);

  if (list.length === 0) {
    listContainer.innerHTML = "";
    emptyState.classList.remove("d-none");
    return;
  }

  emptyState.classList.add("d-none");

  listContainer.innerHTML = list
    .map((caption) => {
      const tapeIndex = categories.indexOf(caption.category) % TAPE_COLOR_COUNT;
      return createCaptionCardHTML(caption, tapeIndex);
    })
    .join("");
}

function updateResultCount(shownCount, totalCount) {
  const el = document.getElementById("resultCount");
  el.textContent = `Đang hiển thị ${shownCount} / ${totalCount} captions`;
}
