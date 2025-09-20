alert("Welcome to My To-Do List!");
let name = prompt("What is your name?");
if (name) {
  alert("Hello " + name + "!");
} else {
  alert("Hello Guest!");
}

let tasks = ["Azkar Sabah","Studying","Reciting Quran","Watching Video","Online Tutorial","Entertainment","Studying"];
let list = document.getElementById("todo-list");

tasks.forEach(t => {
  let li = document.createElement("li");
  li.textContent = t;
  li.classList.add("completed");
  li.onclick = () => {
    li.classList.toggle("completed");
    if (li.classList.contains("completed")) {
      alert("✅ Completed: " + li.textContent);
    } else {
      alert("❌ Not completed: " + li.textContent);
    }
  };
  list.appendChild(li);
});

let addBtn = document.getElementById("add-btn");
let input = document.getElementById("new-task");

addBtn.onclick = () => {
  let txt = input.value.trim();
  if (txt !== "") {
    let li = document.createElement("li");
    li.textContent = txt;
    li.onclick = () => {
      li.classList.toggle("completed");
      if (li.classList.contains("completed")) {
        alert("✅ Completed: " + li.textContent);
      } else {
        alert("❌ Not completed: " + li.textContent);
      }
    };
    list.appendChild(li);
    input.value = "";
  }
};