// Створіть дерево, яке на
// кліку на заголовок приховує-показує нащадків

const tree = document.querySelector("#tree");

tree.addEventListener("click", onTitleClick);

function onTitleClick(e) {
  if (e.target.children[0]?.style.display === "none") {
    e.target.children[0].style.display = "block";
    return;
  }

  if (e.target.children.length) {
    e.target.children[0].style.display = "none";
  }
}
