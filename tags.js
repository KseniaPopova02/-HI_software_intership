document.getElementById("searchInput").oninput = function () {
  const val = this.value.trim();
  const searchItems = document.querySelectorAll(".search__tags li");
  if (val) {
    searchItems.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add("hide");
        elem.innerHTML = elem.innerText;
      } else {
        elem.classList.remove("hide");
        const str = elem.innerText;
        elem.innerHTML = insertMark(
          str,
          elem.innerText.search(val),
          val.length
        );
      }
    });
  } else {
    searchItems.forEach(function (elem) {
      elem.classList.remove("hide");
      elem.innerHTML = elem.innerText;
    });
  }
};

const insertMark = (string, pos, len) => {
  return (
    string.slice(0, pos) +
    "<mark>" +
    string.slice(pos, pos + len) +
    "</mark>" +
    string.slice(pos + len)
  );
};
