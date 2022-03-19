const timeOption = document.getElementById("time-option");
timeOption.addEventListener("click", (event) => {
  const val = event.target.value;
  if (val < 1 || val > 60) {
    timeOption.value = 25;
  }
});

const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    timer: 0,
    timeOption: timeOption.value,
    isRunnig: false,
  });
});
chrome.storage.local.get(["timeOption"], (res) => {
  timeOption.value = res.timeOption;
});
