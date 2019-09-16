//Pop-up notification
let popUp_container = document.querySelector(".popUp");
let popUp_button = document.querySelector(".popUp-btn");
popUp_button.addEventListener("click", () => {
  popUp_container.style.display = "none";
});
let array = ["victoria Chambers", "dale Byrd", "dawn Wood", "dan Oliver"];
let i = 0;
let count = 0;
let predicted;
let pred_start_index;
function myFunction() {
  let key = event.keyCode || event.charCode;
  if (key != 8) {
    let search_input = document.querySelector(".search");
    let search_input_val = search_input.value;
    for (let j = 0; j < 4; j++) {
      if (search_input_val[i] === array[j][i]) {
        count++;
        if (count === 1) {
          predicted = array[j];
          pred_start_index = i;
        }
      }
    }
    if (count === 1) {
      console.log(predicted);
      console.log(pred_start_index);
    } else count = 0;
    i++;
  } else {
    count = 0;
    predicted = null;
    i--;
  }
}
