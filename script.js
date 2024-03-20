let result = document.querySelector(".display");
let count = 0;
function increment() {
  return ++count;
}

function decrement() {
  if (count > 0) {
    return --count;
  } else {
    count = 0;
    return count;
  }
}

result.innerHTML = `<p class="count">Your current count is : <b>${count}</b></p>`;

document.querySelector("#increment").addEventListener("click", () => {
  result.innerHTML = `<p class="count">Your current count is : <b>${increment()}</b></p>`;
  updateClrBtn();
});

document.querySelector("#decrement").addEventListener("click", () => {
  if (count > 0) {
    result.innerHTML = `<p class="count">Your current count is : <b>${decrement()}</b></p>`;
  } else {
    result.innerHTML = `<p class="count">Your current count is : <b>${decrement()}</b></p>
                        <p class="error">Error : Cannot go below 0</p>`;
  }
  updateClrBtn();
});

let clearBtn = document.querySelector("#clear");
function updateClrBtn() {
  if (count == 0) {
    clearBtn.style.display = "none";
  } else {
    clearBtn.style.display = "block";
  }
}

updateClrBtn();

clearBtn.addEventListener("click", () => {
  count = 0;
  updateClrBtn();
  result.innerHTML = `<p class="count">Your current count is : <b>${count}</b></p>`;
});
