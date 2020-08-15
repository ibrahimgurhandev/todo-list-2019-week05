// This is the code for the add button, it will take what ever is
// in the input and create an li

document.getElementById("addBtn").onclick = () => {
  var itemAdded = document.getElementById("input").value;
  var ulSection = document.getElementById("ulSection");
  var liContainer = document.createElement("li");
  ulSection.appendChild(liContainer);
  liContainer.innerHTML = itemAdded;
  totalLi();

  //this makes any li clicked have a new class
  liContainer.addEventListener("click", () => {
    event.target.classList.toggle("completed");
    totalLi();
  });

  var total = 0;
  function totalLi() {
    let totalItemsAdded = document.getElementById("NumItemsAdded");
    // This will hold our counter for how many items there are.
    //it will check if there are completed or not
    var total = 0;
    var numLi = document.querySelectorAll("li");
    for (let i = 0; i < numLi.length; i++) {
      if (!numLi[i].classList.contains("completed")) {
        total++;
      }
    }
    totalItemsAdded.innerHTML = total;
  }

  //This simple function will just make everything inside
  // our ul empty
  document.getElementById("clearAll").onclick = () => {
    ulSection.innerHTML = "";
    totalLi();
  };
};

// this is another simple function that will just
// make any li that has completed class deleted when pressed on
// the clear completed item button
document.getElementById("clearItems").onclick = () => {
  var numLi = ulSection.querySelectorAll("li");
  var liContainer = document.createElement("li");

  for (let i = 0; i < numLi.length; i++) {
    if (numLi[i].classList.contains("completed")) {
      ulSection.removeChild(numLi[i]);
    }
  }
};
