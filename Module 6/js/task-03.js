// Наведено список повідомлень з кнопками
// для видалення [x]. Змусіть кнопки працювати.

const closeBtnRef = document.querySelectorAll(".remove-button");

const contRef = document.querySelector("#container");

contRef.addEventListener("click", closeBlock);
let num = 0;

function closeBlock(event) {
  //   console.log(event.target);
  if (!event.target.classList.contains("remove-button")) return;

  event.target.style.transform = `translateX(${(num += 10)}px)`;
}
