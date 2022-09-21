// Створити елементи на сторінці в них
// вставити ім'я користувача.
// Зробити так, щоб кожен елемент масиву був
// вкладений у попередній.
// На виході маємо тільки 1 елемент

const users = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
  { id: 4, name: "user4" },
  { id: 5, name: "user5" },
  { id: 6, name: "user6" },
  { id: 7, name: "user7" },
];

const body = document.querySelector("body");
const arr = [];

users.forEach((item) => {
  const elem = document.createElement("div");
  elem.innerHTML = item.name;
  arr.push(elem);
});

let counter = 0;

function pushInElement() {
  if (counter === arr.length - 1) return "";

  if (arr[counter].children.length > 0) {
    arr[counter.children[0].append(arr[counter + 1])];
    pushInElement();
  }

  if (arr[counter].children.length === 0) {
    arr[counter].append(arr[counter + 1]);
  }

  counter++;
  pushInElement();
}

body.append(...arr);

pushInElement();
