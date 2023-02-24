document.querySelector("#searchInput").oninput = function () {
  let val = this.value.trim();
  let searchItems = document.querySelectorAll(".search__tags li");
  if (val != "") {
    searchItems.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add("hide");
        elem.innerHTML = elem.innerText;
      } else {
        elem.classList.remove("hide");
        let str = elem.innerText;
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
