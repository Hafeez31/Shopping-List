window.onload = function () {
  let addButton = document.getElementById("add-btn");

  addButton.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  function updateTotalCount(childrenCount) {
    let totalCountButton = document.getElementById("total-count-btn");
    totalCountButton.innerText = "Total Items: " + childrenCount;
  }

  addButton.onclick = function (event) {
    event.preventDefault();
    let itemsList = document.getElementById("items-list");
    let input = document.getElementById("input").value;
    if (input.trim() === "") return;
    document.getElementById("input").value = "";

    const item = document.createElement("div");
    const itemName = document.createElement("span");
    itemName.innerText = input;
    const deleteButton = document.createElement("div");
    // const X = document.createTextNode("X");
    // deleteButton.appendChild(X);
    deleteButton.innerHTML =
      '<i class="fa fa-trash" aria-hidden="true" style="font-size:20px;color:red;"></i>';

    itemName.classList.add("item-name");
    item.appendChild(itemName);

    deleteButton.classList.add("delete-btn");
    item.appendChild(deleteButton);

    item.classList.add("item");
    itemsList.appendChild(item);

    item.onclick = function () {
      item.classList.toggle("green-item");
      itemName.classList.toggle("strike");
    };

    deleteButton.onclick = function () {
      itemsList.removeChild(item);
      updateTotalCount(itemsList.childElementCount);
    };

    updateTotalCount(itemsList.childElementCount);
  };
};
