document.getElementById("addBtn").onclick = () => {
  var itemAdded = document.getElementById("input").value;
  var ulSection = document.getElementById("ulSection");
  var liContainer = document.createElement("li");
  ulSection.appendChild(liContainer);
  liContainer.innerHTML = itemAdded;
  totalLi();
  liContainer.addEventListener("click", () => {
    event.target.classList.toggle("completed");
    totalLi();
  });

  var total = 0;
  function totalLi() {
    let totalItemsAdded = document.getElementById("NumItemsAdded");

    var total = 0;
    var numLi = document.querySelectorAll("li");
    for (let i = 0; i < numLi.length; i++) {
      // if the list item (any of them) doesn't have a strike then...
      if (!numLi[i].classList.contains("completed")) {
        total++;
      }
    }
    totalItemsAdded.innerHTML = total;
  }

  document.getElementById("clearAll").onclick = () => {
    ulSection.innerHTML = "";
    totalLi();
  };
};

document.getElementById("clearItems").onclick = () => {
  var numLi = ulSection.querySelectorAll("li");
  var liContainer = document.createElement("li");

  for (let i = 0; i < numLi.length; i++) {
    if (numLi[i].classList.contains("completed")) {
      ulSection.removeChild(numLi[i]);
    }
  }
};
