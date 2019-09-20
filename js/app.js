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
let search_input = document.querySelector(".search");
function myFunction() {
  let key = event.keyCode || event.charCode;
  if (key != 8 && key != 16 && key != 17 && key != 16) {
    let search_input_val = search_input.value.toLowerCase();
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
      autocomplete();
    } else count = 0;
    i++;
  } else if (key === 16 || key === 17 || key === 16) {
  } else {
    count = 0;
    predicted = null;
    i = 0;
  }
}

let autocomplete = () => {
  let predicted_from_index = [];
  for (let i = pred_start_index + 1; i < predicted.length; i++) {
    predicted_from_index.push(predicted[i]);
  }
  predicted_from_index = predicted_from_index.join("");
  search_input.value += predicted_from_index;
};

let mssz = document.querySelector(".mesz");
//Message section
let mssz_btn = document.querySelector(".button");
mssz_btn.addEventListener("click", ev => {
  ev.preventDefault();
  if (search_input.value === "" || mssz.value === "") {
    alert("You have to something to send message");
  } else {
    alert("Your message has been sent to " + search_input.value);
    search_input.value = "";
    mssz.value = "";
  }
});

//Setting
//Save button
let select_menu = document.querySelector(".select");
let save_btn = document.querySelector(".save-btn");
save_btn.addEventListener("click", () => {
  if (select_menu.options.selectedIndex === 0)
    alert("Please select a time-zone to save");
  else {
    alert("Your setting has been saved");
    clear_setting();
  }
});
//cancel button
let toggle_button = document.querySelectorAll(".toggle_btn");
let cancel_btn = document.querySelector(".cancel-btn");
cancel_btn.addEventListener("click", () => {
  clear_setting();
});
let clear_setting = () => {
  select_menu.options.selectedIndex = 0;
  toggle_button[0].checked = NaN;
  toggle_button[1].checked = NaN;
};

//notifaction panel
let icon_container = document.querySelector(".bell");
let notifaction_panel = document.querySelector(".notification_panel");
para = "Dan liked you dp";
notifaction_node(para);
para = "Dan Commented on your dp";
notifaction_node(para);
icon_container.addEventListener("click", () => {
  notifaction_panel.style.display = "inline";
});

function notifaction_node(para) {
  let div = document.createElement("div");
  div.className = "notification-node";
  let para_tag = document.createElement("p");
  para_tag.textContent = para;
  div.appendChild(para_tag);
  notifaction_panel.appendChild(div);
}

let notification_close = document.querySelector(
  ".notification_first_node button"
);
let notification = document.querySelector(".notification");
notification_close.addEventListener("click", () => {
  notifaction_panel.style.opacity = 0;
  notification.style.display = "none";
});
