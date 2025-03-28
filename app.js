let input = document.querySelector("input");
let addBtn = document.querySelector("#add");
let ul = document.querySelector("ul");


addBtn.addEventListener("click", function(){
    let createList = document.createElement("li");
    createList.innerText = input.value;
    ul.appendChild(createList);
    let createDelBtn = document.createElement("button");
    createDelBtn.innerHTML =  '<button class="fa-solid fa-trash delBtn" style="color: #343a40;"></button>';
    createDelBtn.classList.add("delBtn");
    createList.appendChild(createDelBtn);
    input.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.closest(".delBtn")) { 
        event.target.closest("li").remove(); 
    }
});