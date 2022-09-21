// Сплив і занурення.
// Потрібно зробити так,
// щоб на Capturing phase (занурення) div фарбувався в чорний,
// Після 1 кліка відбудится фаза Capturing, потім після натискання кнопки
// ми змінемо поведінку та зробимо так, щоб процес став
// Bubbling phase (спливання) і вже тут покрасити в сірий

const divs = document.querySelectorAll("div");
const btnClick = document.querySelector(".up");

divs.forEach((div) => div.addEventListener("click", onChangeColor), true);

function onChangeColor(e) {
  e.currentTarget.style.backgroundColor = "black";
}

btnClick.addEventListener("click", onChangeDirection);

function onChangeDirection() {
  //   divs.forEach((div) => div.removeEventListener("click", onChangeColor), true);

  divs.forEach((div) => {
    div.removeEventListener("click", onChangeColor), true;
    div.addEventListener("click", () => {
      div.style.backgroundColor = "grey";
    });
  });
}
