const spisok = document.querySelector("#spisok"),
button = document.querySelector("button"),
input = document.querySelector("input");

button.addEventListener("click", add);

function add(){
    let create = document.createElement("li");
    create.textContent = input.value;
    input.value = "";
    spisok.append(create);
}
