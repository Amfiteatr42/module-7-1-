// Вивести всі батьківські числа

const divAll = document.querySelectorAll("[number]");
divAll.forEach((item) =>
  item.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent);
  })
);
